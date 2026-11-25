import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import './Contact.css';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setSubmitted(true);
    setErrors({});
    setFormData(INITIAL_FORM);
  };

  return (
    <section id="contact" className="section section--tinted contact">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            <span>CONTACT US</span>
            <span className="eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="section-title">Get in Touch With Our Team</h2>
          <p className="section-subtitle">
            Have a non-urgent question about services, insurance, or your upcoming visit?
            Reach out by phone or send us a message below.
          </p>
        </div>

        <div className="contact__grid">
          {/* Clinic Direct Details */}
          <div className="contact-info-card">
            <h3 className="contact-info-card__title">Clinic Contact Details</h3>
            <p className="contact-info-card__sub">
              Our care coordinators are available during clinic hours to assist you.
            </p>

            <ul className="contact-info-card__list">
              <li className="contact-info-card__item">
                <span className="contact-info-card__icon" aria-hidden="true">
                  <Phone size={19} />
                </span>
                <div>
                  <span className="contact-info-card__label">Phone</span>
                  <a href={CLINIC_INFO.phoneHref} className="contact-info-card__value">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="contact-info-card__item">
                <span className="contact-info-card__icon" aria-hidden="true">
                  <Mail size={19} />
                </span>
                <div>
                  <span className="contact-info-card__label">Email</span>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="contact-info-card__value">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </li>

              <li className="contact-info-card__item">
                <span className="contact-info-card__icon" aria-hidden="true">
                  <MapPin size={19} />
                </span>
                <div>
                  <span className="contact-info-card__label">Address</span>
                  <span className="contact-info-card__value">{CLINIC_INFO.addressLine}</span>
                </div>
              </li>

              <li className="contact-info-card__item">
                <span className="contact-info-card__icon" aria-hidden="true">
                  <Clock size={19} />
                </span>
                <div>
                  <span className="contact-info-card__label">Opening Hours</span>
                  <span className="contact-info-card__value">
                    {CLINIC_INFO.hoursShort} ({CLINIC_INFO.walkInNote})
                  </span>
                </div>
              </li>
            </ul>

            <div className="contact-info-card__notice">
              <strong>Medical Emergency?</strong> If you are experiencing a life-threatening
              emergency, please call <strong>911</strong> or go to the nearest hospital
              emergency room immediately.
            </div>
          </div>

          {/* Static Validated Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-form__success" role="status">
                <CheckCircle2 size={38} className="contact-form__success-icon" aria-hidden="true" />
                <h3>Message Ready (Static Preview)</h3>
                <p>
                  Thank you for testing the contact form! Since this is a static frontend
                  website without a backend server, your message has not been transmitted.
                  For real clinic inquiries, please reach out by phone at{' '}
                  <strong>{CLINIC_INFO.phone}</strong>.
                </p>
                <button
                  type="button"
                  className="btn btn--navy btn--sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      name="fullName"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.fullName)}
                    />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="form-field">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 234-5678"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-subject">Subject *</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="Insurance or Visit Question"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.subject)}
                    />
                    {errors.subject && <span className="form-error">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="How can our team assist you?"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--red contact-form__submit">
                  <Send size={16} aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

