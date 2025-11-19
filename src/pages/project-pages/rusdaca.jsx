import { Link } from "react-router-dom";
import "../../assets/style/rusdaca.css";
import { useTranslation } from "react-i18next";

const Rusdaca = () => {
  const { t } = useTranslation();

  const rusdaca = [
    {
      title: "Mobile APP",
      image: "/images/Home.webp",
      desc: t("rusdaca.desc1"),
      link: "/project/rusdaca/app",
      github: "https://github.com/FaudinCahyoW/RUSDACA.git",
    },
    {
      title: "Web Admin",
      image: "/images/rusdaca-web/dashboard.png",
      desc: t("rusdaca.desc2"),
      link: "/project/rusdaca/admin",
      github: "https://github.com/FaudinCahyoW/AdminRUSDACA.git",
    },
    {
      title: "REST API",
      image: "/images/API.png",
      desc: t("rusdaca.desc3"),
      github: "https://github.com/FaudinCahyoW/APIRUSDACA.git",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="fixed top-5 left-5 z-50">
        <Link to="/project">
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition">
            {t("caption.back")}
          </button>
        </Link>
      </div>

      <div className="mt-5">
        <h1 className="title-page font-bold text-center w-full">
          Bukit Tangkeban Website
        </h1>
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
    </div>
  );
};

export default Rusdaca;
