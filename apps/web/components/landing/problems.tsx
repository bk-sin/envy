import { problemsData } from "@/data/landing";
import { InfoCard } from "./info-card";

export function Problems() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          El caos de los archivos .env
        </h2>
        <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
          ¿Te suena familiar? Tu equipo comparte variables por Slack, nadie sabe
          cuál es la última versión, y los bugs aparecen porque cada
          desarrollador tiene configuraciones diferentes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemsData.map((problem) => (
            <InfoCard key={problem.title} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}
