import React from 'react'
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Twitter from "../../img/twitter.png";

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span >Hi! I Am</span>
                <span>Dauda Hammed Oluwatoyin</span>
                <span>Web3.0 Developer with high level of experience in web development and smart Contract developement </span>

            </div>
             <button className="button i-button"> 
                 Hire me
            </button>
  {/* social icons */}
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
                 <img src={Twitter} alt="" />
            </div>
        </div>
        <div className="i-right">
        I am at the right side
        </div>
    </div>
  )
}

export default Intro