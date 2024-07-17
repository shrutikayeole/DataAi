import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here, you can add the logic to send the message to the AI and get a response.
    }
  };

  return (
    <div className="flex flex-col h-full justify-between p-4 bg-gray-800 text-white shadow-lg rounded-lg w-full">
      <div className="flex-1 overflow-y-auto mb-4 bg-light text-dark p-4 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className={`my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-700 text-white'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-3-md focus:outline-none focus:ring focus:border-primary bg-gray-700 text-white resize-none h-12"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-secondary focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
