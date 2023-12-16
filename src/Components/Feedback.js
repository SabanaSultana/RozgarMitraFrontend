import React from 'react'

export default function Feedback() {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <div className="text flex gap-7 border-b-2 bc ">
            <div className="txt p-3">
                Thank you for your feedback!
            </div>
            <div className="cross p-2 mt-2">
              <img src={process.env.PUBLIC_URL + '/Close Button.png'} alt="Error loading image " className='w-[16px]' />
            </div>
        </div>
        <div className="like_img px-3 pb-4 pt-2">
            <img src={process.env.PUBLIC_URL + '/Positive Feedback.png'} alt="Error loading image " className='w-[70px]' />
        </div>
    </div>
  )
}
