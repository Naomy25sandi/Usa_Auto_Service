import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/promociones.css";
import { useTranslation } from "react-i18next";

import Promo1 from "../../assets/Promo1.jpg";
import Promo2 from "../../assets/Promo2.jpg";

const PromocionesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <section className="promociones-page">
        <h1 className="promo-main-title">{t("promotions.title")}</h1>
        <p className="promo-subtitle">{t("promotions.subtitle")}</p>

        <div className="promo-grid-page">
          <div className="promo-card-page">
            <img src={Promo1} alt={t("promotions.alt1")} className="promo-img-page" />
          </div>

          <div className="promo-card-page">
            <img src={Promo2} alt={t("promotions.alt2")} className="promo-img-page" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PromocionesPage;
