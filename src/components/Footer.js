import "./FooterStyle.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                        <p>Blk 60 Lot 36 Northville 2b</p>
                        <p>Caloocan City, Philippines</p>
                    </div>
                </div>
                <div className="phone"> 
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                    +639519786731</h4>
                </div>
                <div className="email"> 
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                    moncedricavila@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Graduating Student and passionate programmer with a technical experience in web development. Intending to work in an environment where I can utilize the education I received in College as well as my technical experience as a developer.</p>
                <div className="social">
                <a href="https://www.facebook.com/avilamon024" target="_blank" rel="noreferrer">
                <FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
                </a>
                <a href="https://www.instagram.com/cedricavila/" target="_blank" rel="noreferrer">
                <FaInstagram size={20} style={{ color: "white", marginRight: "2rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/mon-cedric-avila-a515ab20b/" target="_blank" rel="noreferrer">
                <FaLinkedin size={20} style={{ color: "white", marginRight: "2rem" }} />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer