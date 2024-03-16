import Image from "next/image";
import { TbHexagonNumber0 } from "react-icons/tb";
import { VscKey } from "react-icons/vsc";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row  bg-white">
       <div className=" flex flex-col justify-between p-3 w-[25vw]">
        <div>
          <div className="flex flex-row ml-2">
             <div>
              <TbHexagonNumber0 className="sm:text-1xl text-3xl pt-1" />
              </div>
             <h1 className="font-bold font-serif text-2xl pl-3  hidden md:block">Dashboard<span className="text-[15px] font-thin text-gray-300 ">v.01</span> </h1>
            </div>
          <div  className="flex flex-row h-[7vh] flex  items-center mt-3 rounded-lg hover:bg-blue-700 hover:text-white hover:border-rounded">
            <div>
            <VscKey className="text-3xl"  />
            </div>
            <h1 className="text-gray-300   hover:text-white text-2xl pl-3 hidden md:block">Dashboard</h1>
          </div>
          <div  className="flex flex-row h-[7vh] flex  items-center mt-3 rounded-lg hover:bg-blue-700 text-gray-300   hover:text-white hover:border-rounded">
            <div>
            <VscKey className="text-3xl"  />
            </div>
            <h1 className="text-2xl pl-3 hidden md:block">Product</h1>
          </div>
          <div  className="flex flex-row h-[7vh] flex  items-center mt-3 rounded-lg hover:bg-blue-700   text-gray-300   hover:text-white hover:border-rounded">
            <div>
            <VscKey className="text-3xl"  />
            </div>
            <h1 className="text-2xl pl-3 hidden md:block">Customer</h1>
          </div>
          <div  className="flex flex-row h-[7vh] flex  items-center mt-3 rounded-lg hover:bg-blue-700 text-gray-300   hover:text-white hover:border-rounded">
            <div>
            <VscKey className="text-3xl"  />
            </div>
            <h1 className=" text-2xl pl-3 hidden md:block">Income</h1>
          </div>
          <div  className="flex flex-row h-[7vh] flex  items-center mt-3 rounded-lg hover:bg-blue-700 text-gray-300   hover:text-white hover:border-rounded">
            <div>
            <VscKey className="text-3xl"  />
            </div>
            <h1 className=" text-2xl pl-3 hidden md:block">Remote</h1>
          </div>
          <div  className="flex flex-row h-[7vh] flex  items-center mt-3 rounded-lg hover:bg-blue-700 text-gray-300   hover:text-white hover:border-rounded">
            <div>
            <VscKey className="text-3xl"  />
            </div>
            <h1 className="text-2xl pl-3 hidden md:block">Help</h1>
          </div>
          </div>
         <h1>Hii Iam Bottom Card</h1>
        </div>
        <div className="bg-[#d1d0cd] w-full">
            <h1 className="font-bold text-blue-500 text-2xl">Hii This is UserInterface</h1>
          </div> 
    </main>
  );
}


