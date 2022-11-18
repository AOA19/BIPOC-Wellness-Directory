import React from 'react'
import './SignUp.css'

function SignUp() {
    return (

        < div >
            {/* <!------------------------ SIGN UP FORM ----------------------> */}
            <form id="form">
                <h2 class="form-title">Create an Account</h2>
                {/* <!-- Full Name --> */}
                <label for="fname" class="form-label">Full Name</label>
                <input type="text" class="form-input" id="fname" required />
                {/* <!-- Email --> */}
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-input" id="email" required />
                {/* <!-- Password --> */}
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-input" id="password" required />
                {/* <!-- Dropdown choices --> */}
                <label for="dropdown" class="form-label">Member or Provider?</label>
                <select name="drowdown" class="form-input" required>
                    <option disabled selected>Please select one</option>
                    <option value="member">Member</option>
                    <option value="provider">Provider</option>
                </select>
                {/* <!-- Sign up Button --> */}
                <div class="btn-container">
                    <button type="submit" class="form-btn">Sign Up</button>
                    <a href="login.html">
                        <p>Already have an account? <span>Login</span></p>
                    </a>
                </div>
            </form>
        </div >

    )
}

export default SignUp