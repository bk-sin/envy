import {
  AlertTriangle,
  Bug,
  Clock,
  Gauge,
  Terminal,
  Users,
} from "lucide-react";

export const problemsData = [
  {
    icon: AlertTriangle,
    titleKey: "insecure.title",
    descriptionKey: "insecure.description",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBgColor: "bg-red-100",
    iconTextColor: "text-red-600",
  },
  {
    icon: Clock,
    titleKey: "slow.title",
    descriptionKey: "slow.description",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBgColor: "bg-amber-100",
    iconTextColor: "text-amber-600",
  },
  {
    icon: Bug,
    titleKey: "errorProne.title",
    descriptionKey: "errorProne.description",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBgColor: "bg-slate-100",
    iconTextColor: "text-slate-600",
  },
];

export const featuresData = [
  {
    icon: Gauge,
    titleKey: "dashboard.title",
    descriptionKey: "dashboard.description",
    iconBgColor: "bg-indigo-100",
    iconTextColor: "text-indigo-600",
  },
  {
    icon: Terminal,
    titleKey: "cli.title",
    descriptionKey: "cli.description",
    iconBgColor: "bg-emerald-100",
    iconTextColor: "text-emerald-600",
  },
  {
    icon: Users,
    titleKey: "access.title",
    descriptionKey: "access.description",
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-600",
  },
  /*
  {
    icon: Puzzle,
    titleKey: "integrations.title",
    descriptionKey: "integrations.description",
    iconBgColor: "bg-orange-100",
    iconTextColor: "text-orange-600",
  },
  */
];
