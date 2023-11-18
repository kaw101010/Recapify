// src/components/SearchBar.js
import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    // Redirect to the specified link when the button is clicked
    try {
      localStorage.clear();
      const resp = await axios.post("http://127.0.0.1:5000/summary", {
        youtube_link: searchTerm
      });
      console.log(resp);
      // Store other data also
      localStorage.setItem('summary', resp.data.detailed); // Just storing detailed
      // resp.data = {brief: "", detailed: "text", pointers: ""}
      // inspect console for all data
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    handleSearch();
  };

  return (
    <div className="flex w-screen justify-center">
      <form onSubmit={handleSubmit} className='flex w-3/5 justify-center items-center'>
        <input
          type="text"
          placeholder="Search..."
          className=" w-full p-2 border-2 border-blue-500 rounded-lg focus:outline-none"
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
    </div>
  );
};

export default SearchBar;
