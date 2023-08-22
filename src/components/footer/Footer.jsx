import { NavLink } from "react-router-dom";
import "./Footer.css";

import FooterSiteLogo from "../../assets/logo.svg";
import FacebookIcon from "../../assets/facebookIcon.png";
import TwitterIcon from "../../assets/twitterIcon.png";
import InstagramIcon from "../../assets/instagramIcon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="top">
          <NavLink to="/" className="footer-site__logo">
            <img
              src={FooterSiteLogo}
              alt="Audiofayl logog"
              width="143"
              height="25"
              className="site-logo__image"
            />
          </NavLink>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <NavLink to="/" className="sitenav__link">
                  Home
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="/headphones" className="sitenav__link">
                  HEADPHONES
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="/speakers" className="sitenav__link">
                  SPEAKERS
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="/earphones" className="sitenav__link">
                  EAROHONES
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="footer-text">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="footer-about__text">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="right">
            <ul className="icons">
              <li className="footer-icons__item">
                <NavLink to="" className="footer-icons__link">
                  <img src={FacebookIcon} alt="facebook icon" />
                </NavLink>
              </li>
              <li className="footer-icons__item">
                <NavLink to="" className="footer-icons__link">
                  <img src={TwitterIcon} alt="facebook icon" />
                </NavLink>
              </li>
              <li className="footer-icons__item">
                <NavLink to="" className="footer-icons__link">
                  <img src={InstagramIcon} alt="facebook icon" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
