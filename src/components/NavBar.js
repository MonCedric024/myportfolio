import "./NavbarStyle.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 1){
            setColor(true);
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
        <h1>MC</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            {/* <li>
                <Link to="/contact">Contact</Link>
            </li> */}
            <li>
                <Link to="https://drive.google.com/file/d/1UZn6K3dHTauRaMR2w_4wVckRI5-_v6Yz/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">View My Curriculum Vitae</Link>
            </li>
        </ul>
        <div className="burgermenu" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "white"}}/>
            ) : (
                <FaBars size={20} style={{color: "white"}}/>
            )}
        </div>
    </div>  
  )
}

export default NavBar