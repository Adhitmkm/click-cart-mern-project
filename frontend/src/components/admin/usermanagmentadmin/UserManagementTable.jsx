import Dashbord from "../dashbord/Dashbord"
import "./UserManagementTable.css"
function UserManagementTable() {
  return (
    <>
    <div className='main'>
    <Dashbord/>
      <div className='main-2'> 
          <div className='section-1'>
              <div className='heading'>
              <h1>User Managment</h1>
              <h3>x</h3>
              </div>
          </div>
          <div className='section-2'>
              <div className='newbutton'>
                <div className='button'>
                  <button>NEW</button>
                  </div>
                  <div className='input'>
                <input
                placeholder='serch'
                />
              </div>
              </div>

          </div>

          <div className='sectio-3'>
            <table>
              
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Disabled</th>
                  <th>Action</th>

                </tr>

                <tr>
                  <th>itmeme</th>
                  <th>t</th>
                  <th>email.com</th>
                  <th>admin</th>
                  <th>no</th>
                  <th><button>View</button>
                  <button>Edit</button>
                  <button>Delete</button>
                  </th>
                </tr>
              
            </table>
            

          </div>

      </div>
    </div>
    </>
  )
}

export default UserManagementTable







































// import { useState } from "react";

// // Replace these imports with your actual Button and Input components
// // import Button from "../ui/Button"; // Update the path to your Button component
// // import Input from "../ui/Input";   // Update the path to your Input component

// export default function UserManagement() {
//   // State for users
  


//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <h1 className="text-2xl font-bold">User Management</h1>
//       </div>

//       <div className="flex justify-between mb-4">
//         <button>New User</button>
//         <input
//           type="search"
//           placeholder="Search users..."
//           className="max-w-xs"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="border rounded-lg overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="p-2 text-left">First Name</th>
//               <th className="p-2 text-left">Last Name</th>
//               <th className="p-2 text-left">Email</th>
//               <th className="p-2 text-left">Role</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{user.firstName}</td>
//                 <td className="p-2">{user.lastName}</td>
//                 <td className="p-2">{user.email}</td>
//                 <td className="p-2">{user.role}</td>
//                 <td className="p-2">
//                   <div className="flex gap-2">
//                     <div size="sm" >
//                       View
//                     </div>
//                     <div size="sm" >
//                       Edit
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
