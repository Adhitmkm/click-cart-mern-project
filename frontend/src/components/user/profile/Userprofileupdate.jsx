import { Link } from "react-router-dom";
import Navbar from "../../Home/navbar/navbar";
import "./userprofileupdate.css";
export default function Userprofileupdate() {
  return (
    <>
      <Navbar />
      <div className="update-main">
        <div className="update">
          <h1>Update Profile</h1>

          <div className="input-boxes">
            <label>FirstName:</label>
            <div>
              <input type="text" name="firstName" placeholder="firstName" />
            </div>

            <label>LastName:</label>
            <div>
              <input type="text" name="lastName" placeholder="LastName" />
            </div>

            <label>Email:</label>
            <div>
              <input type="email" name="email" placeholder="name@gmail.com" />
            </div>

            <label>password:</label>
            <div>
              <input type="password" name="password" placeholder="password" />
            </div>

            <label>ConformPassword:</label>
            <div>
              <input
                type="password"
                name="conformPassword"
                placeholder="conformpassword"
              />
            </div>
            <p>I aree to Updtae details</p>
            <div className="btn">
              <button className="btn-submit">Submit</button>
              <button className="btn-cancel">
                <Link to="/profile">Cancel</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
