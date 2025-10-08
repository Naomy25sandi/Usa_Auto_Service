// containers/contacto/index.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/index";
import "../../styles/contacto.css"
import Footer from "../../components/Footer/index";

export default function ContactForm() {
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
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";
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

    const serviceID = "service_ke6lebx";
    const templateID = "template_knb4eta";
    const userID = "i3tr2d_Xi2kLCpFy8";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setSuccessMsg("¡Mensaje enviado con éxito! Gracias 😊");
        setFormData({ name: "", email: "", message: "" });
        setSending(false);
      })
      .catch((error) => {
        setSuccessMsg(`Error al enviar: ${error.text || error.message}`);
        setSending(false);
      });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2 className="contact-form__title">Contacto USA Auto Service</h2>
          <div className="contact-form__container">
            <label htmlFor="name" className="contact-form__label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              className={`contact-form__input ${errors.name ? "contact-form__input--error" : ""}`}
            />
            {errors.name && <p className="contact-form__error">{errors.name}</p>}

            <label htmlFor="email" className="contact-form__label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              className={`contact-form__input ${errors.email ? "contact-form__input--error" : ""}`}
            />
            {errors.email && <p className="contact-form__error">{errors.email}</p>}

            <label htmlFor="message" className="contact-form__label">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              className={`contact-form__textarea ${errors.message ? "contact-form__input--error" : ""}`}
            />
            {errors.message && <p className="contact-form__error">{errors.message}</p>}

            <button type="submit" className="contact-form__button" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
            </button>

            {successMsg && <p className="contact-form__success">{successMsg}</p>}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}