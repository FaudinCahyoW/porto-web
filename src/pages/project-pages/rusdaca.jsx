import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/rusdaca.css";

const Rusdaca = () => {
  const rusdaca = [
    {
      title: "Mobile APP",
      image: "/images/Home.png",
      desc: "The mobile application of RUSDACA App is designed for end-users to manage resident's house data",
      link: "/project/rusdaca/app",
      github:"https://github.com/FaudinCahyoW/RUSDACA.git"
    },
    {
      title: "Web Admin",
      image: "/images/rusdaca-web/dashboard.png",
      desc: "The website admin of RUSDACA App is designed for admin to manage resident's house and their data.",
      link: "/project/rusdaca/admin",
      github:"https://github.com/FaudinCahyoW/AdminRUSDACA.git"
    },
    {
      title: "REST API",
      image: "/images/API.png",
      desc: "The REST API of RUSDACA App provides server endpoints to manage resident and house data efficiently.",
      github:"https://github.com/FaudinCahyoW/APIRUSDACA.git"
    },
  ];

  return (
    <>
      <div className="flex items-center mb-8 mt-8">
        <h1 className="font-bold text-center w-full">RUSDACA PROJECTS</h1>
        <Link to="/project">
          <button className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full">
            Back To Previous
          </button>
        </Link>
      </div>

      <div className="rusdaca-grid">
        {rusdaca.map((project) => (
          <div className="card" key={project.title}>
            <img
              className="main-photo"
              src={project.image}
              alt={project.title}
            />
            <div className="card-body">
              <h2>{project.title}</h2>
              <p className="desc">{project.desc}</p>
              <div className="project-button mt-5">
                {/* Tombol View Project hanya muncul jika bukan REST API */}
                {project.title !== "REST API" && (
                  <Link to={project.link} className="btn">
                    View Project
                  </Link>
                )}
                {/* Tombol GitHub selalu muncul */}
                <a href={project.github} className="btn secondary">
                  Link Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rusdaca;
