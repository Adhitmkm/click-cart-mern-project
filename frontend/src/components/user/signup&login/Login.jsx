import { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmitEvent =async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:7000/auth/login',input)
      const accessToken = response.data.accessToken
      localStorage.setItem('accessToken',accessToken)
      console.log(response.data,"data");
      navigate('/home')
      
    }catch(error){
      console.log(error)
    }
      
    if (input.email.trim() == "" && input.password.trim == ""){

        alert("please provide valid input");
    }

        // console.log(input,'values'
        setInput({
            email: "",
            password: "",
          });
        //   console.log(input)
  };



  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>

      <div className="login-signup" >
        <div className="card" id="login">
        <h1>CLICK CART</h1>
        <h4>Welcome Back!</h4>
        <form onSubmit={handleSubmitEvent} className="form-auth">
            <label>Email</label>
          <div>
            <input type="email"
              name="email"
              value={input.email}
              placeholder="firstname"
              onChange={handleInput}
            />
          </div>

            <label>Password</label>
          <div>
            <input type="password"
              name="password"
              value={input.password}
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleInput}
            />
          </div>
          <p className="reset">Forgot Password</p>

          <div className="btn">
                <button className="btn-submit">Submit</button>
            </div>
            <div className="alredy">
            <p>Dont have an account? </p>
            <Link to='/'>Signup</Link>
            </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
