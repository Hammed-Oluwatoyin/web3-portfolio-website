import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Hammed-Resume.pdf"

const Services = () => {
  return (
    <div className="services">
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
        <div>
          <Card
            emoji={Glasses}
            heading={"Smart Contract Development"}
            detail={"Solidity, Metamask, Ganache, Truffle, Remix"}
          />
        </div>
        {/*2nd Card */}
        <div>
          <Card
            emoji={HeartEmoji}
            heading={" UI/UX Development"}
            detail={"React, Redux, Typescript, Sass"}
          />
        </div>
        {/*3rd Card */}
        <div>
          <Card
            emoji={Humble}
            heading={"Blockchain Development"}
            detail={"Ethereum, Solana, Polkadot, Avalanche, Polygon"}
          />
        </div>
        <div className="s-blur2"></div>
      </div>
    </div>
  );
};

export default Services;
