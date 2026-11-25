import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { NAV_LINKS, PATIENT_INFO_SUBLINKS } from '../data/clinicData';
import './Navbar.css';

export default function Navbar({ activeSection, onOpenAppointment }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <a
          href="#home"
          className="navbar__brand"
          aria-label="Summit Urgent Care Home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          <img src={logo} alt="Summit Urgent Care" className="navbar__logo" />
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.id}
                    className="navbar__dropdown-wrap"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`navbar__link navbar__link--btn ${isActive ? 'is-active' : ''}`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => {
                        handleNavClick(link.id);
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={15} className={`navbar__chevron ${dropdownOpen ? 'is-open' : ''}`} />
                    </button>

                    {dropdownOpen && (
                      <div className="navbar__dropdown" role="menu">
                        {PATIENT_INFO_SUBLINKS.map((sub) => (
                          <button
                            key={sub.label}
                            type="button"
                            role="menuitem"
                            className="navbar__dropdown-item"
                            onClick={() => handleNavClick(sub.target)}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`navbar__link ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn--red btn--sm navbar__cta"
            onClick={() => onOpenAppointment('')}
          >
            <Calendar size={16} aria-hidden="true" />
            <span>Book Appointment</span>
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`navbar__mobile ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__mobile-link ${activeSection === link.id ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn--red navbar__mobile-cta"
          onClick={() => {
            setMobileOpen(false);
            onOpenAppointment('');
          }}
        >
          <Calendar size={17} aria-hidden="true" />
          <span>Book Appointment</span>
        </button>
      </div>
    </header>
  );
}

