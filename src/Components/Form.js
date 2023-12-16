import React from 'react'

export default function Form() {
  return (
    <div >
        <p className='montserrat text-[14px] font-normal'>Fill out the form below to search Jobs</p>
         <form action="#" className='border border-grey-100 shadow-lg  my-1 rounded-[6px]'>
            <select name="jobs" id="job" className='  border  mx-4  border-grey-700 bc w-[92%] py-2 mt-2 mb-1 rounded-lg shadow-sm hover:shadow-md  hover:transition transform duration-300 delay-100  open_sans  text-[13px] hover:border-orange-300 font-normal' >
                <option value="selectJob" >Select Job Type</option>
                <option value="government">Government</option>
                <option value="private">Private</option>            
            </select>
            <br/>
            <select name="qualifications" id="qualification" className='border  mx-4 bc  border-grey-700 w-[92%] py-2 rounded-lg shadow-sm hover:shadow-md my-1 hover:transition transform duration-300 delay-100 open_sans  text-[13px] hover:border-orange-300 font-normal'>
                <option value="select_qualification">Select Qualification</option>
                <option value="no_schooling">No Schooling</option>
                <option value="fifth">5th</option>            
                <option value="eighth">8th</option>
                <option value="tenth">10th</option>
                <option value="twelveth">12th</option>            
                <option value="selectJob">Diploma After 10th</option>
                <option value="government">Diploma After 12th</option>
                <option value="private">ITI</option>            
                <option value="selectJob">Graduate</option>
                <option value="government">PG Diploma</option>
                <option value="private">Post Graduate</option>            
                <option value="private">M Phill</option>            
                <option value="private">phd</option>            
            </select>
            <br/>
            <select name="experiences" id="experience" className='border  mx-4 bc border-grey-700 w-[92%] py-2 rounded-lg shadow-sm hover:shadow-md my-1 hover:transition transform duration-300 delay-100 open_sans  text-[13px] hover:border-orange-300 font-normal'>
                <option value="selectJob">Experience upto (in years)</option>
                <option value="government">Fresher</option>
                <option value="private">1 Year Experience</option>            
                <option value="selectJob">2 Years Experience</option>
                <option value="government">3 Years Experience</option>
                <option value="private">4 Years Experience</option>            
                <option value="selectJob">5 Years Experience</option>
                <option value="government">6 Years Experience</option>
                <option value="private">7 Years Experience</option>            
                <option value="selectJob">8 Years Experience</option>
                <option value="government">9 Years Experience</option>
                <option value="private">10 Years Experience</option>            
            </select>
            <br/>
            <select name="places" id="place" className='border  mx-4  bc border-grey-700 w-[92%] py-2 rounded-lg shadow-sm hover:shadow-md my-1 hover:transition transform duration-300 delay-100 open_sans  text-[13px] hover:border-orange-300 font-normal'>
                 <option value="posting">Place Of Posting</option>
                 <option value="Amritsar">Amritsar</option>
                 <option value="Barnala">Barnala</option>
                 <option value="Fazlika">Fazlika</option>
                 <option value="Jalandhar">Jalandhar</option>
                 <option value="Patiala">Patiala</option>
                 <option value="Moga">Moga</option>
                 <option value="Chandigarh">Chandigarh</option>
            </select>
            <br/>
          <button type="button" className='montserrat btn bg-orange-500 mx-4 py-2 rounded-lg shadow-sm  mb-2 mt-1 w-[92%] hover:scale-105 transition transform duration-500 delay-150 hover:shadow-md hover:-translate-y-0.5 font-semibold text-[15px]'> 
              <a href="https://www.pgrkam.com/search-results/" target="_blank" rel="noopener noreferrer">
                    Search Job
              </a>
          </button>
         </form>
    </div>
  )
}
