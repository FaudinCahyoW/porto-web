import { Link } from "react-router-dom";
import "../assets/style/navbar.css";
import { useTranslation } from "react-i18next";

const NavbarComp = ({ children }) => {
  const { t, i18n } = useTranslation(); // ✅ cukup sekali

  return (
    <>
      <nav className="navbar ">
        <div className="nav-links">
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/project">{t("nav.project")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
          <span>|</span>
        </div>

        <div className="button-change">
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          <button onClick={() => i18n.changeLanguage("id")}>ID</button>
        </div>
      </nav>

      {children}
    </>
  );
};

export default NavbarComp;
