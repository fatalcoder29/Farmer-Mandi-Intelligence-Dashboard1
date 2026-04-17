"use client";
import React from 'react';
import { TrendingUp, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Trends() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold flex items-center space-x-3 text-slate-800 dark:text-white">
          <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-500">
            <TrendingUp className="w-8 h-8" />
          </div>
          <span>AI Price Trends & Forecasting</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Historical data paired with AI forecasting to determine the best time to sell.</p>
      </motion.div>

      <div className="glassmorphism dark:glassmorphism-dark p-8 rounded-3xl flex flex-col items-center justify-center text-center min-h-[400px]">
        <BarChart2 className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" />
        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Live Chart Integration Pending</h2>
        <p className="text-slate-500 mt-2 max-w-md">In a production environment, this dashboard integrates with the Agmarknet API to pull real-time commodity data plotted over moving averages.</p>
      </div>
    </div>
  );
}
