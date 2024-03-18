import React, { useState, useEffect } from 'react';
const PageTopSection=()=>{
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
      
    return (
        <div className="flex flex-row justify-between">
        <div className="pl-4">
        <h1 className="font-bold text-black text-2xl">All Customers</h1>
        <p className="text-green-400">Active Members</p>
        </div>
            <div className="flex items-center">
            <div className="relative mr-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" stroke-Linejoin="round" stroke-Width="2" d="M21 21l-6-6m4-3a8 8 0 11-16 0 8 8 0 0116 0z"/>
            </svg>
            </div>
            <input 
            type="text" 
            placeholder="Search..."
            className="block max-w-[12vw]  w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-tight focus:outline-none focus:border-blue-500"
            />
            </div>
            <div className="flex items-center flex-row  p-3 h-[6vh] w-ful bg-gray-200">
            <p className="text-md text-black">Sort By:</p>
            <select 
                className="block border border-none min-w-[10vw] bg-gray:200 border-gray-300 rounded-md leading-tight  text-sm focus:outline-none focus:border-blue-500"
            >
                <option value="">Newest.</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="price">Price</option>
            </select>
            </div>
            </div>
       </div>
    )
}
export default  PageTopSection;
