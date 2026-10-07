import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, EyeOff, Eye, Droplet, ArrowRight } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Invalid email or password. Use admin@example.com / admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#e8f3fd] via-[#d5ebfa] to-[#bbdff7] font-sans">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Layered Waves */}
        <svg className="absolute bottom-0 w-full h-[35vh] min-h-[300px] text-blue-500/10" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[25vh] min-h-[200px] text-blue-500/20" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,202.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-[15vh] min-h-[150px] text-primary-600/20" preserveAspectRatio="none" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,197.3C672,181,768,139,864,128C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Floating Bubbles */}
        <div className="absolute top-[20%] left-[15%] w-16 h-16 bg-white/40 rounded-full blur-[2px]"></div>
        <div className="absolute top-[40%] right-[10%] w-24 h-24 bg-blue-400/20 rounded-full blur-[4px]"></div>
        <div className="absolute bottom-[30%] left-[5%] w-8 h-8 bg-blue-500/20 rounded-full blur-[1px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-12 h-12 bg-white/50 rounded-full blur-[2px]"></div>
      </div>

      <div className="w-full max-w-[440px] z-10 px-4 sm:px-0 flex flex-col items-center">


        {/* Login Card */}
        <div className="w-full bg-white/95 backdrop-blur-xl rounded-[10px] shadow-[0_20px_60px_-15px_rgba(0,30,80,0.15)] border border-white p-8 sm:p-10 transition-all">
          <div className="text-center mb-8">
            <h3 className="text-[24px] font-bold text-[#0f172a]">Admin Login</h3>
            <p className="text-[15px] text-[#64748b] mt-1.5 font-medium">Sign in to access your dashboard</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="p-3.5 text-[14px] font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center text-center">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary-600">
                  <User className="h-5 w-5 text-[#94a3b8] transition-colors group-focus-within:text-primary-600" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 border border-[#e2e8f0] rounded-2xl text-[15px] font-medium text-[#1e293b] placeholder:text-[#94a3b8] placeholder:font-normal bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all hover:bg-white"
                  placeholder="Email Address"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#94a3b8] transition-colors group-focus-within:text-primary-600" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-12 py-4 border border-[#e2e8f0] rounded-2xl text-[15px] font-medium text-[#1e293b] placeholder:text-[#94a3b8] placeholder:font-normal bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all hover:bg-white"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#94a3b8] hover:text-[#475569] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[14px] pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer w-5 h-5 opacity-0 absolute cursor-pointer" />
                  <div className="w-5 h-5 rounded-[6px] border-2 border-[#cbd5e1] bg-white flex items-center justify-center peer-checked:bg-primary-600 peer-checked:border-primary-600 transition-all group-hover:border-primary-400">
                    <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-[#64748b] font-medium group-hover:text-[#475569] transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-primary-600 font-bold hover:text-primary-700 transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full relative group bg-primary-600 hover:bg-primary-700 text-white font-bold text-[16px] py-4 rounded-2xl transition-all shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_24px_-6px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden mt-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Login <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0"></div>
            </button>
          </form>
        </div>

        <p className="z-10 mt-10 text-[13px] font-semibold text-[#64748b]">
          RO Water Reminders © {new Date().getFullYear()}
        </p>
      </div>

      {/* Add keyframes for shimmer */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
