import React from "react";
import Footer from "../../components/Footer/index";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import "../../styles/home.css";

function PaginaPrincipal() {
  return (
    <div className="pagina-principal">
      <Navbar />
      <Hero />

      {/* 🔥 HERO SEO */}
      <header className="header">
        <div className="container">
          <h1>Auto Repair Shop in Miami | USA Auto Service</h1>

          <p className="intro-text">
            USA Auto Service is a trusted auto repair shop in Miami offering
            professional brake repair, engine diagnostics, oil changes,
            suspension services, and complete car maintenance. Our experienced
            mechanics deliver reliable, fast, and affordable automotive solutions.
          </p>
        </div>
      </header>

      {/* 🔥 SERVICIOS */}
      <section className="servicios">
        <div className="container">
          <h2>Auto Repair Services in Miami</h2>

          <p className="section-subtitle">
            We provide a wide range of professional automotive services in Miami
            to keep your vehicle running at its best.
          </p>

          <ul>
            <li>
              <strong>Brake Repair in Miami:</strong> Complete brake inspection,
              repair, and replacement services for your safety.
            </li>

            <li>
              <strong>Engine Diagnostics:</strong> Advanced diagnostics to detect
              and fix engine issues quickly and efficiently.
            </li>

            <li>
              <strong>Oil Change Service:</strong> Fast and affordable oil changes
              to keep your engine in optimal condition.
            </li>

            <li>
              <strong>AC Repair:</strong> Professional air conditioning repair to
              keep your car cool in Miami’s heat.
            </li>

            <li>
              <strong>Suspension Repair:</strong> Improve ride comfort and vehicle
              stability with expert suspension services.
            </li>

            <li>
              <strong>Tire Services:</strong> Tire replacement, balancing, and
              alignment for maximum performance.
            </li>
          </ul>
        </div>
      </section>

     

      {/* 🔥 TESTIMONIOS (SEO + CONVERSIÓN) */}
      <section className="testimonios">
        <div className="container">
          <h2>Customer Reviews</h2>

          <p className="section-subtitle">
            See why our customers trust USA Auto Service in Miami.
          </p>

          <div className="testimonio-cards">
            <div className="testimonio-card">
              <h3>Sophia Paradela</h3>
              <p className="testimonio-text">
                Excellent service! The best auto repair shop in Miami. Fast,
                reliable, and very professional mechanics.
              </p>
            </div>

            <div className="testimonio-card">
              <h3>Andrés Ramires</h3>
              <p className="testimonio-text">
                They diagnosed my car problem quickly and fixed it the same day.
                Highly recommended if you need a trusted mechanic in Miami.
              </p>
            </div>

            <div className="testimonio-card">
              <h3>Phillipe Johnson</h3>
              <p className="testimonio-text">
                Great experience. Honest pricing and excellent customer service.
                Definitely my go-to auto repair shop in Miami.
              </p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}

export default PaginaPrincipal;