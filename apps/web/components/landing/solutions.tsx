import { featuresData } from "@/data/landing";
import { DashboardPreview } from "./dashboard-preview";
import { FeatureCard } from "./feature-card";
import { useTranslations } from "next-intl";

export function Solutions() {
  const t = useTranslations("solutions");
  return (
    <section
      id="solutions"
      className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {featuresData.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
