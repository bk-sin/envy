import { Check, Rocket } from "lucide-react";
import { CliSimulator } from "./cli-simulator";
import { EmailForm } from "./email-form";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8">
            <Rocket className="text-indigo-400 mr-2 w-4 h-4" />
            Unite a la Beta Privada
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tighter mb-6">
            Deja de pasar archivos{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              .env
            </span>{" "}
            por Slack
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Sincroniza a tu equipo en 60 segundos. Gestiona variables de entorno
            de forma segura y automática.
          </p>
          <EmailForm />
          <div className="flex items-center space-x-6 text-sm text-slate-400 mt-8">
            <div className="flex items-center">
              <Check className="text-emerald-400 mr-2 w-4 h-4" />
              Sin tarjeta de crédito
            </div>
            <div className="flex items-center">
              <Check className="text-emerald-400 mr-2 w-4 h-4" />
              Setup en 2 minutos
            </div>
          </div>
        </div>
        <CliSimulator />
      </div>
    </section>
  );
}
