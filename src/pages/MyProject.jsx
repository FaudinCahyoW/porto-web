import React from "react";
import "../assets/style/project.css";
import { Link } from "react-router-dom";
import NavbarComp from "../component/NavbarComp";

const projects = [
  {
    title: "RUSDACA APP",
    image: "/images/Home.png",
    desc: "Entry Data android APP for residents houses with React Native (FrontEnd), Node.js + Express (Backend), dan MongoDB (Database)",
    tech: "React, Express, MongoDB, REST API",
    route: "/project/rusdaca",
    github: "https://github.com/FaudinCahyoW/RUSDACA.git",
  },
  {
    title: "Bukit Tangkeban Website",
    image: "/images/bukit/Home.png",
    desc: "Company profile website for Bukit Tangkeban tourism built with Laravel, MySQL and Node.js",
    tech: "Laravel, MySQL, node.js",
    route: "/project/bukit",
    github: "https://github.com/FaudinCahyoW/tangkeban_web.git",
  },
];

const Project = () => {
  return (
    <>
      <NavbarComp >
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="main-photo"
              />
              <div className="card-body">
                <h4>{project.title}</h4>
                <p className="desc">{project.desc}</p>
                <p className="tech">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <div className="project-button">
                  <Link to={project.route} className="btn">
                    View Project
                  </Link>
                  {project.title !== "RUSDACA APP" && (
                    <a href={project.github} className="btn secondary">
                      Link Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </NavbarComp>
    </>
  );
};

export default Project;
