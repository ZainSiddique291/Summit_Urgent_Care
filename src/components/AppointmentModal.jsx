import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import './AppointmentModal.css';

const TIME_SLOTS = [
  '8:30 AM',
  '10:00 AM',
  '11:30 AM',
  '1:00 PM',
  '2:30 PM',
  '4:00 PM',
  '5:30 PM',
  '7:00 PM',
];

export default function AppointmentModal({ isOpen, initialReason, onClose }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    patientName: '',
    phone: '',
    email: '',
    preferredDate: todayStr,
    preferredTime: '10:00 AM',
    reason: initialReason || '',
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({
        ...prev,
        reason: initialReason || prev.reason || '',
      }));
      setErrors({});
      setConfirmed(false);
    }
  }, [isOpen, initialReason]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const next = {};
    if (!form.patientName.trim()) {
      next.patientName = 'Patient name is required.';
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Valid phone number is required.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Valid email address is required.';
    }
    if (!form.preferredDate) {
      next.preferredDate = 'Please select a preferred date.';
    }
    if (!form.preferredTime) {
      next.preferredTime = 'Please select a preferred time.';
    }
    if (!form.reason.trim()) {
      next.reason = 'Please select or enter a reason for your visit.';
    }
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setConfirmed(true);
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-header__title-wrap">
            <Calendar size={20} className="modal-header__icon" aria-hidden="true" />
            <h2 id="appointment-modal-title" className="modal-header__title">
              Book an Appointment
            </h2>
          </div>
          <button
            type="button"
            className="modal-close"
            aria-label="Close appointment dialog"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {confirmed ? (
          <div className="modal-success" role="status">
            <CheckCircle2 size={44} className="modal-success__icon" aria-hidden="true" />
            <h3>Appointment Request Preview Confirmed</h3>
            <p>
              Thank you, <strong>{form.patientName}</strong>! Your requested slot for{' '}
              <strong>{form.preferredDate}</strong> at{' '}
              <strong>{form.preferredTime}</strong> ({form.reason}) has been validated.
            </p>
            <p className="modal-success__note">
              Note: This is a frontend-only static website preview; no appointment data
              was transmitted to a backend server. To schedule directly, please call{' '}
              <strong>{CLINIC_INFO.phone}</strong>.
            </p>
            <button type="button" className="btn btn--red" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit} noValidate>
            <p className="modal-form__intro">
              Reserve your visit time at {CLINIC_INFO.name}. Walk-ins are also welcome daily
              from {CLINIC_INFO.hoursRange}.
            </p>

            <div className="form-field">
              <label htmlFor="appt-name">Patient Name *</label>
              <input
                id="appt-name"
                name="patientName"
                type="text"
                placeholder="Full name"
                value={form.patientName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.patientName)}
              />
              {errors.patientName && <span className="form-error">{errors.patientName}</span>}
            </div>

            <div className="modal-form__row">
              <div className="form-field">
                <label htmlFor="appt-phone">Phone Number *</label>
                <input
                  id="appt-phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="appt-email">Email *</label>
                <input
                  id="appt-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className="modal-form__row">
              <div className="form-field">
                <label htmlFor="appt-date">Preferred Date *</label>
                <input
                  id="appt-date"
                  name="preferredDate"
                  type="date"
                  min={todayStr}
                  value={form.preferredDate}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.preferredDate)}
                />
                {errors.preferredDate && (
                  <span className="form-error">{errors.preferredDate}</span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="appt-time">Preferred Time *</label>
                <select
                  id="appt-time"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.preferredTime)}
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.preferredTime && (
                  <span className="form-error">{errors.preferredTime}</span>
                )}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="appt-reason">Reason for Visit *</label>
              <select
                id="appt-reason"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                aria-invalid={Boolean(errors.reason)}
              >
                <option value="">Select reason for visit</option>
                {SERVICES_LIST.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title} {service.subtitle}
                  </option>
                ))}
                <option value="Walk-In / Check-In">General Urgent Care Check-In</option>
                <option value="School / Sports Physical">School or Sports Physical</option>
              </select>
              {errors.reason && <span className="form-error">{errors.reason}</span>}
            </div>

            <div className="modal-form__actions">
              <button type="button" className="btn btn--outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn--red">
                Confirm Appointment Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

