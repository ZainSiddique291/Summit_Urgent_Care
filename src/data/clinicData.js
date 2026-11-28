export const CLINIC_INFO = {
  name: 'Summit Urgent Care',
  tagline: 'Fast Care. Healthier You.',
  footerSummary:
    'Compassionate, walk-in medical care for non-life-threatening illnesses and minor injuries — serving patients and families 7 days a week.',
  addressLine: '123 Health Way, New York, NY 10001',
  addressShort: '123 Health Way',
  cityStateZip: 'New York, NY 10001',
  phone: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'info@summiturgentcare.com',
  hoursShort: 'Mon – Sun: 8 AM – 8 PM',
  hoursRange: '8 AM – 8 PM',
  walkInNote: 'Walk-Ins Welcome',
  copyrightYear: 2025,
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'patient-info', label: 'Patient Info', hasDropdown: true },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

export const PATIENT_INFO_SUBLINKS = [
  { label: 'What to Bring', target: 'patient-info' },
  { label: 'ID & Insurance', target: 'patient-info' },
  { label: 'Payment & Walk-In Policy', target: 'patient-info' },
  { label: 'Directions & Parking', target: 'location' },
];

export const HERO_BENEFITS = [
  { id: 'wait', icon: 'Clock', label: 'Short Wait Times' },
  { id: 'board', icon: 'ShieldCheck', label: 'Board-Certified Providers' },
  { id: 'care', icon: 'HeartHandshake', label: 'Compassionate Care' },
];

export const SERVICES_LIST = [
  {
    id: 'injury-care',
    title: 'Injury Care',
    subtitle: 'Sprains, Cuts & Strains',
    description: 'Prompt medical evaluation and treatment for sprains, strains, minor fractures, burns, and cuts.',
    icon: 'Bandage',
    imageKey: 'injury',
    imageAlt: 'Clinician wrapping a patient wrist sprain with a medical bandage',
  },
  {
    id: 'illness-treatment',
    title: 'Illness Treatment',
    subtitle: 'Cold, Flu & Fevers',
    description: 'Fast clinical relief for seasonal flu, common colds, strep throat, fevers, and ear infections.',
    icon: 'Stethoscope',
    imageKey: 'illness',
    imageAlt: 'Doctor with a stethoscope consulting a patient during an exam',
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    subtitle: 'Flu, COVID-19 & Boosters',
    description: 'Convenient walk-in seasonal flu shots, COVID-19 boosters, tetanus, and routine immunizations.',
    icon: 'Syringe',
    imageKey: 'vaccine',
    imageAlt: 'Healthcare provider administering an immunization vaccine shot',
  },
  {
    id: 'lab-testing',
    title: 'Lab Testing',
    subtitle: 'Rapid On-Site Panels',
    description: 'Same-visit rapid strep, flu, and COVID-19 testing with urinalysis and essential blood panels.',
    icon: 'FlaskConical',
    imageKey: 'lab',
    imageAlt: 'Diagnostic laboratory technician preparing medical test samples',
  },
  {
    id: 'health-screenings',
    title: 'Health Screenings',
    subtitle: 'BP, Glucose & Physicals',
    description: 'Preventive blood pressure checks, diabetes screening, cholesterol, and physical exams.',
    icon: 'HeartPulse',
    imageKey: 'screening',
    imageAlt: 'Clinician measuring blood pressure during a routine health screening',
  },
  {
    id: 'minor-procedures',
    title: 'Minor Procedures',
    subtitle: 'Suturing & Wound Care',
    description: 'Expert on-site stitches, sterile wound care, splinter removal, and minor abscess drainage.',
    icon: 'BriefcaseMedical',
    imageKey: 'procedure',
    imageAlt: 'Medical professional preparing sterile instruments for minor wound care',
  },
];

export const WHY_CHOOSE_BENEFITS = [
  'No Appointment Needed',
  'Short Wait Times',
  'Experienced Medical Team',
  'Modern Facility',
  'Affordable Care',
];

