import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div>
            <form id="form">
                <h2 className="form-title">Welcome Back!</h2>
                {/* <!-- Email --> */}
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-input" id="email" required />
                {/* <!-- Password --> */}
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-input" id="password" required />
                {/* <!-- Login Button --> */}
                <div className="btn-container">
                        <Link to="/" className="form-btn">
                            Login
                        </Link>  
                    <Link to="/signup">
                        <p className="no-account">Don't have an account? <span>Sign Up</span></p>
                        </Link>  
                </div>
            </form>
        </div>
    )
}

export default Login