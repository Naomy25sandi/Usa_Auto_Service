import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import "../../styles/home.css";
import Logo from "../../assets/Boldsites-logo.png";
import { useTranslation } from "react-i18next";

function PaginaPrincipal() {
  const [showModal, setShowModal] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pagina-principal">
      {/* MODAL DE BIENVENIDA */}
      {showModal && (
        <div className="welcome-modal">
          <div className="welcome-content">
            <h1 className="welcome-title">USA AUTO SERVICE</h1>
            <p className="boldsites-text">
              By <span>Boldsites</span>
            </p>
            <img src={Logo} alt="Boldsites Logo" className="boldsites-logo" />
            <p className="welcome-subtitle">{t("home.loading")}</p>
            <div className="loader"></div>
          </div>
        </div>
      )}

      {!showModal && (
        <>
          <Navbar />
          <Hero />

          {/* BIENVENIDA */}
          <header className="header">
            <div className="container">
              <h1 className="neon-title">{t("home.welcomeTitle")}</h1>
              <p className="intro-text">{t("home.introText")}</p>
            </div>
          </header>

          {/* SERVICIOS */}
          <section className="servicios">
            <div className="container">
              <h2 className="section-title">{t("home.servicesTitle")}</h2>
              <p className="section-subtitle">{t("home.servicesSubtitle")}</p>

              <ul>
                <li>
                  {t("home.services.maintenance.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.maintenance.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.repairs.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.repairs.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.brakes.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.brakes.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.ac.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.ac.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.suspension.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.suspension.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.oil.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.oil.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.diagnostic.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.diagnostic.desc")}
                  </span>
                </li>
                <li>
                  {t("home.services.tires.title")}:
                  <span className="descripcion">
                    {" "}
                    {t("home.services.tires.desc")}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* TESTIMONIOS */}
          <section className="testimonios">
            <div className="container">
              <h2 className="section-title">{t("home.testimonialsTitle")}</h2>
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
                  <h3>Phillipe Jhonson</h3>
                  <p className="testimonio-text">{t("home.testimonials.3")}</p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

export default PaginaPrincipal;
