import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <img
                className="footer-logo"
                src={footerLogo}
                alt="Little Lemon Logo"
              />
            </div>

            <div className="footer-col footer-menu">
              <h4>Little Lemon</h4>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/login">Login</Link>
              <Link to="/about">awiuqtwqi</Link>
              <Link to="/order">Order</Link>
              <Link to="/booking">Reservations</Link>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1-CHKLl68FYgpiPJPeD3671gDqs4&hl=en_US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Little Lemon 331 E Chicago aSalle Street Chicago, Illinois
                    60602USA
                  </a>
                </li>
                <li>
                  <a href="tel:+55 11 9999-9999" rel="noreferrer">
                    +55 11 9999-9999
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@littlelemon.com" rel="noreferrer">
                    contact@littlelemon.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social Links</h4>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/littlelemon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/littlelemon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/littlelemon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
