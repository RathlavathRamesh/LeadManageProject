import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MembersStatus=()=>{
    return (
        <div className="flex relative flex-col md:flex-row justify-around bg-white  h-auto shadow-md    w-full mt-5 rounded sm:rounded-lg md:rounded-xl p-5">
        <div className="flex flex-row "> 
           <svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="green"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#9fffac" strok-ewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="9" cy="6" r="4" stroke="green" stroke-width="1.5"></circle> <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="green" stroke-width="1.5" stroke-linecap="round"></path> <ellipse cx="9" cy="17" rx="7" ry="4" stroke="green" stroke-width="1.5"></ellipse> <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="green" stroke-width="1.5" stroke-linecap="round"></path></g></svg>
        <div className="pl-3">
        <h1 className="text-gray-400 text-thin">Total Customers </h1>
          <h1 className="text-black">5,432</h1>
          <div className='flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" className='pt-1' height={"20px"} fontWeight={"bold"} width={"20px"} viewBox="0 0 384 512"><path fill="green" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
           <p className='text-black'><span className='text-green-500 decoration-2'>16%</span> this month</p>
          </div>
           </div>
      </div>
      <div className="flex flex-row "> 
      <svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#9fffac" stroke-width="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 8.5C8.5 6.56625 10.0663 5 12 5C13.9338 5 15.5 6.56625 15.5 8.5C15.5 10.4338 13.9338 12 12 12C10.0663 12 8.5 10.4338 8.5 8.5ZM12 6.75C12.9625 6.75 13.75 7.5375 13.75 8.5C13.75 9.4625 12.9625 10.25 12 10.25C11.0375 10.25 10.25 9.4625 10.25 8.5C10.25 7.5375 11.0375 6.75 12 6.75Z" fill="#2ad518"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.75C9.66375 13.75 5 14.9225 5 17.25V19H19V17.25C19 14.9225 14.3363 13.75 12 13.75ZM12 15.5C14.3625 15.5 17.075 16.6287 17.25 17.25H6.75C6.95125 16.62 9.64625 15.5 12 15.5Z" fill="#2ad518"></path> <path d="M21.4025 8.58002L21.99 9.17168L18.6567 12.505L16.99 10.8425L17.5817 10.255L18.6567 11.3259L21.4025 8.58002Z" fill="#2ad518"></path> </g></svg> <div className="pl-3">
      <div className="pl-3">
        <h1 className="text-gray-400 text-thin">Memebers</h1>
          <h1  className="text-black">1,893</h1>
          <div className='flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" className='pt-1' height={"20px"} fontWeight={"bold"} width={"20px"} viewBox="0 0 384 512"><path fill="#ff2600" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
           <p className='text-black'><span className='text-red-500'>1%</span> this month</p>
          </div>
        </div>
        </div>
      </div>
      <div className="flex flex-row "> 
      <svg fill="#69e54a" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="-195.59 -195.59 798.66 798.66"  stroke="green"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-195.59" y="-195.59" width="798.66" height="798.66" rx="399.33" fill="#9be288" strok-ewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M378.939,16.564H28.544C12.805,16.564,0,29.369,0,45.108v219.985c0,15.739,12.805,28.544,28.544,28.544h131.46 l-7.197,33.431h-24.994c-3.723,0-7.278,1.546-9.818,4.268l-34.512,37c-3.646,3.909-4.627,9.608-2.495,14.51 c2.131,4.902,6.967,8.073,12.313,8.073h220.885c0.006-0.001,0.015-0.001,0.02,0c7.415,0,13.427-6.011,13.427-13.426 c0-3.766-1.55-7.168-4.047-9.606l-34.094-36.551c-2.54-2.723-6.096-4.268-9.818-4.268h-24.994l-7.197-33.431h131.459 c15.74,0,28.545-12.805,28.545-28.544V45.108C407.484,29.369,394.68,16.564,378.939,16.564z M371.242,259.737h-335V50.465h335 V259.737z"></path> </g></svg> <div className="pl-3">
      <div className="pl-3">
        <h1 className="text-gray-400 text-thin">Active Now </h1>
          <h1  className="text-black">189</h1>
              <div className='flex flex-row'>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virat_Kohli_portrait.jpg/1132px-Virat_Kohli_portrait.jpg?20180427075657" className="rounded-full w-5 h-5 relative z-10" alt="Small Image" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg/460px-thumbnail.jpg" className="rounded-full w-5 h-5 relative -ml-2 z-20" alt="Small Image" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg/460px-thumbnail.jpg" className="rounded-full w-5 h-5 relative -ml-2 z-20" alt="Small Image" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg/460px-thumbnail.jpg" className="rounded-full w-5 h-5 relative -ml-2 z-20" alt="Small Image" />
              </div>
        </div>
        </div>
      </div>
      </div>
    )
}
export default MembersStatus