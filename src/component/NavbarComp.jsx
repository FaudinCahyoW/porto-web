import { Link } from "react-router-dom";
import "../assets/style/navbar.css";

const NavbarComp = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {children}
    </>
  );
};

export default NavbarComp;
