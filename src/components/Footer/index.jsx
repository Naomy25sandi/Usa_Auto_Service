import "../../styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 📝 Derechos reservados */}
        <p>
          © {new Date().getFullYear()} USA Auto-Service – {t("footer.rights")}
        </p>

        {/* 📍 Dirección física optimizada SEO */}
        <address className="footer-address" style={{ fontStyle: "normal" }}>
          1913 10Th Avenue N, Lake Worth, Florida 33461
        </address>

        {/* 🔗 Redes sociales (SEO + accesibilidad) */}
        <div className="footer-socials">
          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
            aria-label="WhatsApp USA Auto Service"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/usa_auto_service_imp_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="Instagram USA Auto Service"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/19A9Xapx5q/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            aria-label="Facebook USA Auto Service"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
