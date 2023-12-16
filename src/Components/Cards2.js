import React from 'react'
import cardData from './CardData'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
export default function Cards2() {
  const closeClickHandler=()=>{
    window.location.reload();
 }
   return (
    <div className='cards overflow-y-hidden mt-3 '>
      <div className="look flex border-b-[2px] bc justify-between pl-4 pb-2">
        <div className="binoculars flex ">
            <img src={process.env.PUBLIC_URL + '/What are you looking for..png'} alt="Error Loading image " className='w-[19px] h-[19px] my-1 mr-2 bg-sky-200 rounded-full px-1 py-1' /> 
            <p className='montserrat text-[14px] mt-1 font-medium font-weight'>What are you looking for?</p>
        </div>
        <div className="cross mr-8 ">
        <FontAwesomeIcon icon={faXmark} className='text-[23px] opacity-10 cursor-pointer '  onClick={closeClickHandler} />
        </div>
      </div>
      <div className='card-container px-3 pt-5 ' >
      {cardData.map(card => (
        <Card key={card.id} {...card} />
      ))}
     </div>
    </div>
  )
}
