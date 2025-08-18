import { Check } from "lucide-react";
import { EmailForm } from "./email-form";
import { useTranslations } from 'next-intl';

export function CtaSection() {
  const t = useTranslations('ctaSection');
  return (
    <section
      id="beta"
      className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          {t('description')}
        </p>
        <div className="max-w-md mx-auto mb-8">
          <EmailForm />
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
          <div className="flex items-center">
            <Check className="text-emerald-400 mr-2 w-4 h-4" />
            {t('free')}
          </div>
          <div className="flex items-center">
            <Check className="text-emerald-400 mr-2 w-4 h-4" />
            {t('instant')}
          </div>
          <div className="flex items-center">
            <Check className="text-emerald-400 mr-2 w-4 h-4" />
            {t('support')}
          </div>
        </div>
      </div>
    </section>
  );
}
