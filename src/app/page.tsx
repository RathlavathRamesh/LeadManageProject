"use client"
import Image from "next/image";
import { TbHexagonNumber0 } from "react-icons/tb";
import SideBarItem from './components/SidebarItems/page'
import { useState } from 'react';
import UserDetails from "./UserCard/page";
const { v4: uuidv4 } = require('uuid');

const InconsArray=[
          {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Dashboard",id:1},
          {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Products",id:2},
          {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Customer",id:3},
          {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Income",id:4},
          {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Remote",id:5},
          {svgElement:<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z" stroke="#d5e5e7" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#d5e5e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,headingName:"Help",id:6}
        ]

        const sampleData = [
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
          },
        ];       
export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

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
      <div className="bg-[#f0f5f1] w-full p-10">
          <h1 className="font-bold text-black text-2xl">Hello Evano 👋,</h1>
          <div className="flex  flex-col md:flex-row justify-between bg-white  h-auto   w-[60vw] mt-5 rounded sm:rounded-lg md:rounded-xl p-5">
            <div className="flex flex-row "> 
               <svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="green"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#9fffac" strok-ewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="9" cy="6" r="4" stroke="green" stroke-width="1.5"></circle> <path d="M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3" stroke="green" stroke-width="1.5" stroke-linecap="round"></path> <ellipse cx="9" cy="17" rx="7" ry="4" stroke="green" stroke-width="1.5"></ellipse> <path d="M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704" stroke="green" stroke-width="1.5" stroke-linecap="round"></path></g></svg>
            <div className="pl-3">
            <h1 className="text-gray-400 text-thin">Total Customers </h1>
              <h1>5,432</h1>
            </div>
          </div>
          <div className="flex flex-row "> 
          <svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#9fffac" stroke-width="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 8.5C8.5 6.56625 10.0663 5 12 5C13.9338 5 15.5 6.56625 15.5 8.5C15.5 10.4338 13.9338 12 12 12C10.0663 12 8.5 10.4338 8.5 8.5ZM12 6.75C12.9625 6.75 13.75 7.5375 13.75 8.5C13.75 9.4625 12.9625 10.25 12 10.25C11.0375 10.25 10.25 9.4625 10.25 8.5C10.25 7.5375 11.0375 6.75 12 6.75Z" fill="#2ad518"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.75C9.66375 13.75 5 14.9225 5 17.25V19H19V17.25C19 14.9225 14.3363 13.75 12 13.75ZM12 15.5C14.3625 15.5 17.075 16.6287 17.25 17.25H6.75C6.95125 16.62 9.64625 15.5 12 15.5Z" fill="#2ad518"></path> <path d="M21.4025 8.58002L21.99 9.17168L18.6567 12.505L16.99 10.8425L17.5817 10.255L18.6567 11.3259L21.4025 8.58002Z" fill="#2ad518"></path> </g></svg> <div className="pl-3">
          <div className="pl-3">
            <h1 className="text-gray-400 text-thin">Memebers</h1>
              <h1>1,893</h1>
            </div>
            </div>
          </div>
          <div className="flex flex-row "> 
          <svg fill="#69e54a" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="-195.59 -195.59 798.66 798.66"  stroke="green"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-195.59" y="-195.59" width="798.66" height="798.66" rx="399.33" fill="#9be288" strok-ewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M378.939,16.564H28.544C12.805,16.564,0,29.369,0,45.108v219.985c0,15.739,12.805,28.544,28.544,28.544h131.46 l-7.197,33.431h-24.994c-3.723,0-7.278,1.546-9.818,4.268l-34.512,37c-3.646,3.909-4.627,9.608-2.495,14.51 c2.131,4.902,6.967,8.073,12.313,8.073h220.885c0.006-0.001,0.015-0.001,0.02,0c7.415,0,13.427-6.011,13.427-13.426 c0-3.766-1.55-7.168-4.047-9.606l-34.094-36.551c-2.54-2.723-6.096-4.268-9.818-4.268h-24.994l-7.197-33.431h131.459 c15.74,0,28.545-12.805,28.545-28.544V45.108C407.484,29.369,394.68,16.564,378.939,16.564z M371.242,259.737h-335V50.465h335 V259.737z"></path> </g></svg> <div className="pl-3">
          <div className="pl-3">
            <h1 className="text-gray-400 text-thin">Active Now </h1>
              <h1>189</h1>
            </div>
            </div>
          </div>
          </div>
      <div className="bg-white p-5 mt-5 rounded-[20px]  h-full  md:w-full">
        <div className="flex flex-row justify-between">
          <div className="pl-4">
          <h1 className="font-bold text-2xl">All Customers</h1>
          <p className="text-green-400">Active Members</p>
         </div>
        <div className="flex items-center">
      <div className="relative mr-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" stroke-Linejoin="round" stroke-Width="2" d="M21 21l-6-6m4-3a8 8 0 11-16 0 8 8 0 0116 0z"/>
          </svg>
        </div>
        {/* Search input field */}
        <input 
          type="text" 
          placeholder="Search..."
          className="block max-w-[12vw]  w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>

        <div className="flex items-center flex-row  p-3 h-[6vh] w-ful bg-gray-200">
          <p className="text-md text-black">Sort By:</p>
                  <select 
                    className="block border border-none min-w-[10vw] bg-gray:200 border-gray-300 rounded-md leading-tight  text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Newest.</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                    <option value="price">Price</option>
              </select>
          </div>
        </div>
        </div>
        <div className="flex mt-5 flex-row text-[15px] justify-around text-gray-300">
           <p className="w-1/6">Customer Name</p>
           <p className="w-1/6">Company</p>
           <p className="w-1.5/6">Phone Number</p>
           <p className="w-1/6">Email</p>
           <p className="w-1/6">Country</p>
           <p className="w-0.2/6">Status</p>
        </div>
        <hr className="text-gray-500  mt-2"/>
        {
          sampleData.map((each)=>(
            <UserDetails Item={each} key={each.id}/>
          ))
        }
        </div>
      </div> 
    </main>
  )
  }