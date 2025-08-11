import { Copy } from "lucide-react";

export const CliSimulator = () => (
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
            <span className="text-white typing-animation">
              npm install -g envy
            </span>
          </div>
          <div className="text-slate-400 ml-4">✓ Installed successfully</div>

          <div className="flex items-center mt-4">
            <span className="text-emerald-400 mr-2">$</span>
            <span className="text-white">envy login</span>
          </div>
          <div className="text-slate-400 ml-4">
            ✓ Authenticated successfully
          </div>

          <div className="flex items-center mt-4">
            <span className="text-emerald-400 mr-2">$</span>
            <span className="text-white">envy pull</span>
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
);
