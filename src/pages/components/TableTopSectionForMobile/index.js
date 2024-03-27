import React, { useState, useEffect } from 'react';

import UsersInMobile from '../UsersInMobile';

const TableTopSetionForMobile=()=>{

    return (
   <>
   <div className="flex mt-[1rem] flex-col min-h-[25vh] ml-[2rem] p-[1rem] mr-[2rem] font-[Poppins] w-auto h-auto min-w-[25rem] bg-white shadow-xl justify-between">
    <div className='flex flex-row justify-between'>
      <div>
        <h1 className="font-bold text-black text-[1rem]">All Customers</h1>
        <p className="text-[#16C098] text-[8px]">Active Members</p>
       </div>
       <div className="">
          <div className="relative mr-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-Linejoin="round" stroke-Width="2" d="M21 21l-6-6m4-3a8 8 0 11-16 0 8 8 0 0116 0z"/>
                    </svg>
            </div>
            <input 
            type="text" 
            placeholder="Search..."
            className="text-[0.8rem] w-[8rem]  pl-10 pr-4 bg py-2 border bg-[#FAFBFF] rounded-md leading-tight focus:outline-none focus:border-[#f0f5f1]"
            />
            </div>
            <div className="flex items-center flex-row  h-[3rem] rounded-md p-3 max-h-[2.4rem] w-ful bg-[#FAFBFF]">
            <p className="text-md text-gray-300">Sort By:</p>
            <select 
                className="block border border-none min-w-[10vw] bg-[#f5faf9] border-white rounded-md leading-tight  text-sm focus:outline-none focus:border-blue-500"
            >
                <option value="">Newest.</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
            </select>
            </div>
        </div>
      </div>
     <UsersInMobile/>
    </div>
   </> 
    )
}
export default  TableTopSetionForMobile;
