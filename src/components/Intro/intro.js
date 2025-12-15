import React from "react";
import "./intro.css";
import sayal from "../../assets/sayal.jpeg";
import btnImg from "../../assets/hire.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sayal Karki</span>
          <br /> Website Developer
        </span>
        <p className="introPara">
          I am a full-stack developer who enjoys building seamless
          <br /> user experiences backed by reliable and scalable logic.{" "}
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={sayal} alt="MyImage" className="bg"></img>
    </section>
  );
};

export default Intro;
