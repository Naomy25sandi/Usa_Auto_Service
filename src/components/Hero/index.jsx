import React, { useState, useEffect } from "react";
import "../../styles/hero.css";
import Logo from "../../assets/logo-taller.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";

const workImages = [foto1, foto2, foto3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación de aparición suave
    const fadeTimer = setTimeout(() => setIsVisible(true), 200);

    // Carrusel automático cada 4 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % workImages.length);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={`hero ${isVisible ? "fade-in-up" : ""}`}>
      <div className="hero-carousel">
        {workImages.map((imageSrc, index) =>
          imageSrc ? (
            <div
              key={index}
              className={`carousel-slide ${currentIndex === index ? "active" : ""}`}
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Logo en la esquina inferior derecha */}
              <div className="slide-logo-overlay">
                <img src={Logo} alt="USA Auto Service Logo" className="small-logo" />
              </div>
            </div>
          ) : null
        )}

        {/* Indicadores del carrusel (puntitos) */}
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