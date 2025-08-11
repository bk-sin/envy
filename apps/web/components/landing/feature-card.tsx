import type { LucideProps } from "lucide-react";
import type { FC } from "react";

interface FeatureCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
  iconBgColor: string;
  iconTextColor: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor,
  iconTextColor,
}: FeatureCardProps) {
  return (
    <div className="flex items-start space-x-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBgColor}`}
      >
        <Icon className={`w-6 h-6 ${iconTextColor}`} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
