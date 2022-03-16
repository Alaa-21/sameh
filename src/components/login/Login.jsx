import React from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import "./login.css";

function Login() {
  return (
    <div className="container-fluid">
      <Header />
      <form className="loginForm">
        <input type="text" placeholder="Username or Email " />
        <input type="password" placeholder="Password" />
        <input type="submit" className="bg-success submit-btn" />
      </form>
      <Footer />
    </div>
  );
}
export default Login;
