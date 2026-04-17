"use client";
import React from 'react';
import { ShieldAlert, CloudLightning, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Alerts() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold flex items-center space-x-3 text-slate-800 dark:text-white">
          <div className="p-2 bg-red-500/10 rounded-xl text-red-500">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <span>Distress & Risk Alerts</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">AI powered early warnings for extreme weather and sudden price crashes.</p>
      </motion.div>

      <div className="grid gap-6">
        <div className="glassmorphism dark:glassmorphism-dark p-6 rounded-3xl border-l-4 border-l-red-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start space-x-4">
            <CloudLightning className="w-8 h-8 text-red-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Severe Thunderstorm Warning</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Heavy unseasonal rain is predicted in your district (Patna) tomorrow evening. High risk of moisture damage to harvested wheat.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-colors">
                View Emergency Storage Options
              </button>
            </div>
          </div>
        </div>

        <div className="glassmorphism dark:glassmorphism-dark p-6 rounded-3xl border-l-4 border-l-amber-500">
          <div className="flex items-start space-x-4">
            <Activity className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Market Price Crash Prediction</h3>
              <p className="text-slate-600 dark:text-slate-300">Tomato prices are trending down due to oversupply in Danapur Hub. Consider holding or selling to food processing units today.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
