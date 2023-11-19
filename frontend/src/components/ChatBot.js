/*
    Work on Chatbot
    I have added API request code. Add everything else
    Look at Search.js for guidance
*/

import axios from "axios";

import React, { useState, useRef } from 'react';
import { FaRocket } from 'react-icons/fa';

const ChatBot = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Replace 'API_ENDPOINT' with the actual API endpoint
      const apiEndpoint = 'https://recapify-ai.azurewebsites.net/chat';
      // const response = await fetch(apiEndpoint, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ question: inputValue }),
      // });
      console.log(inputValue);
      const response = await axios.post(apiEndpoint,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        body: JSON.stringify({ user_q: inputValue }),
      })
      console.log("Response: ",response.data)
      // console.log(response.data)
      const data = await response.data;
      const newChatEntry = { type: 'user', message: inputValue };
      setChatHistory([...chatHistory, newChatEntry]);

      const responseEntry = { type: 'bot', message: data };
      setChatHistory([...chatHistory, responseEntry]);

      setInputValue('');

      // Scroll to the bottom of the chat after each message
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full border p-4 flex flex-col">
      <div className="flex-1 mb-3 overflow-y-auto">
        {chatHistory.map((entry, index) => (
          <div
            key={index}
            className={`${
              entry.type === 'user' ? 'text-blue-500' : 'text-green-500'
            } mb-2`}
          >
            {entry.type === 'user' ? (
              <div className="flex items-end">
                <span className="bg-blue-500 text-white p-2 rounded-lg max-w-2/3">
                  {entry.message}
                </span>
              </div>
            ) : (
              <div className="flex items-start">
                <span className="bg-green-500 text-white p-2 rounded-lg max-w-2/3">
                  {entry.message}
                </span>
              </div>
            )}
          </div>
        ))}
        <div ref={inputRef} />
      </div>
      <div className=" relative flex items-end">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your question"
          className="w-full py-3 border mr-2"
        />
        <button
          onClick={handleSubmit}
          className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full"
        >
          <FaRocket />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;






