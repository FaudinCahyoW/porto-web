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
    t("caption.user2"),
  ];

  const widths = ["800px", "800px", "800px", "800px", "800px", "800px"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Tombol Navigasi */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 px-4 py-3 shadow-md sticky top-0 z-10">
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
      <div className="flex-1 flex flex-col mt-10 px-4 py-6 sm:px-8">
        <h1 className="text-center mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Website Admin RUSDACA
        </h1>

        <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
          <DesignComp images={images} captions={captions} widths={widths} />
        </div>
      </div>
    </div>
  );
};

export default Web;
