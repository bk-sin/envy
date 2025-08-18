import { problemsData } from "@/data/landing";
import { InfoCard } from "./info-card";
import { useTranslations } from "next-intl";

export function Problems() {
  const t = useTranslations("problems");
  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">{t("title")}</h2>
        <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemsData.map((problem, idx) => (
            <InfoCard key={idx} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}
