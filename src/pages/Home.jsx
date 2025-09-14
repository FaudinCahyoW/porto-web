import React from "react";
import { Link } from "react-router-dom";
import myphoto from "/images/postcard.png"; 
import "../assets/style/navbar.css";
import NavbarComp from "../component/NavbarComp";

const Home = () => {
  return (
    <NavbarComp>
      <div className="content">
        <div className="c1">
          <h3>Hi, I'm Faudin</h3>
          <h3>Web Developer</h3>
          <h3>Specialized in building responsive, and user-focused web applications.</h3>

          <div className="button-container">
            <button><Link to="/project" >See My Work</Link></button>
            <button><Link to="/contact" >Contact Me</Link></button>
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
