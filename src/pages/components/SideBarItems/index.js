import React, { useState, useEffect } from 'react';
import { VscKey } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";
import { FaGreaterThan } from "react-icons/fa";


const  SideBarItem=(prop)=>{
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);
      
    const {Item}=prop 
    if (!Item || !Item.headingName || !Item.svgElement) {
        return null; // or return a placeholder component or message
    }
    console.log(Item)
    return (
      <div  className="flex flex-row h-[7vh] cursor-pointer justify-between items-center mt-3 rounded-lg text-gray-400   hover:bg-blue-700 hover:text-white hover:border-rounded">
       <div className="flex flex-row">
       <div className="text-3xl pl-1">
        {Item.svgElement}
      </div>
      <h1 className="text-2md pt-1 text-black pl-3 hidden md:block">{Item.headingName}</h1>
       </div>
       <div>
       <FaGreaterThan  className="cursor-pointer hidden md:block"/>
       </div>
    </div>
    ) 
}
export default SideBarItem