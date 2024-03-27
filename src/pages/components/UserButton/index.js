import React, { useState } from 'react'
import { X } from 'lucide-react';
const UserButton = ({item}) => {
    if(!item) return;
  const [showDetails,setShowDetails]=useState(false);

  const showUserData=()=>{
    console.log("wrong is Clicked")
   setShowDetails((prev=>(!prev)))
  }
  console.log(showDetails)
  return (
   <>
   <button onClick={showUserData} className='px-3 py-1 mt-[0.2rem] min-w-[10rem]  text-white font-[Poppins] text-md rounded-md bg-indigo-400'>{item.name}</button>
   {showDetails && (
    <div className='fixed inset-0 bg-indigo-200 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
       <div className='mt-5 flex flex-col gap-1 '>
        <button className='place-self-end' onClick={showUserData}><X size={30}/></button>
         <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col '>
         <h1 className='font-[Poppins] text-yellow-600'><span className='text-white'>Name:</span>{item.name}</h1>
         <h1 className='font-[Poppins] text-yellow-600'><span className='text-white'>Company Name:</span>{item.companyName}</h1>
         <h1 className='font-[Poppins] text-yellow-600'><span className='text-white'>Phone Number:</span>{item.phoneNumber}</h1>
         <h1 className='font-[Poppins] text-yellow-600'><span className='text-white'>Email:</span>{item.email}</h1>
         <h1 className='font-[Poppins] text-yellow-600'><span className='text-white'>Country:</span>{item.country}</h1>         
         <h1 className='font-[Poppins] text-yellow-600'><span className='text-white'>Status:</span> <button className={`border border-solid rounded-md w-[5rem] text-center pl-[0.5rem] pr-[0.5rem] h-[2rem] ${item.status==="Active"?' border-green-600  text-green-600 bg-[#9ce398]': 'bg-[#f2746b] border-red-500 text-red-600'} text-center`} type="button">{item.status}</button>
           </h1>         
         </div>
       </div>
    </div>
   )}
   </> 
  )
}

export default UserButton
