import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
            <div className="top-navigation-left">
                <img src="assets/together.png" alt="Different colored hands coming together in a circle" />
            </div>
            <div className="top-navigation-right">
                <nav className="top-navigation-links">
                    <Link to='/'> Home </Link>
                    <Link to='/'> About </Link>
                    <Link to='/'> Providers </Link>
                    <Link to='/contact'> Contact Us</Link>
                    <Link to='/'> Login </Link>
                </nav>
            </div>
        </header> 
    );
}

export default Header