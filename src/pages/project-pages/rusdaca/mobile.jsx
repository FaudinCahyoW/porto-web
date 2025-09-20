import React from "react";
import DesignMobile from "../../../component/DesignMobile";
import { useTranslation } from "react-i18next";

const Mobile = () => {
  const { t } = useTranslation();

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
    t("caption.home"),
    t("caption.entry"),
    t("caption.status"),
    t("caption.register"),
    t("caption.structure"),
    t("caption.vision"),
    t("caption.vision"),
    t("caption.information"),
    t("caption.edit")
  ];
  return (
    <div className="container-rusdaca">
      {/* Tombol Navigasi */}
      <div className="flex items-center gap-3 px-4 py-3 shadow">
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
      <div className="mt-4 rusdaca-app">
        <DesignMobile images={images} captions={captions} />
      </div>
    </div>
  );
};

export default Mobile;
