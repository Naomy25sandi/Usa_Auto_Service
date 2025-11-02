import React, { useState, useEffect } from "react";
import "../../styles/hero.css";
import Logo from "../../assets/logo-taller.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import { useTranslation } from "react-i18next";

const workImages = [foto1, foto2, foto3];

const Hero = () => {
  const { t } = useTranslation(); // ✅ Hook de traducción global
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % workImages.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-carousel">
        {/* SLIDE */}
        <div className={`carousel-slide ${fade ? "fade-in" : "fade-out"}`}>
          <img
            src={workImages[currentIndex]}
            alt={t("hero.alt")} // ✅ Texto alternativo traducible
            className="slide-image"
          />
        </div>

        {/* LOGO */}
        <div className="slide-logo-overlay">
          <img src={Logo} alt="USA Auto Service Logo" className="small-logo" />

          {/* ✅ Texto de bienvenida traducible */}
          <div className="hero-text">
         
          </div>
        </div>

        {/* INDICADORES */}
        <div className="carousel-indicators">
          {workImages.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
