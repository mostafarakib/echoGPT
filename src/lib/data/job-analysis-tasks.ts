import {
  FileSearch,
  FileEdit,
  MessagesSquare,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface JobAnalysisTask {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const jobAnalysisTasks: JobAnalysisTask[] = [
  {
    id: "analyze-job-description",
    title: "Analyze Job Description",
    description: "Instantly get AI-powered insights for any job posting.",
    icon: FileSearch,
  },
  {
    id: "tailor-resume",
    title: "Tailor Your Resume",
    description: "Get suggestions to match your CV to the job requirements.",
    icon: FileEdit,
  },
  {
    id: "interview-prep",
    title: "Prepare for Interviews",
    description: "Practice with AI-generated interview questions and tips.",
    icon: MessagesSquare,
  },
  {
    id: "skill-gap-analysis",
    title: "Skill Gap Analysis",
    description: "Discover key skills to focus on for your target role.",
    icon: Target,
  },
];
