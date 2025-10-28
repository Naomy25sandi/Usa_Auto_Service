import "../../styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} USA Auto-Service – Todos los derechos reservados</p>
        <p>Lake Worth, Florida, Estados Unidos</p>

        <div className="footer-socials">
          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/usa_auto_service_imp_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/19A9Xapx5q/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}