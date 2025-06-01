
import React from 'react';
import { useChatStore } from '../store';

export default function ChatList() {
  const chats = useChatStore((state) => state.chats);
  const selectedChatId = useChatStore((state) => state.selectedChatId);
  const createChat = useChatStore((state) => state.createChat);
  const deleteChat = useChatStore((state) => state.deleteChat);
  const selectChat = useChatStore((state) => state.selectChat);

  return (
    <div className="chat-list">
      <h3>Chats</h3>
      <button onClick={createChat}>+ New Chat</button>
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={selectedChatId === chat.id ? 'active' : ''}
            onClick={() => selectChat(chat.id)}
          >
            {chat.name}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteChat(chat.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
