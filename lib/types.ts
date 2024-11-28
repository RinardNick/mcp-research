import type { LucideIcon } from "lucide-react";

export interface AccordionData {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string[];
}

export interface ExternalLink {
  text: string;
  url: string;
  icon: LucideIcon;
}