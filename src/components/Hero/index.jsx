import React, { useState, useEffect } from "react";
import "../../styles/hero.css";
import Logo from "../../assets/logo-taller.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import { useTranslation } from "react-i18next";

const workImages = [
  {
    src: foto1,
    alt: "Professional auto repair service in Lake Worth Florida – example work 1",
  },
  {
    src: foto2,
    alt: "Certified auto mechanics performing vehicle maintenance – example work 2",
  },
  {
    src: foto3,
    alt: "Trusted auto repair shop servicing cars in Lake Worth FL – example work 3",
  },
];

const Hero = () => {
  useTranslation(); // ← FIX: No warning

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("fadeInSlide");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("fadeOutSlide");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % workImages.length);
        setAnimation("fadeInSlide");
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      aria-label="USA Auto Service auto repair shop in Lake Worth Florida"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* 🔹 SEO invisible pero poderoso */}
      <meta itemProp="name" content="USA Auto Service" />
      <meta
        itemProp="description"
        content="Professional auto repair shop in Lake Worth, Florida specializing in diagnostics, maintenance, and mechanical repairs."
      />
      <meta itemProp="areaServed" content="Lake Worth, Florida" />

      <div className="hero-carousel">
        <figure
          className={`carousel-slide ${animation}`}
          itemProp="image"
        >
          <img
            src={workImages[currentIndex].src}
            alt={workImages[currentIndex].alt}
            loading="eager"
            fetchPriority="high"
            className="slide-image"
          />
        </figure>

        <div className="slide-logo-overlay" aria-hidden="false">
          <img
            src={Logo}
            alt="USA Auto Service official auto repair shop logo"
            className="small-logo"
            loading="lazy"
            width="160"
            height="160"
          />
        </div>

        <nav
          className="carousel-indicators"
          role="tablist"
          aria-label="Change auto repair service image"
        >
          {workImages.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={`Show auto repair example ${index + 1}`}
              tabIndex={0}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Hero;
