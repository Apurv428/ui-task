import React from 'react';
import type { Message } from '../../types';

export const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="bg-white rounded-3xl space-y-2">
      <h4 className="text-lg font-medium mb-2 text-left">Messages</h4>

      {messages.map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
    </div>
  );
};

const MessageItem: React.FC<Message> = ({ name, avatar, message, time }) => {
  return (
    <div className="flex space-x-3 p-3 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
      <div className="relative w-10 h-10 flex-shrink-0">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
          ✓
        </span>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center text-left">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-semibold text-gray-900 text-sm truncate">{name}</h4>
          <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{time}</span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2 break-words text-left">{message}</p>
      </div>
    </div>
  );
};


