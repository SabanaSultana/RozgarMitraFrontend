import React from 'react'
import cardData from './CardData'
import Card from './Card'
export default function Cards() {
   return (
    <div className='cards overflow-y-hidden overflow-x-hidden mt-3 '>
      <div className="look flex ">
       <img src={process.env.PUBLIC_URL + '/What are you looking for..png'} alt="Error Loading image " className='w-[19px] h-[19px] my-1 mr-2 bg-sky-200 rounded-full px-1 py-1' /> 
       <p className='montserrat text-[14px] mt-1'>Looking for something else</p>
      </div>
      <div className='card-container mt-2' >
      {cardData.map(card => (
        <Card key={card.id} {...card} />
      ))}
     </div>
    </div>
  )
}
