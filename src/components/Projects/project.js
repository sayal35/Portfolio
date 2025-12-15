import React from "react";
import "./project.css";

const Project = () => {
  return (
    <section id="project">
      <h2 className="projectTitle">My Projects</h2>
      <span className="projectDesc">
        I have worked on a variety of projects across different technologies,
        which has helped me build a strong foundation in programming and
        application development. My experience includes developing a car game
        using C++ and building several small projects using C#. In addition, I
        have created multiple web applications using React.js and modern
        tooling, as well as cross-platform mobile applications using Flutter,
        focusing on functionality, usability and clean code.
      </span>
      <div className="projectImgs">
        {/* <a href='https://github.com/nirdeshika-07/Escape-Cars' target='_blank' rel='noopener noreferrer'>
          <img src={Escape} alt='Car' className='projectImg'/>
        </a>
        <a href='https://github.com/nirdeshika-07/Food-Menu-App' target='_blank' rel='noopener noreferrer'>
          <img src={Menu} alt='Menu' className='projectImg'/>
        </a>
        <a href='https://github.com/nirdeshika-07/Stop-Watch' target='_blank' rel='noopener noreferrer'>
          <img src={Stopwatch} alt='Stopwatch' className='projectImg'/>
        </a>
        <a href='https://github.com/nirdeshika-07/Calcutator-with-Datatable' target='_blank' rel='noopener noreferrer'>
          <img src={Calculator} alt='Calculator' className='projectImg'/>
        </a>
        <a href='https://github.com/nirdeshika-07/Currency-Converter' target='_blank' rel='noopener noreferrer'>
          <img src={Currency} alt='Currency' className='projectImg'/>
        </a>
        <a href='https://github.com/nirdeshika-07/TextEditor' target='_blank' rel='noopener noreferrer'>
          <img src={TextEditor} alt='TextEditor' className='projectImg'/>
        </a> */}
      </div>
    </section>
  );
};

export default Project;
