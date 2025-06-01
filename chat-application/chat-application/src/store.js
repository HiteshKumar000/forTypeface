
import { create } from 'zustand';

export const useChatStore = create((set) => ({
  chats: [
    {
      id: 1,
      name: 'John',
      messages: [
        { id: 101, user: 'John', timestamp: '10:00 AM', content: 'Hello there!' },
        { id: 102, user: 'You', timestamp: '10:01 AM', content: 'Hi John!' },
      ],
    },
    {
      id: 2,
      name: 'Shambhavi',
      messages: [
        { id: 201, user: 'Shambhavi', timestamp: '11:15 AM', content: 'How are you doing?' },
        { id: 202, user: 'You', timestamp: '11:16 AM', content: 'Doing great, thanks!' },
      ],
    },
  ],
  selectedChatId: 1,

  createChat: () =>
    set((state) => {
      const newChat = {
        id: Date.now(),
        name: `Chat ${state.chats.length + 1}`,
        messages: [],
      };
      return {
        chats: [...state.chats, newChat],
        selectedChatId: newChat.id,
      };
    }),

  deleteChat: (id) =>
    set((state) => ({
      chats: state.chats.filter((chat) => chat.id !== id),
      selectedChatId: state.selectedChatId === id ? null : state.selectedChatId,
    })),

  selectChat: (id) => set({ selectedChatId: id }),

  sendMessage: (chatId, messageText) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  id: Date.now(),
                  user: 'You',
                  timestamp: new Date().toLocaleTimeString(),
                  content: messageText,
                },
              ],
            }
          : chat
      ),
    })),
}));
