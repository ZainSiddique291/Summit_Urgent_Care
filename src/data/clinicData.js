export const CLINIC_INFO = {
  name: 'Summit Urgent Care',
  tagline: 'Fast Care. Healthier You.',
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
    subtitle: '(Sprains, Cuts, etc.)',
    description: 'Prompt evaluation and treatment for sprains, strains, minor fractures, burns, and lacerations.',
    icon: 'Bandage',
  },
  {
    id: 'illness-treatment',
    title: 'Illness Treatment',
    subtitle: '(Cold, Flu, etc.)',
    description: 'Fast relief for colds, seasonal flu, strep throat, ear infections, sinus issues, and fevers.',
    icon: 'Stethoscope',
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    subtitle: '(Flu, COVID-19, etc.)',
    description: 'Walk-in seasonal flu shots, COVID-19 boosters, tetanus shots, and routine immunizations.',
    icon: 'Syringe',
  },
  {
    id: 'lab-testing',
    title: 'Lab Testing',
    subtitle: '(On-Site)',
    description: 'Rapid strep, flu, COVID-19, urinalysis, and basic blood panels with quick on-site results.',
    icon: 'FlaskConical',
  },
  {
    id: 'health-screenings',
    title: 'Health Screenings',
    subtitle: '(BP, Diabetes, etc.)',
    description: 'Blood pressure checks, glucose screening, cholesterol monitoring, and physical exams.',
    icon: 'HeartPulse',
  },
  {
    id: 'minor-procedures',
    title: 'Minor Procedures',
    subtitle: '(Suturing, etc.)',
    description: 'Stitches, wound care, splinter or foreign body removal, and abscess drainage on-site.',
    icon: 'BriefcaseMedical',
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
      id: 'sarah',
      name: 'Sarah M.',
      quote: 'Fast, professional and friendly! Highly recommend Summit Urgent Care.',
      rating: 5,
      photoKey: 'sarah',
    },
    {
      id: 'david',
      name: 'David K.',
      quote: 'Great experience. The staff was caring and got me in quickly.',
      rating: 5,
      photoKey: 'david',
    },
    {
      id: 'emily',
      name: 'Emily R.',
      quote: 'Convenient, clean and excellent care. Will definitely come back!',
      rating: 5,
      photoKey: 'emily',
    },
  ],
  [
    {
      id: 'david-2',
      name: 'Michael T.',
      quote: 'Visited on a Sunday morning with a sprained ankle and was treated within 20 minutes.',
      rating: 5,
      photoKey: 'david',
    },
    {
      id: 'sarah-2',
      name: 'Rachel L.',
      quote: 'The nurse practitioner was wonderful with my daughter. Calm, spotless clinic.',
      rating: 5,
      photoKey: 'sarah',
    },
    {
      id: 'emily-2',
      name: 'Lauren P.',
      quote: 'Transparent pricing and no surprise wait times. Truly patient-first urgent care.',
      rating: 5,
      photoKey: 'emily',
    },
  ],
  [
    {
      id: 'emily-3',
      name: 'Hannah W.',
      quote: 'Easy online booking and same-day rapid strep test. Felt heard and well cared for.',
      rating: 5,
      photoKey: 'emily',
    },
    {
      id: 'sarah-3',
      name: 'Natalie G.',
      quote: 'Cleanest clinic in the neighborhood with genuinely compassionate medical staff.',
      rating: 5,
      photoKey: 'sarah',
    },
    {
      id: 'david-3',
      name: 'Daniel B.',
      quote: 'Got my flu shot and blood pressure check during lunch break without any hassle.',
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

