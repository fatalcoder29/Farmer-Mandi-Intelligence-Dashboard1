"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Landmark, 
  Gift, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle,
  TrendingUp,
  FileText,
  BadgeInfo,
  ChevronRight
} from 'lucide-react';

const SCHEMES = [
  {
    id: 'pm-kisan',
    title: 'PM-KISAN Samman Nidhi',
    titleHi: 'प्रधानमंत्री किसान सम्मान निधि',
    benefit: '₹6,000 / year',
    desc: 'Direct income support to all landholding farmer families in three equal installments.',
    icon: Landmark,
    color: 'emerald',
    status: 'Applied'
  },
  {
    id: 'pmfby',
    title: 'PM Fasal Bima Yojana',
    titleHi: 'प्रधानमंत्री फसल बीमा योजना',
    benefit: 'Full Crop Insurance',
    desc: 'Low premium crop insurance against natural calamities, pests or diseases.',
    icon: ShieldCheck,
    color: 'indigo',
    status: 'Eligible'
  },
  {
    id: 'subsidies',
    title: 'Fertilizer & Seed Subsidy',
    titleHi: 'खाद और बीज सब्सिडी',
    benefit: 'Variable Disounts',
    desc: 'Get direct benefit transfer or discount on seeds and fertilizers at local centers.',
    icon: Gift,
    color: 'amber',
    status: 'Action Required'
  },
  {
    id: 'kcc',
    title: 'Kisan Credit Card',
    titleHi: 'किसान क्रेडिट कार्ड',
    benefit: 'Low Interest Loans',
    desc: 'Short term credit for high cultivation expenses and post-harvest requirements.',
    icon: FileText,
    color: 'blue',
    status: 'Active'
  }
];

export default function SchemesTracker() {
  const [selectedScheme, setSelectedScheme] = useState<any>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
             <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Government Support</span>
             <p className="text-xs text-slate-500 font-bold flex items-center">Verified by Dept. of Agriculture</p>
          </div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white flex items-center space-x-3 tracking-tight">
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-500">
              <BadgeInfo className="w-8 h-8" />
            </div>
            <span>सरकारी योजना Tracker (Sarkari Yojana)</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Find and track government subsidies and income support schemes effortlessly.</p>
        </div>
        <button className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black rounded-2xl shadow-xl hover:scale-105 transition-all text-xs uppercase tracking-widest">
           Apply for New Scheme
        </button>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Schemes List */}
        <div className="lg:col-span-2 space-y-4">
           {SCHEMES.map((scheme, i) => (
             <motion.div 
               key={scheme.id}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               onClick={() => setSelectedScheme(scheme)}
               className={`group glassmorphism rounded-3xl dark:glassmorphism-dark p-6 cursor-pointer border-2 transition-all overflow-hidden relative ${selectedScheme?.id === scheme.id ? 'border-amber-500 bg-amber-500/5' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-700'}`}
             >
                {/* Visual Accent */}
                <div className={`absolute -right-4 -top-4 w-32 h-32 bg-${scheme.color}-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform`} />

                <div className="flex items-center justify-between relative z-10">
                   <div className="flex items-start space-x-5">
                      <div className={`w-14 h-14 rounded-2xl bg-${scheme.color}-500/10 flex items-center justify-center text-${scheme.color}-500 shadow-inner group-hover:bg-${scheme.color}-500 group-hover:text-white transition-all`}>
                         <scheme.icon className="w-8 h-8" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest leading-none mb-1">{scheme.titleHi}</p>
                         <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">{scheme.title}</h3>
                         <div className="flex items-center space-x-3 mt-1">
                            <span className="text-xs font-bold text-slate-500">{scheme.benefit}</span>
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                            <span className={`text-[10px] uppercase font-black tracking-widest ${scheme.status === 'Eligible' ? 'text-blue-500' : scheme.status === 'Applied' ? 'text-emerald-500' : 'text-amber-500'}`}>{scheme.status}</span>
                         </div>
                      </div>
                   </div>
                   <div className="hidden sm:block">
                      <ChevronRight className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-amber-500 transition-colors" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Detail Panel */}
        <div className="space-y-6">
           <AnimatePresence mode='wait'>
             {selectedScheme ? (
               <motion.div 
                 key={selectedScheme.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 className="glassmorphism rounded-[32px] dark:glassmorphism-dark p-8 border-2 border-amber-500/20 shadow-2xl sticky top-24"
               >
                  <div className="flex justify-between items-start mb-6">
                     <div className={`p-3 bg-${selectedScheme.color}-500/10 text-${selectedScheme.color}-500 rounded-2xl`}>
                        <selectedScheme.icon className="w-8 h-8" />
                     </div>
                     <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${selectedScheme.status === 'Eligible' ? 'bg-blue-500/10 text-blue-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                        Verified Status
                     </span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2 leading-tight">{selectedScheme.title}</h2>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                     {selectedScheme.desc}
                  </p>

                  <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 mb-8 border border-white/5">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Documents Required:</p>
                     <ul className="space-y-2">
                        <li className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Aadhaar Card</li>
                        <li className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Land Ownership Docs</li>
                        <li className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Bank Passbook</li>
                     </ul>
                  </div>

                  <button className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center space-x-3 uppercase text-sm tracking-widest">
                     <span>{selectedScheme.status === 'Applied' ? 'Check Application Status' : 'Start Eligibility Check'}</span>
                     <ExternalLink className="w-4 h-4" />
                  </button>
               </motion.div>
             ) : (
               <div className="glassmorphism rounded-[32px] dark:glassmorphism-dark p-12 text-center opacity-40 border-2 border-dashed border-slate-700">
                  <HelpCircle className="w-16 h-16 mx-auto mb-4 text-slate-500" />
                  <p className="text-xs font-black uppercase text-slate-400 tracking-widest">Select a scheme to see details</p>
               </div>
             )}
           </AnimatePresence>

           <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp className="w-24 h-24" /></div>
              <h4 className="text-sm font-black uppercase mb-3 tracking-widest">Direct Benefit (DBT)</h4>
              <p className="text-xs font-bold text-emerald-100 mb-4 leading-relaxed">
                 You have received **₹12,400** from various schemes in the last 12 months.
              </p>
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-black rounded-2xl text-[10px] uppercase tracking-widest">
                 View Payment History
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}
