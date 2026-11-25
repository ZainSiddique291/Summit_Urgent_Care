import React, { useState } from 'react';
import { Star } from 'lucide-react';
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
  const currentReviews = TESTIMONIAL_PAGES[activePage];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header testimonials__header">
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true" />
            <span>PATIENT TESTIMONIALS</span>
            <span className="eyebrow__line" aria-hidden="true" />
          </div>
          <h2 className="section-title">What Our Patients Say</h2>
        </div>

        <div className="testimonials__grid">
          {currentReviews.map((review) => (
            <article key={review.id} className="testimonial-card">
              <div className="testimonial-card__body">
                <img
                  src={PHOTO_MAP[review.photoKey]}
                  alt={`Portrait of patient ${review.name}`}
                  className="testimonial-card__avatar"
                />
                <div className="testimonial-card__text">
                  <blockquote className="testimonial-card__quote">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="testimonial-card__footer">
                    <cite className="testimonial-card__author">&ndash; {review.name}</cite>
                    <div
                      className="testimonial-card__stars"
                      aria-label={`${review.rating} out of 5 stars`}
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
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials__dots" role="tablist" aria-label="Testimonial pages">
          {TESTIMONIAL_PAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activePage === index}
              aria-label={`Show patient reviews set ${index + 1}`}
              className={`testimonials__dot ${activePage === index ? 'is-active' : ''}`}
              onClick={() => setActivePage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

