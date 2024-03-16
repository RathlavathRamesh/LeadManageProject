import { VscKey } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";
import { FaGreaterThan } from "react-icons/fa6";
import React from "react";
interface ItemProps {
    IncoName: string;
    headingName: string;
  }
  
  // Define the type for the props passed to the SideBarItem component
  interface SideBarItemProps {
    Item: ItemProps;
  }

const  SideBarItem: React.FC<SideBarItemProps>=(prop)=>{
  //  const [collapse,setCollapse]=React.useState(0)
    const {Item}=prop
    console.log(Item)
    let IconToRender;
    switch (Item.IncoName) {
      case "VscKey":
        IconToRender = VscKey;
        break;
     case "GrInstagram":
        IconToRender=GrInstagram;
         break;
     case "LuContact2":
        IconToRender=LuContact2;
        break;
      default:
        // Default to a placeholder icon or handle invalid icon names
        IconToRender = LuContact2
        break;
    }
  
    return (
      <div  className="flex flex-row h-[7vh] justify-between items-center mt-3 rounded-lg text-gray-400   hover:bg-blue-700 hover:text-white hover:border-rounded">
       <div className="flex flex-row">
       <div className="text-3xl pl-1">
      <IconToRender className="text-3xl pl-1"  />
      </div>
      <h1 className="text-2xl pl-3 hidden md:block">{Item.headingName}</h1>
       </div>
       <div>
       <FaGreaterThan  className="cursor-pointer"/>
       </div>
    </div>
    ) 
}
export default SideBarItem