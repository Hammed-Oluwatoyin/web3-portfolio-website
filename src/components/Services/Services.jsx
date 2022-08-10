import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Hammed-Resume.pdf"
import {motion}  from "framer-motion"

const Services = () => {
   const transition ={ duration: 1, type: "spring"}
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          I offer great services inthis place because i build sophisticated web
          applications
          <br />
          optimum satisfaction in the industry you like me a lot than your
          friend,
        </span>
        <a href = {Resume} download>
          <button className="s-button button">Download CV </button>
        </a>
      </div>
      {/* right side */}
      <div className="cards">
        {/*1st Card */}
        <motion.div
          whileInView ={{left: "25rem"}}
          Initial={{left: "40%"}}
          transition={{transition}}
          >
          <Card
            emoji={Glasses}
            heading={"Smart Contract Development"}
            detail={"Solidity, Metamask, Ganache, Truffle, Remix"}
          />
        </motion.div>
        {/*2nd Card */}
        <motion.div  initial={{ left: "20rem", top: "12rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}>
          <Card
            emoji={HeartEmoji}
            heading={" UI/UX Development"}
            detail={"React, Redux, Typescript, Sass"}
          />
        </motion.div>
        {/*3rd Card */}
        <motion.div   initial={{ top: "30rem", left: "5rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}>
          <Card
            emoji={Humble}
            heading={"Blockchain Development"}
            detail={"Ethereum, Solana, Polkadot, Avalanche, Polygon"}
          />
        </motion.div>
        <div className="s-blur2"></div>
      </div>
    </div>
  );
};

export default Services;
