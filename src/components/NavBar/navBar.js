import React, { useState } from "react";
import "./navBar.css";
import Man from "../../assets/young-man.png";
import contact from "../../assets/contact-me.png";
import { Link } from "react-scroll";
import menu from "../../assets/burger-menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={Man} alt="Logo" className="logo"></img>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItems"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItems"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItems"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItems"
        >
          Experience
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="Contact" className="desktopMenuImg" />
        Contact me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobilleMenu"
        onClick={() => setShowMenu(!showMenu)}
      ></img>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
