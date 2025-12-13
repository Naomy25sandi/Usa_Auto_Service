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
    if (!formData.email.trim()) newErrors.email = t("contact.errors.emailEmpty");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t("contact.errors.emailInvalid");
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
    const templateID = "template_x1s34yz"; // 🔥 TEMPLATE DE ACG
    const publicKey = "9JrrztGAf0rTsGWwL";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString("en-US", {
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
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2 className="contact-form__title">{t("contact.title")}</h2>

          <div className="contact-form__container">
            <label htmlFor="name">{t("contact.fields.name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}

            <label htmlFor="email">{t("contact.fields.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}

            <label htmlFor="message">{t("contact.fields.message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            />
            {errors.message && <p className="error-msg">{errors.message}</p>}

            <button type="submit" disabled={sending}>
              {sending ? t("contact.sending") : t("contact.send")}
            </button>

            {successMsg && <p className="success-msg">{successMsg}</p>}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
