import {
  Image,
  Video,
  Columns2,
  Plug,
  History,
  ShoppingBag,
  ListChecks,
  Briefcase,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  id: string;
  label: string;
  icon: LucideIcon;
  pro?: boolean;
  href?: string;
}

export const engagementLinks: NavLink[] = [
  {
    id: "image-studio",
    label: "Image Studio",
    icon: Image,
    pro: true,
    href: "/image-studio",
  },
  {
    id: "video-studio",
    label: "Video Studio",
    icon: Video,
    pro: true,
    href: "/video-studio",
  },
  { id: "compare", label: "Compare", icon: Columns2 },
  { id: "connectors", label: "Connectors", icon: Plug },
  { id: "history", label: "History", icon: History },
  { id: "store", label: "Store", icon: ShoppingBag },
  { id: "ai-tasks", label: "AI Tasks", icon: ListChecks },
  { id: "ai-job-analysis", label: "AI Job Analysis", icon: Briefcase },
  { id: "ai-sop-builder", label: "AI SOP Builder", icon: FileText },
];
