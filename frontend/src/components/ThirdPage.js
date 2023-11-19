// import { useEffect } from "react";
import React, { useState, useEffect } from 'react';
import ChatBot from './ChatBot';

function ThirdPage() {
    const [detailsIsClicked, setDetailsIsClicked] = useState(true);
    const [pointersIsClicked, setPointersIsClicked] = useState(false);
    const [briefIsClicked, setBriefIsClicked] = useState(false);
    const [disp, setDisplay] = useState("");

    const updateSummaryData = () => {
        const storedSummary = sessionStorage.getItem('summary');
        console.log(storedSummary)
        if (storedSummary){
          setDisplay(storedSummary);
        }
        console.log(disp)
      };

    useEffect(() => {
    // Initial check for summary in local storage
    updateSummaryData();
    }); // Only runs once on component mount
    
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
        <div name="result" className=' flex h-screen w-screen bg-indigo-900 bg-auto border'>
            <div className='flex flex-col w-[70%] h-screen bg-cyan-300 gap-10 py-5 border border-t-2 border-t-blue-950 '>
                <div className='flex justify-around'>
                    <button className={detailsIsClicked?' bg-indigo-900 text-lg text-cyan-400 px-10 rounded-xl font-semibold py-3' : ' bg-blue-600 text-lg text-white px-10 rounded-xl font-semibold py-3'} onClick={e => {detailsClicked()}}>Details</button>
                    <button className={pointersIsClicked?' bg-indigo-900 text-lg text-cyan-400 px-10 rounded-xl font-semibold py-3' : ' bg-blue-600 text-lg text-white px-10 rounded-xl font-semibold py-3'} onClick={e => {pointersClicked()}}>Pointers</button>
                    <button className={briefIsClicked?' bg-indigo-900 text-lg text-cyan-400  px-10 rounded-xl font-semibold py-3' : ' bg-blue-600 text-lg text-white px-10 rounded-xl font-semibold py-3'} onClick={e => {briefClicked()}}>Brief</button>
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
            <div className='w-[30%] bg-white'>
            <ChatBot />
            </div>
        </div>
    )
}

export default ThirdPage
