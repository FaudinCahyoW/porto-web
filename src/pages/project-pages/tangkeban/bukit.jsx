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
    "450px",
    "700px",
    "800px",
    "800px",
    "800px",
    "800px",
  ];

  return (
    <div className=" flex flex-col">
      {/* Tombol Navigasi */}
      <div className="flex flex-wrap sm:justify-start gap-3 px-4 py-3 bg-gray-800 shadow-md sticky top-0 z-10">
        <a href="/project">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm sm:text-base">
            {t("caption.exit")}
          </button>
        </a>
      </div>

      {/* Judul Halaman */}


      {/* Konten Carousel */}
      <div className="flex-1 flex flex-col px-4 py-6 sm:px-8">
        <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
          <DesignComp images={images} captions={captions} widths={widths} />
        </div>
      </div>
    </div>
  );
};

export default Bukit;
