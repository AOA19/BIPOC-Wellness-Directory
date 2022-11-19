import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

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
                        <Link to="/" className="form-btn">
                            Login
                        </Link>  
                    <Link to="/signup">
                        <p class="no-account">Don't have an account? <span>Sign Up</span></p>
                        </Link>  
                </div>
            </form>
        </div>
    )
}

export default Login