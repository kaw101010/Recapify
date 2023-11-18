// import { useEffect } from "react";
import React, { useState, useEffect } from 'react';

function ThirdPage() {
    const [detailsIsClicked, setDetailsIsClicked] = useState(false);
    const [pointersIsClicked, setPointersIsClicked] = useState(false);
    const [briefIsClicked, setBriefIsClicked] = useState(false);
    const [disp, setDisplay] = useState("");

    const updateSummaryData = () => {
        const storedSummary = localStorage.getItem('summary');
        if (storedSummary){
          setDisplay(storedSummary);
        }
      };

    useEffect(() => {
    // Initial check for summary in local storage
    updateSummaryData();
    }, []); // Only runs once on component mount
    
function detailsClicked() {
    setDetailsIsClicked(true);
    setPointersIsClicked(false);
    setBriefIsClicked(false);
}
function pointersClicked() {
    setDetailsIsClicked(false);
    setPointersIsClicked(true);
    setBriefIsClicked(false);

}
function briefClicked() {
    setDetailsIsClicked(false);
    setPointersIsClicked(false);
    setBriefIsClicked(true);

}
    //make 3 functions saying details clicked 
    return (
        <div className=' flex h-screen w-screen bg-indigo-900 bg-auto'>
            <div className='flex flex-col w-[70%] h-screen bg-cyan-500 gap-10 '>
                <div className='flex justify-around'>
                    <button className={detailsIsClicked?' bg-indigo-900 text-lg text-cyan-400 px-10 font-semibold py-3' : ' bg-cyan-300 text-lg text-cyan-900 px-10 font-semibold py-3'} onClick={e => {detailsClicked()}}>Details</button>
                    <button className={pointersIsClicked?' bg-indigo-900 text-lg text-cyan-400 px-10 font-semibold py-3' : ' bg-cyan-300 text-lg text-cyan-900 px-10 font-semibold py-3'} onClick={e => {pointersClicked()}}>Pointers</button>
                    <button className={briefIsClicked?' bg-indigo-900 text-lg text-cyan-400  px-10 font-semibold py-3' : ' bg-cyan-300 text-lg text-cyan-900 px-10 font-semibold py-3'} onClick={e => {briefClicked()}}>Brief</button>
                </div>
                <div className=' overflow-y-scroll ml-10 mr-10 mb-5'>
                    {/* <p>    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                    </p> */}
                    {disp && <p>{disp}</p>}
                </div>
                <div className='flex justify-center items-center'>
                <button className=' mb-14 bg-gradient-to-r from-blue-900 to-blue-600 w-52 px-9 py-3 rounded-xl text-xl font-bold text-indigo-300'>Generate PDF</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage
