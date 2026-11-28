import React from 'react';
import {
  Bandage,
  Stethoscope,
  Syringe,
  FlaskConical,
  HeartPulse,
  BriefcaseMedical,
} from 'lucide-react';
import injuryImg from '../assets/service-injury.jpg';
import illnessImg from '../assets/service-illness.jpg';
import vaccineImg from '../assets/service-vaccine.jpg';
import labImg from '../assets/service-lab.jpg';
import screeningImg from '../assets/service-screening.jpg';
import procedureImg from '../assets/service-procedure.jpg';
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

const SERVICE_IMAGES = {
  injury: injuryImg,
  illness: illnessImg,
  vaccine: vaccineImg,
  lab: labImg,
  screening: screeningImg,
  procedure: procedureImg,
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section section--soft services reveal-section">
      <div className="container">
        <div className="section-header services__header">
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
            const imageSrc = SERVICE_IMAGES[service.imageKey];
            return (
              <button
                key={service.id}
                type="button"
                className="service-card"
                onClick={() => onSelectService(service.title)}
                title={`Book ${service.title}`}
              >
                <div className="service-card__media">
                  <img
                    src={imageSrc}
                    alt={service.imageAlt}
                    className="service-card__img"
                    loading="lazy"
                  />
                </div>

                <div className="service-card__body">
                  <div className="service-card__head">
                    <div className="service-card__icon-box" aria-hidden="true">
                      <IconComp size={20} strokeWidth={2} />
                    </div>
                    <div className="service-card__titles">
                      <h3 className="service-card__title">{service.title}</h3>
                      <span className="service-card__sub">{service.subtitle}</span>
                    </div>
                  </div>
                  <p className="service-card__desc">{service.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
