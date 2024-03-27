import SideBar from "./components/SideBar"     
import MembersStatus from "./components/MemberStatus"
import UserDetails from "./components/UserDetails"
import MembersStatusMobileVeiw from './components/MobileMemberStatus'
import TableTopSetionForMobile from './components/TableTopSectionForMobile'
import NavBar from "./components/Navbar"
export default function Home() {

  return (
    <>
    <div className="hidden md:block">
    <main className="flex min-h-screen  flex-row  shadow-lg  font-[Poppins]">
       <div className="flex flex-col bg-white   justify-between  max-h-[1198rem] pr-[1rem]  p-[1rem] min-w-[5rem] w-auto max-w-[38rem]">
           <SideBar/>
        </div>
        <div className="bg-[#FAFBFF] mt-[2rem]  w-full p-10 md:pl-[5rem]">
          <h1 className="font-[400] text-[#000000] text-2xl font-[Poppins]"> Hello Evano 👋🏼,</h1>
              <MembersStatus/>
              <UserDetails/> 
      </div> 
    </main>
    </div>
    <div className="md:hidden h-auto min-h-[100rem] bg-[#FAFBFF]">
      <NavBar/>
      <h1 className="font-[400] text-[#000000] text-center pt-[1rem] text-2xl font-[Poppins]"> Hello Evano 👋🏼,</h1>
     <div className="flex flex-col items-center">
        <MembersStatusMobileVeiw/>
        <TableTopSetionForMobile/>
     </div>
    </div>
    </>
   
  )
  }