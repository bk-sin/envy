import { Check } from "lucide-react";
import { EmailForm } from "./email-form";

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para sincronizar a tu equipo?
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Únete a cientos de equipos que ya están sincronizados. Sin
          configuración compleja, sin migraciones dolorosas.
        </p>
        <div className="max-w-md mx-auto mb-8">
          <EmailForm />
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
          <div className="flex items-center">
            <Check className="text-emerald-400 mr-2 w-4 h-4" />
            Gratis durante la beta
          </div>
          <div className="flex items-center">
            <Check className="text-emerald-400 mr-2 w-4 h-4" />
            Acceso inmediato
          </div>
          <div className="flex items-center">
            <Check className="text-emerald-400 mr-2 w-4 h-4" />
            Soporte prioritario
          </div>
        </div>
      </div>
    </section>
  );
}
