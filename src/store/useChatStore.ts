import { create } from 'zustand'
import {botContext} from '@/store/botContext'

export type ChatMessage = {
    role: string;
    content: string;
}

type ChatState = {
    chatHistory: ChatMessage[] | any;
    setChatHistory: (newChatHistory: ChatMessage[] | any) => void;
    clearChat: () => void;
    addMessage: (newMsg: ChatMessage) => void;
};

export const useChatStore = create<ChatState>((set) => ({
    // Handle just the window
    chatHistory: [{
        role: 'system',
        content: botContext()
    }] as ChatMessage[] | any,
    clearChat: () => set(()=>({chatHistory: [{
        role: 'system',
        content: botContext()
    }]})),
    setChatHistory: (newChatHistory:ChatMessage[] | any) => set(()=>({chatHistory: newChatHistory})),
    addMessage: (newMsg:ChatMessage) => set((state:any)=>({chatHistory: [...state.chatHistory, newMsg]})),
}))
