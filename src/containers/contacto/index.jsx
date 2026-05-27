import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import "../../styles/contacto.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.errors.name");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.emailEmpty");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }
    if (!formData.message.trim()) newErrors.message = t("contact.errors.message");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    const serviceID = "service_5kyf60m";
    const templateID = "template_x1s34yz";
    const publicKey = "9JrrztGAf0rTsGWwL";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString("es-CR", {
        weekday: "long", year: "numeric", month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit",
      }),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSuccessMsg(t("contact.success"));
        setFormData({ name: "", email: "", message: "" });
        setSending(false);
      })
      .catch((error) => {
        setSuccessMsg(`${t("contact.error")} ${error.text || error.message}`);
        setSending(false);
      });
  };

  return (
    <div className="contact-page">

      <Helmet>
        <title>Contacto | USA Auto Service - Lake Worth, FL</title>
        <meta name="description" content="Contáctenos para agendar su servicio automotriz en USA Auto Service, Lake Worth Florida. Llámenos al (754) 366-3591 o escríbanos por WhatsApp." />
        <link rel="canonical" href="https://usaautoserviceimport.com/contacto" />
        <meta property="og:title" content="Contacto | USA Auto Service Lake Worth FL" />
        <meta property="og:description" content="Contáctenos para agendar su servicio. Teléfono, WhatsApp y ubicación en Lake Worth, Florida." />
        <meta property="og:url" content="https://usaautoserviceimport.com/contacto" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <div className="contact-hero" aria-label="Encabezado de página de contacto">
        <div className="contact-hero-bg" aria-hidden="true" />
        <div className="contact-hero-content">
          <span className="contact-hero-tag">USA Auto Service</span>
          <h1 className="contact-hero-title">{t("contact.title")}</h1>
          <div className="contact-hero-line" aria-hidden="true" />
          <p className="contact-hero-sub">{t("contact.heroSub")}</p>
        </div>
      </div>

      {/* INFO STRIP */}
      <div
        className="contact-info-strip"
        aria-label="Información de contacto de USA Auto Service"
      >
        <div className="contact-info-container">

          <a
            href="tel:+17543663591"
            className="contact-info-item"
            aria-label="Llamar a USA Auto Service al (754) 366-3591"
            title="Llamar a USA Auto Service"
          >
            <FaPhone className="contact-info-icon" aria-hidden="true" />
            <span>(754) 366-3591</span>
          </a>

          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-item"
            aria-label="Contactar USA Auto Service por WhatsApp al (754) 366-3591"
            title="WhatsApp USA Auto Service"
          >
            <FaWhatsapp className="contact-info-icon" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <div
            className="contact-info-item"
            aria-label="Horario de atención: Lunes a Sábado 9AM a 7PM"
          >
            <FaClock className="contact-info-icon" aria-hidden="true" />
            <span>{t("hero.schedule")}</span>
          </div>

          <div
            className="contact-info-item"
            aria-label="Dirección: 1913 10th Ave N, Lake Worth, Florida"
          >
            <FaMapMarkerAlt className="contact-info-icon" aria-hidden="true" />
            <span>1913 10th Ave N, Lake Worth, FL</span>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <main
        className="contact-main"
        role="main"
        aria-label="Formulario de contacto y ubicación de USA Auto Service"
      >
        <div className="contact-container">
          <div className="contact-grid">

            {/* FORM */}
            <div className="contact-form-wrap">
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario para enviar mensaje a USA Auto Service"
              >
                <h2 className="contact-form-title">
                  {t("contact.formTitle")}
                </h2>

                <div className="contact-field">
                  <label htmlFor="name" className="contact-label">
                    {t("contact.fields.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("contact.placeholders.name")}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`contact-input ${errors.name ? "contact-input--error" : ""}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="contact-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="email" className="contact-label">
                    {t("contact.fields.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("contact.placeholders.email")}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`contact-input ${errors.email ? "contact-input--error" : ""}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="contact-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="message" className="contact-label">
                    {t("contact.fields.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.placeholders.message")}
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`contact-textarea ${errors.message ? "contact-input--error" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="contact-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={sending}
                  aria-label={sending ? "Enviando mensaje, por favor espere..." : "Enviar mensaje a USA Auto Service"}
                  aria-busy={sending}
                >
                  {sending ? t("contact.sending") : t("contact.send")}
                </button>

                {successMsg && (
                  <p
                    className="contact-success"
                    aria-live="polite"
                    role="status"
                  >
                    {successMsg}
                  </p>
                )}

              </form>
            </div>

            {/* MAP */}
            <div
              className="contact-map-wrap"
              aria-label="Ubicación de USA Auto Service en el mapa"
            >
              <h2 className="contact-map-title">
                {t("contact.locationTitle")}
              </h2>

              <div className="contact-map-frame">
                <iframe
                  src="https://www.google.com/maps?q=1913+10th+Avenue+N+Lake+Worth+Florida+33461&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de USA Auto Service Import LLC en Lake Worth, Florida"
                  aria-label="Mapa de Google con la ubicación de USA Auto Service en 1913 10th Ave N, Lake Worth, FL"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                />
              </div>

              <a
                href="https://www.google.com/maps?q=1913+10th+Avenue+N+Lake+Worth+Florida+33461"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-btn"
                aria-label="Abrir ubicación de USA Auto Service en Google Maps"
                title="Ver USA Auto Service en Google Maps - 1913 10th Ave N, Lake Worth FL"
              >
                {t("contact.openMap")}
              </a>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}