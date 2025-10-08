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

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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
      </div>
    </nav>
  );
}