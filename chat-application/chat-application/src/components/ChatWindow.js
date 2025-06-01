
import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

export default function ChatWindow({ chat }) {
  if (!chat) return <div className="chat-window">Select a chat to start messaging</div>;

  return (
    <div className="chat-window">
      <h3>{chat.name}</h3>
      <div className="messages">
        {chat.messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <MessageInput chatId={chat.id} />
    </div>
  );
}
