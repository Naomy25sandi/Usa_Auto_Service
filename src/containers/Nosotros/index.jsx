import React from "react";
import "../../styles/nosotros.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from "../../assets/logo-nuevo.webp";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import {
  FaShieldAlt, FaClock, FaHandshake, FaStar,
  FaMapMarkerAlt, FaPhone
} from "react-icons/fa";

const Nosotros = () => {
  const { t } = useTranslation();

  const values = [
    { icon: FaShieldAlt, key: "transparency" },
    { icon: FaStar, key: "quality" },
    { icon: FaClock, key: "punctuality" },
    { icon: FaHandshake, key: "trust" },
  ];

  return (
    <div className="about-page">

      <Helmet>
        <title>Nosotros | USA Auto Service Import LLC - Lake Worth, FL</title>
        <meta name="description" content="Conozca USA Auto Service Import LLC, taller mecánico con 25+ años de experiencia en Lake Worth, Florida. Transparencia, calidad y confianza garantizada." />
        <link rel="canonical" href="https://usaautoserviceimport.com/Nosotros" />
        <meta property="og:title" content="Nosotros | USA Auto Service Import LLC Lake Worth FL" />
        <meta property="og:description" content="25+ años de experiencia en reparación automotriz en Lake Worth, Florida. Conoce nuestro equipo y valores." />
        <meta property="og:url" content="https://usaautoserviceimport.com/Nosotros" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <div
        className="about-hero"
        aria-label="Encabezado sobre USA Auto Service Import LLC"
      >
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-hero-content">
          <span className="about-hero-tag">USA Auto Service</span>
          <h1 className="about-hero-title">{t("about.title")}</h1>
          <div className="about-hero-line" aria-hidden="true" />
          <p className="about-hero-sub">{t("about.subtitle")}</p>
        </div>
      </div>

      {/* STATS */}
      <section
        className="about-stats"
        aria-label="Estadísticas de USA Auto Service Import LLC"
      >
        <div className="about-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-num" aria-label="Más de 25 años de experiencia">25+</span>
              <span className="stat-lbl">{t("hero.stat1")}</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-num" aria-label="Más de 500 clientes felices">500+</span>
              <span className="stat-lbl">{t("hero.stat2")}</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-num" aria-label="100% de satisfacción">100%</span>
              <span className="stat-lbl">{t("hero.stat3")}</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item">
              <span className="stat-num" aria-label="Calificación 5 estrellas en Google">5★</span>
              <span className="stat-lbl">{t("hero.googleReviews")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section
        className="about-story"
        aria-label="Historia y fundador de USA Auto Service"
        itemScope
        itemType="https://schema.org/AutoRepair"
      >
        <div className="about-container">
          <div className="story-grid">
            <div className="story-logo">
              <div className="story-logo-wrap">
                <img
                  src={Logo}
                  alt="Logo oficial de USA Auto Service Import LLC en Lake Worth Florida"
                  className="story-logo-img"
                  width="200"
                  height="200"
                  loading="lazy"
                  itemProp="image"
                />
              </div>
            </div>
            <div className="story-content">
              <span
                className="section-tag"
                itemProp="founder"
              >
                {t("about.founder.role")}
              </span>
              <h2
                className="story-title"
                itemProp="name"
              >
                {t("about.founder.name")}
              </h2>
              <p
                className="story-text"
                itemProp="description"
              >
                {t("about.description")}
              </p>
              <p className="story-bio">
                {t("about.founder.bio")}
              </p>
              <div className="story-contact">
                <a
                  href="tel:+17543663591"
                  className="story-contact-item"
                  aria-label="Llamar a USA Auto Service al (754) 366-3591"
                  title="Llamar a USA Auto Service"
                  itemProp="telephone"
                >
                  <FaPhone aria-hidden="true" /> (754) 366-3591
                </a>
                <span
                  className="story-contact-item"
                  aria-label="Ubicación: Lake Worth, Florida"
                  itemProp="address"
                >
                  <FaMapMarkerAlt aria-hidden="true" /> Lake Worth, FL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="about-values"
        aria-label="Valores de USA Auto Service Import LLC"
      >
        <div className="about-container">
          <div className="section-header">
            <span className="section-tag">{t("about.valuesTag")}</span>
            <h2 className="section-title-about">{t("about.valuesTitle")}</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <article
                  className="value-card"
                  key={i}
                  aria-label={t(`about.values.${v.key}.title`)}
                >
                  <div className="value-icon-wrap" aria-hidden="true">
                    <Icon className="value-icon" />
                  </div>
                  <h3 className="value-title">
                    {t(`about.values.${v.key}.title`)}
                  </h3>
                  <p className="value-desc">
                    {t(`about.values.${v.key}.desc`)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="about-cta"
        aria-label="Agendar servicio en USA Auto Service Lake Worth FL"
      >
        <div className="about-container">
          <div className="about-cta-box">
            <h2 className="about-cta-title">{t("home.ctaTitle")}</h2>
            <p className="about-cta-sub">{t("home.ctaSubtitle")}</p>
            <div className="about-cta-btns">
              <a
                href="https://wa.me/17543663591"
                target="_blank"
                rel="noopener noreferrer"
                className="about-cta-primary"
                aria-label="Contactar USA Auto Service por WhatsApp para agendar servicio"
                title="WhatsApp USA Auto Service Lake Worth FL"
              >
                {t("home.ctaWhatsapp")}
              </a>
              <a
                href="tel:+17543663591"
                className="about-cta-secondary"
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

export default Nosotros;