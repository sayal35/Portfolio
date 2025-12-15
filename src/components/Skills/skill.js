import React from "react";
import "./skill.css";
import WebDesign from "../../assets/web-design.png";
import BackendDesign from "../../assets/backend.png";

const Skill = () => {
  return (
    <section id="skill">
      <span className="skillTitle"> What I do</span>
      <span className="skillDesc">
        I am a web developer who builds responsive, high-performance web
        applications using React.js and Node.js, focusing on clean, scalable
        code and efficient frontend-backend integration.
      </span>
      <div className="skillBoxes">
        <div className="skillBox">
          <img src={WebDesign} alt="App" className="skillBoxImg" />
          <div className="skillBoxText">
            <h2>Website Design</h2>
            <p>
              I build responsive and interactive web interfaces using either
              React or Vite.
            </p>
          </div>
        </div>
        <div className="skillBox">
          <img src={BackendDesign} alt="Web" className="skillBoxImg" />
          <div className="skillBoxText">
            <h2>Backend Development</h2>
            <p>
              I have practical knowledge of backend development using Node.js,
              including building APIs, server-side logic, and managing database
              interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
