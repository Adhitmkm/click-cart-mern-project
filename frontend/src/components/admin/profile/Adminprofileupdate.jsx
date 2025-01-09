// // import { Navigate } from "react-router-dom";
// import "./Adminprofileupdate.css"
// import axios from "axios";
// // import axios from "axios";
// // import { useEffect } from "react";

// const Adminprofileupdate = ({ setIsOpen, admindata, setAdmin }) => {


//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     // const navigate = Navigate();

//     try {
//       let abcd = localStorage.getItem("accessToken");
//       console.log(abcd, "abcddddddd");
//       const response = await axios.put(
//         "http://localhost:7000/user/update",
//         admindata,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         },
//       );
//       console.log(response);
      
//     } catch (error) {
//       console.log(error, "wwwwww");
//     }

//     setIsOpen(false);

//   };

//   const cancleHandle = () => {
//     setIsOpen(false);
//   };


//   function handleonChange(event) {
//     console.log(event, "eventttt");

//     const { name, value } = event.target;
//     console.log(value, name, "currentvale11");
//     setAdmin({
//       ...admindata,
//       [name]: value,
//     });
//   }

//   return (
//     <>
//       <div className="update-main">
//         <div className="update">
//           <h1>Update Profile</h1>

//           <div className="input-boxes">
//             <label>FirstName:</label>
//             <div>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="firstName"
//                 value={admindata.firstName}
//                 onChange={handleonChange}
//               />
//             </div>

//             <label>LastName:</label>
//             <div>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="LastName"
//                 value={admindata.lastName}
//                 onChange={handleonChange}
//               />
//             </div>

//             <label>Email:</label>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="name@gmail.com"
//                 value={admindata.email}
//                 onChange={handleonChange}
//               />
//             </div>

//             <p>I aree to Updtae details</p>
//             <div className="btn">
//               <button className="btn-submit" onClick={handlesubmit}>
//                 {" "}
//                 Submit
//               </button>
//               <button onClick={cancleHandle} className="btn-cancel">
//                 cancle
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Adminprofileupdate;
