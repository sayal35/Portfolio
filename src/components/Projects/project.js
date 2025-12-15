import React from "react";
import "./project.css";

const projects = [
  {
    name: "Multi-Category Rental System",
    github: "https://github.com/sayal35/Rental-system",
  },
  {
    name: "Career Forge",
    github: "https://github.com/Dipak-Shrestha/careerforge",
  },
  {
    name: "Restaurant Management System",
  },
  {
    name: "Food App",
    github: "https://github.com/sayal35/FoodApp",
  },
  {
    name: "Ecommerce site",
    github: "https://github.com/sayal35/Ecommerce-Site",
  },
  {
    name: "......",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h2 className="projectTitle">My Projects</h2>
      <span className="projectDesc">
        I have worked on multiple full-stack projects, including:
        <br />
        Restaurant Management System (RMS) – built with React.js , focusing on
        order management and user-friendly interfaces. <br />
        Career Forge – a platform developed using React.js and firebase,
        implementing job listing, application tracking. <br />
        Rental System – a web application using React.js and Node.js, with
        features for managing rentals, bookings, and database operations.
      </span>

      {/* Added Card Section */}
      <div className="projectCards">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="projectCard"
            onClick={() => window.open(proj.github, "_blank")}
          >
            {proj.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
