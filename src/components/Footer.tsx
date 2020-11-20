import React from "react";
import "../layout/Footer.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// The Footer Component

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Container className="pt-3">
          {/* The Top Part Of The Footer */}
          <div className="footer-top">
            <div>
              <a href="#!" className="footer-top-link">
                Eğitmen Ol
              </a>
              <a href="#!" className="footer-top-link">
                Paket Satın Al
              </a>
              <a href="#!" className="footer-top-link">
                Destek
              </a>
            </div>
          </div>
          {/* The Bottom Part OF The Footer */}
          <div className="footer-bottom pt-5">
            <p>&copy; 2020 Speakingline</p>
            <div className="footer-bottom-centered-links">
              <p>Gizlilik Sözleşmesi</p>
              <p>Kullanım Koşulları</p>
              <p>Çerez Kullanımı</p>
            </div>
            {/* Social Media Icons */}
            <div className="footer-bottom-social-media">
              <FontAwesomeIcon
                icon={faFacebookF}
                size={"lg"}
                className="footer-icon"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size={"lg"}
                className="footer-icon"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size={"lg"}
                className="footer-icon"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                size={"lg"}
                className="footer-icon"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size={"lg"}
                className="footer-icon"
              />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
