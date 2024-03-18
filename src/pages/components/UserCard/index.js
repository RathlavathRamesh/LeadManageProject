"use client"
const UserCard=(props)=>{
    const {item}=props 
    return (
       <>
       <tr className="flex mt-3 text-[15px] text-black  flex-row justify-around ">
           <td className="px-4 py-2">{item.name}</td>
           <td className="px-4 py-2">{item.companyName}</td>
           <td className="px-4 py-2">{item.phoneNumber}</td>
           <p className="px-4 py-2">{item.email}</p>
           <td className="px-4 py-2">{item.country}</td>
          <button className={`border border-solid rounded-md min-w-[7vw] text-center pl-2 pr-2 h-[5vh] ${item.status==="Active"?' border-green-600  text-green-600 bg-[#9ce398]': 'bg-[#f2746b] border-red-500 text-red-600'} text-center :min-w-[7vw]`} type="button">{item.status}</button>
        </tr>
        <hr className="text-gray-500 h-[3vh] mt-4"/>
       </> 
    )
}
export default UserCard