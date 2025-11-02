import "../../styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} USA Auto-Service – {t("footer.rights")}
        </p>
        <p>{t("footer.location")}</p>

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
