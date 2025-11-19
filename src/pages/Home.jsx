import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import myphoto from "/images/postcard.webp";
import "../assets/style/navbar.css";

const Home = () => {
  const { t } = useTranslation();

  return (
      <div className="content flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 lg:p-20 gap-8">
        <div className="c1 text-center md:text-left max-w-lg space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mr-14">
            {t("home.welcome")}
          </h3>
          <h3 className="text-xl md:text-2xl  font-bold mr-14">
            {t("home.role")}
          </h3>
          <p className="text-gray-500 dark:text-gray-300 mr-14">
            {t("home.desc")}
          </p>

          <div className="button-container flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start mr-14">
            <Link
              to="/project"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition"
            >
              {t("button.button1")}
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-5 rounded-md transition"
            >
              {t("button.button2")}
            </Link>
          </div>
        </div>

        <div className="c2 w-2/3 md:w-1/2 lg:w-1/3">
          <img
            src={myphoto}
            alt="My Photo"
            fetchpriority="high"
            decoding="async"
            width="688"
            height="987"
            className="my-photo hidden sm:block w-48 md:w-64 lg:w-80 h-auto rounded-2xl shadow-lg mx-auto"
          />
        </div>
      </div>
  );
};

export default Home;
