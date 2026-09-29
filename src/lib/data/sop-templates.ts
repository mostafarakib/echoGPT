import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  Palette,
  type LucideIcon,
} from "lucide-react";

export interface SopTemplate {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export const sopTemplates: SopTemplate[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description:
      "Ideal for students with strong academic records applying to graduate programs.",
    tags: ["Academic", "Graduate Studies", "Scholarships"],
    icon: GraduationCap,
  },
  {
    id: "professional",
    title: "Professional Track",
    description:
      "Designed for applicants with significant work experience seeking advanced degrees.",
    tags: ["Career", "Professional Development", "MBA"],
    icon: Briefcase,
  },
  {
    id: "research",
    title: "Research Focused",
    description:
      "Perfect for research-oriented applicants targeting PhD or research-intensive programs.",
    tags: ["Research", "PhD", "Innovation"],
    icon: FlaskConical,
  },
  {
    id: "creative",
    title: "Creative Arts",
    description:
      "Tailored for applicants to creative programs like fine arts, design, or writing.",
    tags: ["Creative", "Arts", "Portfolio"],
    icon: Palette,
  },
];
