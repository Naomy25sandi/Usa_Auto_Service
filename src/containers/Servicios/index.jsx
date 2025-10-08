import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import "../../styles/servicios.css"
export default function ServicesSection() {
  const services = [
    {
      title: "Mantenimiento Preventivo",
      description:
        "Mantenga su vehículo en óptimas condiciones con inspecciones expertas y ajustes precisos para una longevidad superior.",
    },
    {
      title: "Reparaciones Generales",
      description:
        "Soluciones precisas y duraderas para cualquier avería, utilizando tecnología avanzada y piezas de calidad OEM.",
    },
    {
      title: "Sistemas de Frenos",
      description:
        "Seguridad y rendimiento garantizados con inspección experta, reemplazo de pastillas y fluidos para un frenado impecable.",
    },
    {
      title: "Aire Acondicionado",
      description:
        "Diagnóstico y reparación integral para mantener un confort fresco y eficiente, eliminando fugas y recargando sistemas.",
    },
    {
      title: "Suspensión y Dirección",
      description:
        "Para un viaje cómodo y seguro con alineación experta, reemplazo de amortiguadores y estabilización dinámica.",
    },
    {
      title: "Cambio de Aceite y Filtros",
      description:
        "Rápido, limpio y profesional con aceites premium sintéticos, optimizando el motor para rendimiento máximo.",
    },
  ];

  return (
    <div>
     <Navbar/>
    <section className="services-section">
      <h2 className="services-title">Nuestros Servicios de Elite</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            style={{ animationDelay: `${index * 0.2}s` }} // Delay stagger para secuencial
          >
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
}