export const TESTIMONIAL_PAGES = [
  [
    {
      id: 'demo-1',
      name: 'Sample Patient A',
      visitType: 'Demo Review • Walk-In Visit',
      quote:
        'Fast, professional, and welcoming staff. The check-in took minutes and every step was explained clearly.',
      rating: 5,
      photoKey: 'sarah',
    },
    {
      id: 'demo-2',
      name: 'Sample Patient B',
      visitType: 'Demo Review • Injury Care',
      quote:
        'Great clinic experience. The care team was attentive, thorough, and got me treated quickly.',
      rating: 5,
      photoKey: 'david',
    },
    {
      id: 'demo-3',
      name: 'Sample Patient C',
      visitType: 'Demo Review • Family Visit',
      quote:
        'Convenient hours, spotless exam rooms, and compassionate care from check-in through discharge.',
      rating: 5,
      photoKey: 'emily',
    },
  ],
  [
    {
      id: 'demo-4',
      name: 'Sample Patient D',
      visitType: 'Demo Review • Weekend Care',
      quote:
        'Visited on a Sunday morning for a sprain and saw a clinician promptly without an appointment.',
      rating: 5,
      photoKey: 'david',
    },
    {
      id: 'demo-5',
      name: 'Sample Patient E',
      visitType: 'Demo Review • Pediatric Visit',
      quote:
        'Calm, patient-centered care that put our family at ease right away during a stressful fever.',
      rating: 5,
      photoKey: 'sarah',
    },
    {
      id: 'demo-6',
      name: 'Sample Patient F',
      visitType: 'Demo Review • Lab Testing',
      quote:
        'Clear pricing, friendly front desk, and quick on-site rapid lab results in a single visit.',
      rating: 5,
      photoKey: 'emily',
    },
  ],
  [
    {
      id: 'demo-7',
      name: 'Sample Patient G',
      visitType: 'Demo Review • Online Booking',
      quote:
        'Easy online time reservation and minimal wait time upon arrival. Very organized clinic team.',
      rating: 5,
      photoKey: 'emily',
    },
    {
      id: 'demo-8',
      name: 'Sample Patient H',
      visitType: 'Demo Review • Illness Care',
      quote:
        'Clean, modern facility in the neighborhood with genuinely supportive medical professionals.',
      rating: 5,
      photoKey: 'sarah',
    },
    {
      id: 'demo-9',
      name: 'Sample Patient I',
      visitType: 'Demo Review • Vaccination',
      quote:
        'Stopped by for a seasonal flu shot and blood pressure check during lunch with zero hassle.',
      rating: 5,
      photoKey: 'david',
    },
  ],
];

export const FAQ_ITEMS = [
  {
    id: 'appointment',
    question: 'Do I need an appointment?',
    answer:
      'No appointment is required. Walk-in patients are always welcome 7 days a week during clinic hours. If you prefer to reserve a time slot ahead of your visit, you can also book online in seconds.',
  },
  {
    id: 'hours',
    question: 'What are your hours?',
    answer:
      'Summit Urgent Care is open every day of the week — Monday through Sunday from 8:00 AM to 8:00 PM, including most holidays, so you can get care on your schedule.',
  },
  {
    id: 'insurance',
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept most major health insurance plans including Aetna, BlueCross BlueShield, Cigna, UnitedHealthcare, and Medicare. Transparent self-pay rates are also available for uninsured patients.',
  },
  {
    id: 'bring',
    question: 'What should I bring?',
    answer:
      'Please bring a valid government-issued photo ID, your current health insurance card (if applicable), a list of any medications or allergies, and a preferred payment method for copays.',
  },
  {
    id: 'emergency',
    question: 'When should I choose urgent care vs. the emergency room?',
    answer:
      'Urgent care is ideal for non-life-threatening illnesses and injuries such as colds, fevers, sprains, minor cuts, infections, and vaccinations. For chest pain, severe bleeding, difficulty breathing, or stroke symptoms, please call 911 or go to the nearest ER.',
    extra: true,
  },
  {
    id: 'pediatric',
    question: 'Do you treat children and families?',
    answer:
      'Yes! Our board-certified providers care for both adults and children (ages 2 and up) for common illnesses, minor injuries, school/sports physicals, and vaccinations.',
    extra: true,
  },
];

export const PATIENT_INFO_CARDS = [
  {
    id: 'what-to-bring',
    icon: 'ClipboardList',
    title: 'What to Bring to Your Visit',
    items: [
      'List of current prescription & over-the-counter medications',
      'Known medication or food allergies',
      'Recent immunization history (for vaccines or physicals)',
      'Parent or legal guardian if the patient is under 18',
    ],
  },
  {
    id: 'id-insurance',
    icon: 'IdCard',
    title: 'Identification & Insurance',
    items: [
      'Valid government-issued photo ID (Driver’s License, State ID, or Passport)',
      'Current medical insurance card (front & back)',
      'Most major PPO, HMO, and Medicare plans accepted',
      'Fast insurance eligibility verification at check-in',
    ],
  },
  {
    id: 'payment-walkin',
    icon: 'CreditCard',
    title: 'Payment & Walk-In Policy',
    items: [
      'Walk-ins welcome 7 days a week from 8 AM – 8 PM',
      'Typical visit turnaround under 45 minutes',
      'Major credit/debit cards, HSA/FSA cards, and contactless pay accepted',
      'Clear, upfront self-pay pricing with no surprise facility fees',
    ],
  },
];

export const LOCATION_DETAILS = {
  note: 'Sample clinic address shown for demonstration purposes.',
  landmarks: [
    '2 blocks from Herald Square & Penn Station transit hub',
    'Ground-floor wheelchair-accessible entrance on Health Way',
    'Validated 2-hour garage parking directly across the street',
  ],
  directionsUrl: 'https://maps.google.com/?q=123+Health+Way,+New+York,+NY+10001',
};
