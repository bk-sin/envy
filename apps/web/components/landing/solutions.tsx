import { featuresData } from "@/data/landing";
import { DashboardPreview } from "./dashboard-preview";
import { FeatureCard } from "./feature-card";

export function Solutions() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            La solución que tu equipo necesita
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Una plataforma centralizada con CLI que sincroniza automáticamente
            las variables de entorno de todo tu equipo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {featuresData.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
