import React from 'react'
import { useState } from 'react';
// import ThanksComponent from './ThanksComponent';
export default function Inconvenience({setShowPopUp,showPopUp}) {
  const [inputValue, setInputValue] = useState('');
  const handleClearClick = () => {
    setInputValue(''); 
    alert('clear click is working')
  };
  const [isComponentVisible, setComponentVisibility] = useState(true);
  // const [isThanksVisible, setThanksVisibility] = useState(false);
  const handleSubmit = () => {
    setComponentVisibility(false);
    alert("you submit button is working")
    // setThanksVisibility(true);

  };
  const closeHandler=()=>{
    setShowPopUp(false);
  }
  
  return (
    <div className='inConvenience   bg-gray-200  border bc  w-[70%]   ml-8 rounded-[10px] '>
    {isComponentVisible && (
     <div>
        <div className="titleBar flex  justify-center items-center relatiive border-b-2 bc pb-2 pt-2  ">
          <div className="text montserrat ">Sorry for your inconvenience</div>
          <div className="sound absolute top-3 right-6 ">
            <img src={process.env.PUBLIC_URL + '/Close Button.png'} alt="Error Loading image" className='w-[13px]'  onClick={closeHandler}/>
          </div>
      </div>
      <div className="details flex flex-col pl-6 pt-5  ">
          <p className='font-sans'>Please share your feedback below.It will help me to improve myself.</p>
          <div className=" flex mt-3 p-2 ">
            <input type="text"
             placeholder='Enter your feedback here...' 
             className='border-2 bc p-2 px-6'
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}             
            />             
          </div>
           <div className="buttn flex  justify-center items-center gap-3">
                <div className="submit  btn flex py-1 rounded-[6px] shadow-sm  mb-2 w-[20%] hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 items-center justify-center">
                   <button type="button" className='montserrat font-semibold text-[15px]'onClick={handleSubmit} >Submit</button>
                </div>
                <div className="cancel  bg-black text-white flex py-1 rounded-[6px] shadow-sm mb-2  w-[20%] hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 items-center justify-center">
                   <button type="button" className='montserrat font-semibold text-[15px]' onClick={handleClearClick} >Cancel</button>
                </div>
           </div>
      </div>
      </div>
      ) }
      {/* {isThanksVisible && <ThanksComponent />} */}
      </div>
  )
}
