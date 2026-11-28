import React from 'react';
import {
  Bandage,
  Stethoscope,
  Syringe,
  FlaskConical,
  HeartPulse,
  BriefcaseMedical,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import './Services.css';

const SERVICE_ICONS = {
  Bandage,
  Stethoscope,
  Syringe,
  FlaskConical,
  HeartPulse,
  BriefcaseMedical,
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section section--soft services reveal-section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            <span>OUR SERVICES</span>
            <span className="eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="section-title">Comprehensive Urgent Care Services</h2>
          <p className="section-subtitle">
            From minor injuries to common illnesses, we&apos;re here to help you feel better, faster.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES_LIST.map((service) => {
            const IconComp = SERVICE_ICONS[service.icon];
            return (
              <button
                key={service.id}
                type="button"
                className="service-card"
                onClick={() => onSelectService(service.title)}
                title={`Book ${service.title}`}
              >
                <div className="service-card__icon-wrap" aria-hidden="true">
                  <div className="service-card__icon-box">
                    <IconComp size={26} strokeWidth={1.85} />
                  </div>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <span className="service-card__sub">{service.subtitle}</span>
                <p className="service-card__desc">{service.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
