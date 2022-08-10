import React from 'react'
import "./Intro.css";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Twitter from "../../img/twitter.png";
import HammedImage from "../../img/HammedNew.jpg"
import Crown from "../../img/crown.png";
import Thumbup from "../../img/thumbup.png";
import GlassesEmoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {

  const transition ={ duration: 2, type:'spring'};
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span >Hi! I Am</span>
                <span>Dauda Hammed Oluwatoyin</span>
                <span>Web3.0 Developer having high level of experience in web development and smart Contract developement </span>

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
        
        <img src={HammedImage} alt="Hammed"/>
        <motion.img 
          initial={{left: "-36%"}}
          whileInView = {{left:"-20%"}}
          transition={transition}
          src={GlassesEmoji} 
        alt="GlassesEmoji"/>

        <motion.div
        initial={{top: "-4%" , left: "70%"}}
        whileInView ={{ left:"50%"}}
        transition={transition}
        > 
        <FloatingDiv image={Crown} text1="UI/UX"  text2="Developer"/>
        </motion.div>
         <motion.div
         intial ={{left: "-4%", top: "18rem"}}
         whileInView={{left: "0rem"}}
         transition={transition}
         > 
         <FloatingDiv image={Thumbup} text1="Smart Contract"  text2="Developer"/></motion.div> 
         {/* blur divs*/}

         <div  className='blur'></div>
       
        </div>
    </div>
  )
}

export default Intro