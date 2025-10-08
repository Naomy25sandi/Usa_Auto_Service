import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import "../../styles/navbar.css";
import Logo from "../../assets/logo-taller.jpg";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [darkMode, setDarkMode] = React.useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [showLang, setShowLang] = React.useState(false);
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'es'); // Carga desde localStorage

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleLang = () => setShowLang(!showLang);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Persiste el idioma
    setShowLang(false);
    // Para cambiar la página: reload simple (o integra i18n.changeLanguage si usas lib)
    window.location.reload(); // Fuerza re-render; en prod, usa context para update sin reload
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {!isHome && (
          <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </button>
        )}

        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Boldsites Logo" />
          <span className="logo-text">USA AUTO SERVICE</span>
        </Link>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">☰</label>

        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Nuevo dropdown de idioma */}
        <div className="language-dropdown">
          <button className="lang-toggle" onClick={toggleLang}>
            <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
              {language === 'es' ? (
                <>
                  <rect width="20" height="5" fill="#AA151B"/>
                  <rect y="5" height="5" fill="#F1BF00"/>
                  <rect y="10" height="5" fill="#AA151B"/>
                </>
              ) : (
                <>
                  <path d="M0,0 v15 h20 v-15 z" fill="#012169"/>
                  <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="1"/>
                  <path d="M0,0 L20,15 M20,0 L0,15" clipPath="url(#t)" stroke="#C8102E" strokeWidth="0.8"/>
                  <path d="M10,0 v15 M0,7.5 h20" stroke="#fff" strokeWidth="2"/>
                  <path d="M10,0 v15 M0,7.5 h20" stroke="#C8102E" strokeWidth="1.2"/>
                </>
              )}
            </svg>
            {language === 'es' ? 'ES' : 'EN'}
          </button>
          {showLang && (
            <ul className="lang-menu">
              <li>
                <button className="lang-option" onClick={() => selectLanguage('es')}>
                  <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
                    <rect width="20" height="5" fill="#AA151B"/>
                    <rect y="5" height="5" fill="#F1BF00"/>
                    <rect y="10" height="5" fill="#AA151B"/>
                  </svg>
                  Español
                </button>
              </li>
              <li>
                <button className="lang-option" onClick={() => selectLanguage('en')}>
                  <svg className="flag-icon" width="20" height="15" viewBox="0 0 20 15">
                    <path d="M0,0 v15 h20 v-15 z" fill="#012169"/>
                    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="1"/>
                    <path d="M0,0 L20,15 M20,0 L0,15" clipPath="url(#t)" stroke="#C8102E" strokeWidth="0.8"/>
                    <path d="M10,0 v15 M0,7.5 h20" stroke="#fff" strokeWidth="2"/>
                    <path d="M10,0 v15 M0,7.5 h20" stroke="#C8102E" strokeWidth="1.2"/>
                  </svg>
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}