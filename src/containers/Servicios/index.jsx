import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/servicios.css";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = t("services.list", { returnObjects: true });

  return (
    <div>
      <Navbar />
      <section className="services-section">
        <h2 className="services-title">{t("services.title")}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
