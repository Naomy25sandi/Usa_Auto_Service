import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaMoon,
  FaSun,
  FaHome,
  FaServicestack,
  FaUser,
  FaTags,
  FaEnvelope,
} from "react-icons/fa";
import "../../styles/navbar.css";
import Logo from "../../assets/logo-taller.jpg";
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
  const [showLang, setShowLang] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLang = () => setShowLang(!showLang);

  const selectLanguage = (lang) => {
    changeLanguage(lang);
    setShowLang(false);
  };

  const menuItems = [
    { to: "/", icon: <FaHome />, label: t("navbar.home"), title: "USA Auto Service Home" },
    { to: "/servicios", icon: <FaServicestack />, label: t("navbar.services"), title: "Auto Repair Services" },
    { to: "/nosotros", icon: <FaUser />, label: t("navbar.about"), title: "About USA Auto Service" },
    { to: "/promociones", icon: <FaTags />, label: t("navbar.promotions"), title: "Auto Repair Promotions" },
    { to: "/contacto", icon: <FaEnvelope />, label: t("navbar.contact"), title: "Contact USA Auto Service" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown")) setShowLang(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="Main navigation USA Auto Service"
    >
      <div className="navbar-container">
        {/* 🔙 Botón volver */}
        {!isHome && (
          <button
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back to previous page"
          >
            <FaArrowLeft />
          </button>
        )}

        {/* 🧱 Recuadro metálico */}
        <div className="navbar-box full-width">
          {/* 🔧 Logo */}
          <Link
            to="/"
            className="navbar-logo"
            aria-label="USA Auto Service homepage"
            title="USA Auto Service Auto Repair Shop"
          >
            <img
              src={Logo}
              alt="USA Auto Service auto repair shop logo"
            />
            <span className="logo-text">USA AUTO SERVICE IMP/LLC</span>
          </Link>

          {/* 🌟 Menú */}
          <div className="magic-menu">
            <ul>
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.to;

                return (
                  <li
                    key={index}
                    className={activeIndex === index ? "active" : ""}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <Link
                      to={item.to}
                      title={item.title}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="icon">{item.icon}</span>
                      <span className="text">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ☀️🌙 Dark / Light */}
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark or light mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* 🌍 Selector de idioma */}
          <div className={`language-dropdown ${showLang ? "open" : ""}`}>
            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-haspopup="listbox"
              aria-expanded={showLang}
              aria-label="Select language"
            >
              <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
                {language === "es" ? (
                  <>
                    <rect width="20" height="15" fill="#AA151B" />
                    <rect y="4" height="7" width="20" fill="#F1BF00" />
                  </>
                ) : (
                  <>
                    <rect width="20" height="15" fill="#012169" />
                    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="2" />
                    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1" />
                    <path d="M10,0 v15 M0,7.5 h20" stroke="#fff" strokeWidth="3" />
                    <path d="M10,0 v15 M0,7.5 h20" stroke="#C8102E" strokeWidth="2" />
                  </>
                )}
              </svg>
              {language === "es" ? "ES" : "EN"}
            </button>

            {showLang && (
              <ul className="lang-menu visible" role="listbox">
                <li>
                  <button
                    className="lang-option"
                    onClick={() => selectLanguage("es")}
                    aria-label="Switch to Spanish"
                  >
                    <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
                      <rect width="20" height="15" fill="#AA151B" />
                      <rect y="4" height="7" width="20" fill="#F1BF00" />
                    </svg>
                    Español
                  </button>
                </li>
                <li>
                  <button
                    className="lang-option"
                    onClick={() => selectLanguage("en")}
                    aria-label="Switch to English"
                  >
                    <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
                      <rect width="20" height="15" fill="#012169" />
                      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="2" />
                      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1" />
                      <path d="M10,0 v15 M0,7.5 h20" stroke="#fff" strokeWidth="3" />
                      <path d="M10,0 v15 M0,7.5 h20" stroke="#C8102E" strokeWidth="2" />
                    </svg>
                    English
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}