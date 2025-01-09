import { useEffect, useState } from "react";
import "./profile.css";
// import { Updatecontext } from "../../context/Updateuserprofile/Updateprofile";
import Navbar from "../../Home/navbar/navbar";
import axios from "axios";
import Userprofileupdate from "./Userprofileupdate";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userdata, setUser] = useState([])
  const [isOpen ,setIsOpen] = useState(false)


  const navigate = useNavigate();

  // const { input } = useContext(Updatecontext);
  // console.log(input, "valeeeeeee");


  const fetchinfo = async () => {

    

    try {
      const profile = await axios.get("http://localhost:7000/user/profile",{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    });
    setUser(profile.data.user)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchinfo();
  }, []);
  const editHandle = () =>{
    setIsOpen(true)
  }

  const deleteHandle = async ()=>{
    console.log(userdata?._id,"dataaaaaaa")
    try {
      const response = await axios.delete(
       ` http://localhost:7000/user/delete?id=${userdata?._id}`,
        
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      );
      if(response.data.data === true){
        localStorage.clear("accessToken")
        navigate('/login')
      }
      console.log(response);

    } catch (error) {
      console.log(error, "wwwwww");
    }
  }

  const logoutHandle =()=>{
    localStorage.clear()
    navigate('/login')
  }

  console.log(userdata,'userdata')
  return (
    <>
      <Navbar />
      <div className="profile-main">
        <div className="sections">
          <div className="section-1">
            <div className="image">
              <span>image</span>
            </div>
            <h3>Hi {userdata?.firstName}</h3>
            <div className="section-1-button">
             <button className="button" onClick={editHandle}>Edit</button>
              <button className="button" onClick={deleteHandle}>Delete Account</button>
              <button className="button" onClick={logoutHandle}>Logout</button>

            </div>
          </div>


          <div className="section-2">
            <div className="data">
              <h2 className="profile">Profile Data</h2>

              <h5> First Name:{userdata?.firstName}</h5>
              <div>
              </div>
              <h5> Last Name: {userdata?.lastName}</h5>
              <div>
              </div>
              <h5> Email:{userdata?.email}</h5>
              <div>
              </div>
              <h5> Country: India</h5>
              <div>
              </div>
              <h5> Phone number:1234567890</h5>
              <div>
                <h4></h4>
              </div>
            </div>
          </div>
        </div>

      </div>
      {isOpen && <Userprofileupdate setIsOpen={setIsOpen} userdata={userdata}  setUser={setUser}/>}
    </>
  );
}

export default Profile;
