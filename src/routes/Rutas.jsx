import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import Contacto from "../containers/contacto/index";
import Servicios from "../containers/Servicios/index";
import Nosotros from "../../src/containers/Nosotros/index";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}
