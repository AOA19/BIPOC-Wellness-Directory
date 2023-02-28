import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      {/* <!------------------------ SIGN UP FORM ----------------------> */}
      <form id="form">
        <h2 className="form-title">Create an Account</h2>
        {/* <!-- Full Name --> */}
        <label for="fname" className="form-label">
          Full Name
        </label>
        <input type="text" class="form-input" id="fname" required />
        {/* <!-- Email --> */}
        <label for="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-input" id="email" required />
        {/* <!-- Password --> */}
        <label for="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-input" id="password" required />
        {/* <!-- Dropdown choices --> */}
        <label for="dropdown" className="form-label">
          Member or Provider?
        </label>
        <select name="drowdown" className="form-input" required>
          <option disabled selected>
            Please select one
          </option>
          <option value="member">Member</option>
          <option value="provider">Provider</option>
        </select>
        {/* <!-- Sign up Button --> */}
        <div className="btn-container">
          {/* <button type="submit" class="form-btn">
            Sign Up
          </button> */}
          <Link to="/" className="form-btn">
            Sign Up
          </Link>
          <Link to="/login">
            <p>
              Already have an account? <span>Login</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
