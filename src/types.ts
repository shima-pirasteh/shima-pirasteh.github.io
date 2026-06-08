export interface CaseStudySection {
  title: string;
  subtitle?: string;
  content: string[]; // multi-paragraph support
  image?: string;
  imageCaption?: string;
}

export interface CaseStudy {
  challenge: CaseStudySection;
  researchAnalysis: CaseStudySection;
  designSolution: CaseStudySection;
  impactOutcome: CaseStudySection;
  blueprints?: {
    title: string;
    description: string;
    svgLines: string[]; // Simulated blueprints as dynamic vectors
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Architecture" | "Cultural Heritage" | "Experience Design";
  tags: string[]; // Tools: ["Revit", "GIS", "AutoCAD", "ArcGIS", "Adobe Suite", "Figma", "Rhino"]
  thumbnail: string;
  summary: string;
  role: string;
  timeline: string;
  location: string;
  tools: string[];
  caseStudy: CaseStudy;
  gallery?: string[]; // Optional additional images gallery
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  context?: string;
}

export interface Recommendation {
  id: string;
  author: string;
  title: string;
  institution: string;
  relationship: string;
  thumbnail: string;
  fullLetter: string;
  date: string;
  signatureUrl?: string;
}
