import {
  AlertTriangle,
  Bug,
  Clock,
  Gauge,
  Puzzle,
  Terminal,
  Users,
} from "lucide-react";

export const navLinks = [
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Company" },
];

export const problemsData = [
  {
    icon: AlertTriangle,
    title: "Inseguro",
    description:
      "Secretos compartidos por Slack, email o peor... subidos al repositorio",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBgColor: "bg-red-100",
    iconTextColor: "text-red-600",
  },
  {
    icon: Clock,
    title: "Lento",
    description:
      "Horas perdidas sincronizando manualmente cada cambio con el equipo",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconBgColor: "bg-amber-100",
    iconTextColor: "text-amber-600",
  },
  {
    icon: Bug,
    title: "Propenso a errores",
    description:
      "Inconsistencias entre entornos que generan bugs en producción",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBgColor: "bg-slate-100",
    iconTextColor: "text-slate-600",
  },
];

export const featuresData = [
  {
    icon: Gauge,
    title: "Dashboard Centralizado",
    description:
      "Gestiona proyectos y variables desde una interfaz limpia. Definí entornos, asigna permisos y mantén todo organizado.",
    iconBgColor: "bg-indigo-100",
    iconTextColor: "text-indigo-600",
  },
  {
    icon: Terminal,
    title: "CLI Sencilla",
    description:
      "Un simple 'secretsync pull' y tu archivo .env se actualiza automáticamente. Sin copiar, sin pegar.",
    iconBgColor: "bg-emerald-100",
    iconTextColor: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Control de Acceso",
    description:
      "Roles granulares. Los juniors ven development, los seniors acceden a production. Seguridad sin complicaciones.",
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-600",
  } /* 
  {
    icon: Puzzle,
    title: "Integraciones",
    description:
      "Conecta con Vercel, Netlify, GitHub Actions, Docker. Inyecta variables de forma segura en tus pipelines de CI/CD.",
    iconBgColor: "bg-orange-100",
    iconTextColor: "text-orange-600",
  }, */,
];
