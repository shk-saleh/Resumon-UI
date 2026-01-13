import { create } from 'zustand';
import api from '../axios/axios.js';

export const useCreditStore = create((set, get) => ({

  credits: {
    total: 10,
    used: 0,
    remaining: 10
  },
  loading: false,
  error: null,
  
  fetchCredits: async () => {
    try {

      const res = await api.get('resumes/users/credits');
      set({ credits: res.data.credits });
      console.log(res);

    } catch (err) {
      set({ error: err.response?.data.message });
    }
  },
  
  useCredit: async () => {
    try {
      if (get().credits.remaining <= 0) {
        set({ error: 'Insufficient credits. Please upgrade to Pro!' });
        return { success: false, needsUpgrade: true };
      }
      
      const res = await api.post('resumes/users/deduct-credit');
      set({ credits: res.data.credits });
      return { success: true };
    } catch (err) {
      set({ error: err.response?.data.message });
      return { success: false };
    }
  },
  
  checkCredit: () => {
    return get().credits.remaining > 0;
  }

}));