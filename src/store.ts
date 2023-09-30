import { create } from "zustand";

type UserStore = {
  isLoggedIn: boolean;
  showLoginModal: boolean;
  setShowLoginModal: (v: boolean) => void;
  logIn: () => void;
  logOut: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isLoggedIn: false,
  showLoginModal: false,
  setShowLoginModal: (v) => set({ showLoginModal: v }),
  logIn: () => set({ isLoggedIn: true, showLoginModal: false }),
  logOut: () => set({ isLoggedIn: false }),
}));
