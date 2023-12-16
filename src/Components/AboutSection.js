import React from 'react'

export default function AboutSection() {
  return (
    <div className='flex flex-col gap-2 mx-3 my-3'>
        <div className="about border-b-2 border-t-2 pb-3 pt-3">
            <div className="title flex gap-1">
                <img src={process.env.PUBLIC_URL + '/About.png'}  alt="Error loading image"  className='w-[32px]'/>
                <h1 className='About_text'>About Rozgar MITRA</h1>
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio praesentium suscipit perspiciatis atque molestias reiciendis ibus laboriosam nihil ab hic, vitae nostrum harum veniam veritatis, qui at dolorem ea.
            </div>
        </div>
        <div className="usp border-b-2 pb-3 ">
            <div className="title flex gap-1">
                <img src={process.env.PUBLIC_URL + '/USP.png'}  alt="Error loading image"  className='w-[32px]'/>
                <h1 className='About_text'> Rozgar Mitra's USP</h1>
            </div>
            <div className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia doloribus odit blanditiis, sit obcaecati omnis porro ipsam tempore explicabo.
            </div>
        </div>
        <div className="key">
            <div className="title flex gap-1">
                <img src={process.env.PUBLIC_URL + '/Key Features.png'}  alt="Error loading image"  className='w-[32px]'/>
                <h1 className='About_text'>Key Features</h1>
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste quae dolores minus quia aspernatur dicta harum eligendi dolore eius!
            </div>
        </div>
    </div>
  )
}
