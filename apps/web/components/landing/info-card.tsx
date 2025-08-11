import type { LucideProps } from "lucide-react";
import type { FC } from "react";

interface InfoCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  iconBgColor: string;
  iconTextColor: string;
}

export function InfoCard({
  icon: Icon,
  title,
  description,
  bgColor,
  borderColor,
  iconBgColor,
  iconTextColor,
}: InfoCardProps) {
  return (
    <div className={`p-8 rounded-2xl border ${bgColor} ${borderColor}`}>
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 ${iconBgColor}`}
      >
        <Icon className={`w-8 h-8 ${iconTextColor}`} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
