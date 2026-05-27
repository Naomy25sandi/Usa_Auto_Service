import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/promociones.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Promo1 from "../../assets/Promo1.webp";
import Promo2 from "../../assets/Promo2.webp";

const PromocionesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="promos-page">

      <Helmet>
        <title>Promociones | USA Auto Service - Lake Worth, FL</title>
        <meta name="description" content="Promociones y descuentos especiales en USA Auto Service Import LLC. 10% de descuento en servicios de motor, precios especiales en llantas y más en Lake Worth, FL." />
        <link rel="canonical" href="https://usaautoserviceimport.com/promociones" />
        <meta property="og:title" content="Promociones Especiales | USA Auto Service Lake Worth FL" />
        <meta property="og:description" content="Aprovecha nuestras ofertas por tiempo limitado en reparación automotriz en Lake Worth, Florida." />
        <meta property="og:url" content="https://usaautoserviceimport.com/promociones" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <div
        className="promos-hero"
        aria-label="Encabezado de promociones y descuentos USA Auto Service"
      >
        <div className="promos-hero-bg" aria-hidden="true" />
        <div className="promos-hero-content">
          <span className="promos-hero-tag">USA Auto Service</span>
          <h1 className="promos-hero-title">{t("promotions.title")}</h1>
          <div className="promos-hero-line" aria-hidden="true" />
          <p className="promos-hero-sub">{t("promotions.subtitle")}</p>
        </div>
      </div>

      {/* PROMOS GRID */}
      <section
        className="promos-section"
        aria-label="Promociones y descuentos en servicios automotrices"
      >
        <div className="promos-container">
          <div className="promos-grid">

            <article
              className="promo-card"
              aria-label="Promoción: 10% de descuento en servicios de motor"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <div className="promo-badge" aria-label={t("promotions.badge1")}>
                {t("promotions.badge1")}
              </div>
              <img
                src={Promo1}
                alt="Promoción USA Auto Service: 10% de descuento en Engine Service, Transmission Service, AC Repair, Suspension y Frenos en Lake Worth FL"
                className="promo-img"
                loading="lazy"
                width="600"
                height="400"
                itemProp="image"
              />
              <div className="promo-footer">
                <a
                  href="https://wa.me/17543663591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="promo-cta"
                  aria-label="Reclamar promoción de 10% de descuento por WhatsApp"
                  title="Reclamar oferta por WhatsApp - USA Auto Service"
                  itemProp="url"
                >
                  {t("promotions.cta")}
                </a>
              </div>
            </article>

            <article
              className="promo-card"
              aria-label="Promoción: Precios especiales en llantas y cambio de aceite"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <div className="promo-badge" aria-label={t("promotions.badge2")}>
                {t("promotions.badge2")}
              </div>
              <img
                src={Promo2}
                alt="Promoción USA Auto Service: Venta de llantas y cambio de aceite sintético desde $89.99 en Lake Worth FL"
                className="promo-img"
                loading="lazy"
                width="600"
                height="400"
                itemProp="image"
              />
              <div className="promo-footer">
                <a
                  href="https://wa.me/17543663591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="promo-cta"
                  aria-label="Reclamar promoción de llantas y aceite por WhatsApp"
                  title="Reclamar oferta de llantas por WhatsApp - USA Auto Service"
                  itemProp="url"
                >
                  {t("promotions.cta")}
                </a>
              </div>
            </article>

          </div>

          <p
            className="promos-note"
            aria-label="Términos y condiciones de las promociones"
          >
            {t("promotions.note")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="promos-cta-section"
        aria-label="Contactar USA Auto Service para reclamar promoción"
      >
        <div className="promos-container">
          <div className="promos-cta-box">
            <h2 className="promos-cta-title">{t("home.ctaTitle")}</h2>
            <p className="promos-cta-sub">{t("home.ctaSubtitle")}</p>
            <div className="promos-cta-btns">
              <a
                href="https://wa.me/17543663591"
                target="_blank"
                rel="noopener noreferrer"
                className="promos-btn-primary"
                aria-label="Contactar USA Auto Service por WhatsApp para reclamar promoción"
                title="WhatsApp USA Auto Service Lake Worth FL"
              >
                {t("home.ctaWhatsapp")}
              </a>
              <a
                href="tel:+17543663591"
                className="promos-btn-secondary"
                aria-label="Llamar a USA Auto Service al (754) 366-3591"
                title="Llamar a USA Auto Service"
              >
                {t("home.ctaCall")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromocionesPage;