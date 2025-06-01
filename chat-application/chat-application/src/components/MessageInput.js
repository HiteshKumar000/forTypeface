
import React, { useState } from 'react';
import { useChatStore } from '../store';

export default function MessageInput({ chatId }) {
  const [text, setText] = useState('');
  const sendMessage = useChatStore((state) => state.sendMessage);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(chatId, text);
    setText('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
