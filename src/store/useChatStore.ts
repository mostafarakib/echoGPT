import { create } from "zustand";
import { aiModels } from "@/lib/data/models";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatState {
  messages: ChatMessage[];
  selectedModelId: string;
  isReplying: boolean;
  title: string | null;
  setModel: (id: string) => void;
  sendMessage: (content: string) => void;
  newChat: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  selectedModelId: aiModels[0].id,
  isReplying: false,
  title: null,
  setModel: (id) => set({ selectedModelId: id }),
  sendMessage: (content) => {
    if (!content.trim()) return;
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };
    set((state) => ({
      messages: [...state.messages, userMessage],
      isReplying: true,
      title:
        state.title ??
        (content.length > 48 ? content.slice(0, 48) + "…" : content),
    }));

    // Mocked reply - we can replace this once real backend API is ready to use
    setTimeout(() => {
      const reply: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: `This is a placeholder response from ${aiModels.find((m) => m.id === get().selectedModelId)?.name}. Real API response will arrive here once the setup is completed.`,
      };
      set((state) => ({
        messages: [...state.messages, reply],
        isReplying: false,
      }));
    }, 900);
  },
  newChat: () => set({ messages: [], isReplying: false, title: null }),
}));
