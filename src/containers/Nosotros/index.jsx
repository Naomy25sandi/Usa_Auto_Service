import React from 'react';
import "../../styles/nosotros.css";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import Foto from "../../assets/foto-noe.jpg";

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <section className="nosotros">
        <div className="container">
          <h2 className="section-title">Sobre USA Auto Service</h2>

          <p className="section-subtitle">
            En nuestro taller, la excelencia no es una meta, es un estándar diario. 
            Cada vehículo que entra a nuestro espacio recibe la misma atención y cuidado 
            que si fuera el nuestro. Sabemos que tu auto no es solo un medio de transporte: 
            es parte de tu vida, tu trabajo y tu seguridad.
          </p>

          <p className="section-description">
            <strong>Calidad garantizada.</strong> Usamos repuestos de confianza, herramientas especializadas 
            y procesos probados para asegurar reparaciones duraderas y seguras. <br />
            <strong>Transparencia total.</strong> Explicamos cada diagnóstico y reparación con claridad, 
            sin sorpresas ocultas. <br />
            <strong>Atención personalizada.</strong> Escuchamos tus inquietudes, entendemos tus necesidades 
            y buscamos siempre la mejor solución. <br /><br />
            El resultado es un servicio automotriz donde la puntualidad, la honestidad y la precisión se convierten 
            en la esencia de nuestro trabajo. No solo reparamos vehículos: restauramos la confianza en cada kilómetro 
            que recorres. <br /><br />
            En nuestro taller, la excelencia se mide en tu tranquilidad al volante.
          </p>

          <div className="fundadores">
            <div className="persona-wrapper">
              <div className="persona">
                <img src={Foto} alt="Noé Sandí Quirós" />
                <p>Noé Sandí<br />
                  <span className="role">Mecánico y CEO de USA Auto Service</span>
                </p>
                <p className="bio">
                  Conozca a Noé Sandí, el corazón de USA Auto Service. Con años de experiencia 
                  y una pasión inquebrantable por la mecánica automotriz, garantiza un servicio 
                  técnico de la más alta calidad. Su compromiso es ofrecer diagnósticos precisos, 
                  soluciones eficientes y un trato transparente para que su vehículo siempre esté 
                  en las mejores manos. Confíe en un experto que prioriza la seguridad y la excelencia 
                  en cada reparación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Nosotros;
