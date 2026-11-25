import React from 'react';
import { MapPin, Phone, Clock, Footprints } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Clinic quick information">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <a href="#location" className="topbar__item topbar__item--address">
            <MapPin size={14} className="topbar__icon" aria-hidden="true" />
            <span>{CLINIC_INFO.addressLine}</span>
          </a>
          <a href={CLINIC_INFO.phoneHref} className="topbar__item topbar__item--phone">
            <Phone size={14} className="topbar__icon" aria-hidden="true" />
            <span>{CLINIC_INFO.phone}</span>
          </a>
          <span className="topbar__item topbar__item--hours">
            <Clock size={14} className="topbar__icon" aria-hidden="true" />
            <span>{CLINIC_INFO.hoursShort}</span>
          </span>
        </div>

        <a href="#patient-info" className="topbar__right topbar__item">
          <Footprints size={14} className="topbar__icon" aria-hidden="true" />
          <span>{CLINIC_INFO.walkInNote}</span>
        </a>
      </div>
    </div>
  );
}
