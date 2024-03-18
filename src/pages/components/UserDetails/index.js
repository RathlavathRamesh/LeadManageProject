"use client"
const { v4: uuidv4 } = require('uuid');
import Link from 'next/link';
import { useState } from 'react';
import UserCard from '../UserCard/index'
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
  const recordsPerPage=2;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const records=sampleData.slice(firstIndex,lastIndex);
  const noOfPages=Math.ceil(sampleData.length/recordsPerPage)
  const numbers = Array.from({ length: noOfPages }, (_, index) => index + 1);
    return (
        <div className="bg-white p-5 mt-5 rounded-[20px] max-h-[90vh]  h-auto md:w-full">
              <PageTopSection/>
        <table >
          <thead  className='table text-gray-400 mt-3 p-3'>
              <th className='px-8' >Name</th>
              <th className='px-8'>Company Name</th>
              <th className='px-4'>Phone Number</th>
              <th className='px-8'>Email</th>
              <th className='px-8'>Country</th>
              <th className='px-8'>Status</th>
          </thead>
      <hr className="text-gray-500  mt-2"/>
      <tbody>
      {
          records.map((each)=>(
            <UserCard item={each} key={each.id}/>
          ))
        }
      </tbody>
      </table>
       <div className='flex flex-row justify-between'>
       <p className='text-gray-400'>Showing page {currentPage} of {noOfPages}</p>
       <nav>
        <ul className='flex flex-row p-3 text-gray-400'>
          <li onClick={prevPage}>
                <Link href="#">
                <div className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md mr-2">
                    <span className="text-gray-700">Previous</span>
                  </div>
                </Link>
          </li>
          {
            numbers.map((n,ind)=>(
              <li key={ind} onClick={() => changePage(n)}>
                      <Link href="#">
                      <div className={`flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md mr-2 ${currentPage === n ? 'bg-blue-500' : ''}`}>
                        <span className="text-gray-700">{n}</span>
                      </div>
                      </Link>
              </li>
            ))
          }
          <li onClick={nextPage}>
              <Link href="#">
              <div className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md mr-2">
                  <span className="text-gray-700">Next</span>
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