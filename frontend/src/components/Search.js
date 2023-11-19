// src/components/SearchBar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    localStorage.clear();
    try {
      
      const resp = await axios.post("http://127.0.0.1:5000/summary", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        body: JSON.stringify({
          youtube_link: searchTerm
        })
      });

      console.log(resp);

      localStorage.setItem('summary', resp.data.detailed);

      // Use the Link component to scroll to the 'result' element after API call
      document.getElementById('scroll-to-result').click();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex w-screen justify-center">
      <form onSubmit={handleSubmit} className='flex w-3/5 justify-center items-center'>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border-2 border-blue-500 rounded-lg focus:outline-none"
          value={searchTerm}
          onChange={handleInputChange}
        />
        
        <button
          type="submit"
          className='bg-blue-900 hover:bg-cyan-700 text-cyan-400 font-bold py-2 px-4 rounded text-xl'
        >
          Generate
        </button>
       
      </form>

      {/* Hidden Link component for smooth scrolling */}
      <Link
        to="result"
        spy={true}
        smooth={true}
        duration={500}
        id="scroll-to-result"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default SearchBar;
