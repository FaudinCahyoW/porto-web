import { Link } from "react-router-dom";
import myPhoto from "/images/photo-removebg-preview.png"; 
import "../assets/style/navbar.css";
import NavbarComp from "../component/NavbarComp";

const Home = () => {
  return (
    <NavbarComp>
      <div className="content">
        <div className="c1">
          <h3>Hi</h3>
          <h2>I Am Faudin Cahyo Wijanarko</h2>
          <h3>Web Developer</h3>
          <h3>I can crafting modern, responsive, and user-focused web solutions.</h3>

          <div className="button-container">
            <button><Link to="/project" className="btn">My Project</Link></button>
            <button><Link to="/contact" className="btn">Contact Me</Link></button>
          </div>
        </div>

        <div className="c2">
          <img src={myPhoto} alt="My Photo" className="my-photo" />
        </div>
      </div>
    </NavbarComp>
  );
};

export default Home;
