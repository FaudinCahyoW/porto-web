import React from "react";
import DesignComp from "../../../component/DesignComp";
import { useTranslation } from "react-i18next";

const Web = () => {
  const { t } = useTranslation();
  
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
  t("caption.register"),
  t("caption.login"),
  t("caption.dashboard"),
  t("caption.resident1"),
  t("caption.resident2"),
  t("caption.user1"),
  t("caption.user2")
];

const widths = [
  "800px", 
  "800px", 
  "800px", 
  "800px", 
  "800px", 
  "800px", 
];

  return (
    <div className="bukit-card mt-10">
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-3 px-4 py-3 shadow bg-gray-800">
        <a href="/project/rusdaca/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
             {t("caption.back")}
          </button>
        </a>
        <a href="/project">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            {t("caption.exit")}
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
