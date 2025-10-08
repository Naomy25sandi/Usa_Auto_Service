import React from 'react';
import "../../styles/nosotros.css";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";

const Nosotros = () => {
  return (
    <div>
        <Navbar/>
    <section className="nosotros">
      <div className="container">
        <h2 className="section-title">Sobre usa auto service</h2>
        <p className="section-subtitle">
          En nuestro taller, la excelencia no es una meta, es un estándar diario. Cada vehículo que entra a nuestro espacio recibe la misma atención y cuidado que si fuera el nuestro. Sabemos que tu auto no es solo un medio de transporte: es parte de tu vida, tu trabajo y tu seguridad.

        </p>
        <p className="section-description">
    	<strong>Calidad garantizada.</strong> Usamos repuestos de confianza, herramientas especializadas y procesos probados para asegurar reparaciones duraderas y seguras.
		<strong>Transparencia total.</strong> Explicamos cada diagnóstico y reparación con claridad, sin sorpresas ocultas.
		<strong>Atención personalizada.</strong> Escuchamos tus inquietudes, entendemos tus necesidades y buscamos siempre la mejor solución.

El resultado es un servicio automotriz donde la puntualidad, la honestidad y la precisión se convierten en la esencia de nuestro trabajo. No solo reparamos vehículos: restauramos la confianza en cada kilómetro que recorres.

En nuestro taller, la excelencia se mide en tu tranquilidad al volante.
        </p>
        <div className="fundadores">
          <div className="persona">
            <img src="" alt="Javier Solís" />
            <p>Javier Solís<br /><span className="role">Desarrollador Full-Stack</span></p>
            <p className="bio">Apasionado por resolver problemas complejos con código limpio y eficiente. Experto en backend con Django y Node.js, Javier asegura que cada proyecto sea escalable y seguro.</p>
          </div>
          <div className="persona">
            <img src="" alt="Naomy Sandi" />
            <p>Naomy Sandi<br /><span className="role">Desarrollador Full-Stack</span></p>
            <p className="bio">Especialista en interfaces dinámicas con React, Naomy combina creatividad y precisión técnica para crear experiencias de usuario fluidas y atractivas.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Nosotros;