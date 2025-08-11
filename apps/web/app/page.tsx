"use client";
import {
  Check,
  AlertTriangle,
  Clock,
  Bug,
  Shield,
  Terminal,
  Users,
  Copy,
  Rocket,
  Gauge,
  Code,
  Puzzle,
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
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8">
              <Rocket className="text-indigo-400 mr-2 w-4 h-4" />
              Únete a la Beta Privada
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Deja de pasar archivos{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                .env
              </span>{" "}
              por Slack
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Sincroniza a tu equipo en 60 segundos. Gestiona variables de entorno de forma segura y automática.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105">
                Acceder a la Beta
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
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
          
          <div className="relative" id="cli-simulator">
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-medium">Terminal</span>
                </div>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-emerald-400 mr-2">$</span>
                    <span className="text-white">npm install -g secretsync</span>
                  </div>
                  <div className="text-slate-400 ml-4">✓ Installed successfully</div>
                  
                  <div className="flex items-center mt-4">
                    <span className="text-emerald-400 mr-2">$</span>
                    <span className="text-white">secretsync login</span>
                  </div>
                  <div className="text-slate-400 ml-4">✓ Authenticated successfully</div>
                  
                  <div className="flex items-center mt-4">
                    <span className="text-emerald-400 mr-2">$</span>
                    <span className="text-white">secretsync pull</span>
                  </div>
                  <div className="text-slate-400 ml-4">
                    <div>📦 Syncing variables for project: e-commerce-api</div>
                    <div>🔄 Environment: development</div>
                    <div>✓ .env file updated with 18 variables</div>
                    <div className="text-emerald-400">🎉 Your team is now in sync!</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">El caos de los archivos .env</h2>
          <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
            ¿Te suena familiar? Tu equipo comparte variables por Slack, nadie sabe cuál es la última versión, 
            y los bugs aparecen porque cada desarrollador tiene configuraciones diferentes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-red-50 rounded-2xl border border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="text-red-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Inseguro</h3>
              <p className="text-slate-600">Secretos compartidos por Slack, email o peor... subidos al repositorio</p>
            </div>
            
            <div className="p-8 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="text-amber-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Lento</h3>
              <p className="text-slate-600">Horas perdidas sincronizando manualmente cada cambio con el equipo</p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Bug className="text-slate-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Propenso a errores</h3>
              <p className="text-slate-600">Inconsistencias entre entornos que generan bugs en producción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">La solución que tu equipo necesita</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Una plataforma centralizada con CLI mágica que sincroniza automáticamente 
              las variables de entorno de todo tu equipo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gauge className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dashboard Centralizado</h3>
                    <p className="text-slate-600">Gestiona proyectos y variables desde una interfaz limpia. Define entornos, asigna permisos y mantén todo organizado.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Terminal className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">CLI Mágica</h3>
                    <p className="text-slate-600">Un simple <code className="bg-slate-200 px-2 py-1 rounded">secretsync pull</code> y tu archivo .env se actualiza automáticamente. Sin copiar, sin pegar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Control de Acceso</h3>
                    <p className="text-slate-600">Roles granulares. Los juniors ven development, los seniors acceden a production. Seguridad sin complicaciones.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Puzzle className="text-orange-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Integraciones</h3>
                    <p className="text-slate-600">Conecta con Vercel, Netlify, GitHub Actions, Docker. Inyecta variables de forma segura en tus pipelines de CI/CD.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="text-white w-4 h-4" />
                    </div>
                    <span className="text-white font-semibold">Secret Sync Dashboard</span>
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
                          <div className="font-semibold text-slate-900">E-commerce API</div>
                          <div className="text-xs text-slate-500">18 variables</div>
                        </div>
                      </div>
                      <div className="text-xs text-emerald-600 font-semibold">Synced</div>
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
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para sincronizar a tu equipo?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Únete a cientos de equipos que ya están sincronizados. 
            Sin configuración compleja, sin migraciones dolorosas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105">
              Únete a la Beta
            </button>
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
