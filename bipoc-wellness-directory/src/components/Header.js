import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        // <header>
        //     <div className="top-navigation-left">
        //         <img src="assets/together.png" alt="Different colored hands coming together in a circle" />
        //     </div>
        //     <div className="top-navigation-right">
        //         <nav className="top-navigation-links">
        //             <Link to='/'> Home </Link>
        //             <Link to='/'> About </Link>
        //             <Link to='/'> Providers </Link>
        //             <Link to='/contact'> Contact Us</Link>
        //             <Link to='/'> Login </Link>
        //         </nav>
        //     </div>
        // </header> 
          <header>
          <nav id="navbar">
            <div class="container">
              <a href="homepage.html" class="logo" aria-label="Main Logo">
                <img src="./assets/together.png" alt="Logo" />
              </a>
              {/* <!-- Mobile Hamburger button (use if time permits) -->
              <!-- <button
                          id="hamburger-btn"
                          type="button"
                          aria-label="Open the menu"
                          aria-expanded="false"
                          aria-controls="navbarNav"
                          >
                          <span class="hamburger"></span>
                      </button> --> */}
              <div id="navbarNav">
                <ul class="navbar-left">
                  <li class="nav-item">
                    <Link to='/' className='nav-link'> Home </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/about' className='nav-link'> About </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/' className='nav-link'> Providers </Link>
                  </li>
                  <li class="nav-item">
                        <Link to='/contact' className='nav-link'> Contact </Link>
                  </li>
                  <li class="nav-item">
                        <Link to='/login' className='nav-link'>Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    );
}

export default Header