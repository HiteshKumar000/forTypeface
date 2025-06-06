
import React from 'react';

export default function Message({ message,replyChat,comingFromInput}) {
  const showReplyMessage = message.reply && comingFromInput
  return (
    <div className="message">
      {!comingFromInput && <div className="meta">
        <strong>{message.user}</strong> <span>{message.timestamp}</span>
        <div>
      <button
      className="reply-btn"
      onClick={(e) => {
        e.stopPropagation();
        replyChat(message);
      }}
    >
      Reply
    </button>
    </div>
      </div>}
      {!showReplyMessage && <div className="content">{message.content}</div>}
       {message.reply && <div className='replied-message'>{message.reply}</div>}
    </div>

  );
}
