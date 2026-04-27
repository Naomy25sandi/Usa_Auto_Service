import React from "react";
import "../../styles/nosotros.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import Foto from "../../assets/foto Noe.jpeg";
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

         
       
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Nosotros;
