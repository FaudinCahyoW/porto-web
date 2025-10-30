// Contact.jsx (Super Optimized)
import { Mail, Linkedin, Github } from "lucide-react";
import NavbarComp from "../component/NavbarComp";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const Contact = memo(() => {
  const { t } = useTranslation();

  const contacts = [
    {
      href: "mailto:faudincw@gmail.com",
      label: "Email",
      value: "faudincw@gmail.com",
      icon: <Mail className="w-8 h-8 text-blue-500" aria-hidden="true" />,
    },
    {
      href: "https://www.linkedin.com/in/faudin-cahyo-wijanarko-19b545278",
      label: "LinkedIn",
      value: "Faudin Cahyo Wijanarko",
      icon: <Linkedin className="w-8 h-8 text-blue-600" aria-hidden="true" />,
    },
    {
      href: "https://github.com/FaudinCahyoW",
      label: "GitHub",
      value: "FaudinCahyoW",
      icon: <Github className="w-8 h-8 text-gray-800" aria-hidden="true" />,
    },
  ];

  return (
    <NavbarComp>
      <section
        id="contact"
        className="w-full text-gray-900 py-20 px-6 md:px-20"
      >
        <div className="max-w-4xl mx-auto">
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t("contact.title")}
          </h2>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map(({ href, label, value, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-3 bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-200 transition-transform duration-200 hover:-translate-y-1"
              >
                {icon}
                <h3 className="font-semibold">{label}</h3>
                <p className="text-sm text-center">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </NavbarComp>
  );
});

export default Contact;
