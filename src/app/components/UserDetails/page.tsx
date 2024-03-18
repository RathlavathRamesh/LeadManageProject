const { v4: uuidv4 } = require('uuid');
import UserCard from '../UserCard/page'
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
  ]; 
         // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "Emily Wilson",
        //   companyName: "MNO Ltd",
        //   phoneNumber: "+9988776655",
        //   email: "emily.wilson@example.com",
        //   country: "Germany",
        //   status: "Active"
        // },     
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "Michael Lee",
        //   companyName: "GHI Corp",
        //   phoneNumber: "+1122334455",
        //   email: "michael.lee@example.com",
        //   country: "Japan",
        //   status: "Inactive"
        // },
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "Sarah Taylor",
        //   companyName: "JKL Enterprises",
        //   phoneNumber: "+3344556677",
        //   email: "sarah.taylor@example.com",
        //   country: "France",
        //   status: "Active"
        // },
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "David Clark",
        //   companyName: "STU Inc",
        //   phoneNumber: "+7788990011",
        //   email: "david.clark@example.com",
        //   country: "Brazil",
        //   status: "Active"
        // },
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "Olivia Martinez",
        //   companyName: "VWX Ltd",
        //   phoneNumber: "+1122334455",
        //   email: "olivia.martinez@example.com",
        //   country: "Spain",
        //   status: "Active"
        // },
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "James Rodriguez",
        //   companyName: "RST Corp",
        //   phoneNumber: "+1122334455",
        //   email: "james.rodriguez@example.com",
        //   country: "Mexico",
        //   status: "Inactive"
        // },
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "Sophia Garcia",
        //   companyName: "UVW Enterprises",
        //   phoneNumber: "+2233445566",
        //   email: "sophia.garcia@example.com",
        //   country: "Italy",
        //   status: "Active"
        // },
        // {
        //   id: uuidv4(), // Generate a unique ID for this item
        //   name: "Daniel Hernandez",
        //   companyName: "LMN Ltd",
        //   phoneNumber: "+7788990011",
        //   email: "daniel.hernandez@example.com",
        //   country: "China",
        //   status: "Inactive"
        // }
const UserDetails=()=>{
    return (
        <div className="bg-white p-5 mt-5 rounded-[20px] max-h-[90vh]  h-auto md:w-full">
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
        <table className="w-full mt-[5vh] text-gray-400 table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Phone Number</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Country</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      </table>
        <hr className="text-gray-500  mt-2"/>
        {
          sampleData.map((each)=>(
            <UserCard item={each} key={each.id}/>
          ))
        }
        {/* <p className="text-gray-400 text-[12px]">showing page{pageNo} of 6</p> */}
        </div>
    )
}
export default UserDetails