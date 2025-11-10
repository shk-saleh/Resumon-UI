import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../axios/axios";

export const useAuthStore = create(
    persist((set, get) => {

        user: null
        token: null
        loading: false
        error: null

        login: async ({ email, password }) => {
        try 
        {
            set({ loading: true, error: null })
            const res = await api.post("/api/login", { email, password });

            set({
                user: res.data.user,
                loading: false,
                token: res.data.token
            });
                localStorage.setItem("token", res.data.token);
                return { success: true };
            }
            catch (err) 
            {
                set({ error: err.response?.data.message || "Login Failed!", loading: false });
                return { success: false };
            }
        }


        signup: async ({ name, email, password }) => {
            set({ loading: true, error: null })
            try 
            {
                const res = await api.post("/api/signup", { name, email, password });
                set({
                    user: res.data.user,
                    loading: false,
                    token: res.data.token
                });
                localStorage.setItem("token", res.data.token);
                return { success: true };
            }
            catch (err) 
            {
                set({ error: err.response?.data.message || "Signup Failed!", loading: false });
                return { success: false };
            }
        }

        
        logout: () => {
            localStorage.removeItem("token")
            set({
                user: null,
                token: null
            })
        }
    })
)