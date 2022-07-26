import React from 'react'
import "./Works.css";

import { motion } from "framer-motion";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
   
      <div className="works">
         {/* left side */}
        <div className="works-summary">
          {/* dark Mode */}
          <span>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          
            <button className="button s-button">Hire Me</button>
          
          <div
            className="blur s-blur1"
            
          ></div>
        </div>
            {/*right-side*/}
         <div className="w-right">
            <motion.div
             initial={{ rotate: 45 }}
          whileInView={{ rotate: 10 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
             className="w-mainCircle"> <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div></motion.div>
      
         
        
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>

     </div>
  )
}

export default Works