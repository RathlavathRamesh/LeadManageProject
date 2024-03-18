"use client"
import { useState } from 'react';
import UserDetails from './components/UserDetails/page'
import MembersStatus from './components/MembersStatus/page'
import SideBar from './components/SideBar/page';
       
export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [pageNo,setPageNo]=useState(1);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-row  bg-white">
       <div className=" flex flex-col justify-between p-3 w-[25vw]">
        <SideBar/>
         <h1>Hii Iam Bottom Card</h1>
        </div>
        <div className="bg-[#f0f5f1] w-full p-10">
          <h1 className="font-bold text-black text-2xl">Hello Evano 👋,</h1>
           <MembersStatus/>
           <UserDetails/>
      </div> 
    </main>
  )
  }