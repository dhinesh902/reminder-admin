import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, EyeOff, Eye, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export function Login() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
      } else {
        setError('Invalid credentials. Use admin@example.com / admin');
        setIsLoading(false);
      }
    }, 400);
  };

  const fillDemoCredentials = () => {
    setEmail('admin@example.com');
    setPassword('admin');
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] font-sans p-4 sm:p-6">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Layered Decorative Wave SVGs */}
        <svg className="absolute bottom-0 w-full h-[36vh] min-h-[300px] text-blue-500/10" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[24vh] min-h-[200px] text-primary-600/15" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,202.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        {/* Ambient Blurred Water Glows */}
        <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-blue-300/40 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary-400/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[25%] w-48 h-48 bg-white/60 rounded-full blur-[50px]"></div>
      </div>

      <div className="w-full max-w-[460px] z-10 flex flex-col items-center">



        {/* Login Card */}
        <div className="w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)] border border-white p-8 sm:p-10 transition-all">
          {/* Brand Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary-600/15 mb-3 group hover:scale-105 transition-transform duration-300 p-2.5 border border-slate-100">
              <img src="/ro-logo.png" alt="RO Water Reminders Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">RO Water Reminders</h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Admin Portal & Service Management</p>
          </div>
          <form className="space-y-5" onSubmit={handleLogin}>
            {error && (
              <div className="p-3 text-xs sm:text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary-600 text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <a href="#" className="text-xs text-primary-600 font-bold hover:text-primary-700 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary-600 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-11 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="peer w-4 h-4 opacity-0 absolute cursor-pointer"
                  />
                  <div className="w-4 h-4 rounded-md border border-slate-300 bg-white flex items-center justify-center peer-checked:bg-primary-600 peer-checked:border-primary-600 transition-all group-hover:border-primary-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                  Remember this device
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/35 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-75 disabled:hover:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <>Signing in...</>
                ) : (
                  <>
                    Sign In to Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </button>
          </form>

        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
