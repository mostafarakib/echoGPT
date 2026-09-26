import { create } from "zustand";
import { aiModels } from "@/lib/data/models";

export interface CompareMessage {
  id: string;
  prompt: string;
  responses: Record<string, string>;
}

export interface CompareSession {
  id: string;
  title: string;
  modelIds: string[];
  messages: CompareMessage[];
}

interface CompareState {
  sessions: CompareSession[];
  activeSessionId: string | null;
  selectedModelIds: string[];
  focusModelId: string;
  mode: "compare" | "focus";
  isReplying: boolean;
  setMode: (mode: "compare" | "focus") => void;
  setSelectedModels: (ids: string[]) => void;
  setFocusModel: (id: string) => void;
  newComparison: () => void;
  switchSession: (id: string) => void;
  sendPrompt: (content: string) => void;
}

const MOCK_REPLIES = [
  "I'm doing well, thanks for asking! How are you doing?",
  "I'm doing great, thanks for asking! How can I help you today?",
  "Doing great! Thanks for asking. How about you?",
];

export const useCompareStore = create<CompareState>((set, get) => ({
  sessions: [],
  activeSessionId: null,
  selectedModelIds: aiModels.slice(0, 3).map((m) => m.id),
  focusModelId: aiModels[0].id,
  mode: "compare",
  isReplying: false,

  setMode: (mode) => set({ mode }),

  setSelectedModels: (ids) => {
    set({ selectedModelIds: ids });
    if (!ids.includes(get().focusModelId)) {
      set({ focusModelId: ids[0] ?? aiModels[0].id });
    }
  },

  setFocusModel: (id) => set({ focusModelId: id }),

  newComparison: () => set({ activeSessionId: null }),

  switchSession: (id) => {
    const session = get().sessions.find((s) => s.id === id);
    if (!session) return;
    set({
      activeSessionId: id,
      selectedModelIds: session.modelIds,
      focusModelId: session.modelIds[0],
    });
  },

  sendPrompt: (content) => {
    if (!content.trim()) return;
    const { activeSessionId, sessions, selectedModelIds } = get();
    const messageId = crypto.randomUUID();
    const newMessage: CompareMessage = {
      id: messageId,
      prompt: content,
      responses: {},
    };

    let sessionId = activeSessionId;

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      const title = content.length > 40 ? content.slice(0, 40) + "…" : content;
      const newSession: CompareSession = {
        id: sessionId,
        title,
        modelIds: selectedModelIds,
        messages: [newMessage],
      };
      set({
        sessions: [...sessions, newSession],
        activeSessionId: sessionId,
        isReplying: true,
      });
    } else {
      set({
        sessions: sessions.map((s) =>
          s.id === sessionId
            ? { ...s, messages: [...s.messages, newMessage] }
            : s,
        ),
        isReplying: true,
      });
    }

    // Mocked per-model replies
    setTimeout(() => {
      const responses: Record<string, string> = {};
      selectedModelIds.forEach((modelId, i) => {
        responses[modelId] = MOCK_REPLIES[i % MOCK_REPLIES.length];
      });
      set((state) => ({
        sessions: state.sessions.map((s) =>
          s.id === sessionId
            ? {
                ...s,
                messages: s.messages.map((m) =>
                  m.id === messageId ? { ...m, responses } : m,
                ),
              }
            : s,
        ),
        isReplying: false,
      }));
    }, 900);
  },
}));
