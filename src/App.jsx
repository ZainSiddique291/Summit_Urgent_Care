import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AppointmentCTA from './components/AppointmentCTA';
import Testimonials from './components/Testimonials';
import PatientInfo from './components/PatientInfo';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import LegalModal from './components/LegalModal';
import BackToTop from './components/BackToTop';

const TRACKED_SECTIONS = ['home', 'services', 'about', 'patient-info', 'faqs', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentReason, setAppointmentReason] = useState('');
  const [legalMode, setLegalMode] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-32% 0px -55% 0px',
        threshold: 0.05,
      },
    );

    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openAppointmentModal = (reason = '') => {
    setAppointmentReason(reason);
    setAppointmentOpen(true);
  };

  return (
    <div className="app-shell">
      <TopBar />
      <Navbar
        activeSection={activeSection}
        onOpenAppointment={openAppointmentModal}
      />

      <main>
        <Hero onOpenAppointment={openAppointmentModal} />
        <Services onSelectService={openAppointmentModal} />
        <About />
        <AppointmentCTA onOpenAppointment={openAppointmentModal} />
        <Testimonials />
        <PatientInfo onOpenAppointment={openAppointmentModal} />
        <FAQ />
        <Location />
        <Contact />
      </main>

      <Footer
        onOpenAppointment={openAppointmentModal}
        onOpenLegal={(mode) => setLegalMode(mode)}
      />

      <AppointmentModal
        isOpen={appointmentOpen}
        initialReason={appointmentReason}
        onClose={() => setAppointmentOpen(false)}
      />

      <LegalModal mode={legalMode} onClose={() => setLegalMode(null)} />
      <BackToTop />
    </div>
  );
}

