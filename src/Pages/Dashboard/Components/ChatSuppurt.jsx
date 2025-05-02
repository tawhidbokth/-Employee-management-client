import React, { useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Simulate bot reply after 1 sec
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: "Thanks for your message! We'll respond soon.",
            sender: 'bot',
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Chat Support</h1>
      <div className="border rounded h-64 p-4 mb-4 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500">Start chatting with our support team!</p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 ${
                msg.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <span
                className={`inline-block p-2 rounded ${
                  msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSupport;
