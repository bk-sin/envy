"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  AlertTriangle,
  Clock,
  Bug,
  Shield,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-gray-900">Secret Sync</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Documentation
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Company
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Sign in
              </button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm text-purple-200">
                  Únete a la Beta Privada
                </span>
              </div>

              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Deja de pasar archivos{" "}
                <span className="text-purple-300">.env</span> por Slack
              </h1>

              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Sincroniza a tu equipo en 60 segundos. Gestiona variables de
                entorno de forma segura y automática.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                  placeholder="tu@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 flex-1"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 px-8">
                  Acceder a la Beta
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-purple-200">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Setup en 2 minutos</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">Terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-green-400">$ npm install secretsync</div>
                  <div className="text-gray-400">✓ Installed successfully</div>
                  <div className="text-green-400">$ secretsync login</div>
                  <div className="text-gray-400">
                    ✓ Authenticated successfully
                  </div>
                  <div className="text-green-400">$ secretsync pull</div>
                  <div className="text-gray-400">
                    ✓ Syncing variables for project: e-commerce-api
                  </div>
                  <div className="text-blue-400">
                    📦 Environment: Development
                  </div>
                  <div className="text-gray-400">
                    ✓ .env file updated with 18 variables
                  </div>
                  <div className="text-gray-400">
                    ✓ Your team is now in sync
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              El caos de los archivos .env
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ¿Te suena familiar? Tu equipo comparte variables por Slack, nadie
              sabe cuál es la última versión, y los bugs aparecen porque cada
              desarrollador tiene configuraciones diferentes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Inseguro
                </h3>
                <p className="text-gray-600">
                  Secretos compartidos por Slack, email o peor... subidos al
                  repositorio.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Lento
                </h3>
                <p className="text-gray-600">
                  Horas perdidas preguntando manualmente cada cambio con el
                  equipo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bug className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Propenso a errores
                </h3>
                <p className="text-gray-600">
                  Inconsistencias entre entornos que generan bugs en producción.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              La solución que tu equipo necesita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma centralizada con CLI mágica que sincroniza
              automáticamente las variables de entorno de todo tu equipo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dashboard Centralizado
                  </h3>
                  <p className="text-gray-600">
                    Gestiona proyectos y variables desde una interfaz limpia.
                    Define entornos, asigna permisos y mantén todo organizado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Terminal className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CLI Mágica
                  </h3>
                  <p className="text-gray-600">
                    Un simple{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      secretsync pull
                    </code>{" "}
                    y tu archivo .env se actualiza automáticamente. Sin copiar,
                    sin pegar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Control de Acceso
                  </h3>
                  <p className="text-gray-600">
                    Roles granulares. Los juniors ven development, los seniors
                    pueden acceder a production. Seguridad sin complicaciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Integraciones
                  </h3>
                  <p className="text-gray-600">
                    Conecta con Vercel, Netlify, GitHub Actions, Docker. Inyecta
                    variables de forma segura en tus pipelines de CI/CD.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-purple-600 text-white p-4 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">S</span>
                  </div>
                  <span className="font-semibold">Secret Sync Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">
                        E-commerce API
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      Synced
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-mono text-gray-700">
                        DATABASE_URL
                      </span>
                      <span className="text-xs text-gray-400">••••••••</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-mono text-gray-700">
                        STRIPE_SECRET_KEY
                      </span>
                      <span className="text-xs text-gray-400">••••••••</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-mono text-gray-700">
                        JWT_SECRET
                      </span>
                      <span className="text-xs text-gray-400">••••••••</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para sincronizar a tu equipo?
          </h2>
          <p className="text-xl text-purple-100 mb-12">
            Únete a cientos de equipos que ya están sincronizados. Sin
            configuración compleja, sin migraciones dolorosas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              placeholder="tu@email.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200 flex-1"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 px-8">
              Únete a la Beta
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-sm text-purple-200">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Gratis durante la beta</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Soporte prioritario</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold">Secret Sync</span>
            </div>

            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
