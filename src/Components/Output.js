import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Inconvenience from './Inconvenience';

export default function Output({conVenience,feedBack,key,outputData}) {
    const [currentTime, setCurrentTime] = useState(new Date());    
     useEffect(() => {      
       const intervalId = setInterval(() => {
         setCurrentTime(new Date());
      }, 60000); 
      
      return () => clearInterval(intervalId);
    }, []); 
  
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
   const [showPopUp ,setShowPopUp]=useState(false);
   const conVenienceHandler =()=>{
      setShowPopUp(!showPopUp);
   }

  return (
    <>
    <div className=' flex w-[300px] gap-2 mx-3 my-4  overflow-y-auto  '>
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/Rozgar Mitra Chat UI.jpeg'} alt="Error loading image" className='w-[34px] rounded-full ' />
        </div>
        <div className="rest flex flex-col w-[75%] ">
            <div className="up flex relative ">
                <div className="text _Orange  rounded-[10px]  p-2  overflow-y-auto">
                  {outputData}
                </div>
            </div>
            <div className="down flex justify-between">
                <div className="time text-[14px]">
                    {formattedTime}
                </div>
                <div className="like-dislike flex">
                    <div className="like ">
                      <img src={process.env.PUBLIC_URL + '/like.png'} alt="Error loading image" className='w-[14px] ' onClick={feedBack} />
                    </div>
                    <div className="dislike ">
                      <img src={process.env.PUBLIC_URL + 'dislike.png'} alt="Error loading image" className='w-[14px] 'onClick={conVenienceHandler} />
                    </div>
                </div>
            </div>
        </div>
    </div>
        {showPopUp && <Inconvenience setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>}
    </>
  )
}

