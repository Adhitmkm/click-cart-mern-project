import axios from "axios";
import { useEffect, useState } from "react";
import "./UserManagementTable.css";
import { useNavigate } from "react-router-dom";

function UserManagementTable() {
  const [userdata, setdata] = useState([]);

  const navigate = useNavigate();

  // Fetch user details from the backend
  const usersdetails = async () => {
    try {
      const response = await axios.get("http://localhost:7000/admin/users");
      console.log(response.data, "user ready");
      setdata(response.data.user);
    } catch (e) {
      console.log("Error fetching user details:", e);
    }
  };

  useEffect(() => {
    usersdetails();
  }, []);

  const cancel = ()=>{
    navigate('/admin/dashbord')
  }

  const deleteuser = async ()=>{
    console.log(userdata._id,"delete2222")
    console.log(userdata?._id,"dataaaaaaaiddddddd")
    try {
      const response = await axios.delete(
       ` http://localhost:7000/admin/deleteusers?id=${userdata?._id}`,
        
      );
      console.log(userdata._id,"delete2222")
      console.log(response,"dataadelete");

    } catch (error) {
      console.log(error, "wwwwww");
    }
  }



  return (
    <>
    
          <div className="container">
            {/* <div>
            <Dashbord/>
            </div> */}

      <div className="header">
        <h1>User Management</h1>
        <button className="new-button" onClick={deleteuser}>NEW</button>
        <button className="new-button" onClick={cancel}>Cancel</button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Account Disabled</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.length > 0 ? (
            userdata.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.disabled ? "Yes" : "No"}</td>
                <td>
                  <button className="action-button view">View</button>
                  <button className="action-button edit">Edit</button>
                  <button className="action-button delete" onClick={deleteuser}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>

  );
}

export default UserManagementTable;
