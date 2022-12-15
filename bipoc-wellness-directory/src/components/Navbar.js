import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState (window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth);
    }

}, [])

  return (
    <header className="main-header">
      <nav className="navbar">
        {/* <!-- Main Logo --> */}
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="./assets/together.png"
              alt="Bipoc wellness logo"
              className="logo"
            />
          </Link>
        </div>
        {/* Hamburger button */}
        <button onClick={toggleNav} className="hamburger-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
        {(toggleMenu || screenWidth > 900) && (
          <ul className="nav-menu">
            <li onClick={toggleNav} className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li onClick={toggleNav} className="nav-item">
              <Link to="/about" className="nav-link">
                {" "}
                About{" "}
              </Link>
            </li>
            <li onClick={toggleNav} className="nav-item">
              <Link to="/providers" className="nav-link">
                {" "}
                Providers{" "}
              </Link>
            </li>
            <li onClick={toggleNav} className="nav-item">
              <Link to="/contact" className="nav-link">
                {" "}
                Contact{" "}
              </Link>
            </li>
            <li onClick={toggleNav} className="nav-item">
              <Link to="/login" className="nav-login nav-link">
                Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
