
interface ItemProps {
    id:string;
     name:string;
     companyName:string;
     phoneNumber:string;
     email:string;
     country:string;
     status:string;
    }
    interface UserCard {
        item: ItemProps;
      }  
  
const UserCard:React.FC<UserCard>=(props)=>{
    const {item}=props 
    console.log(item)
    return (
       <>
       <div className="flex mt-3 text-[15px]  flex-row justify-around ">
           <p className="px-4 py-2">{item.name}</p>
           <p className="px-4 py-2">{item.companyName}</p>
           <p className="px-4 py-2">{item.phoneNumber}</p>
           <p className="px-4 py-2">{item.email}</p>
           <p className="px-4 py-2">{item.country}</p>
          <button className={`border border-solid rounded-md min-w-[7vw] text-center pl-2 pr-2 h-[5vh] ${item.status==="Active"?' border-green-600  text-green-600 bg-[#9ce398]': 'bg-[#f2746b] border-red-500 text-red-600'} text-center :min-w-[7vw]`} type="button">{item.status}</button>
        </div>
        <hr className="text-gray-500 h-[3vh] mt-4"/>
       </> 
    )
}
export default UserCard