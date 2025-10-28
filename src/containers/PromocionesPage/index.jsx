import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/promociones.css";

import Promo1 from "../../assets/Promo1.jpg";
import Promo2 from "../../assets/Promo2.jpg";

const PromocionesPage = () => {
  return (
    <>
      <Navbar />

      <section className="promociones-page">
        <h1 className="promo-main-title">Promociones Especiales</h1>
        <p className="promo-subtitle">Aprovecha nuestras ofertas por tiempo limitado</p>

        <div className="promo-grid-page">
          <div className="promo-card-page">
            <img src={Promo1} alt="Promoción 1" className="promo-img-page" />
          </div>

          <div className="promo-card-page">
            <img src={Promo2} alt="Promoción 2" className="promo-img-page" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PromocionesPage;
