import React from 'react'
export default function Login({onLoginButtonClick}) {
  return (
    <div className='my-2'>
       <div className="login btn flex mx-auto mx-4 py-2 rounded-lg shadow-sm  mb-2 mt-1 w-[92%] hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 items-center justify-center ">
         <button type="button" className='montserrat font-semibold text-[15px]'onClick={onLoginButtonClick} >Login</button>
         <img src={process.env.PUBLIC_URL + '/Login Button.png' }  alt="Error Loading image" className='w-[16px] ml-1 ' />       
        </div>
    </div>
  )
}
