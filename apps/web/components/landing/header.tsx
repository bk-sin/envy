import { navLinks } from "@/data/landing";
import Link from "next/link";
import { EnvyIcon } from "../ui/envy-icon";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <EnvyIcon />
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Envy
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 cursor-pointer transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Sign in
            </Link>
            <Link href="/get-started" className="hidden md:inline-block">
              <Button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
