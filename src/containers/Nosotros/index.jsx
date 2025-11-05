import React from "react";
import "../../styles/nosotros.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Foto from "../../assets/foto-noe.jpg";
import { useTranslation } from "react-i18next";

const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <section className="nosotros">
        <div className="container">
          <h2 className="section-title">{t("about.title")}</h2>

          <p className="section-subtitle">{t("about.subtitle")}</p>

          <p className="section-description">{t("about.description")}</p>

          <div className="fundadores">
            <div className="persona-wrapper">
              <div className="persona">
                <img src={Foto} alt={t("about.founder.name")} />
                <p>
                  {t("about.founder.name")} <br />
                  <span className="role">{t("about.founder.role")}</span>
                </p>
                <p className="bio">{t("about.founder.bio")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Nosotros;
