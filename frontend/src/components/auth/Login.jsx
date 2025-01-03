import { useState } from "react";
import "./auth.css";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email.trim() == "" && input.password.trim == "")
      alert("please provide valid input");
      setInput({
        email: "",
        password: "",
      });

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
      <div className="login-signup">
        <div className="loginsignup-card">
        <h1>CLICK CART</h1>
        <h4>Welcome Back!</h4>
        <form onSubmit={handleSubmitEvent} className="form-auth">
          <div>
            <label>Email</label>
            <input
              name="email"
            //   value={input.email}
              placeholder="firstname"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
            //   value={input.password}
              placeholder="Password"
              onChange={handleInput}
            />
          </div>
          <p>Reset Password</p>

          <div className="btn">
                <button className="btn-submit">Submit</button>
            </div>
            <div className="alredy">
            <p>Dont have an account? </p>
            {/* <Link to='/'>Login</Link> */}
            </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
