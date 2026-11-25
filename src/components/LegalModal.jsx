import React, { useEffect } from 'react';
import { X, Shield, FileText, Map } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicData';
import './AppointmentModal.css';

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    icon: Shield,
    paragraphs: [
      `${CLINIC_INFO.name} respects your privacy. This single-page website is a static informational preview and does not collect, store, or transmit personal health information (PHI) to external servers.`,
      'Any details entered into the appointment request or contact forms are validated locally in your browser only.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    paragraphs: [
      `Information on this website is provided for general informational purposes regarding ${CLINIC_INFO.name} and does not constitute medical advice.`,
      'If you are experiencing a medical emergency, call 911 or visit the nearest emergency department immediately.',
    ],
  },
  sitemap: {
    title: 'Site Map',
    icon: Map,
    paragraphs: ['Quick navigation across all sections of Summit Urgent Care:'],
  },
};

export default function LegalModal({ mode, onClose }) {
  useEffect(() => {
    if (!mode) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, onClose]);

  if (!mode || !LEGAL_CONTENT[mode]) return null;

  const current = LEGAL_CONTENT[mode];
  const IconComp = current.icon;

  const jumpTo = (id) => {
    onClose();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-header__title-wrap">
            <IconComp size={20} className="modal-header__icon" aria-hidden="true" />
            <h2 id="legal-modal-title" className="modal-header__title">
              {current.title}
            </h2>
          </div>
          <button
            type="button"
            className="modal-close"
            aria-label="Close modal"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-form">
          {current.paragraphs.map((text, idx) => (
            <p key={idx} className="modal-form__intro" style={{ lineHeight: 1.65 }}>
              {text}
            </p>
          ))}

          {mode === 'sitemap' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {[...NAV_LINKS, { id: 'testimonials', label: 'Testimonials' }, { id: 'location', label: 'Location & Map' }].map(
                (item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="btn btn--outline btn--sm"
                    onClick={() => jumpTo(item.id)}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>
          )}

          <div className="modal-form__actions">
            <button type="button" className="btn btn--navy btn--sm" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

