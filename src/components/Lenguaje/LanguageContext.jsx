import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      hero: {
        ariaLabel: "Sección principal de USA Auto Service",
        badge: "Reparación Certificada · Lake Worth, FL",
        line1: "Reparación",
        line2: "Automotriz",
        line3: "De Confianza",
        schedule: "Lun–Sáb: 9AM – 7PM",
        address: "1913 10th Ave N, Lake Worth, FL",
        subtitleHero: "Frenos, diagnósticos, A/C, suspensión y mantenimiento completo. La confianza de los conductores del sur de Florida desde 2018.",
        whatsapp: "Escríbenos por WhatsApp",
        whatsappAria: "Contactar USA Auto Service por WhatsApp",
        call: "Llamar Ahora",
        callAria: "Llamar a USA Auto Service ahora",
        stat1: "Años de Experiencia",
        stat2: "Clientes Felices",
        stat3: "Satisfacción",
        topBadge: "⭐ Mejor Calificado en Lake Worth",
        googleReviews: "Reseñas de Google",
        imgAria: "Ver imagen de trabajo número {{number}}",
        img1Alt: "Servicio de frenos en Lake Worth Florida por mecánicos certificados",
        img2Alt: "Diagnóstico de motor y reparación de autos en Miami FL",
        img3Alt: "Servicio profesional de mantenimiento automotriz en Lake Worth Florida",
      },
      footer: {
        rights: "Todos los derechos reservados",
        location: "Lake Worth, Florida, Estados Unidos",
        madeWith: "Hecho con",
        by: "por",
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
        introText: "Somos expertos en mantenimiento automotriz, ofreciendo atención profesional y resultados garantizados.",
        servicesTitle: "Nuestros Servicios",
        servicesSubtitle: "Ofrecemos un excelente servicio para que tu auto quede en óptimas condiciones.",
        services: {
          maintenance: { title: "Mantenimiento Preventivo", desc: "Mantenga su vehículo en óptimas condiciones." },
          repairs: { title: "Reparaciones Generales", desc: "Soluciones precisas y duraderas para cualquier problema." },
          brakes: { title: "Frenos", desc: "Seguridad y rendimiento garantizados con inspección experta." },
          ac: { title: "Aire Acondicionado", desc: "Diagnóstico y reparación para mantenerlo fresco." },
          suspension: { title: "Suspensión", desc: "Para un viaje cómodo y seguro con alineación experta." },
          oil: { title: "Cambio de aceite", desc: "Rápido, limpio y profesional con aceites premium." },
          diagnostic: { title: "Diagnóstico computarizado", desc: "Tecnología avanzada para detectar problemas con precisión." },
          tires: { title: "Llantas", desc: "Venta, instalación y balanceo de llantas nuevas y usadas de calidad." },
        },
        testimonialsTitle: "Testimonios",
        testimonialsSubtitle: "Escucha lo que nuestros clientes dicen sobre nosotros.",
        testimonialsGoogle: "Reseñas verificadas de Google",
        testimonialsFacebook: "Reseñas verificadas de Facebook",
        testimonials: {
          g1: "Noah me brindó un excelente servicio y gran hospitalidad. Me cambió la bomba de agua, correa serpentina y polea en menos de 24 horas a un precio más que razonable. ¡Lo recomiendo al 100%!",
          g2: "Gracias Noa. Llevé mi Honda Odyssey al taller, me lo puso fácil y lo reparó rápidamente a un precio justo. Los recomiendo ampliamente.",
          g3: "¡Excelente trabajo!",
          gservice1: "Diagnóstico · Reparación",
          gservice2: "Reparación General",
          gservice3: "Cliente Verificado",
          gtime1: "Hace 6 meses",
          gtime2: "Hace 1 año",
          gtime3: "Hace 3 años",
          f1: "Llevé mi auto y me ahorró mucho dinero. Otro taller me cobraba más de $6,000 en reparaciones y él lo arregló por solo $260. ¡Gracias por ser tan honesto y confiable!",
          f2: "Uno de los mejores talleres en Palm Beach y Broward. Mi vehículo funciona perfecto y siempre tengo buenos descuentos. ¡100% recomendado!",
          f3: "Este es el mejor servicio de autos en Florida.",
          fservice1: "Reparación de Motor",
          fservice2: "Mantenimiento General",
          fservice3: "Cliente Verificado · Facebook",
          ftime1: "Enero 2026",
          ftime2: "Enero 2026",
          ftime3: "Abril 2024",
        },
        ctaTitle: "¿Listo para agendar tu servicio?",
        ctaSubtitle: "Lun–Sáb: 9AM – 7PM · 1913 10th Ave N, Lake Worth, FL",
        ctaWhatsapp: "Escríbenos por WhatsApp",
        ctaCall: "Llamar Ahora",
      },
      contact: {
        heroSub: "Estamos aquí para ayudarle. Contáctenos cuando lo necesite.",
        formTitle: "Envíenos un Mensaje",
        locationTitle: "Nuestra Ubicación",
        openMap: "Abrir en Google Maps",
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
        badge1: "🔥 Tiempo Limitado",
        badge2: "🏷️ Mejor Precio",
        cta: "Reclamar Oferta",
        note: "* Contáctenos para validar su promoción. Ofertas por tiempo limitado.",
        title: "Promociones Especiales",
        subtitle: "Aprovecha nuestras ofertas por tiempo limitado",
        alt1: "Promoción 1",
        alt2: "Promoción 2",
      },
      about: {
        title: "Sobre USA Auto Service",
        subtitle: "En nuestro taller, la excelencia no es una meta, es un estándar diario. Cada vehículo que entra a nuestro espacio recibe la misma atención y cuidado que si fuera el nuestro.",
        description: "Sabemos que tu auto no es solo un medio de transporte: es parte de tu vida, tu trabajo y tu seguridad. Usamos repuestos de confianza y herramientas especializadas para asegurar reparaciones duraderas. La transparencia, puntualidad y atención personalizada son pilares de nuestro servicio. En USA Auto Service, la excelencia se mide en tu tranquilidad al volante.",
        founder: {
          name: "Noé Sandí",
          role: "Mecánico y CEO de USA Auto Service",
          bio: "Conozca a Noé Sandí, el corazón de USA Auto Service. Con años de experiencia y una pasión inquebrantable por la mecánica automotriz, garantiza diagnósticos precisos, soluciones eficientes y un trato transparente para mantener su vehículo siempre en las mejores manos.",
        },
        valuesTag: "Nuestros Valores",
        valuesTitle: "Lo Que Nos Mueve",
        values: {
          transparency: { title: "Transparencia", desc: "Comunicación clara y honesta en cada diagnóstico y reparación." },
          quality: { title: "Calidad", desc: "Usamos repuestos originales y herramientas especializadas para garantizar resultados." },
          punctuality: { title: "Puntualidad", desc: "Respetamos su tiempo. Entregamos su vehículo cuando lo prometemos." },
          trust: { title: "Confianza", desc: "Más de una década ganándonos la confianza de los conductores del sur de Florida." },
        },
      },
      services: {
        subtitle: "Servicio automotriz profesional para todo tipo de vehículo",
        title: "Nuestros Servicios de Élite",
        list: [
          { title: "Mantenimiento Preventivo", description: "Mantenga su vehículo en óptimas condiciones con inspecciones expertas y ajustes precisos." },
          { title: "Reparaciones Generales", description: "Soluciones precisas y duraderas para cualquier avería con piezas de calidad OEM." },
          { title: "Sistemas de Frenos", description: "Seguridad y rendimiento garantizados con inspección experta y mantenimiento completo." },
          { title: "Aire Acondicionado", description: "Diagnóstico y reparación integral para mantener un confort fresco y eficiente." },
          { title: "Suspensión y Dirección", description: "Para un viaje cómodo y seguro con alineación experta y reemplazo de amortiguadores." },
          { title: "Cambio de Aceite y Filtros", description: "Rápido, limpio y profesional con aceites premium para un rendimiento óptimo." },
        ],
      },
    },
  },
  en: {
    translation: {
      hero: {
        ariaLabel: "USA Auto Service Hero Section",
        badge: "Certified Auto Repair · Lake Worth, FL",
        line1: "Trusted Auto",
        line2: "Repair & Service",
        line3: "In South Florida",
        schedule: "Mon–Sat: 9AM – 7PM",
        address: "1913 10th Ave N, Lake Worth, FL",
        subtitleHero: "Brakes, diagnostics, A/C, suspension & full maintenance. Trusted by South Florida drivers since 2018.",
        whatsapp: "WhatsApp Us",
        whatsappAria: "Contact USA Auto Service on WhatsApp",
        call: "Call Now",
        callAria: "Call USA Auto Service now",
        stat1: "Years in Business",
        stat2: "Happy Clients",
        stat3: "Satisfaction",
        topBadge: "⭐ Top Rated in Lake Worth",
        googleReviews: "Google Reviews",
        imgAria: "View work image number {{number}}",
        img1Alt: "Brake repair service in Lake Worth Florida by certified mechanics",
        img2Alt: "Car diagnostics and engine repair in Miami FL auto shop",
        img3Alt: "Professional auto maintenance service Lake Worth Florida workshop",
      },
      footer: {
        rights: "All rights reserved",
        location: "Lake Worth, Florida, United States",
        madeWith: "Made with",
        by: "by",
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
        introText: "We are automotive maintenance experts, offering professional attention and guaranteed results.",
        servicesTitle: "Our Services",
        servicesSubtitle: "We offer excellent service to keep your car in top condition.",
        services: {
          maintenance: { title: "Preventive Maintenance", desc: "Keep your vehicle in top condition." },
          repairs: { title: "General Repairs", desc: "Precise and durable solutions for any problem." },
          brakes: { title: "Brakes", desc: "Guaranteed safety and performance with expert inspection." },
          ac: { title: "Air Conditioning", desc: "Diagnosis and repair to keep you cool." },
          suspension: { title: "Suspension", desc: "For a comfortable and safe ride with expert alignment." },
          oil: { title: "Oil Change", desc: "Fast, clean, and professional with premium oils." },
          diagnostic: { title: "Computer Diagnostics", desc: "Advanced technology for precise issue detection." },
          tires: { title: "Tires", desc: "Sale, installation, and balancing of quality new and used tires." },
        },
        testimonialsTitle: "Testimonials",
        testimonialsSubtitle: "Hear what our customers say about us.",
        testimonialsGoogle: "Verified Google Reviews",
        testimonialsFacebook: "Verified Facebook Reviews",
        testimonials: {
          g1: "Noah provided excellent customer service and great hospitality. My water pump broke and they replaced it with an OEM part, along with the serpentine belt and pulley, in less than 24 hours at a very reasonable price. 100% recommended!",
          g2: "Thank you Noa. I brought my Honda Odyssey in and they made it easy, repaired it quickly at a fair price. Highly recommend.",
          g3: "Excellent work!",
          gservice1: "Diagnostics · Repair",
          gservice2: "General Repair",
          gservice3: "Verified Customer",
          gtime1: "6 months ago",
          gtime2: "1 year ago",
          gtime3: "3 years ago",
          f1: "I took my car and he saved me a lot of money. Another shop was charging me over $6,000 in repairs and he fixed it for only $260. Thank you for being so honest and reliable!",
          f2: "One of the best and reliable honest shops in Palm Beach and Broward. My vehicle runs perfect and always getting good discounts. 100% recommended!",
          f3: "This is the best service for cars in Florida.",
          fservice1: "Engine Repair",
          fservice2: "General Maintenance",
          fservice3: "Verified Customer · Facebook",
          ftime1: "January 2026",
          ftime2: "January 2026",
          ftime3: "April 2024",
        },
        ctaTitle: "Ready to Book Your Service?",
        ctaSubtitle: "Mon–Sat: 9AM – 7PM · 1913 10th Ave N, Lake Worth, FL",
        ctaWhatsapp: "WhatsApp Us",
        ctaCall: "Call Now",
      },
      contact: {
        heroSub: "We're here to help. Reach out anytime.",
        formTitle: "Send Us a Message",
        locationTitle: "Our Location",
        openMap: "Open in Google Maps",
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
        badge1: "🔥 Limited Time",
        badge2: "🏷️ Best Price",
        cta: "Claim Offer",
        note: "* Contact us to validate your promotion. Limited time offers.",
        title: "Special Promotions",
        subtitle: "Take advantage of our limited-time offers",
        alt1: "Promotion 1",
        alt2: "Promotion 2",
      },
      about: {
        title: "About USA Auto Service",
        subtitle: "In our workshop, excellence is not a goal — it's our daily standard. Every vehicle receives the same care as if it were our own.",
        description: "Your car is not just a vehicle; it's part of your life, your work, and your safety. We use trusted parts and specialized tools for lasting repairs. Transparency, punctuality, and personalized attention define our service. At USA Auto Service, excellence is measured by your peace of mind on the road.",
        founder: {
          name: "Noé Sandí",
          role: "Mechanic and CEO of USA Auto Service",
          bio: "Meet Noé Sandí, the heart of USA Auto Service. With years of experience and an unbreakable passion for automotive mechanics, he ensures accurate diagnostics, efficient solutions, and transparent service so your car is always in the best hands.",
        },
        valuesTag: "Our Values",
        valuesTitle: "What Drives Us",
        values: {
          transparency: { title: "Transparency", desc: "Clear and honest communication in every diagnosis and repair." },
          quality: { title: "Quality", desc: "We use OEM parts and specialized tools to guarantee results." },
          punctuality: { title: "Punctuality", desc: "We respect your time. Your vehicle is delivered when promised." },
          trust: { title: "Trust", desc: "Over a decade earning the trust of South Florida drivers." },
        },
      },
      services: {
        subtitle: "Professional automotive care for every make and model",
        title: "Our Elite Services",
        list: [
          { title: "Preventive Maintenance", description: "Keep your vehicle in top shape with expert inspections and precision adjustments." },
          { title: "General Repairs", description: "Precise and durable solutions for any malfunction, using high-quality OEM parts." },
          { title: "Brake Systems", description: "Guaranteed safety and performance with expert inspection and maintenance." },
          { title: "Air Conditioning", description: "Comprehensive diagnosis and repair to keep your ride cool and efficient." },
          { title: "Suspension and Steering", description: "For a smooth and safe drive with professional alignment and shock replacement." },
          { title: "Oil and Filter Change", description: "Fast, clean, and professional with premium oils for maximum performance." },
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

const LanguageContext = createContext();

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

export const useLanguage = () => useContext(LanguageContext);

export default i18n;