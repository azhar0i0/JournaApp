import { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
}