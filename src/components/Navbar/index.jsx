import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft, FaMoon, FaSun, FaBars, FaTimes, FaWhatsapp,
  FaHome, FaWrench, FaUsers, FaTags, FaEnvelope
} from "react-icons/fa";
import "../../styles/navbar.css";
import Logo from "../../assets/logo-nuevo.webp";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Lenguaje/LanguageContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const menuItems = [
    {
      to: "/",
      label: t("navbar.home"),
      title: "USA Auto Service - Taller Mecánico en Lake Worth FL",
      ariaLabel: "Ir a la página principal de USA Auto Service",
      icon: <FaHome aria-hidden="true" />
    },
    {
      to: "/servicios",
      label: t("navbar.services"),
      title: "Servicios de Reparación Automotriz en Lake Worth FL",
      ariaLabel: "Ver servicios de reparación automotriz",
      icon: <FaWrench aria-hidden="true" />
    },
    {
      to: "/Nosotros",
      label: t("navbar.about"),
      title: "Sobre USA Auto Service Import LLC",
      ariaLabel: "Conocer más sobre USA Auto Service",
      icon: <FaUsers aria-hidden="true" />
    },
    {
      to: "/promociones",
      label: t("navbar.promotions"),
      title: "Promociones y Descuentos en Reparación de Autos",
      ariaLabel: "Ver promociones y descuentos disponibles",
      icon: <FaTags aria-hidden="true" />
    },
    {
      to: "/contacto",
      label: t("navbar.contact"),
      title: "Contactar USA Auto Service en Lake Worth FL",
      ariaLabel: "Contactar a USA Auto Service",
      icon: <FaEnvelope aria-hidden="true" />
    },
  ];

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Navegación principal de USA Auto Service"
    >
      <div className="navbar-container">

        {/* BACK BUTTON */}
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Volver a la página anterior"
          style={{ visibility: isHome ? "hidden" : "visible" }}
        >
          <FaArrowLeft aria-hidden="true" />
        </button>

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          title="USA Auto Service Import LLC - Página Principal"
          aria-label="USA Auto Service - Ir al inicio"
        >
          <img
            src={Logo}
            alt="Logo USA Auto Service Import LLC Lake Worth Florida"
            width="54"
            height="54"
          />
          <div className="logo-text-wrap">
            <span className="logo-text">USA AUTO SERVICE</span>
            <span className="logo-sub-text">IMPORT LLC</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="desktop-menu" aria-label="Menú principal">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={index}
                to={item.to}
                title={item.title}
                aria-label={item.ariaLabel}
                aria-current={isActive ? "page" : undefined}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="navbar-actions">

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            title={darkMode ? "Modo claro" : "Modo oscuro"}
          >
            {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>

          <div className="lang-switcher" role="group" aria-label="Seleccionar idioma">
            <button
              className={`lang-btn ${language === "es" ? "active" : ""}`}
              onClick={() => changeLanguage("es")}
              aria-label="Cambiar idioma a Español"
              aria-pressed={language === "es"}
            >ES</button>
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
              aria-label="Change language to English"
              aria-pressed={language === "en"}
            >EN</button>
          </div>

          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-call"
            aria-label="Contactar USA Auto Service por WhatsApp al (754) 366-3591"
            title="WhatsApp USA Auto Service"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          id="mobile-menu"
          role="menu"
          aria-label="Menú móvil de navegación"
        >
          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
            aria-label="Contactar USA Auto Service por WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp — (754) 366-3591
          </a>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={index}
                to={item.to}
                className={`mobile-item ${isActive ? "active" : ""}`}
                aria-label={item.ariaLabel}
                aria-current={isActive ? "page" : undefined}
                role="menuitem"
                onClick={() => setMobileOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}