
interface ItemProps {
    id:string;
     name:string;
     companyName:string;
     phoneNumber:string;
     email:string;
     country:string;
     status:string;
    }
    interface UserDetails {
        Item: ItemProps;
      }  
  
const UserDetails:React.FC<UserDetails>=(props)=>{
    const {Item}=props 
    return (
       <>
       <div className="flex mt-3 text-[15px]  flex-row justify-around ">
           <p className="w-1.8/6">{Item.name}</p>
           <p className="w-1/6">{Item.companyName}</p>
           <p className="w-1/6">{Item.phoneNumber}</p>
           <p className="w-0.8/6">{Item.email}</p>
           <p className="w-1/6">{Item.country}</p>
          <button className={`border border-solid rounded-md min-w-[7vw] text-center pl-2 pr-2 h-[5vh] ${Item.status==="Active"?' border-green-600  text-green-600 bg-[#9ce398]': 'bg-[#f2746b] border-red-500 text-red-600'} text-center :min-w-[7vw]`} type="button">{Item.status}</button>
        </div>
        <hr className="text-gray-500 h-[3vh] mt-4"/>
       </> 
    )
}
export default UserDetails