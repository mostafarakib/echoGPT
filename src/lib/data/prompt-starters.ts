import {
  Sparkles,
  FileText,
  Target,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface PromptStarter {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  presetPrompt: string;
}

export const promptStarters: PromptStarter[] = [
  {
    id: "creative-flow",
    title: "Unlock Your Creative Flow",
    description:
      "Receive custom prompts that reflect your writing style, helping you push past creative blocks.",
    icon: Sparkles,
    presetPrompt:
      "Give me a custom writing prompt based on my recent interests.",
  },
  {
    id: "resume",
    title: "Build a Resume That Shines",
    description:
      "Craft a resume tailored to highlight your experience and match the job you want.",
    icon: FileText,
    presetPrompt:
      "Help me rewrite my resume summary for a frontend developer role.",
  },
  {
    id: "challenge",
    title: "Set a Challenge That Transforms You",
    description:
      "Create a personalized challenge based on your goals and habits, designed to push you further.",
    icon: Target,
    presetPrompt: "Design a 7-day challenge to help me build a new habit.",
  },
  {
    id: "social",
    title: "Write Irresistible Social Content",
    description:
      "Generate catchy, clever captions for your photos or videos, perfect for increasing engagement.",
    icon: Megaphone,
    presetPrompt: "Write 3 catchy caption options for a product launch post.",
  },
];
