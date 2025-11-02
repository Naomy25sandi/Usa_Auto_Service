import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 🗣 Traducciones globales
const resources = {
  es: {
    translation: {
      hero: {
        title: "Confía en los expertos en mantenimiento automotriz",
        subtitle: "Calidad, confianza y experiencia en cada servicio",
        alt: "Trabajo realizado por USA Auto Service",
      },
      footer: {
        rights: "Todos los derechos reservados",
        location: "Lake Worth, Florida, Estados Unidos",
      },
      navbar: {
        home: "Inicio",
        services: "Servicios",
        about: "Nosotros",
        promotions: "Promociones",
        contact: "Contacto",
      },
      home: {
        loading: "Cargando experiencia...",
        welcomeTitle: "Bienvenidos a USA Auto Service",
        introText:
          "Somos expertos en mantenimiento automotriz, ofreciendo atención profesional y resultados garantizados.",
        servicesTitle: "Nuestros Servicios",
        servicesSubtitle:
          "Ofrecemos un excelente servicio para que tu auto quede en óptimas condiciones.",
        services: {
          maintenance: {
            title: "Mantenimiento Preventivo",
            desc: "Mantenga su vehículo en óptimas condiciones.",
          },
          repairs: {
            title: "Reparaciones Generales",
            desc: "Soluciones precisas y duraderas para cualquier problema.",
          },
          brakes: {
            title: "Frenos",
            desc: "Seguridad y rendimiento garantizados con inspección experta.",
          },
          ac: {
            title: "Aire Acondicionado",
            desc: "Diagnóstico y reparación para mantenerlo fresco.",
          },
          suspension: {
            title: "Suspensión",
            desc: "Para un viaje cómodo y seguro con alineación experta.",
          },
          oil: {
            title: "Cambio de aceite",
            desc: "Rápido, limpio y profesional con aceites premium.",
          },
          diagnostic: {
            title: "Diagnóstico computarizado",
            desc: "Tecnología avanzada para detectar problemas con precisión.",
          },
          tires: {
            title: "Llantas",
            desc: "Venta, instalación y balanceo de llantas nuevas y usadas de calidad.",
          },
        },
        testimonialsTitle: "Testimonios",
        testimonialsSubtitle: "Escucha lo que nuestros clientes dicen sobre nosotros.",
        testimonials: {
          1: "USA Auto Service mantiene nuestros autos con precisión experta, restaurando la suspensión y garantizando seguridad total.",
          2: "Cuidan mi flota de vehículos con un enfoque impecable, optimizando rendimiento y seguridad.",
          3: "Resuelven mis problemas de auto con maestría, equilibrando llantas y aire acondicionado con calidad premium.",
        },
      },
    },
  },
  en: {
    translation: {
      hero: {
        title: "Trust the Experts in Automotive Maintenance",
        subtitle: "Quality, confidence, and experience in every service",
        alt: "Work done by USA Auto Service",
      },
      footer: {
        rights: "All rights reserved",
        location: "Lake Worth, Florida, United States",
      },
      navbar: {
        home: "Home",
        services: "Services",
        about: "About Us",
        promotions: "Promotions",
        contact: "Contact",
      },
      home: {
        loading: "Loading experience...",
        welcomeTitle: "Welcome to USA Auto Service",
        introText:
          "We are automotive maintenance experts, offering professional attention and guaranteed results.",
        servicesTitle: "Our Services",
        servicesSubtitle: "We offer excellent service to keep your car in top condition.",
        services: {
          maintenance: {
            title: "Preventive Maintenance",
            desc: "Keep your vehicle in top condition.",
          },
          repairs: {
            title: "General Repairs",
            desc: "Precise and durable solutions for any problem.",
          },
          brakes: {
            title: "Brakes",
            desc: "Guaranteed safety and performance with expert inspection.",
          },
          ac: {
            title: "Air Conditioning",
            desc: "Diagnosis and repair to keep you cool.",
          },
          suspension: {
            title: "Suspension",
            desc: "For a comfortable and safe ride with expert alignment.",
          },
          oil: {
            title: "Oil Change",
            desc: "Fast, clean, and professional with premium oils.",
          },
          diagnostic: {
            title: "Computer Diagnostics",
            desc: "Advanced technology for precise issue detection.",
          },
          tires: {
            title: "Tires",
            desc: "Sale, installation, and balancing of quality new and used tires.",
          },
        },
        testimonialsTitle: "Testimonials",
        testimonialsSubtitle: "Hear what our customers say about us.",
        testimonials: {
          1: "USA Auto Service keeps our cars running perfectly, restoring suspension and ensuring total safety.",
          2: "They care for my fleet with precision, optimizing performance and reliability.",
          3: "They solve my car issues masterfully, balancing tires and refreshing the A/C for total comfort.",
        },
      },
    },
  },
};

// ⚙️ Inicializar i18next
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

// 🧠 Crear contexto
const LanguageContext = createContext();

// 🔥 Proveedor global del idioma
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  // ✅ Método seguro para cambiar idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 🪄 Hook personalizado
export const useLanguage = () => useContext(LanguageContext);

export default i18n;
