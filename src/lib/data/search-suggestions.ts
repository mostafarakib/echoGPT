import { Clock, Image, ListChecks, type LucideIcon } from "lucide-react";

export interface SearchSuggestion {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const searchSuggestions: SearchSuggestion[] = [
  { id: "s1", label: "Roadmap brainstorm for Q4", icon: Clock },
  { id: "s2", label: "Landing page copy draft", icon: Clock },
  { id: "s3", label: "Image Studio", icon: Image },
  { id: "s4", label: "AI Tasks", icon: ListChecks },
];
