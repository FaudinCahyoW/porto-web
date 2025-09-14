import React from "react";
import DesignComp from "../../../component/DesignComp";

const images = [
  "/images/rusdaca-web/daftar.png",
  "/images/rusdaca-web/login.png",
  "/images/rusdaca-web/dashboard.png",
  "/images/rusdaca-web/datawarga.png",
  "/images/rusdaca-web/editwarga.png",
  "/images/rusdaca-web/datapeng.png",
  "/images/rusdaca-web/editpeng.png",
  
];

const captions = [
  "Register",
  "Login",
  "Dashboard",
  "Resident's Data",
  "Resident's Edit Data",
  "User Data",
  "User Edit Data"
];

const widths = [
  "800px", 
  "800px", 
  "800px", 
  "800px", 
  "800px", 
  "800px", 
];

const Web = () => {
  return (
    <div className="bukit-card mt-10">
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-3 px-4 py-3 shadow bg-gray-800">
        <a href="/project/rusdaca/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
             Back To Previous
          </button>
        </a>
        <a href="/project">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            Exit
          </button>
        </a>
      </div>

      {/* Konten Carousel */}
        <div className="mt-5">
          <DesignComp images={images} captions={captions} widths={widths}/>
        </div>
    </div>
  );
};

export default Web;
