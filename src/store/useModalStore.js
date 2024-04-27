import { create } from 'zustand'

export const useModalStore = create((set) => ({
    // Handle just the window
    isOpen: false,
    updateIsOpen: (newValue) => set(()=>({isOpen: newValue})),
    showWindow: () => set(()=>({isOpen: true})),
    hideWindow: () => set(()=>({isOpen: false})),

    // Handle the information also 
    children: null,
    title:null,
    endContent:null,
    openFullModal: (newTitle, newChild, newEndContent) => set(()=>({
        children: newChild,
        title: newTitle, 
        endContent: newEndContent,
        isOpen: true
    })),
    clearModal: () => set(()=>({
        children: null,
        title: null, 
        endContent: null,
        isOpen: false
    }))
}))