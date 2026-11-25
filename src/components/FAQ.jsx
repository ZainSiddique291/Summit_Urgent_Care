import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/clinicData';
import './FAQ.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => !item.extra);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="section section--tinted faq">
      <div className="container">
        <div className="faq__grid">
          <div className="faq__intro">
            <div className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="faq__title">Have Questions?</h2>
            <p className="faq__desc">
              Find quick answers to common questions about our services, hours and more.
            </p>
            <button
              type="button"
              className="btn btn--navy"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <span>{showAll ? 'Show Fewer FAQs' : 'View All FAQs'}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="faq__list" role="region" aria-label="Frequently asked questions">
            {visibleFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="faq-item__question">{item.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="faq-item__panel"
                  >
                    <div className="faq-item__panel-inner">
                      <p className="faq-item__answer">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

