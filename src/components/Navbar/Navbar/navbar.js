import React, { useState } from "react";
import "./navbar.css";
import logo from './logo.png'
import { Link } from 'react-scroll'


function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav" style={{ "font-family": "'Montserrat', sans-serif" }}>
            <Link to="home" spy={true} smooth={true} offset={-10} duration={700} className="nav__brand">
                <img alt='logo' className='te' src={logo} style={{ "cursor": "pointer", "marginLeft": "2%" }} />
            </Link>
            <ul className={active} style={{letterSpacing:"2px"}}>
                <li className="nav__item">
                    <Link to="introduction" className="nav__link" spy={true} smooth={true} offset={-10} duration={700}>
                        INTRODUCTION
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="speakers" className="nav__link" spy={true} smooth={true} offset={-10} duration={700}>
                        SPEAKERS
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="workshop" spy={true} smooth={true} offset={-10} duration={700} className="nav__link">
                        WORKSHOPS
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="schedule" spy={true} smooth={true} offset={-10} duration={700} className="nav__link">
                        SCHEDULE
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="partners" spy={true} smooth={true} offset={-10} duration={700} className="nav__link">
                        PARTNERS
                    </Link>
                </li>
                <li><a href="/signin" className="signin" style={{fontSize:"20px"}}> Signin</a></li>


            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;