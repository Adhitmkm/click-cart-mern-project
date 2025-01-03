import { useState } from "react";

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
        if(input.firstName =="" && input.lastName =="" && input.email =="" && input.password =="" && input.conformPassword =="" ){
          alert("please provide a valid input");
        }
        console.log(input);
        
    }

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
    <div className="login">
        
        <h1>Sign Up...</h1>

        <form onSubmit={handleSubmitEvent}>
           
            <div>
                <label>FirstName:</label>
                <input type="text"
                name="firstName"
                placeholder="firstName"
                onChange={handleInput}/>
            </div>
            
            <div>
                <label>LastName:</label>
                <input type="text"
                name="lastName"
                placeholder="LastName"
                onChange={handleInput}/>
            </div>

<           div> 
                <label>Email:</label>
                <input type="email"
                name="email"
                placeholder="name@gmail.com"
                onChange={handleInput}/>
            </div>

            <div>
                <label>password:</label>
                <input type="password"
                name="password"
                placeholder="password"
                onChange={handleInput}/>
            </div>

            <div>
                <label>ConformPassword:</label>
                <input type="password"
                name="conformPassword"
                placeholder="conformpassword"
                onChange={handleInput}/>
            </div>
            <p>Reset Password</p>

            <div>
                <button className="btn-submit">Submit</button>
            </div>
            <p>Alredy have an account? </p>
            <small>Sign up</small>

        </form>
    </div>
    </>
  )
}

export default Signup