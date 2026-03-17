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
  FaBars,
  FaTimes
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
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ============================= */
  /* DARK MODE                     */
  /* ============================= */

  useEffect(() => {

    localStorage.setItem("darkMode", darkMode);

    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);

  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  /* ============================= */
  /* LANGUAGE                      */
  /* ============================= */

  const toggleLang = () => setShowLang(!showLang);

  const selectLanguage = (lang) => {
    changeLanguage(lang);
    setShowLang(false);
  };

  /* ============================= */
  /* MENU ITEMS                    */
  /* ============================= */

  const menuItems = [
    {
      to: "/",
      icon: <FaHome />,
      label: t("navbar.home"),
      title: "USA Auto Service Home"
    },
    {
      to: "/servicios",
      icon: <FaServicestack />,
      label: t("navbar.services"),
      title: "Auto Repair Services"
    },
    {
      to: "/nosotros",
      icon: <FaUser />,
      label: t("navbar.about"),
      title: "About USA Auto Service"
    },
    {
      to: "/promociones",
      icon: <FaTags />,
      label: t("navbar.promotions"),
      title: "Auto Repair Promotions"
    },
    {
      to: "/contacto",
      icon: <FaEnvelope />,
      label: t("navbar.contact"),
      title: "Contact USA Auto Service"
    }
  ];

  /* ============================= */
  /* CLOSE LANGUAGE CLICK OUTSIDE  */
  /* ============================= */

  useEffect(() => {

    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown")) {
        setShowLang(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);

  }, []);

  /* ============================= */
  /* JSX                           */
  /* ============================= */

  return (

<nav className="navbar" role="navigation">

<div className="navbar-container">

{/* BACK BUTTON */}

{!isHome && (
<button
className="back-button"
onClick={() => navigate(-1)}
aria-label="Go back"
>
<FaArrowLeft />
</button>
)}

{/* LOGO */}

<Link
to="/"
className="navbar-logo"
title="USA Auto Service"
>

<img
src={Logo}
alt="USA Auto Service auto repair shop"
/>

<span className="logo-text">
USA AUTO SERVICE
</span>

</Link>

{/* MAGIC MENU DESKTOP */}

<div className="magic-menu">

<ul>

{menuItems.map((item, index) => {

const isActive = location.pathname === item.to;

return (

<li
key={index}
className={isActive ? "active" : ""}
>

<Link
to={item.to}
title={item.title}
aria-current={isActive ? "page" : undefined}
>

<span className="icon">{item.icon}</span>

<span className="text">
{item.label}
</span>

</Link>

</li>

);

})}

</ul>

</div>

{/* ACTIONS */}

<div className="navbar-actions">

{/* DARK MODE */}

<button
className="theme-toggle"
onClick={toggleDarkMode}
aria-label="Toggle dark mode"
>

{darkMode ? <FaSun /> : <FaMoon />}

</button>

{/* LANGUAGE */}

<div className={`language-dropdown ${showLang ? "open" : ""}`}>

<button
className="lang-toggle"
onClick={toggleLang}
aria-haspopup="listbox"
aria-expanded={showLang}
>

{language === "es" ? "ES" : "EN"}

</button>

{showLang && (

<ul className="lang-menu">

<li>

<button
className="lang-option"
onClick={() => selectLanguage("es")}
>

Español

</button>

</li>

<li>

<button
className="lang-option"
onClick={() => selectLanguage("en")}
>

English

</button>

</li>

</ul>

)}

</div>

{/* MOBILE TOGGLE */}

<button
className="mobile-toggle"
onClick={() => setMobileOpen(!mobileOpen)}
aria-label="Toggle menu"
>

{mobileOpen ? <FaTimes /> : <FaBars />}

</button>

</div>

</div>

{/* MOBILE MENU */}

{mobileOpen && (

<div className="mobile-menu">

{menuItems.map((item, index) => {

const isActive = location.pathname === item.to;

return (

<Link
key={index}
to={item.to}
className={`mobile-item ${isActive ? "active" : ""}`}
onClick={() => setMobileOpen(false)}
>

<span className="icon">{item.icon}</span>

<span>
{item.label}
</span>

</Link>

);

})}

</div>

)}

</nav>

  );
}