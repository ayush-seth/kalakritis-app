import { create } from "zustand";
import { Address } from "./types";

type ModalStore = {
  showLoginModal: boolean;
  setShowLoginModal: (v: boolean) => void;

  showAddressModal: boolean;
  addressModalType: "add" | "edit";

  setAddressModalType: (t: "add" | "edit") => void;
  openAddressModal: () => void;
  closeAddressModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  showLoginModal: false,
  setShowLoginModal: (v) => set({ showLoginModal: v }),

  showAddressModal: false,
  addressModalType: "add",
  setAddressModalType: (t) => set({ addressModalType: t }),
  openAddressModal: () => set({ showAddressModal: true }),
  closeAddressModal: () => set({ showAddressModal: false }),
}));

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
