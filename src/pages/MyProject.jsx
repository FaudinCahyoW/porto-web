import React from "react";
import "../assets/style/project.css";
import { Link } from "react-router-dom";
import NavbarComp from "../component/NavbarComp";
import { useTranslation } from "react-i18next";


const Project = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: "RUSDACA APP",
      image: "/images/Home.png",
      desc: t("project.desc"),
      tech: "React, Express, MongoDB, REST API",
      route: "/project/rusdaca",
      github: "https://github.com/FaudinCahyoW/RUSDACA.git",
    },
    {
      title: "Bukit Tangkeban Website",
      image: "/images/bukit/Home.png",
      desc: t("project.desc2"),
      tech: "Laravel, MySQL, node.js",
      route: "/project/bukit",
      github: "https://github.com/FaudinCahyoW/tangkeban_web.git",
    },
  ];
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
                    {t("project.button")}
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
