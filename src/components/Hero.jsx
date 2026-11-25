import React from 'react';
import {
  Calendar,
  ArrowRight,
  Footprints,
  Clock,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import heroClinicImg from '../assets/hero-clinic.jpg';
import { HERO_BENEFITS } from '../data/clinicData';
import './Hero.css';

const ICON_MAP = {
  Clock,
  ShieldCheck,
  HeartHandshake,
};

export default function Hero({ onOpenAppointment }) {
  const scrollToWalkIn = () => {
    const el = document.getElementById('patient-info');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-photo-wrap" aria-hidden="true">
        <img
          src={heroClinicImg}
          alt="Modern exterior of Summit Urgent Care clinic"
          className="hero__bg-photo"
        />
        <div className="hero__curve-overlay" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span>FAST. FRIENDLY. RELIABLE</span>
            <span className="hero__eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="hero__title">
            Quality Care
            <br />
            When You <span className="hero__title-accent">Need It Most</span>
          </h1>

          <p className="hero__description">
            Summit Urgent Care provides immediate, professional medical care for
            non-life-threatening injuries and illnesses — no appointment needed!
          </p>

          <div className="hero__buttons">
            <button
              type="button"
              className="btn btn--red"
              onClick={() => onOpenAppointment('')}
            >
              <Calendar size={17} aria-hidden="true" />
              <span>Book Appointment</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="btn btn--outline"
              onClick={scrollToWalkIn}
            >
              <Footprints size={17} aria-hidden="true" />
              <span>Walk-In Today</span>
            </button>
          </div>

          <ul className="hero__benefits">
            {HERO_BENEFITS.map((item) => {
              const IconComp = ICON_MAP[item.icon];
              return (
                <li key={item.id} className="hero__benefit-item">
                  <span className="hero__benefit-icon" aria-hidden="true">
                    <IconComp size={20} strokeWidth={2} />
                  </span>
                  <span className="hero__benefit-label">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile/Tablet visible framed clinic photo */}
        <div className="hero__mobile-media">
          <img
            src={heroClinicImg}
            alt="Summit Urgent Care modern clinic exterior"
            className="hero__mobile-img"
          />
        </div>
      </div>
    </section>
  );
}

