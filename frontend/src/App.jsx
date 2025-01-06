import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login './components/user/signup&login/Login';
import Home from "./components/Home/Home";
import Navbar from "./components/Home/navbar/navbar";
import UserManagementTable from "./components/admin/usermanagmentadmin/UserManagementTable.jsx";
import Userprofileupdate from "./components/user/profile/Userprofileupdate.jsx";
import Profile from "./components/user/profile/Profile.jsx";
import Login from "./components/user/signup&login/Login.jsx";
import Signup from "./components/user/signup&login/Signup.jsx";
import SignupAdmin from "./components/admin/login&signup/Signup.jsx";
import LoginAdmin from "./components/admin/login&signup/Login.jsx";
import Dashbord from "./components/admin/dashbord/Dashbord.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<Userprofileupdate />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          {/* Admin Routes */}
          <Route path="/admin/signup" element={<SignupAdmin />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/user" element={<UserManagementTable />} />
          <Route path="/admin/dashbord" element={<Dashbord/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
