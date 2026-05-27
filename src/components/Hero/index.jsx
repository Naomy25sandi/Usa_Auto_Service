import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../styles/hero.css";
import foto1 from "../../assets/foto1.webp";
import foto2 from "../../assets/foto2.webp";
import foto3 from "../../assets/foto3.webp";

const workImages = [
  { src: foto1, altKey: "hero.img1Alt" },
  { src: foto2, altKey: "hero.img2Alt" },
  { src: foto3, altKey: "hero.img3Alt" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % workImages.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 400);
  };

  return (
    <section
      className="hero"
      aria-label={t("hero.ariaLabel")}
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-inner">

        {/* LEFT — CONTENT */}
        <div className="hero-content">

          <div className="hero-badge" aria-label="Taller certificado en Lake Worth FL">
            <span className="badge-dot" aria-hidden="true" />
            {t("hero.badge")}
          </div>

          <h1 className="hero-title" itemProp="name">
            <span className="title-line1">{t("hero.line1")}</span>
            <span className="title-line2">{t("hero.line2")}</span>
            <span className="title-line3">{t("hero.line3")}</span>
          </h1>

          <address
            className="hero-info"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            style={{ fontStyle: "normal" }}
          >
            <span className="info-item">
              <span aria-hidden="true">🕐</span>
              <span itemProp="openingHours" content="Mo-Sa 09:00-19:00">
                {t("hero.schedule")}
              </span>
            </span>
            <span className="info-item">
              <span aria-hidden="true">📍</span>
              <span itemProp="streetAddress">1913 10th Ave N</span>,{" "}
              <span itemProp="addressLocality">Lake Worth</span>,{" "}
              <span itemProp="addressRegion">FL</span>
            </span>
          </address>

          <p className="hero-subtitle" itemProp="description">
            {t("hero.subtitleHero")}
          </p>

          <div className="hero-ctas">
            <a
              href="https://wa.me/17543663591"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label={t("hero.whatsappAria")}
              title="WhatsApp USA Auto Service Lake Worth FL"
              itemProp="telephone"
            >
              <FaWhatsapp aria-hidden="true" /> {t("hero.whatsapp")}
            </a>
            <a
              href="tel:+17543663591"
              className="btn-secondary"
              aria-label={t("hero.callAria")}
              title="Llamar a USA Auto Service (754) 366-3591"
            >
              <FaPhone aria-hidden="true" /> {t("hero.call")}
            </a>
          </div>

          <div className="hero-stats" aria-label="Estadísticas de USA Auto Service">
            <div className="stat">
              <span className="stat-number" aria-label="Más de 25 años de experiencia">25+</span>
              <span className="stat-label">{t("hero.stat1")}</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat">
              <span className="stat-number" aria-label="Más de 500 clientes felices">500+</span>
              <span className="stat-label">{t("hero.stat2")}</span>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat">
              <span className="stat-number" aria-label="100% de satisfacción">100%</span>
              <span className="stat-label">{t("hero.stat3")}</span>
            </div>
          </div>

        </div>

        {/* RIGHT — CAROUSEL */}
        <div className="hero-visual" aria-label="Fotos del taller USA Auto Service">

          <div className="top-badge" aria-label={t("hero.topBadge")}>
            {t("hero.topBadge")}
          </div>

          <div
            className="carousel-frame"
            role="region"
            aria-label="Galería de trabajos realizados"
            aria-live="polite"
          >
            <span className="corner tl" aria-hidden="true" />
            <span className="corner tr" aria-hidden="true" />
            <span className="corner bl" aria-hidden="true" />
            <span className="corner br" aria-hidden="true" />

            <div className="slide-counter" aria-label={`Imagen ${currentIndex + 1} de ${workImages.length}`}>
              <span>{currentIndex + 1}</span> / {workImages.length}
            </div>

            <img
              src={workImages[currentIndex].src}
              alt={t(workImages[currentIndex].altKey)}
              loading="eager"
              fetchPriority="high"
              width="600"
              height="600"
              className={`carousel-img ${animating ? "img-out" : "img-in"}`}
              itemProp="image"
            />

            <div className="carousel-dots" role="tablist" aria-label="Controles del carrusel">
              {workImages.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={t("hero.imgAria", { number: index + 1 })}
                  aria-selected={currentIndex === index}
                />
              ))}
            </div>
          </div>

          <div
            className="google-badge"
            aria-label="Calificación 5 estrellas en Google Reviews"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <div className="google-g" aria-hidden="true">G</div>
            <div className="google-info">
              <div className="google-stars" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} aria-hidden="true" />
                ))}
              </div>
              <div className="google-label">{t("hero.googleReviews")}</div>
              <meta itemProp="ratingValue" content="5" />
              <meta itemProp="reviewCount" content="6" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;