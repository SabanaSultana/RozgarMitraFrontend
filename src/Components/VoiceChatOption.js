import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function VoiceChatOption({voiceChat,setVoiceChat,sendVoiceDataToParent,sendTranscriptToParent  }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const closeHandler=()=>{
    setVoiceChat(false)
  }
   // Function to handle sending voice data to parent
   const handleTranscriptChange = () => {
     sendTranscriptToParent(transcript);
     setVoiceChat(false)
  };
  return (
    <div className='overflow-y-hidden  overflow-x-hidden flex flex-col  items-center box-content absolute bottom-0 bg-white shadow-2xl z-100  h-[270px] z-1000 w-[100%] border bc rounded-tl-[15px] rounded-tr-[15px] shadow-top'>
      <div 
        className=" flex justify-center items-center mt-4 gap-20   w-[100%] pl-3 pb-3 "
        >
           <p>Listening.....</p>
           <FontAwesomeIcon icon={faXmark}  className=' absolute top-6 right-10 '  onClick={closeHandler} />
        </div>  
          
         <div 
         className="  flex flex-col gap-4 mx-2 h-[150px] langs"         
         >
            <div className="text flex flex-col justify-center items-center">
                <p className='italic'>Try Saying...</p>
                <p>I want to book a Ticket</p>
            </div>
            <div className="img flex justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/mic.png'} alt="Error Loading image"  className='w-[30px]'/> {listening ? 'on' : 'off'}
            </div>
       </div>
       <div className='mb-2 flex flex-col justify-center items-center'>
          <p className='w-[full]' id="voice_data">{transcript}</p>
          <div className=" flex   w-[400px] justify-between">
              <div className="b1">
                 <button onClick={resetTranscript} className='bg-black text-white m-2 border  bc rounded-lg shadow-sm   hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 font-semibold text-[15px]'>Reset</button>
              </div>
              <div className="b2">
                 <button onClick={SpeechRecognition.startListening} className=' border bg-green-100 bc rounded-lg shadow-sm   hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 font-semibold text-[15px]' >Start</button>
                 <button onClick={SpeechRecognition.stopListening} className='border bg-red-100 bc rounded-lg shadow-sm  ml-4 hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 font-semibold text-[15px]' >Stop</button>
              </div>
              <div className="b3">
                <button onClick={handleTranscriptChange} className='mr-2 p-2 rounded-lg shadow-sm  mb-2 mt-1 w-[92%] hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 font-semibold text-[15px]'><img src={process.env.PUBLIC_URL + '/send.png'} alt="Error loading image" className='w-[24px]'/></button>
              </div>
          </div>
       </div>
    </div>
  )
}
