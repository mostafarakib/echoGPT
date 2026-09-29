export interface SopCountry {
  id: string;
  code: string;
  name: string;
  visaType: string;
  wordCount: string;
  processingTime: string;
  requirements: string[];
}

export const sopCountries: SopCountry[] = [
  {
    id: "us",
    code: "US",
    name: "United States",
    visaType: "F-1 Student Visa",
    wordCount: "500-1000 words",
    processingTime: "Processing: 3-5 weeks",
    requirements: [
      "Clear statement of purpose and career goals",
      "Academic and professional achievements",
    ],
  },
  {
    id: "gb",
    code: "GB",
    name: "United Kingdom",
    visaType: "Student Visa (Tier 4)",
    wordCount: "500-1000 words",
    processingTime: "Processing: 3 weeks (outside UK)",
    requirements: [
      "Personal statement focusing on course choice",
      "Relevant experience and achievements",
    ],
  },
  {
    id: "ca",
    code: "CA",
    name: "Canada",
    visaType: "Study Permit",
    wordCount: "500-1000 words",
    processingTime: "Processing: 4-6 weeks",
    requirements: [
      "Statement of interest in the program",
      "Academic background and achievements",
    ],
  },
  {
    id: "au",
    code: "AU",
    name: "Australia",
    visaType: "Student Visa (Subclass 500)",
    wordCount: "300-500 words",
    processingTime: "Processing: 4-6 weeks",
    requirements: [
      "Motivation for studying in Australia",
      "Academic and professional achievements",
    ],
  },
  {
    id: "de",
    code: "DE",
    name: "Germany",
    visaType: "Student Visa (National Visa)",
    wordCount: "500-750 words",
    processingTime: "Processing: 6-8 weeks",
    requirements: [
      "Motivation for chosen field of study",
      "Academic qualifications and achievements",
    ],
  },
  {
    id: "fr",
    code: "FR",
    name: "France",
    visaType: "Student Visa (VLS-TS)",
    wordCount: "500-1000 words",
    processingTime: "Processing: 3-4 weeks",
    requirements: [
      "Motivation for studying in France",
      "Academic project description",
    ],
  },
];
