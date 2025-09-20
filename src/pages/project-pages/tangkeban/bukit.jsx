import React from "react";
import DesignComp from "../../../component/DesignComp";
import { useTranslation } from "react-i18next";


const Bukit = () => {
    const { t } = useTranslation();

  const images = [
    "/images/bukit/Home.png",
    "/images/bukit/tiket.png",
    "/images/bukit/Cart.png",
    "/images/bukit/Register (2).png",
    "/images/bukit/about.png",
    "/images/bukit/login.png",
  ];
  
  const captions = [
    t("caption.home"),
    t("caption.ticket"),
t("caption.cart"),
    t("caption.register"),
    t("caption.about"),
    t("caption.login"),
  ];
  
  const widths = [
    "450px", // Home
    "700px", // Ticketing
    "800px", // Cart
    "800px", // Register
    "800px", // About
    "800px", // Login
  ];
  return (
    <div className="bukit-card">
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-3 px-4 py-3 shadow bg-gray-800">
        <a href="/project">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            {t("caption.exit")}
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
