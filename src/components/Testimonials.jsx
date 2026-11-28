import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import sarahImg from '../assets/patient-sarah.jpg';
import davidImg from '../assets/patient-david.jpg';
import emilyImg from '../assets/patient-emily.jpg';
import { TESTIMONIAL_PAGES } from '../data/clinicData';
import './Testimonials.css';

const PHOTO_MAP = {
  sarah: sarahImg,
  david: davidImg,
  emily: emilyImg,
};

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);
  const totalPages = TESTIMONIAL_PAGES.length;
  const currentReviews = TESTIMONIAL_PAGES[activePage];

  const handlePrev = () => {
    setActivePage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="testimonials" className="section section--tinted testimonials reveal-section">
      <div className="container">
        <div className="section-header testimonials__header">
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            <span>PATIENT REVIEWS</span>
            <span className="eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Placeholder sample reviews illustrating patient feedback while verified clinic
            testimonials are being collected.
          </p>
        </div>

        <div key={activePage} className="testimonials__grid">
          {currentReviews.map((review) => (
            <article key={review.id} className="testimonial-card">
              <div className="testimonial-card__top">
                <div
                  className="testimonial-card__stars"
                  aria-label={`${review.rating} out of 5 stars (sample rating)`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={15}
                      fill="#f59e0b"
                      color="#f59e0b"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="testimonial-card__quote-icon" aria-hidden="true">
                  <Quote size={18} />
                </span>
              </div>

              <blockquote className="testimonial-card__quote">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="testimonial-card__footer">
                <img
                  src={PHOTO_MAP[review.photoKey]}
                  alt={`Sample portrait for ${review.name}`}
                  className="testimonial-card__avatar"
                />
                <div className="testimonial-card__meta">
                  <cite className="testimonial-card__author">{review.name}</cite>
                  <span className="testimonial-card__badge">{review.visitType}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials__controls">
          <button
            type="button"
            className="testimonials__arrow"
            aria-label="Previous sample reviews"
            onClick={handlePrev}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="testimonials__dots" role="tablist" aria-label="Review pages">
            {TESTIMONIAL_PAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activePage === index}
                aria-label={`Show sample reviews set ${index + 1}`}
                className={`testimonials__dot ${activePage === index ? 'is-active' : ''}`}
                onClick={() => setActivePage(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials__arrow"
            aria-label="Next sample reviews"
            onClick={handleNext}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
