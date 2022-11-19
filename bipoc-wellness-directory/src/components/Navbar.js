import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  
  // Hamburger toggle function:
  // const hamburgerBtn = document.querySelector("#hamburger-btn");
  // const navBar = document.querySelector("#nav-bar");
  // const navLink = document.querySelectorAll(".nav-link");

  // hamburgerBtn.addEventListener("click", () => {
  //   const visible = navBar.getAttribute("data-visible");
  //   if (visible === "false") {
  //     navBar.setAttribute("data-visible", true);
  //     hamburgerBtn.setAttribute("aria-expanded", true);
  //   } else {
  //     navBar.setAttribute("data-visible", false);
  //     hamburgerBtn.setAttribute("aria-expanded", false);
  //   }
  // });

  // // Function to close the hamburger menu when the links are clicked:
  // navLink.forEach((n) => n.addEventListener("click", closeMenu));

  // function closeMenu() {
  //   navBar.setAttribute("data-visible", false);
  //   hamburgerBtn.setAttribute("aria-expanded", false);
  // }
  return (
    // <header>
    //     <nav id="navbar">
    //             <Link to='/' className='nav-logo'>
    //                 <img src="./assets/together.png" className='logo' alt="Different colored hands coming together in a circle" />
    //             <h1>BIPOC Wellness Directory</h1>
    //             </Link>
    //             {/* <!-- Mobile Hamburger button (use if time permits) -->
    //       <!-- <button
    //                   id="hamburger-btn"
    //                   type="button"
    //                   aria-label="Open the menu"
    //                   aria-expanded="false"
    //                   aria-controls="navbarNav"
    //                   >
    //                   <span class="hamburger"></span>
    //               </button> --> */}
    //             <div id="navbarNav">
    //                 <ul class="navbar-left">
    //                     <li class="nav-item">
    //                         <Link to='/' className='nav-link'> Home </Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link to='/about' className='nav-link'> About </Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link to='/providers' className='nav-link'> Providers </Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link to='/contact' className='nav-link'> Contact </Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link to='/signup' className='nav-link'>Sign Up</Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link to='/login' className='nav-link'>Login</Link>
    //                     </li>
    //                 </ul>
    //             </div>
    //     </nav>
    // </header>

    <header class="main-header">
      {/* <!-- Main Logo --> */}
      <div class="navbar-brand">
      <Link to="/">
          <img src="./assets/together.png" alt="Logo" class="logo" />
        </Link>
      </div>
      {/* { Mobile Hamburger button (use if time permits)} */}
      {/* <button
        id="hamburger-btn"
        type="button"
        aria-label="Open the menu"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span class="hamburger"></span>
      </button> */}
      <nav id="navbar">
        <ul class="navbar-left" data-visible="false">
          <li class="nav-item">
            <Link to="/" className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" className="nav-link">
              {" "}
              About{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/providers" className="nav-link">
              {" "}
              Providers{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className="nav-link">
              {" "}
              Contact{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" className="nav-login nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
