import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import {
  FaWrench, FaCar, FaCarSide, FaSnowflake,
  FaOilCan, FaSearch, FaShieldAlt, FaTachometerAlt,
  FaStar
} from "react-icons/fa";
import "../../styles/home.css";

const serviceIcons = [
  FaShieldAlt, FaWrench, FaCar, FaSnowflake,
  FaCarSide, FaOilCan, FaSearch, FaTachometerAlt
];

const serviceKeys = [
  "maintenance", "repairs", "brakes", "ac",
  "suspension", "oil", "diagnostic", "tires"
];

function PaginaPrincipal() {
  const { t } = useTranslation();

  return (
    <div className="pagina-principal">
      <Helmet>
        <title>USA Auto Service | Taller Mecánico en Lake Worth, FL</title>
        <meta name="description" content="USA Auto Service Import LLC — Taller mecánico de confianza en Lake Worth, Florida. Frenos, diagnósticos, A/C, suspensión y mantenimiento. 25+ años de experiencia. ¡Llámenos hoy!" />
        <link rel="canonical" href="https://usaautoserviceimport.com/" />
        <meta property="og:title" content="USA Auto Service | Taller Mecánico en Lake Worth, FL" />
        <meta property="og:description" content="Taller mecánico de confianza en Lake Worth, Florida. Frenos, diagnósticos, A/C, suspensión y mantenimiento profesional." />
        <meta property="og:url" content="https://usaautoserviceimport.com/" />
      </Helmet>

      <Navbar />
      <Hero />

      {/* WELCOME */}
      <section
        className="home-welcome"
        aria-label="Bienvenida USA Auto Service"
      >
        <div className="home-container">
          <div className="welcome-line" />
          <h2 className="welcome-title">{t("home.welcomeTitle")}</h2>
          <p className="welcome-text">{t("home.introText")}</p>
          <div className="welcome-line" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        className="home-services"
        aria-label="Servicios de reparación automotriz en Lake Worth FL"
      >
        <div className="home-container">
          <div className="section-header">
            <span className="section-tag">{t("home.servicesTitle")}</span>
            <h2 className="section-title">{t("home.servicesSubtitle")}</h2>
          </div>

          <div className="services-grid">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[index];
              return (
                <article
                  className="service-card"
                  key={key}
                  aria-label={t(`home.services.${key}.title`)}
                >
                  <div className="service-icon-wrap" aria-hidden="true">
                    <Icon className="service-icon" />
                  </div>
                  <div className="service-text">
                    <h3 className="service-name">
                      {t(`home.services.${key}.title`)}
                    </h3>
                    <p className="service-desc">
                      {t(`home.services.${key}.desc`)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section
        className="home-testimonials"
        aria-label="Reseñas y testimonios de clientes de USA Auto Service"
      >
        <div className="home-container">
          <div className="section-header">
            <span className="section-tag">{t("home.testimonialsTitle")}</span>
            <h2 className="section-title">{t("home.testimonialsSubtitle")}</h2>
          </div>

          {/* GOOGLE REVIEWS */}
          <div className="reviews-block" aria-label="Reseñas de Google">
            <div className="reviews-block-header">
              <div className="google-g-badge" aria-hidden="true">G</div>
              <span className="reviews-block-title">Google Reviews</span>
              <div className="reviews-block-stars" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => <FaStar key={i} aria-hidden="true" />)}
              </div>
            </div>
            <div className="testimonials-grid">
              {[
                { name: "Nathan Sommers", text: t("home.testimonials.g1"), service: t("home.testimonials.gservice1"), time: t("home.testimonials.gtime1"), initial: "N" },
                { name: "Paula Carmona", text: t("home.testimonials.g2"), service: t("home.testimonials.gservice2"), time: t("home.testimonials.gtime2"), initial: "P" },
                { name: "Greg M. Garland Jr", text: t("home.testimonials.g3"), service: t("home.testimonials.gservice3"), time: t("home.testimonials.gtime3"), initial: "G" },
              ].map((item) => (
                <article
                  className="testimonial-card"
                  key={item.name}
                  aria-label={`Reseña de ${item.name}`}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="testimonial-header">
                    <div className="testimonial-avatar" aria-hidden="true">{item.initial}</div>
                    <div className="testimonial-info">
                      <span className="testimonial-name" itemProp="author">{item.name}</span>
                      <div className="testimonial-stars" aria-label="5 estrellas">
                        {[...Array(5)].map((_, i) => <FaStar key={i} aria-hidden="true" />)}
                      </div>
                    </div>
                    <div className="testimonial-google" aria-label="Reseña de Google">
                      <div className="google-g-small" aria-hidden="true">G</div>
                    </div>
                  </div>
                  <p className="testimonial-text" itemProp="reviewBody">"{item.text}"</p>
                  <div className="testimonial-meta">
                    <span className="testimonial-service">✓ {item.service}</span>
                    <span className="testimonial-time">{item.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* FACEBOOK REVIEWS */}
          <div className="reviews-block" style={{ marginTop: "2.5rem" }} aria-label="Reseñas de Facebook">
            <div className="reviews-block-header">
              <div className="facebook-badge" aria-hidden="true">f</div>
              <span className="reviews-block-title">Facebook Reviews</span>
              <div className="reviews-block-stars" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => <FaStar key={i} aria-hidden="true" />)}
              </div>
            </div>
            <div className="testimonials-grid">
              {[
                { name: "Mey Sol", text: t("home.testimonials.f1"), service: t("home.testimonials.fservice1"), time: t("home.testimonials.ftime1"), initial: "M" },
                { name: "Productos Mey", text: t("home.testimonials.f2"), service: t("home.testimonials.fservice2"), time: t("home.testimonials.ftime2"), initial: "P" },
                { name: "Alvaro Robinson", text: t("home.testimonials.f3"), service: t("home.testimonials.fservice3"), time: t("home.testimonials.ftime3"), initial: "A" },
              ].map((item) => (
                <article
                  className="testimonial-card"
                  key={item.name}
                  aria-label={`Reseña de ${item.name}`}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="testimonial-header">
                    <div className="testimonial-avatar" aria-hidden="true">{item.initial}</div>
                    <div className="testimonial-info">
                      <span className="testimonial-name" itemProp="author">{item.name}</span>
                      <div className="testimonial-stars" aria-label="5 estrellas">
                        {[...Array(5)].map((_, i) => <FaStar key={i} aria-hidden="true" />)}
                      </div>
                    </div>
                    <div className="testimonial-google" aria-label="Reseña de Facebook">
                      <div className="facebook-g-small" aria-hidden="true">f</div>
                    </div>
                  </div>
                  <p className="testimonial-text" itemProp="reviewBody">"{item.text}"</p>
                  <div className="testimonial-meta">
                    <span className="testimonial-service">✓ {item.service}</span>
                    <span className="testimonial-time">{item.time}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* VERIFIED FOOTER */}
          <div className="testimonials-footer" aria-label="Fuentes de reseñas verificadas">
            <div className="google-verified">
              <div className="google-g-badge" aria-hidden="true">G</div>
              <span>{t("home.testimonialsGoogle")}</span>
            </div>
            <div className="google-verified" style={{ marginLeft: "1rem" }}>
              <div className="facebook-badge" style={{ width: "20px", height: "20px", fontSize: "0.65rem" }} aria-hidden="true">f</div>
              <span>{t("home.testimonialsFacebook")}</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="home-cta"
        aria-label="Agendar servicio en USA Auto Service Lake Worth FL"
      >
        <div className="home-container">
          <div className="cta-box">
            <h2 className="cta-title">{t("home.ctaTitle")}</h2>
            <p className="cta-subtitle">{t("home.ctaSubtitle")}</p>
            <div className="cta-buttons">
             <a 
                href="https://wa.me/17543663591"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-primary"
                aria-label="Contactar USA Auto Service por WhatsApp para agendar servicio"
                title="WhatsApp USA Auto Service"
              >
                {t("home.ctaWhatsapp")}
              </a>
              <a
                href="tel:+17543663591"
                className="cta-btn-secondary"
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

export default PaginaPrincipal;