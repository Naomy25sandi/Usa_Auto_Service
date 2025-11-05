// ✅ src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 🌍 Traducciones globales
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
      contact: {
        title: "Contacto USA Auto Service",
        fields: {
          name: "Nombre",
          email: "Correo Electrónico",
          message: "Mensaje",
        },
        placeholders: {
          name: "Tu nombre completo",
          email: "tuemail@ejemplo.com",
          message: "Escribe tu mensaje aquí...",
        },
        send: "Enviar",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito! Gracias 😊",
        error: "Error al enviar:",
        errors: {
          name: "El nombre es obligatorio",
          emailEmpty: "El email es obligatorio",
          emailInvalid: "Email inválido",
          message: "El mensaje es obligatorio",
        },
      },
      promotions: {
        title: "Promociones Especiales",
        subtitle: "Aprovecha nuestras ofertas por tiempo limitado",
        alt1: "Promoción 1",
        alt2: "Promoción 2",
      },
      about: {
        title: "Sobre USA Auto Service",
        subtitle:
          "En nuestro taller, la excelencia no es una meta, es un estándar diario. Cada vehículo que entra a nuestro espacio recibe la misma atención y cuidado que si fuera el nuestro.",
        description:
          "Sabemos que tu auto no es solo un medio de transporte: es parte de tu vida, tu trabajo y tu seguridad. Usamos repuestos de confianza y herramientas especializadas para asegurar reparaciones duraderas. La transparencia, puntualidad y atención personalizada son pilares de nuestro servicio. En USA Auto Service, la excelencia se mide en tu tranquilidad al volante.",
        founder: {
          name: "Noé Sandí",
          role: "Mecánico y CEO de USA Auto Service",
          bio: "Conozca a Noé Sandí, el corazón de USA Auto Service. Con años de experiencia y una pasión inquebrantable por la mecánica automotriz, garantiza diagnósticos precisos, soluciones eficientes y un trato transparente para mantener su vehículo siempre en las mejores manos.",
        },
      },
      services: {
        title: "Nuestros Servicios de Élite",
        list: [
          {
            title: "Mantenimiento Preventivo",
            description:
              "Mantenga su vehículo en óptimas condiciones con inspecciones expertas y ajustes precisos.",
          },
          {
            title: "Reparaciones Generales",
            description:
              "Soluciones precisas y duraderas para cualquier avería con piezas de calidad OEM.",
          },
          {
            title: "Sistemas de Frenos",
            description:
              "Seguridad y rendimiento garantizados con inspección experta y mantenimiento completo.",
          },
          {
            title: "Aire Acondicionado",
            description:
              "Diagnóstico y reparación integral para mantener un confort fresco y eficiente.",
          },
          {
            title: "Suspensión y Dirección",
            description:
              "Para un viaje cómodo y seguro con alineación experta y reemplazo de amortiguadores.",
          },
          {
            title: "Cambio de Aceite y Filtros",
            description:
              "Rápido, limpio y profesional con aceites premium para un rendimiento óptimo.",
          },
        ],
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
      contact: {
        title: "Contact USA Auto Service",
        fields: {
          name: "Name",
          email: "Email",
          message: "Message",
        },
        placeholders: {
          name: "Your full name",
          email: "youremail@example.com",
          message: "Write your message here...",
        },
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully! Thank you 😊",
        error: "Error sending message:",
        errors: {
          name: "Name is required",
          emailEmpty: "Email is required",
          emailInvalid: "Invalid email",
          message: "Message is required",
        },
      },
      promotions: {
        title: "Special Promotions",
        subtitle: "Take advantage of our limited-time offers",
        alt1: "Promotion 1",
        alt2: "Promotion 2",
      },
      about: {
        title: "About USA Auto Service",
        subtitle:
          "In our workshop, excellence is not a goal — it's our daily standard. Every vehicle receives the same care as if it were our own.",
        description:
          "Your car is not just a vehicle; it's part of your life, your work, and your safety. We use trusted parts and specialized tools for lasting repairs. Transparency, punctuality, and personalized attention define our service. At USA Auto Service, excellence is measured by your peace of mind on the road.",
        founder: {
          name: "Noé Sandí",
          role: "Mechanic and CEO of USA Auto Service",
          bio: "Meet Noé Sandí, the heart of USA Auto Service. With years of experience and an unbreakable passion for automotive mechanics, he ensures accurate diagnostics, efficient solutions, and transparent service so your car is always in the best hands.",
        },
      },
      services: {
        title: "Our Elite Services",
        list: [
          {
            title: "Preventive Maintenance",
            description:
              "Keep your vehicle in top shape with expert inspections and precision adjustments.",
          },
          {
            title: "General Repairs",
            description:
              "Precise and durable solutions for any malfunction, using high-quality OEM parts.",
          },
          {
            title: "Brake Systems",
            description:
              "Guaranteed safety and performance with expert inspection and maintenance.",
          },
          {
            title: "Air Conditioning",
            description:
              "Comprehensive diagnosis and repair to keep your ride cool and efficient.",
          },
          {
            title: "Suspension and Steering",
            description:
              "For a smooth and safe drive with professional alignment and shock replacement.",
          },
          {
            title: "Oil and Filter Change",
            description:
              "Fast, clean, and professional with premium oils for maximum performance.",
          },
        ],
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

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 🪄 Hook personalizado
export const useLanguage = () => useContext(LanguageContext);

export default i18n;
