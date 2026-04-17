"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowLeft, 
  Calendar, 
  ArrowUpRight, 
  Target, 
  PieChart, 
  Zap,
  Info,
  DollarSign,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

export default function ProfitAnalysis() {
  const chartData = [40, 55, 48, 70, 65, 90, 85]; // Mock profit path
  
  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* Navigation */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/" className="flex items-center text-xs font-black text-slate-500 uppercase tracking-widest hover:text-emerald-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Intelligence Dashboard
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
           <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-500/20">Financial Analytics</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tighter">
             Net Profit <span className="text-emerald-500">Trends</span> (शुद्ध लाभ)
           </h1>
           <p className="text-slate-500 dark:text-slate-400 font-bold mt-2 max-w-2xl text-lg leading-relaxed">
             Track your financial growth performance based on market intelligence and production costs.
           </p>
        </div>
        <div className="flex items-center space-x-4">
           <div className="bg-slate-100 dark:bg-slate-800/80 px-6 py-4 rounded-3xl border border-white/5 text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Net Profit</p>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">₹1,24,500</h2>
           </div>
        </div>
      </motion.div>

      {/* Main Interactive Chart Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glassmorphism rounded-[48px] dark:glassmorphism-dark p-10 border border-white/10 relative overflow-hidden group shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-transform duration-1000">
           <TrendingUp className="w-56 h-56 text-emerald-500" />
        </div>

        <div className="flex justify-between items-center mb-10 relative z-10">
           <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Growth Trajectory (वृद्धि का रास्ता)</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Historical Performance: Last 6 Months</p>
           </div>
           <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-2xl text-xs font-black tracking-widest border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
              UP BY 12.5% THIS SEASON
           </div>
        </div>

        {/* Custom SVG Chart */}
        <div className="w-full h-[300px] relative z-10 mt-12 bg-slate-900/30 rounded-3xl p-8 border border-white/5 overflow-hidden">
           <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                 </linearGradient>
              </defs>
              {/* Grid Lines */}
              {[0, 25, 50, 75, 100].map(v => (
                 <line key={v} x1="0" y1={`${v}%`} x2="100%" y2={`${v}%`} stroke="white" strokeOpacity="0.05" strokeWidth="1" />
              ))}
              
              {/* The Line Path */}
              <motion.path 
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeOut" }}
                 d={`M 0 100 ${chartData.map((v, i) => `L ${(i / (chartData.length - 1)) * 1000} ${150 - (v * 1.5)}`).join(' ')} L 1000 100`}
                 fill="none"
                 stroke="#10b981"
                 strokeWidth="3"
                 vectorEffect="non-scaling-stroke"
              />
              {/* Fill Area */}
              <motion.path 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1, duration: 1 }}
                 d={`M 0 300 ${chartData.map((v, i) => `L ${(i / (chartData.length - 1)) * 1000} ${150 - (v * 1.5)}`).join(' ')} L 1000 300 Z`}
                 fill="url(#chartGradient)"
                 vectorEffect="non-scaling-stroke"
              />

              {/* Data Points */}
              {chartData.map((v, i) => (
                 <motion.circle 
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + (i * 0.1) }}
                    cx={`${(i / (chartData.length - 1)) * 1000}`} 
                    cy={`${150 - (v * 1.5)}`} 
                    r="15" 
                    fill="#10b981" 
                    stroke="white" 
                    strokeWidth="5"
                    className="cursor-pointer hover:r-20 transition-all"
                    vectorEffect="non-scaling-stroke"
                 />
              ))}
           </svg>
        </div>

        <div className="flex justify-between mt-6 px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest relative z-10">
           <span>Oct 2025</span>
           <span>Nov</span>
           <span>Dec</span>
           <span>Jan</span>
           <span>Feb</span>
           <span>Mar</span>
           <span className="text-emerald-500">April 2026</span>
        </div>
      </motion.div>

      {/* Additional Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Efficiency Card */}
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glassmorphism rounded-[40px] dark:glassmorphism-dark p-8 border border-white/10 group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
               <PieChart className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-slate-800 dark:text-white mb-2 uppercase tracking-tight">Crop ROI Split</h4>
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                     <span>Wheat (गेहूं)</span>
                     <span className="text-emerald-500">62% ROI</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 rounded-full" style={{ width: '62%' }} />
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                     <span>Potato (आलू)</span>
                     <span className="text-amber-500">38% ROI</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-amber-500 rounded-full" style={{ width: '38%' }} />
                  </div>
               </div>
            </div>
         </motion.div>

         {/* Efficiency Card 2 */}
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glassmorphism rounded-[40px] dark:glassmorphism-dark p-8 border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
               <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-slate-800 dark:text-white mb-2 uppercase tracking-tight">Optimization Alert</h4>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
               By reducing high-phosphorus fertilizer by **15%** (which was overused), you saved **₹12,400** in production costs this month without losing yield.
            </p>
            <button className="mt-6 flex items-center text-[10px] font-black text-emerald-500 uppercase tracking-widest">
               View Fertilizer Audit <ArrowUpRight className="w-3 h-3 ml-1" />
            </button>
         </motion.div>

         {/* Recommendation Card */}
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[40px] p-8 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Target className="w-32 h-32" /></div>
            <div>
               <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Future Profit Goal</h4>
               <p className="text-xs font-bold opacity-80 leading-relaxed">
                  You are **₹25,500** away from your Seasonal Profit Goal of ₹1.5L. Selling remaining Wheat stock this week will cover this gap!
               </p>
            </div>
            <button className="w-full mt-8 py-4 bg-white text-emerald-600 font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-xl">
               Execute Sell Plan
            </button>
         </motion.div>
      </div>

    </div>
  );
}
