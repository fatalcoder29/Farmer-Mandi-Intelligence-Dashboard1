"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Leaf, 
  TrendingDown, 
  Droplets, 
  ThermometerSun, 
  LineChart, 
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  PieChart,
  Target
} from 'lucide-react';
import Link from 'next/link';

export default function AdvisorHub() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* Header Link Back */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/" className="flex items-center text-xs font-black text-slate-500 uppercase tracking-widest hover:text-emerald-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
      </motion.div>

      {/* Main Title Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
           <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-500/20">AI Intelligence Hub</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tighter">
             Gyan Guru <span className="text-emerald-500">Expert Advisor</span>
           </h1>
           <p className="text-slate-500 dark:text-slate-400 font-bold mt-2 max-w-2xl text-lg">
             Deep-dive analysis of your current farm metrics and market predictions. (आपके खेत और बाजार का विस्तृत विश्लेषण)
           </p>
        </div>
        <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
           Download Report (PDF)
        </button>
      </motion.div>

      {/* Grid: 1. Technical Strategy, 2. Market Pulse */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Deep Dive: Mulching Strategy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glassmorphism rounded-[48px] dark:glassmorphism-dark p-10 border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-transform duration-1000">
             <Leaf className="w-40 h-40 text-emerald-500" />
          </div>

          <div className="flex items-center space-x-4 mb-8">
             <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                <Target className="w-8 h-8" />
             </div>
             <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Crop Strategy: Mulching</h3>
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Technique: Moisture Optimization</p>
             </div>
          </div>

          <div className="space-y-8 relative z-10">
             <section>
                <h4 className="text-sm font-black text-slate-800 dark:text-white mb-2 flex items-center">
                   <ThermometerSun className="w-4 h-4 mr-2 text-amber-500" /> Why now? (अभी क्यों?)
                </h4>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                   Currently, your soil moisture is at **42%**, which is the &apos;Red Zone&apos; for potatoes. With the heatwave arriving in 48h, evaporation will spike. Mulching will trap moisture and keep soil temperature **3-5°C cooler**.
                </p>
             </section>

             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-3xl border border-white/5">
                   <p className="text-3xl font-black text-emerald-500">12%</p>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Water Saving</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-3xl border border-white/5">
                   <p className="text-3xl font-black text-amber-500">8%</p>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Yield Increase</p>
                </div>
             </div>

             <section className="bg-emerald-500/5 p-6 rounded-3xl border border-emerald-500/20">
                <h4 className="text-sm font-black text-emerald-600 mb-3 flex items-center">
                   <BookOpen className="w-4 h-4 mr-2" /> Step-by-Step Implementation
                </h4>
                <ul className="space-y-3">
                   {['Prepare dry straw or plastic film sheets.', 'Apply mulch layers at the base of potato plants.', 'Ensure soil is slightly damp before applying.', 'Check moisture again after 24h via IoT sensors.'].map((step, i) => (
                      <li key={i} className="flex items-start text-xs font-bold text-slate-700 dark:text-slate-300">
                         <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] mr-3 shrink-0">{i+1}</span>
                         {step}
                      </li>
                   ))}
                </ul>
             </section>
          </div>
        </motion.div>

        {/* Market Analysis: Wheat Price Prediction */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="glassmorphism rounded-[48px] dark:glassmorphism-dark p-10 border border-white/10 relative overflow-hidden flex flex-col group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-transform duration-1000">
             <LineChart className="w-40 h-40 text-amber-500" />
          </div>

          <div className="flex items-center space-x-4 mb-8">
             <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-amber-500/20">
                <TrendingDown className="w-8 h-8" />
             </div>
             <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Financial Hub: Wheat Market</h3>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Risk Level: High (अगले 10 दिन)</p>
             </div>
          </div>

          <div className="flex-1 space-y-8 relative z-10">
             <section>
                <h4 className="text-sm font-black text-slate-800 dark:text-white mb-2 flex items-center">
                   <PieChart className="w-4 h-4 mr-2 text-indigo-500" /> Why the price crash?
                </h4>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                   Maharashtra harvest has hit a surplus cycle. **1.2 Million tonnes** are entering the market via transport trucks in 72h. Supply will overwhelm demand, causing a **₹300 - ₹450 price drop** per quintal.
                </p>
             </section>

             <div className="bg-slate-900 p-8 rounded-[32px] border border-white/10 shadow-inner">
                <div className="flex justify-between items-end h-[150px] gap-4">
                   {[80, 75, 90, 85, 40, 30, 25].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className={`w-full rounded-t-lg ${i < 4 ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`}
                      />
                   ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                   <span>Today</span>
                   <span>Day 5</span>
                   <span className="text-red-500">Day 10 (Crash)</span>
                </div>
             </div>

             <div className="bg-amber-500/10 p-6 rounded-3xl border border-amber-500/20">
                <h4 className="text-sm font-black text-amber-600 mb-2 flex items-center uppercase tracking-tight">
                   <ShieldCheck className="w-4 h-4 mr-2" /> AI Recommendation (सुझाव)
                </h4>
                <p className="text-xs font-black text-amber-700 dark:text-amber-400">
                   **Sell 60% of your Wheat store today.** Use the Digital Mandi Reverse Auction to lock in the ₹2,480 price before the dump starts. 🚀
                </p>
                <button className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                   Go to Digital Mandi
                </button>
             </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Info Hub */}
      <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         className="p-10 glassmorphism dark:glassmorphism-dark rounded-[40px] text-center border-2 border-emerald-500/10"
      >
         <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Gyan Guru Trusted Intelligence</h4>
         <p className="text-sm font-bold text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Our advice is generated using real-time Soil Sensors, Agmarknet Market Feeds, and NASA Satellite Weather Data. We ensure that every piece of advice helps you save money and increase yield.
         </p>
      </motion.div>

    </div>
  );
}
