
import React from 'react';

export default function Message({ message }) {
  return (
    <div className="message">
      <div className="meta">
        <strong>{message.user}</strong> <span>{message.timestamp}</span>
      </div>
      <div className="content">{message.content}</div>
    </div>
  );
}
