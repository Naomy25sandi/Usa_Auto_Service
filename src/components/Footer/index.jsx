import "../../styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="footer"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      <div className="footer-container">

        {/* 📝 Derechos reservados */}
        <p itemProp="name">
          © {new Date().getFullYear()} USA Auto-Service – {t("footer.rights")}
        </p>

        {/* 📍 Dirección física optimizada SEO */}
        <address
          className="footer-address"
          style={{ fontStyle: "normal" }}
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">
            1913 10Th Avenue N
          </span>,{" "}
          <span itemProp="addressLocality">
            Lake Worth
          </span>,{" "}
          <span itemProp="addressRegion">
            Florida
          </span>{" "}
          <span itemProp="postalCode">
            33461
          </span>
        </address>

        {/* 📞 Teléfono para SEO local */}
        <meta itemProp="telephone" content="+1-754-366-3591" />

        {/* 🔗 Redes sociales (SEO + accesibilidad) */}
        <div className="footer-socials">
          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
            aria-label="Contact USA Auto Service via WhatsApp"
            itemProp="sameAs"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/usa_auto_service_imp_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="USA Auto Service Instagram profile"
            itemProp="sameAs"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/19A9Xapx5q/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            aria-label="USA Auto Service Facebook page"
            itemProp="sameAs"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
