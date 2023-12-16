import React from 'react'
import { useState } from 'react';

export default function PhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const inputChangeHandler = (event) => {
        const inputValue = event.target.value.replace(/\D/g, '');
        setPhoneNumber(inputValue);
    };
  return (
    <div className='border-2 bc rounded-[5px] pt-3 px-3 w-[270px] h-[50px] text-[17px]'>
        <label>
         +91{' '}
        <input 
            type="text" value={phoneNumber} onChange={inputChangeHandler} placeholder="Enter your number" 
            className='border-l-2 pl-1'
            
        />
      </label>
    </div>
  )
}
