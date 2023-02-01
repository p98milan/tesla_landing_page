import React from 'react';
import "./Header.css";

const Header = ({ logo, menu }) => {
    return (
        <header>
            <div className="logo">
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>

            <div className="nav-links">
            <a href="/">Model S</a>
            <a href="/">Model X</a>
            <a href="/">Solar Roof</a>
            <a href="/">Solar Panel</a>
            </div>

            <div className="nav-links-secondary">
            <a href="/">Támogatás</a>
            <a href="/">Fiók</a>
            </div>

            <div className="mobile-menu">
                <img src={menu} alt="mobile-menu" />
            </div>
        </header>
    )
};
export default Header;