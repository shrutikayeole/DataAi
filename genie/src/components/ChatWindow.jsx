import React, { useState } from 'react';
import axios from 'axios';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:5000/ask', { question: input });
        const botResponse = response.data.data.join('\n');
        const updatedMessages = [...newMessages, { text: botResponse, sender: 'bot' }];
        setMessages(updatedMessages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching response:", error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-full justify-between p-4 bg-dark text-white shadow-lg rounded-lg w-full">
      <div className="flex-1 overflow-y-auto mb-4 bg-gray-800 text-white p-4 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className={`my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-light-blue text-black' : 'bg-gray-600 text-white'}`}>
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="my-2 text-left">
            <div className="inline-block p-2 rounded-lg bg-gray-600 text-white animate-pulse">
              Loading...
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-primary bg-gray-800 text-white resize-none h-12"
          placeholder="Ask DataAi anything about your database..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-gray-700 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
