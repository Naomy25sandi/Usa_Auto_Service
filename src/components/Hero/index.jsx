import React, { useState, useEffect } from "react";
import '../../styles/hero.css';

// Mueve phrases fuera del componente
const phrases = ["Sitios web modernos", "Diseño responsivo", "SEO optimizado"];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        setCurrentText(phrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === phrase.length) {
          deleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setCurrentText(phrase.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 50 : 120);
    };

    type();

    const cursorBlink = setInterval(
      () => setCursorVisible((prev) => !prev),
      500
    );

    setTimeout(() => setIsVisible(true), 200);

    return () => clearInterval(cursorBlink);
  }, []); // Remueve phrases del array de dependencias, ya que ahora es estable

  // Detecta si estamos en modo claro revisando <html class="light">
  const isLightMode = document.documentElement.classList.contains("light");

  return (
    <section className="hero">
      <div className="hero-content">
        <h1
          className={`${isVisible ? "fade-in-up neon-text" : ""}`}
          style={{
            color: isLightMode ? "#000" : "", // negro en modo claro
          }}
        >
          {currentText}
          {cursorVisible && <span className="cursor">|</span>}
        </h1>

        <p
          className={isVisible ? "fade-in-up delay-1 pulse-text" : ""}
          style={{
            color: isLightMode ? "#000" : "#B0C4DE", // negro en claro, azul clarito en oscuro
          }}
        >
          En <span className="boldsites">Boldsites</span>, diseñamos páginas
          modernas, rápidas y optimizadas para SEO que impulsan tu negocio.
        </p>
      </div>
    </section>
  );
};

export default Hero;