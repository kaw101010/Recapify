import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

// Import the image
import recapifyImage from '../Assets/Recapify.AI-removebg-preview.png';

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
      <div className='flex items-center justify-center h-screen'>
        {/* Add the image */}
        <div className='flex flex-col gap-6 mr-20'>
        <h2 className='bg-gradient-to-r to-blue-700 from-purple-900 inline-block text-transparent bg-clip-text text-8xl font-extrabold text-outline' style={headingStyle}>
          <span className="text-transparent">{''}LEARN</span>
        </h2>
        <h2 className='bg-gradient-to-r to-blue-700 from-purple-900 inline-block text-transparent bg-clip-text text-8xl font-extrabold text-outline' style={headingStyle}>
          <span className="text-transparent">{''}THE SMART</span>
        </h2>
        <h2 className='bg-gradient-to-r to-blue-700 from-purple-900 inline-block text-transparent text-right bg-clip-text text-8xl font-extrabold text-outline' style={headingStyle}>
          <span className="text-transparent">WAY</span>
        </h2>
        <Link
          to="targetSection"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={1000} // Adjust the duration as needed
        >
          <button
            className='bg-gradient-to-r from-purple-900 to-purple-400 hover:from-purple-700 hover:to-white text-white font-bold py-3 px-14 mt-7 rounded'
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            <span className="font-extrabold text-2xl">Get Started</span>
            <span className="ml-2 text-2xl">&#8594;</span>
          </button>
        </Link>
        </div>

        <img src={recapifyImage} alt="Recapify.AI" className=' w-2/5 ml-3 mt-14 mr-11' />

        {/* Removed text-center class
        <h2 className='bg-gradient-to-r to-blue-700 from-purple-900 inline-block text-transparent bg-clip-text text-8xl font-extrabold text-outline' style={headingStyle}>
          <span className="text-transparent">{''}LEARN<br />THE SMART<br />WAY</span>
        </h2> */}

        {/* Use Link from react-scroll for smooth scrolling */}
        
      </div>

      {/* Add a target section for scrolling */}
      <div id="targetSection" style={{ height: '100vh', backgroundColor: 'lightgray' }}>
        {/* Content of the section */}
      </div>
    </div>
  );
}

export default StartPage;
