import { Link, Navigate } from 'react-router-dom';
import './auth.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ()=> {

  const [input, setInput]=useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conformPassword: ""
})

const naigate = useNavigate()

    const handleSubmitEvent =async(e)=>{
        e.preventDefault()
        
        try {
        const response = await axios.post('http://localhost:7000/auth/signup', input)
        console.log(response.data.accessToken,"data");

        const accessToken = response.data.accessToken
        localStorage.setItem('accessToken',accessToken)
        
          naigate('/home')
        } catch (error) {
          console.log(error);
          
        }


    

        if(input.firstName.trim() =="" && input.lastName.trim() =="" && input.email.trim() =="" && input.password.trim() =="" && input.conformPassword.trim() =="" ){
            // console.log(input,"valuess1");
            
          alert("please provide a valid input");
          return
          
        }
        console.log(input,"valuess2");

        setInput ({firstName: "",
            lastName: "",
            email: "",
            password: "",
            conformPassword: ""})
        // console.log(input);
        
        
    }

    // console.log(input,"last");
    

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(value,name,"current value and name");
        
        setInput((prev) => ({
          ...prev,
          [name]: value,
          
        }));

      };
      Navigate("./")

  return (
    <>
    <div className="login-signup">
        <div className="card">
        <h1>Sign Up...</h1>

        <form onSubmit={handleSubmitEvent} className="form-auth">
           
        <label>FirstName:</label>
            <div >
                <input type="text"
                name="firstName"
                value={input.firstName}
                placeholder="firstName"
                onChange={handleInput}/>
            </div>

            <label>LastName:</label>
            <div>
                <input type="text"
                name="lastName"
                value={input.lastName}
                placeholder="LastName"
                onChange={handleInput}/>
            </div>

            <label>Email:</label>
<           div> 
                <input type="email"
                name="email"
                value={input.email}
                placeholder="name@gmail.com"
                onChange={handleInput}/>
            </div>

            <label>password:</label>
            <div>
                <input type="password"
                name="password"
                value={input.password}
                placeholder="password"
                autoComplete="current-password"
                onChange={handleInput}/>
            </div>

            <label>ConformPassword:</label>
            <div>
                <input type="password"
                name="conformPassword"
                value={input.conformPassword}
                autoComplete="current-password"
                placeholder="conformpassword"
                onChange={handleInput}/>
            </div>
            <p className="reset">Forgot Password</p>

            <div className="btn">
                <button className="btn-submit">Submit</button>
            </div>
            <div className="alredy">
            <p>Alredy have an account? </p>
            <Link to='/login'>Login</Link>

            </div>
            

        </form>
        </div>
    </div>
    </>
  )
}

export default Signup