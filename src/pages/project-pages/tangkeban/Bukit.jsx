import { Link } from "react-router-dom";
import DesignComp from "../../../component/DesignComp";
import { useTranslation } from "react-i18next";

const Bukit = () => {
  const { t } = useTranslation();

  const images = [
    "/images/bukit/Home.webp",
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

  const widths = ["380px", "700px", "800px", "800px", "800px", "800px"];

  return (
    <div>
      <div className="fixed top-5 left-5 z-50">
        <Link to="/project">
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition">
            {t("caption.back")}
          </button>
        </Link>
      </div>

      <div className="mt-5">
        <h1 className="title-page font-bold text-center w-full ">
          Bukit Tangkeban Website
        </h1>
      </div>

      {/* Konten Carousel */}
      <div className="flex-1 flex flex-col px-4 py-6 sm:px-8">
        <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
          <DesignComp images={images} captions={captions} widths={widths} />
        </div>
      </div>
    </div>
  );
};

export default Bukit;
