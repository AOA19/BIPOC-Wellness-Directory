import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <form id="form">
                <h2 class="form-title">Welcome Back!</h2>
                {/* <!-- Email --> */}
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-input" id="email" required />
                {/* <!-- Password --> */}
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-input" id="password" required />
                {/* <!-- Login Button --> */}
                <div class="btn-container">
                    <a href="homepage.html" class="form-btn">Login </a>
                    <a href="signup.html">
                        <p class="no-account">Don't have an account? <span>Sign Up</span></p>
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Login