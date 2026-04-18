"use client";
import React, { useState } from 'react';
import { Users, Megaphone, MapPin, Clock, CreditCard, Send, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialReports = [
  { id: 1, user: 'Suresh Kumar', mandi: 'Lucknow Hub', category: 'Crowd Status', report: 'Bhari bheed hai, 4 ghante wait karna pad sakta hai.', timestamp: '10 mins ago', vibes: 'Busy' },
  { id: 2, user: 'Mahesh Singh', mandi: 'Barabanki Local', category: 'Payment', report: 'Turant payment mil rahi hai. Aadhatiya acche price de rahe hain.', timestamp: '45 mins ago', vibes: 'Positive' },
  { id: 3, user: 'Rajiv Yadav', mandi: 'Patna Mandi', category: 'Supply', report: 'Aloo ki aavak kam hai aaj, price badhne ke chance hain.', timestamp: '2 hours ago', vibes: 'Insight' },
];

export default function CommunityParticipation() {
  const [reports, setReports] = useState(initialReports);
  const [newReport, setNewReport] = useState({ mandi: 'Lucknow Hub', category: 'Crowd Status', report: '' });

  const postReport = () => {
    if (!newReport.report) return;
    const reportData = {
      ...newReport,
      id: Date.now(),
      user: 'You (Farmer)',
      timestamp: 'Just now',
      vibes: newReport.category === 'Payment' ? 'Positive' : 'Insight'
    };
    setReports([reportData, ...reports]);
    setNewReport({ ...newReport, report: '' });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black flex items-center space-x-4 text-slate-800 dark:text-white tracking-tighter">
          <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 shadow-lg shadow-emerald-500/10">
            <Users className="w-8 h-8" />
          </div>
          <span>Kisan Community Feed</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-3 font-bold text-lg">
          Live reports from fellow farmers at the mandi. (किसानों की स्थानीय रिपोर्ट)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Report Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border border-white/10 shadow-2xl h-fit sticky top-24"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Megaphone className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Become a Mandi Reporter</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest text-[10px]">Select Mandi</label>
              <div className="relative">
                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <select 
                   value={newReport.mandi}
                   onChange={(e) => setNewReport({...newReport, mandi: e.target.value})}
                   className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-2xl p-4 pl-12 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                 >
                   <option>Lucknow Hub</option>
                   <option>Barabanki Local</option>
                   <option>Patna Mandi</option>
                   <option>Danapur Market</option>
                 </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest text-[10px]">Topic</label>
              <div className="grid grid-cols-2 gap-2">
                {['Crowd Status', 'Payment', 'Supply', 'Infrastructure'].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setNewReport({...newReport, category: cat})}
                    className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${
                      newReport.category === cat 
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20' 
                      : 'bg-white/5 text-slate-400 border-white/5 hover:border-emerald-500/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest text-[10px]">Your Observations</label>
              <textarea 
                value={newReport.report}
                onChange={(e) => setNewReport({...newReport, report: e.target.value})}
                placeholder="What did you see today? (जैसे: मंडी में भीड़ कैसी है?)"
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-3xl p-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/50 min-h-[120px] resize-none"
              />
            </div>

            <button 
              onClick={postReport}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[24px] font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-3 active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Broadcast Report</span>
            </button>
          </div>
        </motion.div>

        {/* Right: Live Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center px-4">
             <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center">
                <Sparkles className="w-5 h-5 mr-3 text-amber-500" /> Ground Reality Feed
             </h2>
             <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse" /> LIVE
             </div>
          </div>

          <div className="space-y-4">
             <AnimatePresence>
               {reports.map((report) => (
                 <motion.div 
                   key={report.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="glassmorphism dark:glassmorphism-dark p-6 rounded-[32px] border border-white/10 group hover:border-emerald-500/30 transition-all shadow-xl"
                 >
                   <div className="flex justify-between items-start mb-4">
                     <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center font-black text-slate-500 text-xs">
                           {report.user.charAt(0)}
                        </div>
                        <div>
                           <p className="text-sm font-black text-slate-800 dark:text-white">{report.user}</p>
                           <p className="text-[10px] font-bold text-slate-500 uppercase flex items-center">
                              <MapPin className="w-3 h-3 mr-1" /> {report.mandi}
                           </p>
                        </div>
                     </div>
                     <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                       report.vibes === 'Positive' ? 'bg-emerald-500/10 text-emerald-500' :
                       report.vibes === 'Busy' ? 'bg-amber-500/10 text-amber-500' :
                       'bg-indigo-500/10 text-indigo-500'
                     }`}>
                       {report.category}
                     </span>
                   </div>

                   <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed mb-4">
                     &quot;{report.report}&quot;
                   </p>

                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex space-x-4">
                         <button className="flex items-center space-x-1.5 text-[10px] font-black text-slate-400 hover:text-emerald-500 transition-colors">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>REPLY</span>
                         </button>
                         <button className="flex items-center space-x-1.5 text-[10px] font-black text-slate-400 hover:text-amber-500 transition-colors">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>VERIFY</span>
                         </button>
                      </div>
                      <div className="flex items-center text-[10px] font-bold text-slate-500 lowercase">
                         <Clock className="w-3 h-3 mr-1" /> {report.timestamp}
                      </div>
                   </div>
                 </motion.div>
               ))}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
