
import React,{ useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

export default function ChatWindow({ chat }) {
  const [repliedChat,setRepliedChat] = useState()
  if (!chat) return <div className="chat-window">Select a chat to start messaging</div>;

  function replyChat(message) {
    setRepliedChat(message)
  }
  return (
    <div className="chat-window">
      <h3>{chat.name}</h3>
      <div className="messages">
        {chat.messages.map((msg) => (
          <Message key={msg.id} message={msg} replyChat={replyChat} comingFromInput={false}/>
        ))}
      </div>    
      <MessageInput chatId={chat.id} repliedChat={repliedChat} setRepliedChat={setRepliedChat}/>
    </div>
  );
}
