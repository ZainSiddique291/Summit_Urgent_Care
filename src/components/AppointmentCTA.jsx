import React from 'react';
import { Calendar, ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import './AppointmentCTA.css';

export default function AppointmentCTA({ onOpenAppointment }) {
  return (
    <section className="cta-banner-section" aria-label="Book an appointment call to action">
      <div className="container">
        <div className="cta-banner">
          {/* Subtle decorative ECG heartbeat line on right */}
          <svg
            className="cta-banner__ecg"
            viewBox="0 0 260 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 44 H76 L88 22 L100 62 L114 12 L126 52 L135 44 H260"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="cta-banner__left">
            <div className="cta-banner__cal-icon" aria-hidden="true">
              <Calendar size={30} strokeWidth={1.9} />
            </div>
            <div>
              <h2 className="cta-banner__title">Need Care Now?</h2>
              <p className="cta-banner__subtitle">
                Book your appointment online in just a few clicks.
              </p>
            </div>
          </div>

          <div className="cta-banner__center">
            <button
              type="button"
              className="btn btn--red"
              onClick={() => onOpenAppointment('')}
            >
              <Calendar size={17} aria-hidden="true" />
              <span>Book Appointment</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="cta-banner__right">
            <a href={CLINIC_INFO.phoneHref} className="cta-banner__phone-link">
              <span className="cta-banner__phone-icon" aria-hidden="true">
                <Phone size={22} />
              </span>
              <div>
                <span className="cta-banner__phone-label">Or Call Us</span>
                <span className="cta-banner__phone-number">{CLINIC_INFO.phone}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

