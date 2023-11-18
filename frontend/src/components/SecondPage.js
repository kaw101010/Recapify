import React from 'react';
import { TypeAnimation } from "react-type-animation";
import SearchBar from './Search';


function HomePage() {
  return (
    <div className=' h-screen bg-cyan-300 bg-auto'>
      <div className='flex flex-col justify-center items-center h-screen gap-11'>
      <h2 className='bg-gradient-to-r from-cyan-950 to-cyan-600 inline-block text-transparent bg-clip-text text-7xl text-center font-semibold mb-8'>
        Simplify your notes from
        <br />
        Pixels to
        <TypeAnimation
          sequence={[
            ' P',
            300,
            ' Po',
            300,
            ' Poi',
            300,
            ' Poin',
            300,
            ' Point',
            300,
            ' Points',
            300
          ]}
          speed={50}
          repeat={Infinity}
        />
      </h2>
      
      <SearchBar/>
      </div>
      
    </div>
  );
}

export default HomePage;
