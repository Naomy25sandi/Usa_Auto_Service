import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import "../../styles/home.css";
import Logo from "../../assets/Boldsites-logo.png";

function PaginaPrincipal() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000 ); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pagina-principal">
      {/* Modal de bienvenida */}
      {showModal && (
        <div className="welcome-modal">
          <div className="welcome-content">
            <h1 className="welcome-title">USA AUTO SERVICE</h1>
            <p className="boldsites-text">By <span>Boldsites</span></p>
            <img src={Logo} alt="Boldsites Logo" className="boldsites-logo" />
            <p className="welcome-subtitle">Cargando experiencia...</p>
            <div className="loader"></div>
          </div>
        </div>
      )}

      {!showModal && (
        <>
          <Navbar />
          <Hero />

          {/* Sección Bienvenida */}
          <header className="header">
            <div className="container">
              <h1 className="neon-title">Bienvenidos a USA Auto Service</h1>
              <p className="intro-text">
             
              </p>
            </div>
          </header>

          {/* Servicios */}
          <section className="servicios">
            <div className="container">
              <h2 className="section-title">Nuestros Servicios</h2>
              <p className="section-subtitle">
                Ofrecemos un excelente servicio para que tu auto quede en óptimas condiciones.
              </p>
              <ul>
                <li>
                  Mantenimiento Preventivo:
                  <span className="descripcion"> Mantenga su vehículo en óptimas condiciones.</span>
                </li>
                <li>
                  Reparaciones Generales:
                  <span className="descripcion">Soluciones precisas y duraderas para cualquier problema.</span>
                </li>
                <li>
                  Frenos:
                  <span className="descripcion">Seguridad y rendimiento garantizados con inspección experta.</span>
                </li>
                <li>
                  Aire Acondicionado:
                  <span className="descripcion">Diagnóstico y reparación para mantenerlo fresco.</span>
                </li>
                <li>
                  Suspensión:
                  <span className="descripcion">Para un viaje cómodo y seguro con alineación experta.</span>
                </li>
                <li>
                  Cambio de aceite:
                  <span className="descripcion">Rápido, limpio y profesional con aceites premium.</span>
                </li>
                <li>
                  Diagnóstico computarizado:
                  <span className="descripcion">Tecnología avanzada para detectar problemas con precisión.</span>
                </li>
                <li>
                  Llantas:
                  <span className="descripcion">Venta, instalación y balanceo de llantas nuevas y usadas de calidad.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Testimonios */}
          <section className="testimonios">
            <div className="container">
              <h2 className="section-title">Testimonios</h2>
              <p className="section-subtitle">
                Escucha lo que nuestros clientes dicen sobre nosotros.
              </p>
              <div className="testimonio-cards">
                <div className="testimonio-card">
                  <img src="" alt="Cliente 3" />
                  <h3>Anastasia McLemar</h3>
                  <p className="testimonio-text">
                    "USA Auto Service mantiene nuestros dos autos familiares con precisión experta, diagnosticando fallos computarizados y restaurando la suspensión para viajes seguros con los niños..."
                  </p>
                </div>
                <div className="testimonio-card">
                  <img src="" alt="Cliente 2" />
                  <h3>Benito Ramires</h3>
                  <p className="testimonio-text">
                    "USA Auto Service cuida mi flota de vehículos con un enfoque impecable, optimizando el rendimiento y asegurando una seguridad total en cada ruta..."
                  </p>
                </div>
                <div className="testimonio-card">
                  <img src="" alt="Cliente 1" />
                  <h3>Phillipe Jhonson</h3>
                  <p className="testimonio-text">
                    "USA Auto Service resuelve mis problemas de auto con maestría, equilibrando llantas y refrescando el aire acondicionado para un confort total..."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

export default PaginaPrincipal;
