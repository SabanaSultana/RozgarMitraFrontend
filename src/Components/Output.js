import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Inconvenience from './Inconvenience';
import Feedback from './Feedback';

export default function Output({conVenience,feedBack,key,outputData,isLoading}) {
    const [currentTime, setCurrentTime] = useState(new Date());    
    const [speechSynthesis, setSpeechSynthesis] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

     useEffect(() => {      
       const intervalId = setInterval(() => {
         setCurrentTime(new Date());
      }, 60000); 
      setSpeechSynthesis(window.speechSynthesis);
      
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
   const [likePopUp,setLikePopUp]=useState(false)
   const feedBackHandler=()=>{
      setLikePopUp(!likePopUp);
   }
   const readAloudHandler = () => {
    if (speechSynthesis && outputData) {
      if (isSpeaking) {
        speechSynthesis.cancel(); // Stop speech if currently speaking
      } else {
        const utterance = new SpeechSynthesisUtterance(outputData);
        speechSynthesis.speak(utterance);
      }

      setIsSpeaking(!isSpeaking); // Toggle the speaking state
    }
  };

  return (
    <div className='relative '>
    <div className=' flex w-[300px] gap-2 mx-3 my-4  overflow-y-auto overflow-x-auto relative '>
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/Rozgar Mitra Chat UI.jpeg'} alt="Error loading image" className='w-[34px] rounded-full ' />
        </div>
        <div className="rest flex flex-col w-[75%] ">
            <div className="up flex relative ">
                <div className="text _Orange  rounded-[10px]  p-2  overflow-y-auto">
                   {isLoading ? "Loading.." : outputData}
                </div>
                {/* <div className="read-aloud-container bg-red-500 inline-block">
                  <div className="cursor-pointer "  onClick={readAloudHandler}>
                    <img src={process.env.PUBLIC_URL + '/Read Aloud.png'} alt="Error loading image"  className=' w-[30px] ml-[5px]'/>
                  </div>
                </div> */}
            </div>
            <div className="down flex justify-between">
                <div className="time text-[14px]">
                    {formattedTime}
                </div>
                <div className="like-dislike flex">
                    <div className="like ">
                      <img src={process.env.PUBLIC_URL + '/like.png'} alt="Error loading image" className='w-[14px] '  onClick={feedBackHandler}/>
                    </div>
                    <div className="dislike ">
                      <img src={process.env.PUBLIC_URL + 'dislike.png'} alt="Error loading image" className='w-[14px] 'onClick={conVenienceHandler} />
                    </div>
                </div>
            </div>
        </div>
        <div className="read-aloud-container  inline-block">
             <div className="cursor-pointer "  onClick={readAloudHandler}>
                <img src={process.env.PUBLIC_URL + '/Read Aloud.png'} alt="Error loading image"  className=' w-[15px] '/>
             </div>
         </div>
    </div>
        {showPopUp && <Inconvenience setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>}
        {likePopUp && <Feedback setLikePopUp={setLikePopUp} likePopUp={likePopUp}/>}
    </div>
  )
}

