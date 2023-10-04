import { create } from "zustand";

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
