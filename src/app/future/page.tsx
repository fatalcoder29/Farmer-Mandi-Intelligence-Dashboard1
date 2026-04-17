"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  ArrowRight,
  Zap
} from 'lucide-react';

const VISION_ITEMS = [
  { 
    title: 'Direct UPI Mandi Payments', 
    subtitle: 'cashless Bharat',
    desc: 'Instant settlement of mandi proceeds into farmer bank accounts via UPI 2.0. No delayed payments, no fraud.',
    icon: CreditCard,
    color: 'from-blue-500 to-indigo-600'
  },
  { 
    title: 'Logistics Uber-fication', 
    subtitle: 'save on transport',
    desc: 'Deep integration with truck fleets for real-time pooling and transport cost optimization using AI route planning.',
    icon: Truck,
    color: 'from-emerald-500 to-teal-600'
  },
  { 
    title: 'Govt. Scheme Auto-Link', 
    subtitle: 'direct subsidies',
    desc: 'Automatically checks eligibility for PM-KISAN, crop insurance (PMFBY), and solar subsidies based on farm data.',
    icon: ShieldCheck,
    color: 'from-orange-500 to-amber-600'
  },
  { 
    title: 'Blockchain Traceability', 
    subtitle: 'farm to table',
    desc: 'Giving consumers a QR code to trace the exact source and quality of the crop, fetching 30% higher premium for farmers.',
    icon: Globe,
    color: 'from-purple-500 to-pink-600'
  }
];

export default function Vision2030() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[300px] w-full rounded-[48px] overflow-hidden flex flex-col items-center justify-center text-center p-8 bg-slate-900 border border-white/10"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/30 text-[10px] font-black uppercase tracking-widest">
            <Rocket className="w-4 h-4 mr-2" /> Beyond the Hackathon
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Vision 2030: <span className="text-gradient">Impact Scale</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">From information display to a closed-loop economic engine for 100 million farmers.</p>
        </div>
      </motion.div>

      {/* Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
         {VISION_ITEMS.map((item, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             whileHover={{ y: -5 }}
             className="glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border border-white/10 group relative overflow-hidden"
           >
              <div className={`absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br ${item.color} opacity-5 blur-[60px] group-hover:opacity-20 transition-opacity`} />
              
              <div className="flex items-start justify-between mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Status</p>
                   <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Alpha Development</p>
                </div>
              </div>

              <div className="space-y-3">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.subtitle}</p>
                 <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">{item.title}</h3>
                 <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                   {item.desc}
                 </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between group-hover:translate-x-1 transition-transform">
                 <span className="text-xs font-black text-slate-400 dark:text-slate-600 group-hover:text-emerald-500 transition-colors uppercase tracking-widest">Explore Roadmap</span>
                 <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-700 group-hover:text-emerald-500" />
              </div>
           </motion.div>
         ))}
      </div>

      {/* Impact Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism-dark p-12 rounded-[48px] text-center border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden"
      >
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />
         
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <p className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-2">Annual Savings</p>
               <h4 className="text-5xl font-black text-white tracking-tighter">₹200 Crore</h4>
               <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-tight">For 1 Lakh Farmers</p>
            </div>
            <div className="h-20 w-px bg-white/10 hidden md:block mx-auto" />
            <div>
               <p className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-2">Middlemen Cost Reduction</p>
               <h4 className="text-5xl font-black text-white tracking-tighter">42%</h4>
               <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-tight">Per Transaction</p>
            </div>
            <div className="h-20 w-px bg-white/10 hidden md:block mx-auto" />
            <div>
               <p className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-2">Bharat Reach</p>
               <h4 className="text-5xl font-black text-white tracking-tighter">12 States</h4>
               <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-tight">Q4 2026 Target</p>
            </div>
         </div>
      </motion.div>

    </div>
  );
}
