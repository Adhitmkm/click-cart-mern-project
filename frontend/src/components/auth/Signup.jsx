import { Link } from 'react-router-dom';
import './auth.css'
import { useState } from "react";
import axios from 'axios';

const Signup = ()=> {
    const [input, setInput]=useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conformPassword: ""
  });

    const handleSubmitEvent =(e)=>{
        e.preventDefault()


        axios.post('http://localhost:9000/auth/signup', { input: 'example data' })

        .then(response => {
      
          console.log(response.data); // Handle the response data
      
        })
      
        .catch(error => {
      
          console.error('Error:', error); // Handle any errors
      
        });

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
                onChange={handleInput}/>
            </div>

            <label>ConformPassword:</label>
            <div>
                <input type="password"
                name="conformPassword"
                value={input.conformPassword}
                placeholder="conformpassword"
                onChange={handleInput}/>
            </div>
            <p className="reset">Reset Password</p>

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