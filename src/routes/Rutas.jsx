import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import Contacto from "../containers/contacto/index";
import Servicios from "../containers/Servicios/index";
import Nosotros from "../../src/containers/Nosotros/index";
// 

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
       <Route path="/servicios" element={<Servicios />} />
       <Route path="/Nosotros" element={<Nosotros />} />
     
      {/* <Route path="/portafolio" element={<Portafoliopage />} />
      <Route path="/contacto" element={<Paginacontact />} />
      <Route path="/nosotros" element={<Nosotros />} /> */}
    </Routes>
  );
}