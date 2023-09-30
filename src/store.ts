import { create } from "zustand";

type UserStore = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
}));
