"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Truck } from 'lucide-react';

export default function Heatmap() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center space-x-3">
          <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
            <Map className="w-8 h-8" />
          </div>
          <span>Supply Chain & Profit Heatmap</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">AI-driven spatial analysis mapping distance vs mandi prices in your 50km radius.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glassmorphism rounded-[48px] dark:glassmorphism-dark p-8 h-[650px] w-full relative overflow-hidden shadow-2xl border-2 border-emerald-500/10"
      >
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=26.8467,80.9462&zoom=10&size=1200x800&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:water|color:0x1a242f&style=feature:landscape|color:0x0f172a&style=feature:road|color:0x1e293b&style=feature:poi|visibility:off')] bg-cover bg-center" />
        
        {/* Heatmap effect */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />

        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-emerald-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-teal-500/30 rounded-full blur-[100px] animate-pulse delay-700" />

        <div className="absolute top-10 left-10 z-10 glassmorphism dark:glassmorphism-dark p-6 rounded-[32px] border border-white/10 w-80 space-y-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">UP Mandi Pulse</h3>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Region: Central Uttar Pradesh</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-800/80 p-4 rounded-2xl flex items-center justify-between border border-emerald-500/30">
               <div>
                  <p className="text-xs font-black text-emerald-400 uppercase">Lucknow Hub</p>
                  <p className="text-sm font-bold text-white">₹2,480/q (+12%)</p>
               </div>
               <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-xs font-bold text-slate-300 leading-relaxed">
              Barabanki mandis are reporting low supply. Prices expected to rise ₹50 more by Monday. 
            </p>
          </div>

          <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg text-sm font-bold transition-colors">
            <Truck className="w-4 h-4" />
            <span>Book Transport</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
