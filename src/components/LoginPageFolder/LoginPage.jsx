import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AcademicHub from "../../assets/AcademicHub.png";
// import axios from "axios";
// import { resources } from "../../resources";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    // const result=await axios.post(`${resources.myIP}api/auth/login`,{
    //   email:username,
    //   password:password
    // })
    // const { accessToken,email } = result.data;
    // if (result.data.status) {
    //   localStorage.setItem("accessToken", accessToken);
    //   localStorage.setItem("email", email);
    //   toast.success("Login Successful");
    //   navigate("/home");
    // } else {
    //   toast.error(result.data.message || "Login Failed");
    // }
    if (username !== "" && password !== "") {
      toast.success("Login Successful");
      navigate("/home");
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <>
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="logo-container">
          <img src={AcademicHub} alt="Logo" className="logo-image" />
        </div>
        <h2 className="login-title">Welcome Back</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="note-css">*Note:Enter any values for login. <br/>Here signup is not required</p>
        <div className="button-group">
          <button
            type="button"
            className="secondary-btn"
            onClick={() => navigate("/signUp")}
          >
            Sign Up
          </button>
          <button type="submit" className="primary-btn">
            Login
          </button>
        </div>
      </form>
    </div>
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
}

export default LoginPage;


