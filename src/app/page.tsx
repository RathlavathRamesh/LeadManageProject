import Image from "next/image";
import { TbHexagonNumber0 } from "react-icons/tb";
import SideBarItem from './components/SidebarItems/page'

const InconsArray=[{IncoName:"VscKey",headingName:"Dashboard",id:1},{IncoName:"GrInstagram",headingName:"Products",id:2},{IncoName:"LuContact2",headingName:"Customer",id:3},{IncoName:"TbHexagonNumber0",headingName:"Income",id:4},{IncoName:"TbHexagonNumber0",headingName:"Remote",id:5},{IncoName:"TbHexagonNumber0",headingName:"Help",id:6}]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row  bg-white">
       <div className=" flex flex-col justify-between p-3 w-[25vw]">
        <div>
          <div className="flex flex-row ml-2 ">
             <div>
              <TbHexagonNumber0 className="sm:text-1xl text-3xl pt-1 pl-1" />
              </div>
             <h1 className="font-bold font-serif text-2xl  hidden md:block">Dashboard<span className="text-[15px] font-thin text-gray-300 ">v.01</span> </h1>
            </div>
           
           {
            InconsArray.map((each)=>(
              <SideBarItem Item={each} key={each.id}/>
            ))
           }
          </div>
         <h1>Hii Iam Bottom Card</h1>
        </div>
        <div className="bg-[#d1d0cd] w-full">
            <h1 className="font-bold text-blue-500 text-2xl">Hii This is UserInterface</h1>
          </div> 
    </main>
  );
}


