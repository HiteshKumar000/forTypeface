
import React from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import { useChatStore } from './store';

export default function App() {
  const chats = useChatStore((state) => state.chats);
  const selectedChatId = useChatStore((state) => state.selectedChatId);
  const selectedChat = chats.find((chat) => chat.id === selectedChatId) || null;

  return (
    <div className="app-container">
      <ChatList />
      <ChatWindow chat={selectedChat} />
    </div>
  );
}
