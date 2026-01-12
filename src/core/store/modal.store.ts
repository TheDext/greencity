import { create } from 'zustand';

export const useModalStore = create((set) => ({
    showModal: false,
    showInfoModal: false,
    current: null,
    slideId: null,
    setShowModal: (showModal) => set({ showModal }),
    setShowInfoModal: (showInfoModal) => set({ showInfoModal }),
    setCurrent: (current) => set({ current }),
    setSlideId: (slideId) => set({ slideId }),
}));
