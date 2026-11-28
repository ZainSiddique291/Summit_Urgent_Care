import React from 'react';
import { MapPin, Navigation, Clock, Phone, Car, Train } from 'lucide-react';
import { CLINIC_INFO, LOCATION_DETAILS } from '../data/clinicData';
import './Location.css';

export default function Location() {
  return (
    <section id="location" className="section location reveal-section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            <span>OUR LOCATION</span>
            <span className="eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="section-title">Visit Summit Urgent Care</h2>
          <p className="section-subtitle">
            Conveniently located for easy walk-in access, public transit, and patient drop-off.
          </p>
        </div>

        <div className="location__grid">
          {/* Interactive Illustrated Street Map Card */}
          <div className="location-map" role="region" aria-label="Sample clinic street map">
            <svg
              viewBox="0 0 640 360"
              className="location-map__svg"
              aria-hidden="true"
            >
              <rect width="640" height="360" fill="#eef4fc" />
              <rect x="30" y="25" width="160" height="110" rx="8" fill="#ffffff" stroke="#dbe6f4" />
              <rect x="230" y="25" width="180" height="110" rx="8" fill="#ffffff" stroke="#dbe6f4" />
              <rect x="450" y="25" width="160" height="110" rx="8" fill="#e2eefc" stroke="#c8daf2" />

              <rect x="30" y="175" width="160" height="145" rx="8" fill="#ffffff" stroke="#dbe6f4" />
              <rect x="230" y="175" width="180" height="145" rx="8" fill="#ffffff" stroke="#dbe6f4" />
              <rect x="450" y="175" width="160" height="145" rx="8" fill="#ffffff" stroke="#dbe6f4" />

              <rect x="0" y="146" width="640" height="22" fill="#d3e1f4" />
              <rect x="198" y="0" width="24" height="360" fill="#d3e1f4" />
              <rect x="418" y="0" width="22" height="360" fill="#d3e1f4" />

              <line x1="0" y1="157" x2="640" y2="157" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 8" />
              <line x1="210" y1="0" x2="210" y2="360" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 8" />
              <line x1="429" y1="0" x2="429" y2="360" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 8" />

              <text x="275" y="161" fontSize="11" fontWeight="700" fill="#0c2348" fontFamily="Inter, sans-serif">
                HEALTH WAY
              </text>
              <text x="195" y="95" fontSize="10" fontWeight="600" fill="#4a5b75" fontFamily="Inter, sans-serif" transform="rotate(-90 195 95)">
                7TH AVENUE
              </text>
              <text x="415" y="280" fontSize="10" fontWeight="600" fill="#4a5b75" fontFamily="Inter, sans-serif" transform="rotate(-90 415 280)">
                6TH AVENUE
              </text>

              <rect x="468" y="64" width="124" height="32" rx="6" fill="#0c2348" opacity="0.9" />
              <text x="530" y="84" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#ffffff" fontFamily="Inter, sans-serif">
                Transit Hub (2 Blks)
              </text>

              <rect x="52" y="226" width="116" height="30" rx="6" fill="#e8f0fb" stroke="#b9cde9" />
              <text x="110" y="245" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#0c2348" fontFamily="Inter, sans-serif">
                Patient Parking
              </text>

              <rect x="260" y="192" width="120" height="82" rx="10" fill="#fdf1f1" stroke="#d62828" strokeWidth="2" />
              <text x="320" y="256" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0c2348" fontFamily="Inter, sans-serif">
                Summit Urgent Care
              </text>
            </svg>

            <div className="location-map__pin" aria-hidden="true">
              <div className="location-map__pin-pulse" />
              <div className="location-map__pin-badge">
                <MapPin size={22} />
              </div>
            </div>

            <div className="location-map__caption">
              <span>{CLINIC_INFO.addressLine}</span>
              <span className="location-map__sample-tag">Sample Map View</span>
            </div>
          </div>

          {/* Redesigned Professional Location Information Card */}
          <div className="location-card">
            <div className="location-card__header">
              <div className="location-card__pin-box" aria-hidden="true">
                <MapPin size={22} />
              </div>
              <div className="location-card__heading-group">
                <span className="location-card__clinic-kicker">{CLINIC_INFO.name}</span>
                <h3 className="location-card__title">Visit Our Clinic</h3>
              </div>
            </div>

            <div className="location-card__address-box">
              <p className="location-card__street">{CLINIC_INFO.addressShort}</p>
              <p className="location-card__city">{CLINIC_INFO.cityStateZip}</p>
              <p className="location-card__sample-note">{LOCATION_DETAILS.note}</p>
            </div>

            <ul className="location-card__meta">
              <li className="location-card__meta-item">
                <span className="location-card__meta-icon" aria-hidden="true">
                  <Clock size={16} />
                </span>
                <div>
                  <span className="location-card__meta-label">Opening Hours</span>
                  <span className="location-card__meta-value">
                    {CLINIC_INFO.hoursShort} ({CLINIC_INFO.walkInNote})
                  </span>
                </div>
              </li>

              <li className="location-card__meta-item">
                <span className="location-card__meta-icon" aria-hidden="true">
                  <Phone size={16} />
                </span>
                <div>
                  <span className="location-card__meta-label">Clinic Phone</span>
                  <a href={CLINIC_INFO.phoneHref} className="location-card__meta-link">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="location-card__meta-item">
                <span className="location-card__meta-icon" aria-hidden="true">
                  <Train size={16} />
                </span>
                <span>{LOCATION_DETAILS.landmarks[0]}</span>
              </li>

              <li className="location-card__meta-item">
                <span className="location-card__meta-icon" aria-hidden="true">
                  <Car size={16} />
                </span>
                <span>{LOCATION_DETAILS.landmarks[2]}</span>
              </li>
            </ul>

            <div className="location-card__actions">
              <a
                href={LOCATION_DETAILS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--red"
              >
                <Navigation size={16} aria-hidden="true" />
                <span>Get Directions</span>
              </a>
              <a href={CLINIC_INFO.phoneHref} className="btn btn--outline">
                <Phone size={15} aria-hidden="true" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
