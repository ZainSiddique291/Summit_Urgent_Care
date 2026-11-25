import React from 'react';
import { ClipboardList, IdCard, CreditCard, Check } from 'lucide-react';
import { PATIENT_INFO_CARDS } from '../data/clinicData';
import './PatientInfo.css';

const INFO_ICONS = {
  ClipboardList,
  IdCard,
  CreditCard,
};

export default function PatientInfo({ onOpenAppointment }) {
  return (
    <section id="patient-info" className="section patient-info">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            <span>PATIENT INFORMATION</span>
            <span className="eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="section-title">Preparing for Your Visit</h2>
          <p className="section-subtitle">
            Everything you need for a smooth, stress-free urgent care experience — whether
            you walk in or book ahead.
          </p>
        </div>

        <div className="patient-info__grid">
          {PATIENT_INFO_CARDS.map((card) => {
            const IconComp = INFO_ICONS[card.icon];
            return (
              <article key={card.id} className="info-card">
                <div className="info-card__header">
                  <div className="info-card__icon" aria-hidden="true">
                    <IconComp size={24} strokeWidth={1.9} />
                  </div>
                  <h3 className="info-card__title">{card.title}</h3>
                </div>
                <ul className="info-card__list">
                  {card.items.map((item) => (
                    <li key={item} className="info-card__item">
                      <Check size={16} className="info-card__check" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="patient-info__banner">
          <p className="patient-info__banner-text">
            <strong>Walk-In Friendly:</strong> No referral required. Check in at our front
            desk any day between <strong>8 AM and 8 PM</strong>, or save your spot online.
          </p>
          <button
            type="button"
            className="btn btn--navy btn--sm"
            onClick={() => onOpenAppointment('Walk-In / Check-In')}
          >
            Reserve a Time Slot
          </button>
        </div>
      </div>
    </section>
  );
}

