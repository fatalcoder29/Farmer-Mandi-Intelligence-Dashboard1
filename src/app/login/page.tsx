"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  UserPlus,
  ArrowLeft,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('Cryptic Coders');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      setError('पिनकोड 10 अंकों का होना चाहिए (Enter 10 digit number)');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (otp === '834011') {
        login(phone, name);
        router.push('/');
      } else {
        setError('गलत ओटीपी (Incorrect OTP). Please use 834011');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border-2 border-emerald-500/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5"><ShieldCheck className="w-32 h-32" /></div>

        <div className="text-center mb-8 relative z-10">
          <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-xl shadow-emerald-500/20">
             <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tighter">KisanAI Login</h1>
          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1 uppercase tracking-widest">Safe & Secure Portal</p>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center space-x-3 text-red-500 text-xs font-bold leading-tight relative z-10">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleGetOtp}
              className="space-y-6 relative z-10"
            >
              <div className="space-y-4">
                <div>
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Mobile Number (मोबाइल नंबर)</label>
                   <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                      </div>
                      <input 
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98XXXXXXXX"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all font-bold text-lg"
                      />
                   </div>
                </div>

                <div>
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Full Name (पूरा नाम)</label>
                   <input 
                      type="text"
                      className="w-full px-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all font-bold text-slate-800 dark:text-white"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                   />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 uppercase tracking-widest text-sm"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Get OTP (ओटीपी)</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </motion.form>
          ) : (
            <motion.form 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleVerify}
              className="space-y-6 relative z-10"
            >
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-emerald-500 transition-colors mb-4"
              >
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Phone
              </button>

              <div className="text-center mb-6">
                 <p className="text-xs font-bold text-slate-500 leading-relaxed">Verification code sent to <br/><span className="text-slate-800 dark:text-white font-black">+91 {phone}</span></p>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-400 group-focus-within:text-emerald-500" />
                </div>
                <input 
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="------"
                  className="w-full pl-12 pr-4 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 focus:border-emerald-500 outline-none transition-all font-black text-2xl tracking-[0.5em] text-center text-slate-800 dark:text-white"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 uppercase tracking-widest text-sm"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Verify & Login</span><CheckCircle2 className="w-4 h-4" /></>}
              </button>

              <div className="text-center">
                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest py-1 px-3 bg-emerald-500/10 rounded-full">
                    Demo Code: 834011
                 </span>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
