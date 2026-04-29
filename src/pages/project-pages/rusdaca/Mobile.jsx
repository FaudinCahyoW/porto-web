import DesignMobile from "../../../component/DesignMobile";
import { useTranslation } from "react-i18next";

const Mobile = () => {
  const { t } = useTranslation();

  const images = [
    "/images/Home.webp",
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
    t("caption.edit"),
  ];
  return (
    <div className="container-rusdaca flex flex-col">
      {/* Tombol Navigasi */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 px-4 py-3  shadow-md sticky top-0 z-10">
        <a href="/project/rusdaca/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
            {t("caption.back")}
          </button>
        </a>
        <a href="/project">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm sm:text-base">
            {t("caption.exit")}
          </button>
        </a>
      </div>

      {/* Konten Carousel */}
      <div className="flex-1 flex flex-col px-4 py-6 sm:px-8">
        <h2 className="text-center  sm:text-xl md:text-2xl  font-semibold">
          Website Admin RUSDACA
        </h2>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl">
          <DesignMobile images={images} captions={captions} />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
