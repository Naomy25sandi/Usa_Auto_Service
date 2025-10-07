import React from 'react';
import Footer from "../../components/Footer/index";


function PaginaPrincipal() {
  return (
    <div className="pagina-principal">
      {/* <Navbar/>
      <Hero /> */}
      
      {/* Sección Bienvenida */}
      <header className="header">
        <div className="container">
          <h1 className="neon-title">Bienvenidos a Boldsites</h1>
          <p className="intro-text">
            Transformamos tus ideas en sitios web impactantes que capturan la esencia de tu marca. 
            Con tecnología de punta y un diseño innovador, elevamos tu presencia digital a otro nivel. 
            ¡Descubre cómo podemos hacer crecer tu negocio hoy!
          </p>
        </div>
      </header>

      {/* Servicios */}
      <section className="servicios">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones personalizadas para potenciar tu negocio en el mundo digital.
          </p>
          <ul>
            <li>
              Diseño de Páginas Web
              <span className="descripcion">Creamos sitios modernos, atractivos y funcionales con un enfoque en la experiencia del usuario.</span>
            </li>
            <li>
              Optimización SEO
              <span className="descripcion">Aumentamos tu visibilidad en motores de búsqueda con estrategias avanzadas.</span>
            </li>
            <li>
              Desarrollo Responsivo
              <span className="descripcion">Garantizamos que tu sitio se adapte perfectamente a cualquier dispositivo.</span>
            </li>
            <li>
              Asesoría y Soporte Técnico
              <span className="descripcion">Te acompañamos con soporte continuo para mantener tu web en óptimas condiciones.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sobre nosotros */}
    

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
              <h3>Cartmania</h3>
              <p className="testimonio-text">
                "Boldsites creó un e-commerce ágil y sin back-end, reduciendo significativamente costos y tiempos de desarrollo. Gracias a su optimización SEO de primer nivel, mi negocio ha experimentado un crecimiento exponencial. Estoy muy agradecido por su solución innovadora y efectiva"
              </p>
            </div>
            <div className="testimonio-card">
              <img src="" alt="Cliente 2" />
              <h3>Dirlux</h3>
              <p className="testimonio-text">
            "Boldsites mantiene nuestro sitio web con un enfoque impecable, optimizando la experiencia de usuario y asegurando un rendimiento fluido. Su dedicación al mantenimiento nos permite centrarnos en nuestro negocio mientras nuestro sitio brilla con un diseño moderno y funcional."   
              </p>
            </div>
            <div className="testimonio-card">
               <img src="" alt="Cliente 1" />
              <h3>Granja Cunicula</h3>
              <p className="testimonio-text">
                "Boldsites revolucionó mi granja con una solución web que simplifica la gestión de animales y potencia nuestra productividad. ¡Un gran aliado!"
              </p>
              
            </div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default PaginaPrincipal;