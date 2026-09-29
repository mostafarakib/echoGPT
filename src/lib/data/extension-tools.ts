import {
  PenLine,
  BookOpen,
  Languages,
  ImageIcon,
  Video,
  Scale,
  Plug,
  type LucideIcon,
} from "lucide-react";

export interface ExtensionTool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badgeClassName: string;
}

export const extensionTools: ExtensionTool[] = [
  {
    id: "write",
    title: "Write",
    description: "Compose, reply, or fix grammar",
    icon: PenLine,
    badgeClassName: "bg-blue-100 text-blue-700",
  },
  {
    id: "read",
    title: "Read",
    description: "Summarize a page or file",
    icon: BookOpen,
    badgeClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "translate",
    title: "Translate",
    description: "Instant translation",
    icon: Languages,
    badgeClassName: "bg-sky-100 text-sky-700",
  },
  {
    id: "image",
    title: "Image",
    description: "Generate an image",
    icon: ImageIcon,
    badgeClassName: "bg-rose-100 text-rose-700",
  },
  {
    id: "video",
    title: "Video",
    description: "Generate a video",
    icon: Video,
    badgeClassName: "bg-amber-100 text-amber-700",
  },
  {
    id: "compare",
    title: "Compare",
    description: "Ask 2-3 models at once",
    icon: Scale,
    badgeClassName: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "connectors",
    title: "Connectors",
    description: "Link an MCP server",
    icon: Plug,
    badgeClassName: "bg-violet-100 text-violet-700",
  },
];
