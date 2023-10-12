import { create } from "zustand";
import { Address } from "./types";

export type Tab = "cart" | "shipping" | "payment";
type UserStore = {
  tab: Tab;
  setTab: (tab: Tab) => void;

  selectedAddress: Address | null;
  setSelectedAddress: (a: Address) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  tab: "cart",
  setTab: (tab) => set({ tab }),

  selectedAddress: null,
  setSelectedAddress: (a) => set({ selectedAddress: a }),
}));
