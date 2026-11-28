import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from 'lucide-react';
import logo from '../assets/logo.svg';
import { CLINIC_INFO, NAV_LINKS, SERVICES_LIST } from '../data/clinicData';
import './Footer.css';

export default function Footer({ onOpenAppointment, onOpenLegal }) {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#contact' },
    { name: 'Instagram', icon: Instagram, href: '#testimonials' },
    { name: 'LinkedIn', icon: Linkedin, href: '#about' },
  ];

  const quickLinks = [
    ...NAV_LINKS,
    { id: 'testimonials', label: 'Patient Reviews' },
    { id: 'location', label: 'Location & Directions' },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Column 1: Brand Identity, Summary, Socials & Primary CTA */}
          <div className="footer__col footer__brand-col">
            <a
              href="#home"
              className="footer__logo-badge"
              aria-label="Summit Urgent Care Home"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <img src={logo} alt="Summit Urgent Care" className="footer__logo" />
            </a>
            <p className="footer__tagline">{CLINIC_INFO.tagline}</p>
            <p className="footer__summary">{CLINIC_INFO.footerSummary}</p>

            <div className="footer__brand-actions">
              <button
                type="button"
                className="btn btn--red btn--sm footer__cta"
                onClick={() => onOpenAppointment('')}
              >
                <span>Book Appointment</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>

              <div className="footer__socials" aria-label="Clinic social links">
                {socialLinks.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="footer__social-btn"
                      aria-label={item.name}
                      title={item.name}
                      onClick={(e) => scrollToSection(e, item.href.replace('#', ''))}
                    >
                      <IconComp size={15} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__link-list">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer__nav-link"
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    <ChevronRight size={14} className="footer__link-arrow" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Existing Urgent Care Services */}
          <div className="footer__col">
            <h3 className="footer__heading">Our Services</h3>
            <ul className="footer__link-list">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="footer__nav-link"
                    onClick={(e) => scrollToSection(e, 'services')}
                  >
                    <ChevronRight size={14} className="footer__link-arrow" aria-hidden="true" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch (Contact & Hours) */}
          <div className="footer__col">
            <h3 className="footer__heading">Get in Touch</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-icon-box" aria-hidden="true">
                  <Phone size={15} />
                </span>
                <div>
                  <span className="footer__contact-label">Phone</span>
                  <a href={CLINIC_INFO.phoneHref} className="footer__contact-link">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon-box" aria-hidden="true">
                  <Mail size={15} />
                </span>
                <div>
                  <span className="footer__contact-label">Email</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="footer__contact-link">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon-box" aria-hidden="true">
                  <Clock size={15} />
                </span>
                <div>
                  <span className="footer__contact-label">Opening Hours</span>
                  <span>{CLINIC_INFO.hoursShort}</span>
                </div>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon-box" aria-hidden="true">
                  <MapPin size={15} />
                </span>
                <div>
                  <span className="footer__contact-label">Clinic Address</span>
                  <a
                    href="#location"
                    className="footer__contact-link"
                    onClick={(e) => scrollToSection(e, 'location')}
                  >
                    {CLINIC_INFO.addressShort}, {CLINIC_INFO.cityStateZip}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separated Bottom Copyright & Legal Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__bottom-meta">
            <p className="footer__copyright">
              &copy; {CLINIC_INFO.copyrightYear} {CLINIC_INFO.name}. All Rights Reserved.
            </p>
            <p className="footer__disclaimer">
              Non-life-threatening urgent care only. In a medical emergency, call 911.
            </p>
          </div>

          <nav className="footer__legal" aria-label="Legal and site navigation">
            <button
              type="button"
              className="footer__legal-link"
              onClick={() => onOpenLegal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="footer__legal-sep" aria-hidden="true">&middot;</span>
            <button
              type="button"
              className="footer__legal-link"
              onClick={() => onOpenLegal('terms')}
            >
              Terms of Service
            </button>
            <span className="footer__legal-sep" aria-hidden="true">&middot;</span>
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
