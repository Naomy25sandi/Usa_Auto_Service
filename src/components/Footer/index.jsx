import "../../styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import BoldsitesLogo from "../../assets/Boldsites-logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Pie de página USA Auto Service"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      <div className="footer-container">

        <p itemProp="name">
          © {new Date().getFullYear()} USA Auto Service Import LLC – {t("footer.rights")}
        </p>

        <address
          className="footer-address"
          style={{ fontStyle: "normal" }}
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          aria-label="Dirección de USA Auto Service"
        >
          <span itemProp="streetAddress">1913 10th Avenue N</span>,{" "}
          <span itemProp="addressLocality">Lake Worth</span>,{" "}
          <span itemProp="addressRegion">Florida</span>{" "}
          <span itemProp="postalCode">33461</span>
        </address>

        <meta itemProp="telephone" content="+1-754-366-3591" />
        <meta itemProp="priceRange" content="$$" />
        <link itemProp="url" href="https://usaautoserviceimport.com" />

        <nav
          className="footer-socials"
          aria-label="Redes sociales de USA Auto Service"
        >
          <a
            href="https://wa.me/17543663591"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
            aria-label="Contactar USA Auto Service por WhatsApp al (754) 366-3591"
            itemProp="sameAs"
            title="WhatsApp USA Auto Service"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/usa_auto_service_imp_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="Perfil de Instagram de USA Auto Service"
            itemProp="sameAs"
            title="Instagram USA Auto Service"
          >
            <FaInstagram aria-hidden="true" />
          </a>

          <a
            href="https://www.facebook.com/share/19A9Xapx5q/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
            aria-label="Página de Facebook de USA Auto Service"
            itemProp="sameAs"
            title="Facebook USA Auto Service"
          >
            <FaFacebook aria-hidden="true" />
          </a>
        </nav>

       <div className="footer-credits">
       <span>{t("footer.madeWith")}</span>
       <FaHeart className="footer-heart" aria-hidden="true" />
       <span>{t("footer.by")}</span>
          <a
            href="https://www.boldsitescr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-boldsites"
            aria-label="Boldsites Costa Rica - Agencia de Desarrollo Web"
            title="Boldsites Costa Rica - Web Development Agency"
          >
            <img
              src={BoldsitesLogo}
              alt="Boldsites Costa Rica logo"
              className="footer-boldsites-logo"
              width="22"
              height="22"
              loading="lazy"
            />
            Boldsites Costa Rica
          </a>
        </div>

      </div>
    </footer>
  );
}