import React from 'react';
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import doctorPatientImg from '../assets/doctor-patient.jpg';
import { CLINIC_INFO, WHY_CHOOSE_BENEFITS } from '../data/clinicData';
import './About.css';

export default function About() {
  const scrollToPatientInfo = () => {
    const el = document.getElementById('about-mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="section about reveal-section">
      <div className="container">
        <div className="about__grid">
          {/* Left: Female doctor examining/caring for child */}
          <div className="about__photo-wrap">
            <img
              src={doctorPatientImg}
              alt="Female physician smiling warmly while caring for a young patient at Summit Urgent Care"
              className="about__photo"
            />
          </div>

          {/* Center: Why Choose Us + About Us */}
          <div className="about__content">
            <div className="eyebrow eyebrow--navy">
              <span className="eyebrow__line" aria-hidden="true" />
              <span>YOUR HEALTH, OUR PRIORITY</span>
            </div>

            <h2 className="about__title">Why Choose Summit Urgent Care?</h2>

            <p className="about__desc">
              At Summit Urgent Care, we are committed to providing high-quality,
              compassionate care with convenience in mind.
            </p>

            <ul className="about__list">
              {WHY_CHOOSE_BENEFITS.map((benefit) => (
                <li key={benefit} className="about__list-item">
                  <CheckCircle2
                    size={18}
                    className="about__check-icon"
                    aria-hidden="true"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn--red about__cta"
              onClick={scrollToPatientInfo}
            >
              <span>Learn More</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Right: Light-blue opening-hours card */}
          <aside className="hours-card" aria-label="Clinic opening hours">
            <div className="hours-card__icon-wrap" aria-hidden="true">
              <Clock size={46} strokeWidth={1.9} />
            </div>
            <p className="hours-card__eyebrow">Open 7 Days a Week</p>
            <p className="hours-card__time">{CLINIC_INFO.hoursRange}</p>
            <p className="hours-card__note">Walk-ins Welcome!</p>

            <svg
              className="hours-card__watermark"
              viewBox="0 0 180 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M90 105 C90 105 26 68 26 35 C26 18 39 8 54 8 C66 8 76 15 82 24 C88 15 98 8 110 8 C125 8 138 18 138 35 C138 68 90 105 90 105 Z"
                fill="rgba(255,255,255,0.68)"
              />
              <path
                d="M12 58 H54 L63 40 L73 74 L84 30 L94 64 L102 58 H168"
                stroke="rgba(12,35,72,0.12)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="hours-card__ribbon" aria-hidden="true" />
          </aside>
        </div>

        {/* Concise About Us Commitment Intro */}
        <div id="about-mission" className="about__mission">
          <div className="about__mission-badge">About Summit Urgent Care</div>
          <p className="about__mission-text">
            Founded on the belief that timely healthcare should never require hours in an
            emergency waiting room, Summit Urgent Care combines experienced board-certified
            clinicians, on-site diagnostics, and a welcoming neighborhood environment so
            individuals and families receive attentive, affordable care every day of the week.
          </p>
        </div>
      </div>
    </section>
  );
}
