import React from 'react'
import { useState } from 'react';
import Language from './Language';
import VoiceChatOption from './VoiceChatOption';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function ChatSection({onSendClick,setInputValue,inputValue,setMessages}) {
  const [transcript, setTranscript] = useState('');
  //Language Change
  const [language,setLanguage]=useState(false)
  const languageClickHandler=()=>{
    setLanguage(!language);
  }  
  // Voice Chat  
  const [voiceChat,setVoiceChat]=useState(false);
   const voiceChatHandler=()=>{
       setVoiceChat(!voiceChat);        
   }
   
   // Api Call
  const apiCall=async (userInput)=>{
    const chatbotEndpoint = 'https://rozgarmitrabackend.azurewebsites.net/chat';
    let existingChatHistory = localStorage.getItem('chatHistory');
    // If chatHistory doesn't exist, initialise it as an empty array
    if (!existingChatHistory) {
      localStorage.setItem('chatHistory', JSON.stringify([]));
    } 
    console.log("Input Data",userInput)   
    const requestBody = {
      user_input:userInput,
      chat_history: JSON.parse(localStorage.getItem('chatHistory'))
      
    };
    
    // Make the POST request when the component mounts
    
    const res=await axios.post(chatbotEndpoint, requestBody)
    .then(response => {
        // Handle the response from the server
        var outputData=response.data['output']
        // Update the messages state with both the input and output data
        setMessages((prevMessages) => [
          ...prevMessages,
          { content: outputData, type: 'ai' },
        ]);
       // Assuming 'response' is a JSON object with a 'chat_history' array
        let chatHistory = [];
        let tempDic = {};

        response.data.chat_history.forEach((item, index) => {
          if (item.type === "human") {
            tempDic["human"] = item.content;
          } else {
            tempDic["ai"] = item.content;
          }
          if (Object.keys(tempDic).length % 2 === 0 && Object.keys(tempDic).length !== 0) {
            chatHistory.push({ ...tempDic });
            tempDic = {};
          }
        });
        
        // Storing in local storage
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory))
        
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
      });
  }
    
   // store user Input and api calling on button click
      const inputRef = useRef(null);
      const handleButtonClick = () => {   
          const inputValue = inputRef.current.value;
          setMessages((prevMessages) => [
            ...prevMessages,
            { content: inputValue, type: 'human' },
          ]);
          console.log('Input value:', inputValue);   
          onSendClick();
          setInputValue(inputValue);
          // sendDataToParent(inputValue);
          apiCall(inputValue);
      
    };
    const handleEnterPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleButtonClick();
      }
    };
    // Function to handle sending voice data to chat
    const handleTranscriptChange = (newTranscript) => {
      setTranscript(newTranscript);
      inputRef.current.value = newTranscript; // Set transcript to input box
    };
    
   return (
     <>
    <div className='flex justify-between mt-10 bg-white pt-2 pb-5 shadow-top chat-r ' id="chat-change">
        <img src={process.env.PUBLIC_URL + '/Language Change.png'} alt="Error Loading image" className='w-[38px] h-[35px] ml-2 cursor-pointer 'onClick={languageClickHandler} />        
        <input type="text chat-input-r" placeholder='Type here...'  id="text_input"
          ref={inputRef}
          className='border bc border-grey-700 rounded-[6px] w-[65%] p-1 text-[17px]'    
          onKeyDown={handleEnterPress}    
        />
        <img src={process.env.PUBLIC_URL + '/mic.png'} alt="Error Loading image" className='w-[25px] h-[28px] cursor-pointer hover:scale-105 transition transform duration-500 delay-150 ' onClick={voiceChatHandler}/>        
        <img src={process.env.PUBLIC_URL + '/send.png'} alt="Error Loading image" className=' send-btn w-[31px] h-[30px] mr-2 cursor-pointer hover:scale-110 transition transform duration-500 delay-150 ' onClick={handleButtonClick}
         
        />
    </div>
    {language && (
      <Language language={language} setLanguage={setLanguage}/>
    )}
    {
      voiceChat && (
          <VoiceChatOption voiceChat={voiceChat} setVoiceChat={setVoiceChat} sendTranscriptToParent={handleTranscriptChange}  />
      )
    }
    </>
  )
}
