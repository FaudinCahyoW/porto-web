import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import myphoto from "/images/postcard.png"; 
import "../assets/style/navbar.css";
import NavbarComp from "../component/NavbarComp";

const Home = () => {
  const { t } = useTranslation();

  return (
    <NavbarComp>
      <div className="content">
        <div className="c1">
          <h3>{t("home.welcome")}</h3>
          <h3>{t("home.role")}</h3>
          <h3>{t("home.desc")}</h3>

          <div className="button-container">
            <button><Link to="/project" >{t("button.button1")}</Link></button>
            <button><Link to="/contact" >{t("button.button2")}</Link></button>
          </div>
        </div>

        <div className="c2">
          <img src={myphoto} alt="My Photo" className="myphoto" />
        </div>
      </div>
    </NavbarComp>
  );
};

export default Home;
