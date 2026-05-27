import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/servicios.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaShieldAlt, FaWrench, FaCar, FaSnowflake,
  FaCarSide, FaOilCan, FaSearch, FaCircle
} from "react-icons/fa";

const serviceIcons = [
  FaShieldAlt, FaWrench, FaCar, FaSnowflake,
  FaCarSide, FaOilCan, FaSearch, FaCircle
];

export default function ServicesSection() {
  const { t } = useTranslation();
  const services = t("services.list", { returnObjects: true });

  return (
    <div className="services-page">

      <Helmet>
        <title>Servicios | USA Auto Service - Reparación Automotriz Lake Worth FL</title>
        <meta name="description" content="Servicios de reparación automotriz en Lake Worth, Florida. Frenos, A/C, suspensión, diagnóstico, cambio de aceite y más. USA Auto Service Import LLC." />
        <link rel="canonical" href="https://usaautoserviceimport.com/servicios" />
        <meta property="og:title" content="Servicios de Reparación Automotriz | USA Auto Service Lake Worth FL" />
        <meta property="og:description" content="Frenos, A/C, suspensión, diagnóstico computarizado, cambio de aceite y más en Lake Worth, Florida." />
        <meta property="og:url" content="https://usaautoserviceimport.com/servicios" />
      </Helmet>

      <Navbar />

      {/* HERO BANNER */}
      <div
        className="services-hero"
        aria-label="Encabezado de página de servicios automotrices"
      >
        <div className="services-hero-bg" aria-hidden="true" />
        <div className="services-hero-content">
          <span className="services-hero-tag">USA Auto Service</span>
          <h1 className="services-hero-title">{t("services.title")}</h1>
          <div className="services-hero-line" aria-hidden="true" />
          <p className="services-hero-sub">{t("services.subtitle")}</p>
        </div>
      </div>

      {/* SERVICES LIST */}
      <section
        className="services-list-section"
        aria-label="Lista de servicios de reparación automotriz en Lake Worth FL"
      >
        <div className="services-list-container">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || FaWrench;
            return (
              <article
                key={index}
                className="service-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={service.title}
                itemScope
                itemType="https://schema.org/Service"
              >
                <div
                  className="service-item-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="service-item-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div className="service-item-content">
                  <h2
                    className="service-item-title"
                    itemProp="name"
                  >
                    {service.title}
                  </h2>
                  <p
                    className="service-item-desc"
                    itemProp="description"
                  >
                    {service.description}
                  </p>
                </div>
                <Link
                  to="/promociones"
                  className="service-item-arrow"
                  aria-label={`Ver promociones disponibles para ${service.title}`}
                  title={`Promociones de ${service.title}`}
                >
                  →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="services-cta"
        aria-label="Agendar servicio automotriz en USA Auto Service"
      >
        <div className="services-cta-container">
          <div className="services-cta-box">
            <h2 className="services-cta-title">{t("home.ctaTitle")}</h2>
            <p className="services-cta-sub">{t("home.ctaSubtitle")}</p>
            <div className="services-cta-btns">
              <a
                href="https://wa.me/17543663591"
                target="_blank"
                rel="noopener noreferrer"
                className="services-cta-primary"
                aria-label="Contactar USA Auto Service por WhatsApp para agendar servicio"
                title="WhatsApp USA Auto Service Lake Worth FL"
              >
                {t("home.ctaWhatsapp")}
              </a>
              <a
                href="tel:+17543663591"
                className="services-cta-secondary"
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
}