
import React, { useState } from 'react';
import { useChatStore } from '../store';
import Message from './Message';

export default function MessageInput({ chatId, repliedChat, setRepliedChat}) {
  const [text, setText] = useState('');
  const sendMessage = useChatStore((state) => state.sendMessage);
  const replyMessage = useChatStore((state) => state.replyMessage);

  const handleSend = () => {
    if (!text.trim()) return;
   

    if(repliedChat) {
    const messageText = repliedChat && repliedChat.reply ? repliedChat.reply : repliedChat.content
    replyMessage(chatId,messageText,text)
    }
    else
    sendMessage(chatId, text,null);

    setText('');
    setRepliedChat(null)

  };

  return (
    <div>
        {repliedChat && <Message key={repliedChat.id} message={repliedChat} comingFromInput={true} />}
    <div className="message-input">
    
      <input
        type="text"
        placeholder={repliedChat ? 'Reply to chat' : "Type a message..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
    </div>
  );
}
