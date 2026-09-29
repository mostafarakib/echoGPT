import {
  MessageSquare,
  Scale,
  Palette,
  Plug,
  Briefcase,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface LandingFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const landingFeatures: LandingFeature[] = [
  {
    id: "multi-model-chat",
    title: "Multi-model chat",
    description:
      "Switch between leading AI models including GPT, Claude, Gemini and more without leaving your conversation.",
    icon: MessageSquare,
  },
  {
    id: "compare-focus",
    title: "Compare & Focus modes",
    description:
      "Ask one question, get answers from multiple models side by side — or zoom into a single model's response.",
    icon: Scale,
  },
  {
    id: "image-video-studio",
    title: "Image & Video Studio",
    description:
      "Generate images and video from a prompt using top image and video generation models.",
    icon: Palette,
  },
  {
    id: "connectors",
    title: "Connectors (MCP)",
    description:
      "Connect your own MCP servers and give any model access to your tools, right inside the chat.",
    icon: Plug,
  },
  {
    id: "job-sop-tools",
    title: "Job Insight & SOP tools",
    description:
      "Analyze job postings, tailor your resume, and generate Statements of Purpose for study-abroad applications.",
    icon: Briefcase,
  },
  {
    id: "ai-tasks",
    title: "Ready-made AI Tasks",
    description:
      "Dozens of pre-built prompts for ideas, work, content creation, and more - no extreme prompt engineering required.",
    icon: Zap,
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "1",
    title: "Stop switching tabs",
    description:
      "Every model, every tool, in one interface — no more juggling separate subscriptions and browser tabs.",
  },
  {
    id: "2",
    title: "See models disagree, on purpose",
    description:
      "Compare mode shows you where models actually differ, so you're not trusting a single answer blindly.",
  },
  {
    id: "3",
    title: "Built-in workflows, not just a chatbox",
    description:
      "Job analysis, resume tailoring, and SOP generation are first-class tools, not prompts you have to write yourself.",
  },
  {
    id: "4",
    title: "Your tools, connected",
    description:
      "MCP connectors mean the model can use your own services — not just what's built in.",
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  ctaLabel: string;
}

export const landingPricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["5 messages / 5 hrs", "Core model access", "1 connector"],
    popular: false,
    ctaLabel: "Get started",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9.99",
    period: "per month",
    features: [
      "Unlimited messages",
      "Access to all available models",
      "Unlimited connectors",
      "Image & Video Studio",
    ],
    popular: true,
    ctaLabel: "Upgrade to Pro",
  },
  {
    id: "team",
    name: "Team",
    price: "$29",
    period: "per month",
    features: ["Everything in Pro", "Shared workspaces", "Priority support"],
    popular: false,
    ctaLabel: "Contact us",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I stopped paying for three separate AI subscriptions the week I switched. Compare mode alone is worth it.",
    name: "Tarique Rahman",
    role: "Product Designer",
    initials: "TR",
  },
  {
    id: "2",
    quote:
      "The job analysis tool caught things in a posting I would've missed. Genuinely useful, not a gimmick.",
    name: "Sheikh Hasina",
    role: "Career Coach",
    initials: "SH",
  },
  {
    id: "3",
    quote:
      "Built my SOP for grad school applications in an afternoon instead of a week. The country-specific guidance was the key part.",
    name: "Nahid Islam",
    role: "Graduate Applicant",
    initials: "NI",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Is EchoGPT free to use?",
    answer:
      "Yes — the free plan includes 5 messages every 5 hours plus 1 connector. Upgrade to Pro for unlimited messages and access to every available model.",
  },
  {
    id: "2",
    question: "Which AI models can I use?",
    answer:
      "EchoGPT gives you access to many leading models — including GPT, Claude, and Gemini — switchable per conversation, or compared side by side. New models are added regularly.",
  },
  {
    id: "3",
    question: "What's a connector?",
    answer:
      "Connectors let you link an MCP server so its tools become available inside your chat — think of it as giving the model access to your own services.",
  },
  {
    id: "4",
    question: "Can I cancel anytime?",
    answer:
      "Yes, Pro and Team plans can be cancelled at any time from your account settings — no long-term contracts.",
  },
  {
    id: "5",
    question: "Do I need an account to try it?",
    answer:
      "You can try EchoGPT right away — no credit card required to start on the free plan.",
  },
];
