import React, { useState, useEffect } from 'react';
import { VscKey } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";
import { FaGreaterThan } from "react-icons/fa";


const  SideBarItem=(prop)=>{
    const {Item,minimizeFuntion,isMinimize}=prop 
    if (!Item || !Item.headingName || !Item.svgElement) {
        return null; 
    }
    console.log(isMinimize)
    const minizmize=()=>{
      minimizeFuntion();
    }
    return (
      <div  className="flex flex-row h-[7vh] cursor-pointer justify-between items-center mt-3 rounded-lg font-[500] text-gray-400  hover:bg-blue-700 hover:text-white hover:border-rounded">
       <div className="flex flex-row">
       <div className="text-3xl pl-1" onClick={minizmize}>
        {Item.svgElement}
      </div>
      <h1 className={`text-xl pt-1  pl-3 hidden ${isMinimize===false? "md:block":""}`}>{Item.headingName}</h1>
       </div>
       <div>
       <FaGreaterThan onClick={minizmize}  className={`cursor-pointer  hidden ${isMinimize===false? "md:block":""}`}/>
       </div>
    </div>
    ) 
}
export default SideBarItem