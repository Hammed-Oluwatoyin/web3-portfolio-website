import React from 'react'
import "./Footer.css"

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Twitter from "../../img/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
        <span>dauda.hammed132@gmail.com</span>
        <div className="i-icons">
            
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
        </div>
    </div>
  )
}

export default Footer