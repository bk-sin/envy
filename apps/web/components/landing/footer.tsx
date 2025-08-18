import Link from "next/link";
import { EnvyIcon } from "../ui/envy-icon";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <EnvyIcon />
            <span className="text-lg font-bold">Envy</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <Link
              href="#"
              className="hover:text-white cursor-pointer transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="#"
              className="hover:text-white cursor-pointer transition-colors"
            >
              {t("terms")}
            </Link>
            <Link
              href="#"
              className="hover:text-white cursor-pointer transition-colors"
            >
              {t("support")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
