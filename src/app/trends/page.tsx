"use client";
import React, { useState } from 'react';
import { TrendingUp, BarChart2, Info, ArrowUpRight, ArrowDownRight, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend, 
  ReferenceLine,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { day: 'Apr 11', price: 2100, predicted: null, sma: 2080 },
  { day: 'Apr 12', price: 2150, predicted: null, sma: 2100 },
  { day: 'Apr 13', price: 2200, predicted: null, sma: 2130 },
  { day: 'Apr 14', price: 2180, predicted: null, sma: 2150 },
  { day: 'Apr 15', price: 2250, predicted: null, sma: 2180 },
  { day: 'Apr 16', price: 2320, predicted: null, sma: 2210 },
  { day: 'Apr 17', price: 2480, predicted: 2480, sma: 2250 }, // Today
  { day: 'Apr 18', price: null, predicted: 2520, sma: 2290 }, // Tomorrow
  { day: 'Apr 19', price: null, predicted: 2580, sma: 2330 },
  { day: 'Apr 20', price: null, predicted: 2450, sma: 2360 }, // Predicted Drop
  { day: 'Apr 21', price: null, predicted: 2380, sma: 2380 },
  { day: 'Apr 22', price: null, predicted: 2300, sma: 2370 },
  { day: 'Apr 23', price: null, predicted: 2250, sma: 2350 },
  { day: 'Apr 24', price: null, predicted: 2200, sma: 2320 },
];

export default function Trends() {
  const [activeCrop, setActiveCrop] = useState('Wheat');

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black flex items-center space-x-4 text-slate-800 dark:text-white tracking-tighter">
          <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500 shadow-lg shadow-indigo-500/10">
            <TrendingUp className="w-8 h-8" />
          </div>
          <span>Market Intelligence & SMA Forecast</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-3 font-bold text-lg">
          7-Day Predictive Modeling using Simple Moving Averages (अगले 7 दिनों का मूल्य पूर्वानुमान)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              {['Wheat', 'Potato', 'Mustard'].map((crop) => (
                <button
                  key={crop}
                  onClick={() => setActiveCrop(crop)}
                  className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeCrop === crop 
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {crop === 'Wheat' ? 'Gehu (गेहूं)' : crop === 'Potato' ? 'Aloo (आलू)' : 'Sarson (सरसों)'}
                </button>
              ))}
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-1">Current Trend</span>
              <div className="flex items-center text-emerald-500 font-black text-lg">
                <ArrowUpRight className="w-5 h-5 mr-1" /> ₹2,480/q
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }} 
                  domain={['dataMin - 100', 'dataMax + 100']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend 
                  verticalAlign="top" 
                  align="right" 
                  wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}
                />
                <ReferenceLine x="Apr 17" stroke="#6366f1" strokeDasharray="3 3" label={{ value: 'TODAY', position: 'top', fill: '#6366f1', fontSize: 10, fontWeight: 900 }} />
                
                {/* Historical Price */}
                <Line 
                  name="Historical Price"
                  type="monotone" 
                  dataKey="price" 
                  stroke="#10b981" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 8 }}
                />
                
                {/* Predicted Price */}
                <Line 
                  name="AI Prediction"
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#6366f1" 
                  strokeWidth={4} 
                  strokeDasharray="5 5"
                  dot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} 
                />

                {/* SMA Line */}
                <Line 
                  name="7-Day SMA"
                  type="basis" 
                  dataKey="sma" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/5 flex items-start space-x-4">
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-500 shadow-lg shrink-0">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight mb-2">How we calculate this? (यह गणना कैसे की जाती है?)</h4>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed">
                Our model uses a **Simple Moving Average (SMA-7)** paired with seasonal volatility markers. 
                The SMA helps filter out daily &quot;noise&quot; to show the true direction of the market. 
                A predicted drop (Red Phase) occurs when current arrivals exceed the moving average threshold.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info & Insights Panel */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Market Outlook</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-5 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-emerald-500 uppercase">Short Term</span>
                  <span className="text-xs font-black text-emerald-500">BULLISH</span>
                </div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Prices expected to rise for next 48h due to low mandi arrivals in UP West.</p>
              </div>

              <div className="p-5 rounded-3xl bg-red-500/5 border border-red-500/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-red-500 uppercase">Long Term</span>
                  <span className="text-xs font-black text-red-500">BEARISH</span>
                </div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Crash predicted in 7-10 days. SMA trend shows a downward slope as major surplus hits the market.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-indigo-600 p-8 rounded-[40px] text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10"><BarChart2 className="w-32 h-32" /></div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-4">AI Pro Insight</h3>
            <p className="text-sm font-bold text-indigo-100 leading-relaxed mb-6">
              The gap between current price and SMA is narrowing. Historically, this signals a reversal in trends.
            </p>
            <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">
              Lock in High Price Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
