import React from "react";
import DesignMobile from "../../../component/DesignMobile";

const images = [
  "/images/Home.png",
  "/images/Entry.png",
  "/images/Status.png",
  "/images/Register.png",
  "/images/Struktur.png",
  "/images/visi.png",
  "/images/Akun.png",
  "/images/Info.png",
  "/images/Edit.png",
];

const captions = [
  "Home Page",
  "Form Entry Data",
  "House Status",
  "Register",
  "Organization Structure",
  "Vision & Mission",
  "Account",
  "Information",
  "Edit Data",
];

const Mobile = () => {
  return (
    <div className="container-rusdaca">
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-3 px-4 py-3 shadow">
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
      <div className="mt-4 rusdaca-app">
        <DesignMobile images={images} captions={captions} />
      </div>
    </div>
  );
};

export default Mobile;
