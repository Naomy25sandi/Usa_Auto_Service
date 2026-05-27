import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../containers/Home/index";
import Contacto from "../containers/contacto/index";
import Servicios from "../containers/Servicios/index";
import Nosotros from "../../src/containers/Nosotros/index";
import PromocionesPage from "../containers/PromocionesPage/index";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  }, [pathname]);
  return null;
}

export default function Rutas() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/promociones" element={<PromocionesPage />} />
      </Routes>
    </BrowserRouter>
  );
}