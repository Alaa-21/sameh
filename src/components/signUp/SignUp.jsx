import React from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import "./signup.css";
const SignUp = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <div id="sign_up">
          <form>
            <span>Sign Up</span>
            <div id="field">
              <label>
                <i class="fas fa-user"></i>
              </label>
              <input type="text" placeholder="Username" required />
            </div>

            <div id="field">
              <label>
                <i class="fas fa-envelope-open"></i>
              </label>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div id="field">
              <label>
                <i class="fas fa-lock"></i>
              </label>
              <input type="password" placeholder="Password" required />
            </div>

            <div id="field">
              <label>
                <i class="fas fa-lock"></i>
              </label>
              <input type="password" placeholder="Confirm Password" required />
            </div>

            <div id="field">
              <input type="submit" value="Register" />
            </div>
          </form>

          <p>
            Already a member?
            <button onclick="signIn()">
              <a>Sign in now</a>
            </button>
            <i class="fas fa-arrow-right"></i>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
