import SideBar from "./components/SideBar"     
import MembersStatus from "./components/MemberStatus"
import UserDetails from "./components/UserDetails"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-row  shadow-lg  font-Poppins">
       <div className="flex flex-col bg-white justify-between  max-h-[1198rem] pr-[1rem]  p-[1rem] min-w-[5rem] w-auto max-w-[38rem]">
        <SideBar/>
        </div>
        <div className="bg-[#FAFBFF] mt[2rem]  w-full p-10 pl-[5rem]">
          <h1 className="font-[400] text-[#000000] text-2xl font-[Poppins]"> Hello Evano 👋🏼,</h1>
           <MembersStatus/>
           <UserDetails/>
      </div> 
    </main>
  )
  }