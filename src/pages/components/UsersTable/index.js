import React, { useReducer } from 'react'

const UsersTable = ({records}) => {
   
    if(!records) 
       return ;
  return (
    <div className='mt-[2rem]'>
    <table className='w-full pl-[4rem] font-[Poppins]'>
      <thead>
        <tr  className=' text-gray-400 border-b  border-gray-200'>
          <td>Name</td>
          <td>Company Name</td>
          <td>Phone Number</td>
          <td>Email</td>
          <td>Country</td>
          <td>Status</td>
          </tr>
      </thead>
       <tbody>
          {
          records.map((item)=>(
          <tr key={item.id} style={{paddingTop: '2rem', paddingBottom: '2rem'}} className='border-b py-[5vh] font-[Poppins] pl-[2rem] border-gray-200'>
            <td className='py-[0.8rem]' >{item.name}</td>
            <td className='py-[0.8rem]'>{item.companyName}</td>
            <td className='py-[0.8rem]' >{item.phoneNumber}</td>
            <td className='py-[0.8rem]'> {item.email}</td>
            <td className='py-[0.8rem]'>{item.country}</td>
            <td className='py-[0.8rem]'>
            <button className={`border border-solid rounded-md  sm:min-w-[7vw] max-w-[2rem] text-center pl-[0.5rem] pr-[0.5rem] h-[2rem] ${item.status==="Active"?' border-green-600  text-green-600 bg-[#9ce398]': 'bg-[#f2746b] border-red-500 text-red-600'} text-center`} type="button">{item.status}</button>
            </td>
          </tr>
              ))
            }
        </tbody>
        </table>
        </div> 
  )
}

export default UsersTable
