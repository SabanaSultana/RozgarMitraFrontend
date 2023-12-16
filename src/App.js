import NavBar from "./Components/NavBar";
import FormSection from "./Components/FormSection";
import Cards from "./Components/Cards";
import Cards2 from "./Components/Cards2";
import ChatSection from "./Components/ChatSection";
import { useState } from "react";
import Login from "./Components/Login";
import LoginDetails from "./Components/LoginDetails";
import Language from "./Components/Language";
import AboutSection from "./Components/AboutSection";
import Input from "./Components/Input";
import Output from "./Components/Output";
import Feedback from "./Components/Feedback";
import Inconvenience from "./Components/Inconvenience";
import React, { useEffect, useRef } from 'react';

function App() {
  const [isScreenPartVisible, setIsScreenPartVisible] = useState(true);
  const [isCardsVisible, setIsCardsVisible] = useState(true);
  const [isLoginDetailsVisible, setIsLoginDetailsVisible] = useState(false);
  const [isChatVisible,setChatVisible]=useState(true)
  const [inputValue, setInputValue] = useState(""); 
  const [isConvent,setConvent]=useState(false);
  const [isFeedback,setFeedback]=useState(false);
  const [dataFromChat, setDataFromChat] = useState(null);
  const [outPutDataFromChild, setoutPutDataFromChat] = useState(null);
  const [messages, setMessages] = useState([]);
  
  const chatElementRef = useRef(null);

  const conVenienceHandler =()=>{
    setConvent(true);
  }
  const feedBackHandler=()=>{
    setFeedback(true)
  }
 
  const toggleScreenPartVisibility = () => {
    setIsScreenPartVisible(!isScreenPartVisible);
    
  };
  const toggleCardsVisibility = () => {
    setIsCardsVisible(!isCardsVisible);
  }; 

  const toggleLoginDetailsVisibility = () => {
    setIsLoginDetailsVisible(!isLoginDetailsVisible);
  };

  const sendHandler =()=>{
      setChatVisible(false);
      setInputValue("");
  }
  useEffect(() => {
    // Scroll to the bottom of the chat element when messages change
    if (chatElementRef.current) {
      chatElementRef.current.scrollTop = chatElementRef.current.scrollHeight;
    }
  }, [messages]);
  
  return (
    <div className="App h-screen overflow-y-hidden">
      <div className=" parent box w-[420px] h-full bg-white  mx-auto border-0 border-grey-100 rounded-2xl drop-shadow-2xl flex flex-col ">
          <div className="navigationMenu  fixed_item fixed-first ">
            <NavBar
             onHamburgerClick={toggleScreenPartVisibility}                     
             />
          </div>
          <div className={`screen-part`} >
            <div className={` scrolling-content midbar mx-3 overflow-x-hidden
                ${isChatVisible?"":"hidden"}   
                ${isScreenPartVisible ? "" : "hidden"}     
            `}>
            <FormSection />
            <Cards  />
            <AboutSection/>
            </div>
            <div className={`chatBox fixed_item  fixed-last z-0 `} 
            >
              <ChatSection 
              onSendClick={sendHandler}
              setInputValue={setInputValue}
              inputValue={inputValue}
              setMessages={setMessages}
              />
            </div>
        </div>
        <div className={`secondCard  bottom-0 mx-3 border rounded-tl-[20px] rounded-tr-[20px]  animated-element bg-white  absolute z-20
           ${isScreenPartVisible ? "hidden":""}
           ${isChatVisible?"":"hidden"}  
           ` }  >
          <Cards2/>            
          <Login onLoginButtonClick={toggleLoginDetailsVisibility} />

        </div>
        <div className={`login-details  fixed bottom-0 bc border rounded-tl-[30px] rounded-tr-[30px] bg-white w-full h-[250px] z-40
         ${isLoginDetailsVisible ? "" : "hidden"}
        `}>
          <LoginDetails />
        </div>                                          
        
      <div className={`feedback  absolute top-60 left-20 bg-gray-200  border bc rounded-[10px] 
       ${isFeedback?"":"hidden"}
      `}>
        <Feedback/>
      </div>
      <div 
      ref={chatElementRef}
      className={`chat_element chat-scroll   w-[100%] h-[full] overflow-x-hidden
          ${isChatVisible?'hidden':''}
      `   
    }>
        {messages.map((message, index) => {
            if (message.type === "human") {
              return <Input key={index} inputData={message.content} />;
            } else if (message.type === "ai") {
              return <Output key={index} outputData={message.content} />;
            }
            return null;
          })}
        
        
      </div>
      </div>
    </div>
    
  );
}

export default App;