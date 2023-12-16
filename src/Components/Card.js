import React from 'react'

export default function Card({ id, title, imageUrl,color }) {
  const cardStyle={
    backgroundColor:color
  }
  return (
    <div className='card  hover:scale-110  ' style={cardStyle} >
        <img src={process.env.PUBLIC_URL+imageUrl} alt={`Image for ${title}` } className='centered-image ' />
        <h2 className='text-[9px] font-semibold '>{title}</h2>
        
    </div>
  )
}
