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

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
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
    { to: "/", icon: <FaHome />, label: t("navbar.home") },
    { to: "/servicios", icon: <FaServicestack />, label: t("navbar.services") },
    { to: "/nosotros", icon: <FaUser />, label: t("navbar.about") },
    { to: "/promociones", icon: <FaTags />, label: t("navbar.promotions") },
    { to: "/contacto", icon: <FaEnvelope />, label: t("navbar.contact") },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown")) setShowLang(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 🔙 Botón volver */}
        {!isHome && (
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        )}

        {/* 🧱 Recuadro metálico que encierra TODO */}
        <div className="navbar-box full-width">
          {/* 🔧 Logo + texto */}
          <Link to="/" className="navbar-logo">
            <img src={Logo} alt="USA Auto Service Logo" />
            <span className="logo-text">USA AUTO SERVICE</span>
          </Link>

          {/* 🌟 Menú mágico */}
          <div className="magic-menu">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Link to={item.to}>
                    <span className="icon">{item.icon}</span>
                    <span className="text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ☀️🌙 Modo oscuro / claro */}
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* 🌍 Selector de idioma */}
          <div className="language-dropdown">
            <button className="lang-toggle" onClick={toggleLang}>
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
              <span className="arrow">▾</span>
            </button>

            {showLang && (
              <ul className="lang-menu">
                <li>
                  <button className="lang-option" onClick={() => selectLanguage("es")}>
                    <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
                      <rect width="20" height="15" fill="#AA151B" />
                      <rect y="4" height="7" width="20" fill="#F1BF00" />
                    </svg>
                    Español
                  </button>
                </li>
                <li>
                  <button className="lang-option" onClick={() => selectLanguage("en")}>
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
