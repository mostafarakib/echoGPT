import {
  Bot,
  User,
  CheckSquare,
  Lightbulb,
  FileText,
  Newspaper,
  PenLine,
  Globe,
  Terminal,
  Search,
  Image as ImageIcon,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

export interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badgeClassName: string;
}

export interface PremiumFeatureCategory {
  id: string;
  title: string;
  features: PremiumFeature[];
}

export const premiumFeatureCategories: PremiumFeatureCategory[] = [
  {
    id: "chat",
    title: "Chat",
    features: [
      {
        id: "ai-chat",
        title: "AI Chat",
        description: "Chat with AI-powered models",
        icon: Bot,
        badgeClassName: "bg-emerald-100 text-emerald-700",
      },
      {
        id: "ai-characters",
        title: "AI Characters",
        description: "Talk to famous personas",
        icon: User,
        badgeClassName: "bg-border text-text-secondary",
      },
      {
        id: "ai-tasks",
        title: "AI Tasks",
        description: "Quick tips and suggestions",
        icon: CheckSquare,
        badgeClassName: "bg-emerald-100 text-emerald-700",
      },
      {
        id: "brainstorming",
        title: "Brainstorming",
        description: "Generate creative ideas",
        icon: Lightbulb,
        badgeClassName: "bg-amber-100 text-amber-700",
      },
    ],
  },
  {
    id: "content",
    title: "Content",
    features: [
      {
        id: "chatdoc",
        title: "ChatDoc",
        description: "Interact with your documents",
        icon: FileText,
        badgeClassName: "bg-border text-text-secondary",
      },
      {
        id: "content-summary",
        title: "Content Summary",
        description: "Get quick summaries",
        icon: Newspaper,
        badgeClassName: "bg-sky-100 text-sky-700",
      },
      {
        id: "content-editing",
        title: "Content Editing",
        description: "Proofread and refine text",
        icon: PenLine,
        badgeClassName: "bg-orange-100 text-orange-700",
      },
      {
        id: "language-translator",
        title: "Language Translator",
        description: "Translate languages instantly",
        icon: Globe,
        badgeClassName: "bg-blue-100 text-blue-700",
      },
      {
        id: "code-generation",
        title: "Code Generation",
        description: "Write and debug code",
        icon: Terminal,
        badgeClassName: "bg-border text-text",
      },
      {
        id: "web-search",
        title: "Web Search",
        description: "Coming Soon! Fetch info from the web",
        icon: Search,
        badgeClassName: "bg-blue-100 text-blue-700",
      },
    ],
  },
  {
    id: "image",
    title: "Image",
    features: [
      {
        id: "text-to-image",
        title: "Text to Image",
        description: "Coming Soon! Create images from text",
        icon: ImageIcon,
        badgeClassName: "bg-violet-100 text-violet-700",
      },
      {
        id: "ask-image",
        title: "Ask Image",
        description: "Coming Soon! Ask questions about images",
        icon: HelpCircle,
        badgeClassName: "bg-rose-100 text-rose-700",
      },
    ],
  },
];
