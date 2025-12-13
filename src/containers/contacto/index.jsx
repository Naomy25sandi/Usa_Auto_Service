import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import "../../styles/contacto.css";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
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
      <Navbar />

      <main
        className="contact-content"
        role="main"
        aria-label="Contact USA Auto Service"
      >
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className="contact-form__title">
            {t("contact.title")}
          </h1>

          <div className="contact-form__container">
            {/* 👤 Name */}
            <label htmlFor="name" className="contact-form__label">
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
              className={`contact-form__input ${
                errors.name ? "contact-form__input--error" : ""
              }`}
            />
            {errors.name && (
              <p className="contact-form__error">{errors.name}</p>
            )}

            {/* 📧 Email */}
            <label htmlFor="email" className="contact-form__label">
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
              className={`contact-form__input ${
                errors.email ? "contact-form__input--error" : ""
              }`}
            />
            {errors.email && (
              <p className="contact-form__error">{errors.email}</p>
            )}

            {/* 💬 Message */}
            <label htmlFor="message" className="contact-form__label">
              {t("contact.fields.message")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contact.placeholders.message")}
              value={formData.message}
              onChange={handleChange}
              className={`contact-form__textarea ${
                errors.message ? "contact-form__input--error" : ""
              }`}
            />
            {errors.message && (
              <p className="contact-form__error">{errors.message}</p>
            )}

            {/* 🚀 Submit */}
            <button
              type="submit"
              className="contact-form__button"
              disabled={sending}
            >
              {sending ? t("contact.sending") : t("contact.send")}
            </button>

            {/* ✅ Success / Error message (solo si existe) */}
            {successMsg && (
              <p
                id="contact-form-status"
                className="contact-form__success"
                aria-live="polite"
              >
                {successMsg}
              </p>
            )}
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
