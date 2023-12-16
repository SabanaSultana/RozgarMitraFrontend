import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faBars} from '@fortawesome/free-solid-svg-icons'
export default function NavBar({onHamburgerClick}) {
  const onHomeClick=()=>{
     window.location.reload();
  }
  return (
    <div className='w-[100%]  flex  justify-between  navBar-item  '>
        <div className="left-part flex  gap-3">
            <div className="menu flex flex-col gap-1 mt-3 ml-2 ">
                <div className="humbergearMenu ">
                   <FontAwesomeIcon icon={faBars}  className='text-[23px] cursor-pointer' onClick={onHamburgerClick} />
                </div>
                <div className="home ">
                   <FontAwesomeIcon icon={faHouse} className='text-[23px] cursor-pointer' onClick={onHomeClick}  />
                </div>
            </div>
            <div className="icon mt-3">
            <img src={process.env.PUBLIC_URL + '/Rozgar Mitra Logo Main.png'} alt="Error loading image" className='w-[55px] border-0 rounded-[21px] ' />
            </div>
            <div className="name mt-1">
                  <p className='text-[20px] font-bold oswald'>Rozgar</p>
                  <h1 className='text-[25px] font-black oswald'>MITRA</h1>
            </div>
        </div>
        <div className="right-part my-2 mx-3 ">
          <img src={process.env.PUBLIC_URL + '/pgrkam logo.png'} alt="Error loading image" className='w-[50px] img_set' />
        </div>
    </div>
  )
}
