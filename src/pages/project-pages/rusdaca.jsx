import { Link } from "react-router-dom";
import "../../assets/style/rusdaca.css";
import { useTranslation } from "react-i18next";

const Rusdaca = () => {
  const { t } = useTranslation();

  const rusdaca = [
    {
      title: "Mobile APP",
      image: "/images/Home.png",
      desc: t("rusdaca.desc1"),
      link: "/project/rusdaca/app",
      github:"https://github.com/FaudinCahyoW/RUSDACA.git"
    },
    {
      title: "Web Admin",
      image: "/images/rusdaca-web/dashboard.png",
      desc: t("rusdaca.desc2"),
      link: "/project/rusdaca/admin",
      github:"https://github.com/FaudinCahyoW/AdminRUSDACA.git"
    },
    {
      title: "REST API",
      image: "/images/API.png",
      desc: t("rusdaca.desc3"),
      github:"https://github.com/FaudinCahyoW/APIRUSDACA.git"
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <Link to="/project">
          <button className="btn-prev ml-5 mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ">
            {t("caption.back")}
          </button>
        </Link>
        <h1 className="title-page font-bold text-center w-full">RUSDACA PROJECTS</h1>
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
                    {t("project.button")}
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
