import React from 'react'
export default function Feedback({setLikePopUp,likePopUp}) {
  const closeHandler=()=>{
    setLikePopUp(false);
  }
  return (
    <div className='flex items-center justify-center'>
    <div className='flex flex-col justify-center items-center gap-2 bc rounded-[20px] border w-[300px] '>
        <div className="text flex gap-7 border-b-2 bc ">
            <div className="txt p-3">
                Thank you for your feedback!
            </div>
            <div className="cross p-2 mt-2">
              <img src={process.env.PUBLIC_URL + '/Close Button.png'} alt="Error loading image " className='w-[16px] ' onClick={closeHandler}/>
            </div>
        </div>
        <div className="like_img px-3 pb-4 pt-2">
            <img src={process.env.PUBLIC_URL + '/Positive Feedback.png'} alt="Error loading image " className='w-[70px] cursor-pointer' />
        </div>
    </div>
    </div>
  )
}
