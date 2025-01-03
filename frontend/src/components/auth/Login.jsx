import { useState } from "react"
import './auth.css'



const Login = ()=> {
    const [input,setInput]=useState({
        email:"",
        password:""
    });

    const handleSubmitEvent = (e)=>{
        e.preventDefault()
        if(input.email == "" && input.password=="")
            alert("please provide valid input")
    }

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setInput((prev) =>({
            ...prev,
            [name]:value,
        }))
    }

  return (
    <>
    <div>
    <h1>CLICK CART</h1>

    <h3>Welcome In!</h3>

    <form onSubmit={handleSubmitEvent}>
    <div>
    <label>Email</label>
        <input
        name="email"
        placeholder="firstname"
        onChange={handleInput}
        />
    </div>

    <div>
    <label>Password</label>
        <input
        name="password"
        placeholder="Password"
        onChange={handleInput}
        />
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

export default Login