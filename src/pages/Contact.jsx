// Contact.jsx
import { Mail, Linkedin, Github } from "lucide-react";
import NavbarComp from "../component/NavbarComp";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
  <NavbarComp>
      <section
        id="contact"
        className="w-full  text-gray-900 py-20 px-6 md:px-20"
      >
        <div className="max-w-4xl mx-auto">
          {/* Judul */}
          <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-12">
            {t("contact.title")}
          </h2>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:faudin@example.com"
              className="flex flex-col items-center gap-3 bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-200 transition"
            >
              <Mail className="w-8 h-8 text-blue-500" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm">faudincw@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/faudin-cahyo-wijanarko-19b545278"
              className="flex flex-col items-center gap-3 bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-200 transition"
            >
              <Linkedin className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-sm">Faudin Cahyo Wijanarko</p>
            </a>

            <a
              href="https://github.com/FaudinCahyoW"
              className="flex flex-col items-center gap-3 bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-200 transition"
            >
              <Github className="w-8 h-8 text-gray-800" />
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-sm">FaudinCahyoW</p>
            </a>
          </div>
        </div>
      </section>
    </NavbarComp>
  );
};

export default Contact;
