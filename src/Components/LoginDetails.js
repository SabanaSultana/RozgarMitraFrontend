import React from 'react'
import PhoneNumber from './PhoneNumber'

export default function LoginDetails() {
  return (
    <div >
      <div className="titleBar flex  justify-center items-center relatiive border-b-2 bc pb-2 pt-2 ">
          <div className="text montserrat font-medium font-weight">Login</div>
          <div className="sound absolute top-3 right-7 ">
            <img src={process.env.PUBLIC_URL + '/Read Aloud.png'} alt="Error Loading image" className='w-[20px]' />
          </div>
      </div>
      <div className="details flex flex-col pl-10 pt-5 ">
          <h2 className='oswald font-bold text-2xl word-space leading-7'>Enter your mobile number</h2>
          <p className='montserrat font-weight'>You will receive a 6 digit OTP verification</p>
          <div className="phone flex mt-5 gap-3">
            <img src={process.env.PUBLIC_URL + '/Smartphone.png'} alt="Error Loading image" className='w-[47px]' />
             <PhoneNumber/>
          </div>
          <div className="otp login btn flex py-2 rounded-lg shadow-sm  mb-2 mt-3 w-[92%] hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 items-center justify-center">
          <button type="button" className='montserrat font-semibold text-[15px]' >OTP</button>
          </div>
      </div>
    </div>
  )
}
