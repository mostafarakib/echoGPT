import { Sparkles, Bot, Gem, Zap, type LucideIcon } from "lucide-react";

export interface AiModel {
  id: string;
  name: string;
  provider: string;
  brief: string;
  description: string;
  icon: LucideIcon;
}

export const aiModels: AiModel[] = [
  {
    id: "echogpt-core",
    name: "EchoGPT Core",
    provider: "EchoGPT",
    brief: "EchoGPT's own model — balanced for everyday tasks",
    description:
      "Interact with EchoGPT Core, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for creative work, planning, and everyday questions.",
    icon: Sparkles,
  },
  {
    id: "gpt-6-astra",
    name: "GPT-6 Astra",
    provider: "OpenAI",
    brief: "OpenAI's flagship — strong general reasoning",
    description:
      "Chat with GPT-6 Astra, tuned for strong general reasoning across a wide range of topics. A solid default for research, analysis, and problem-solving.",
    icon: Bot,
  },
  {
    id: "claude-sonnet-5",
    name: "Claude Sonnet 5",
    provider: "Anthropic",
    brief: "Anthropic's model — careful, detailed writing and code",
    description:
      "Chat with Claude Sonnet 5, well suited to careful, detailed writing and code. Great when you want a thorough, well-reasoned response.",
    icon: Sparkles,
  },
  {
    id: "gemini-3-1-pro",
    name: "Gemini 3.1 Pro",
    provider: "Google",
    brief: "Google's model — large context, strong at research tasks",
    description:
      "Chat with Gemini 3.1 Pro, built for large-context and research-heavy tasks. Useful when you're working with a lot of source material at once.",
    icon: Gem,
  },
  {
    id: "grok-4-6",
    name: "Grok 4.6",
    provider: "xAI",
    brief: "xAI's model — real-time, web-connected answers",
    description:
      "Chat with Grok 4.6, geared toward real-time, web-connected answers. A good pick when you want responses grounded in current events.",
    icon: Zap,
  },
];
