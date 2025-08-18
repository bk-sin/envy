import { Code, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export const DashboardPreview = () => {
  const t = useTranslations("dashboardPreview");
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-4 h-4" />
            </div>
            <span className="text-white font-semibold">{t("title")}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Code className="text-emerald-600 w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {t("project")}
                  </div>
                  <div className="text-xs text-slate-500">{t("variables")}</div>
                </div>
              </div>
              <div className="text-xs text-emerald-600 font-semibold">
                {t("synced")}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">DATABASE_URL</span>
                <span className="text-slate-400">••••••••</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">STRIPE_SECRET_KEY</span>
                <span className="text-slate-400">••••••••</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">JWT_SECRET</span>
                <span className="text-slate-400">••••••••</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
