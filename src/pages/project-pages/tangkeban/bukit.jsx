import React from "react";
import DesignComp from "../../../component/DesignComp";

const images = [
  "/images/bukit/Home.png",
  "/images/bukit/tiket.png",
  "/images/bukit/Cart.png",
  "/images/bukit/Register (2).png",
  "/images/bukit/about.png",
  "/images/bukit/login.png",
];

const captions = [
  "Home Page",
  "Ticketing",
  "Ticket Cart",
  "Register",
  "About Us",
  "Login",
];

const widths = [
  "450px", // Home
  "700px", // Ticketing
  "800px", // Cart
  "800px", // Register
  "800px", // About
  "800px", // Login
];

const Bukit = () => {
  return (
    <div className="bukit-card">
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-3 px-4 py-3 shadow bg-gray-800">
        <a href="/project">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            Exit
          </button>
        </a>
      </div>

      {/* Konten Carousel */}
        <div >
          <DesignComp images={images} captions={captions} widths={widths}/>
        </div>
    </div>
  );
};

export default Bukit;
