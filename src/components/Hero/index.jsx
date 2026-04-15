import React, { useState, useEffect } from "react";
import "../../styles/hero.css";
import Logo from "../../assets/logo-taller.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";

const workImages = [
  {
    src: foto1,
    alt: "Brake repair service in Miami Florida by certified mechanics",
  },
  {
    src: foto2,
    alt: "Car diagnostics and engine repair in Miami FL auto shop",
  },
  {
    src: foto3,
    alt: "Professional auto maintenance service in Miami Florida workshop",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("fadeOut");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % workImages.length);
        setAnimation("fadeIn");
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* 🔥 CONTENIDO SEO REAL */}
      <div className="hero-content">
        <h1>Auto Repair Shop in Miami | USA Auto Service</h1>

        <p className="hero-description">
          USA Auto Service is a trusted auto repair shop in Miami, Florida.
          We specialize in brake repair, engine diagnostics, oil changes,
          suspension, and complete vehicle maintenance. Our experienced
          mechanics deliver reliable, fast, and affordable automotive solutions.
        </p>

        {/* 🔥 CTA (importante para conversión) */}
        <a href="#contact" className="hero-cta">
          Get a Free Estimate
        </a>
      </div>

      {/* 🔥 IMAGEN PRINCIPAL (LCP optimizado) */}
      <div className="hero-carousel">
        <img
          src={workImages[currentIndex].src}
          alt={workImages[currentIndex].alt}
          loading="eager"
          fetchPriority="high"
          className={`slide-image ${animation}`}
          width="1200"
          height="700"
        />

        {/* 🔥 LOGO (NO lazy en hero) */}
        <div className="logo-overlay">
          <img
            src={Logo}
            alt="USA Auto Service logo - auto repair shop in Miami"
            loading="eager"
            className="hero-logo"
            width="120"
            height="120"
          />
        </div>

        {/* 🔥 INDICADORES ACCESIBLES */}
        <div className="carousel-indicators">
          {workImages.map((_, index) => (
            <button
              key={index}
              aria-label={`View auto repair work example ${index + 1}`}
              aria-current={currentIndex === index}
              className={`indicator ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;