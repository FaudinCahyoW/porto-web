import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ExpenseTracker = () => {
  const { t } = useTranslation();

  return (
    <div className=" flex flex-col">
      <div className="fixed top-5 left-5 z-50">
        <Link to="/project">
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition">
            {t("caption.back")}
          </button>
        </Link>
      </div>

      <div className="mt-5">
        <h1 className="title-page font-bold text-center w-full">
          Expense Tracker Website
        </h1>
      </div>

      {/* Konten Carousel */}
      <div className="flex-1 flex flex-col px-4 py-6 sm:px-8">
        <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
          <img
            src="/images/expense-tracker/expense-tracker.webp"
            alt="Expense Tracker Photo"
            width="700px"
          />
        </div>
        <p className="text-center">Expense Tracker</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;
