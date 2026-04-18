"use client";
import React, { useState } from 'react';
import { ShieldAlert, CloudLightning, Activity, BellRing, Plus, Trash2, TrendingDown, Target, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, crop: 'Wheat', condition: 'Below', price: 2100, status: 'Active' },
    { id: 2, crop: 'Potato', condition: 'Above', price: 1800, status: 'Active' }
  ]);

  const [newAlert, setNewAlert] = useState({ crop: 'Wheat', condition: 'Below', price: '' });

  const addAlert = () => {
    if (!newAlert.price) return;
    setAlerts([...alerts, { ...newAlert, id: Date.now(), price: Number(newAlert.price), status: 'Active' }]);
    setNewAlert({ crop: 'Wheat', condition: 'Below', price: '' });
  };

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black flex items-center space-x-4 text-slate-800 dark:text-white tracking-tighter">
          <div className="p-3 bg-red-500/10 rounded-2xl text-red-500 shadow-lg shadow-red-500/10">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <span>Distress & Price Safeguards</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-3 font-bold text-lg leading-relaxed">
          AI powered early warnings for extreme weather and sudden price crashes. (मौसम और मूल्य में गिरावट की चेतावनी)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Col: Real-time Risk Feed */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center">
            <BellRing className="w-5 h-5 mr-2 text-red-500" /> Live Risk Feed
          </h2>

          <div className="glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border-l-8 border-l-red-500 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
            <div className="flex items-start space-x-6 relative z-10">
              <div className="p-4 bg-red-500/10 rounded-2xl text-red-500">
                <CloudLightning className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">Severe Thunderstorm Warning</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 font-bold leading-relaxed">
                  Heavy unseasonal rain is predicted in your district (Patna) tomorrow evening. High risk of moisture damage to harvested wheat.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-500/20 transition-all hover:scale-105 active:scale-95">
                  View Emergency Storage Options
                </button>
              </div>
            </div>
          </div>

          <div className="glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border-l-8 border-l-amber-500 relative overflow-hidden shadow-2xl">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-500">
                <Activity className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2 tracking-tight">Market Price Crash Prediction</h3>
                <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed">
                  Tomato prices are trending down due to oversupply in Danapur Hub. AI suggests holding or selling to food processing units today.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Price Guard Form */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center">
            <Target className="w-5 h-5 mr-2 text-indigo-500" /> Market Price Safeguard
          </h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glassmorphism dark:glassmorphism-dark p-8 rounded-[40px] border border-white/10 shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight mb-2">Create Price Alert</h3>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Get notified via SMS/WhatsApp when prices hit your target.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Crop</label>
                  <select 
                    value={newAlert.crop}
                    onChange={(e) => setNewAlert({...newAlert, crop: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-2xl p-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  >
                    <option>Wheat</option>
                    <option>Potato</option>
                    <option>Rice</option>
                    <option>Mustard</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Condition</label>
                  <select 
                    value={newAlert.condition}
                    onChange={(e) => setNewAlert({...newAlert, condition: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-2xl p-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  >
                    <option>Below</option>
                    <option>Above</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest">Target Price (₹/quintal)</label>
                <div className="relative">
                  <input 
                    type="number"
                    value={newAlert.price}
                    onChange={(e) => setNewAlert({...newAlert, price: e.target.value})}
                    placeholder="e.g. 2400"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 rounded-2xl p-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xs uppercase tracking-widest">per quintal</div>
                </div>
              </div>

              <button 
                onClick={addAlert}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[24px] font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-500/20 transition-all flex items-center justify-center space-x-2 active:scale-[0.98]"
              >
                <Plus className="w-4 h-4" />
                <span>Activate Security Guard</span>
              </button>
            </div>

            <div className="mt-10 space-y-4">
              <h4 className="text-[10px] font-black text-slate-500 uppercase ml-2 tracking-widest border-b border-white/5 pb-2">Your Active Guards ({alerts.length})</h4>
              <AnimatePresence>
                {alerts.map((alert) => (
                  <motion.div 
                    key={alert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-indigo-500/30 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-xl ${alert.condition === 'Below' ? 'bg-red-500/10 text-red-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                        {alert.condition === 'Below' ? <TrendingDown className="w-4 h-4" /> : <TrendingDown className="w-4 h-4 rotate-180" />}
                      </div>
                      <div>
                        <p className="text-xs font-black dark:text-white uppercase tracking-tight">{alert.crop}</p>
                        <p className="text-[10px] font-bold text-slate-500">Notify if {alert.condition.toLowerCase()} ₹{alert.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeAlert(alert.id)}
                      className="p-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
