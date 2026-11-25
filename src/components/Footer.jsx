import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import logo from '../assets/logo.svg';
import { CLINIC_INFO } from '../data/clinicData';
import './Footer.css';

export default function Footer({ onOpenAppointment, onOpenLegal }) {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#contact' },
    { name: 'Google Profile', icon: Globe, href: '#location' },
    { name: 'Instagram', icon: Instagram, href: '#testimonials' },
    { name: 'LinkedIn', icon: Linkedin, href: '#about' },
    { name: 'YouTube', icon: Youtube, href: '#services' },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__inner">
          {/* Left: Logo + Tagline + Socials */}
          <div className="footer__brand-col">
            <a href="#home" className="footer__logo-badge" aria-label="Summit Urgent Care Home">
              <img src={logo} alt="Summit Urgent Care" className="footer__logo" />
            </a>
            <p className="footer__tagline">{CLINIC_INFO.tagline}</p>

            <div className="footer__socials" aria-label="Social media links">
              {socialLinks.map((item) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="footer__social-btn"
                    aria-label={item.name}
                    title={item.name}
                  >
                    <IconComp size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Address, Phone, Email, CTA */}
          <div className="footer__contact-col">
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <MapPin size={17} className="footer__contact-icon" aria-hidden="true" />
                <span>
                  {CLINIC_INFO.addressShort},<br />
                  {CLINIC_INFO.cityStateZip}
                </span>
              </li>
              <li className="footer__contact-item">
                <Phone size={17} className="footer__contact-icon" aria-hidden="true" />
                <a href={CLINIC_INFO.phoneHref}>{CLINIC_INFO.phone}</a>
              </li>
              <li className="footer__contact-item">
                <Mail size={17} className="footer__contact-icon" aria-hidden="true" />
                <a href={`mailto:${CLINIC_INFO.email}`}>{CLINIC_INFO.email}</a>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn--red btn--sm footer__cta"
              onClick={() => onOpenAppointment('')}
            >
              <span>Book Appointment</span>
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer__bottom">
        <svg
          className="footer__ecg"
          viewBox="0 0 220 50"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 28 H65 L75 13 L85 40 L96 6 L106 33 L114 28 H220"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {CLINIC_INFO.copyrightYear} {CLINIC_INFO.name}. All Rights Reserved.
          </p>

          <nav className="footer__legal" aria-label="Legal and site navigation">
            <button
              type="button"
              className="footer__legal-link"
              onClick={() => onOpenLegal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="footer__legal-sep" aria-hidden="true">|</span>
            <button
              type="button"
              className="footer__legal-link"
              onClick={() => onOpenLegal('terms')}
            >
              Terms of Service
            </button>
            <span className="footer__legal-sep" aria-hidden="true">|</span>
            <button
              type="button"
              className="footer__legal-link"
              onClick={() => onOpenLegal('sitemap')}
            >
              Sitemap
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}

