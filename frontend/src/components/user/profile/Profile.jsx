import { useContext } from "react";
import './profile.css'
import { Updatecontext } from "../../context/Updateuserprofile/Updateprofile";
import { Link } from "react-router-dom";
import Navbar from "../../Home/navbar/navbar";

function Profile() {
    const {input } = useContext(
        Updatecontext
    )
    console.log(input,'valeeeeeee');
    

  return (
    <>
    <Navbar/>
    <div className="profile-main">
        <div className="sections">

            <div className="section-1">
                <div className="image">
                <image>image</image>
                </div> 
                <h3>Hi name</h3>
                <div className="section-1-button">
                    <Link to="/update"><button className="button">
                    Update Profile
                    </button></Link>
                    <button className="button">
                    Delete Account
                    </button>
                </div>

            
            </div>

            <div className="section-2">
                <div className="data">
                        <h2 className="profile">
                            Profile Data
                        </h2>

                    <h5> First Name:</h5>
                <div>
                
                    <h4>{input.firstName}</h4>
                </div>
                <h5> Last Name:</h5>
                <div>
                
                    <h4>{input.lastName}</h4>
                </div>
                <h5> Email:</h5>
                <div>
                
                <h4>{input.email}</h4>
                </div>
                <h5> Country:</h5>
                <div>
                
                    <h4>India</h4>
                </div>
                <h5> Phone number:</h5>
                <div>
                
                    <h4>1234567890</h4>
                </div>

                </div>
            </div>

        </div>
    </div>
    </>
  );
}

export default Profile;
