import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function StartPage() {
  const handleButtonClick = () => {
    // Use react-scroll's scroll function to scroll smoothly to the target section
    scroll.scrollTo('targetSection', {
      duration: 1000, // Adjust the duration as needed
      smooth: 'easeInOutQuad', // Use easeInOutQuad easing function
    });
  };

  const commonStyle = {
    fontFamily: 'YourCustomFont, sans-serif',
    fontWeight: '900',
  };

  const headingStyle = {
    ...commonStyle,
    marginLeft: '300px', // Adjust the value as needed
  };

  const buttonStyle = {
    ...commonStyle,
    marginLeft: '300px', // Adjust the value as needed
  };

  return (
    <div className='h-screen bg-cyan-300 bg-auto'>
      <div className='flex flex-col items-start justify-center h-screen gap-11'>
        {/* Removed text-center class */}
        <h2 className='bg-gradient-to-r to-blue-700 from-purple-900 inline-block text-transparent bg-clip-text text-8xl font-extrabold text-outline' style={headingStyle}>
          <span className="text-transparent">{''}LEARN<br />THE SMART<br />WAY</span>
        </h2>

        {/* Use Link from react-scroll for smooth scrolling */}
        <Link
          to="targetSection"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={1000} // Adjust the duration as needed
        >
          <button
            className='bg-gradient-to-r from-purple-900 to-purple-400 hover:from-purple-700 hover:to-white text-white font-bold py-3 px-14 rounded'
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            <span className="font-extrabold text-2xl">Get Started</span>
            <span className="ml-2 text-2xl">&#8594;</span>
          </button>
        </Link>
      </div>

      {/* Add a target section for scrolling */}
      <div id="targetSection" style={{ height: '100vh', backgroundColor: 'lightgray' }}>
        {/* Content of the section */}
      </div>
    </div>
  );
}

export default StartPage;
