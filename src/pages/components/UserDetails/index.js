import React, { useState } from 'react';
const { v4: uuidv4 } = require('uuid');
import { FaGreaterThan,FaLessThan } from "react-icons/fa6";
import Link from 'next/link';
import UsersTable from '../UsersTable'
import PageTopSection from '../TabletopSection/index'
const sampleData= [
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "John Doe",
    companyName: "ABC Corp",
    phoneNumber: "+1234567890",
    email: "john.doe@example.com",
    country: "USA",
    status: "Active"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Jane Smith",
    companyName: "XYZ Ltd",
    phoneNumber: "+9876543210",
    email: "jane.smith@example.com",
    country: "Canada",
    status: "Inactive"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Alice Johnson",
    companyName: "PQR Inc",
    phoneNumber: "+1122334455",
    email: "alice.johnson@example.com",
    country: "UK",
    status: "Active"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Bob Brown",
    companyName: "DEF Enterprises",
    phoneNumber: "+4455667788",
    email: "bob.brown@example.com",
    country: "Australia",
    status: "Inactive"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Emily Wilson",
    companyName: "MNO Ltd",
    phoneNumber: "+9988776655",
    email: "emily.wilson@example.com",
    country: "Germany",
    status: "Active"
  },     
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Michael Lee",
    companyName: "GHI Corp",
    phoneNumber: "+1122334455",
    email: "michael.lee@example.com",
    country: "Japan",
    status: "Inactive"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Sarah Taylor",
    companyName: "JKL Enterprises",
    phoneNumber: "+3344556677",
    email: "sarah.taylor@example.com",
    country: "France",
    status: "Active"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "David Clark",
    companyName: "STU Inc",
    phoneNumber: "+7788990011",
    email: "david.clark@example.com",
    country: "Brazil",
    status: "Active"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Olivia Martinez",
    companyName: "VWX Ltd",
    phoneNumber: "+1122334455",
    email: "olivia.martinez@example.com",
    country: "Spain",
    status: "Active"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "James Rodriguez",
    companyName: "RST Corp",
    phoneNumber: "+1122334455",
    email: "james.rodriguez@example.com",
    country: "Mexico",
    status: "Inactive"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Sophia Garcia",
    companyName: "UVW Enterprises",
    phoneNumber: "+2233445566",
    email: "sophia.garcia@example.com",
    country: "Italy",
    status: "Active"
  },
  {
    id: uuidv4(), // Generate a unique ID for this item
    name: "Daniel Hernandez",
    companyName: "LMN Ltd",
    phoneNumber: "+7788990011",
    email: "daniel.hernandez@example.com",
    country: "China",
    status: "Inactive"
  }
]; 
     
const UserDetails=()=>{
  const prevPage=()=>{
    const prevPageIndex=currentPage-1;
    if(prevPageIndex>=1){
      setCurrentPage(prevPageIndex)
    }
  }

  const nextPage=()=>{
    const nextPageIndex = currentPage + 1;
    if (nextPageIndex <= noOfPages) {
      setCurrentPage(nextPageIndex);
    }
  }
  const changePage=(id)=>{
    setCurrentPage(id);
  }
  const [currentPage,setCurrentPage]=useState(1);
  const recordsPerPage=5;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const records=sampleData.slice(firstIndex,lastIndex);
  const noOfPages=Math.ceil(sampleData.length/recordsPerPage)
  const numbers = Array.from({ length: noOfPages }, (_, index) => index + 1);
  const lastEntry=lastIndex>sampleData.length?sampleData.length:lastIndex;
    return (
      <div className="bg-white px-4 shadow-lg  p-[5rem]  sm:rounded-lg md:rounded-xl pt-3 mt-[3rem] pb-4 rounded-xl">
              <PageTopSection/>
              <UsersTable records={records}/>
       <div className='flex flex-row justify-between'>
       <p className='text-gray-400 pt-[1rem]'>Showing data {firstIndex+1} to {lastEntry} of {sampleData.length} entries</p>
       <nav>
        <ul className='flex flex-row  p-3 text-gray-400'>
          <li onClick={prevPage}>
                <Link href="#">
                <div className="flex items-center font-[Poppins] justify-center mr-2 h-[2rem] w-[2rem] bg-gray-200  rounded-md">
                     <FaLessThan className="w-[0.8rem] h-[0.8rem]" />
              </div>
                </Link>
          </li>
          {
            numbers.map((n,ind)=>(
              <li key={ind} onClick={() => changePage(n)}>
                      <Link href="#">
                      <div className={`flex items-center justify-center h-[2rem] font-[Poppins] w-[2rem] rounded-md  mr-2 ${currentPage === n ? 'bg-blue-500' : 'bg-gray-200'}`}>
                        <span className="text-gray-700">{n}</span>
                      </div>
                      </Link>
              </li>
            ))
          }
          <li onClick={nextPage}>
              <Link href="#">
            <div className="flex items-center justify-center font-[Poppins]  h-[2rem] w-[2rem] bg-gray-200 rounded-md">
                <FaGreaterThan className="w-[0.8rem] h-[0.8rem]" />
              </div>
         </Link>
          </li>
        </ul>
      </nav>
       </div>

      </div>
    )
}
export default UserDetails

//className="w-full mt-[5vh] text-gray-400 table-auto"