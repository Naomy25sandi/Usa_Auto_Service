import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import "../../styles/home.css";

function PaginaPrincipal() {
  const { t } = useTranslation();

  return (
    <div className="pagina-principal">
      <Navbar />
      <Hero />

      {/* 🔥 HERO SEO */}
      <header className="header">
        <div className="container">
          <h1>{t("home.welcomeTitle")}</h1>
          <p className="intro-text">{t("home.introText")}</p>
        </div>
      </header>

      {/* 🔥 SERVICIOS */}
      <section className="servicios">
        <div className="container">
          <h2>{t("home.servicesTitle")}</h2>
          <p className="section-subtitle">{t("home.servicesSubtitle")}</p>

          <ul>
            <li>
              <strong>{t("home.services.maintenance.title")}:</strong>{" "}
              {t("home.services.maintenance.desc")}
            </li>
            <li>
              <strong>{t("home.services.repairs.title")}:</strong>{" "}
              {t("home.services.repairs.desc")}
            </li>
            <li>
              <strong>{t("home.services.brakes.title")}:</strong>{" "}
              {t("home.services.brakes.desc")}
            </li>
            <li>
              <strong>{t("home.services.ac.title")}:</strong>{" "}
              {t("home.services.ac.desc")}
            </li>
            <li>
              <strong>{t("home.services.suspension.title")}:</strong>{" "}
              {t("home.services.suspension.desc")}
            </li>
            <li>
              <strong>{t("home.services.oil.title")}:</strong>{" "}
              {t("home.services.oil.desc")}
            </li>
            <li>
              <strong>{t("home.services.diagnostic.title")}:</strong>{" "}
              {t("home.services.diagnostic.desc")}
            </li>
            <li>
              <strong>{t("home.services.tires.title")}:</strong>{" "}
              {t("home.services.tires.desc")}
            </li>
          </ul>
        </div>
      </section>

      {/* 🔥 TESTIMONIOS */}
      <section className="testimonios">
        <div className="container">
          <h2>{t("home.testimonialsTitle")}</h2>
          <p className="section-subtitle">{t("home.testimonialsSubtitle")}</p>

          <div className="testimonio-cards">
            <div className="testimonio-card">
              <h3>Sophia Paradela</h3>
              <p className="testimonio-text">{t("home.testimonials.1")}</p>
            </div>

            <div className="testimonio-card">
              <h3>Andrés Ramires</h3>
              <p className="testimonio-text">{t("home.testimonials.2")}</p>
            </div>

            <div className="testimonio-card">
              <h3>Phillipe Johnson</h3>
              <p className="testimonio-text">{t("home.testimonials.3")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PaginaPrincipal;