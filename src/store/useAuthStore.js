import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../axios/axios";
import { useResumeStore } from "./useResumeStore";
import { useDashboardStore } from "./useDashboardStore";

export const useAuthStore = create(
    persist(
        (set, get) => ({

            user: null,
            token: null,
            loading: false,
            error: null,

            login: async ({ email, password }) => {
                try 
                {
                    set({ loading: true, error: null })
                    const res = await api.post("/auth/login", { email, password });

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
            },

            signup: async ({ name, email, password }) => {
                try 
                {
                    set({ loading: true, error: null })
                    const res = await api.post("/auth/register", { name, email, password });
                    set({
                        user: res.data.user,
                        loading: false,
                        token: res.data.token
                    });
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    return { success: true };
                }
                catch (err) 
                {
                    set({ error: err.response?.data.message || "Signup Failed!", loading: false });
                    return { success: false };
                }
            },

            googleLogin: async ({ credential }) => {
                try 
                {
                    set({ loading: true, error: null })
                    const res = await api.post("/auth/google", { credential });
                    set({
                        user: res.data.user,
                        loading: false,
                        token: res.data.token
                    });
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    return { success: true };
                }
                catch (err) 
                {
                    set({ error: err.response?.data.message || "Google Login Failed!", loading: false });
                    return { success: false };
                }
            },
            
            waitlist: async ({ email }) => {
                try 
                {
                    set({ loading: true, error: null })
                    const res = await api.post("/auth/waitlist", { email });

                    set({
                        loading: false,
                    });

                    return { success: true };
                }
                catch (err) {
                    const errorMessage = err.response?.data?.message || "Unable to add email to waitlist!";
                    
                    set({ 
                        error: errorMessage,
                        loading: false 
                    });
                    
                    // Return both success: false AND the error type
                    return { 
                        success: false,
                        message: errorMessage,
                        isAlreadyAdded: errorMessage.toLowerCase().includes('already')
                    };
                }
            },

            logout: () => 
            {
                localStorage.removeItem("token");
                set({ user: null, token: null });
                useResumeStore.getState().resetResumeBuilder();
                useDashboardStore.getState().resetDashboardStore();
            },
        }),
        {
            name: "auth-storage",
        }
    )
);