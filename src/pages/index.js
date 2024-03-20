import SideBar from "./components/SideBar"     
import MembersStatus from "./components/MemberStatus"
import UserDetails from "./components/UserDetails"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-row  bg-white">
       <div className=" flex flex-col  justify-between p-3 w-auto max-w-[25vw]">
        <SideBar/>
        </div>
        <div className="bg-[#f5faf9] w-full p-10">
          <h1 className="font-bold text-black text-2xl">Hello Evano 👋,</h1>
           <MembersStatus/>
           <UserDetails/>
      </div> 
    </main>
  )
  }