"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, PlayCircle, Trophy, Star } from 'lucide-react';
import Image from 'next/image';

const VIDEOS = [
  { id: 1, title: 'Modern Drip Irrigation', duration: '5:20', language: 'Hindi / Bhojpuri', thumb: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Max Profit in Zomato Bidding', duration: '8:45', language: 'Hindi', thumb: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Organic Fertilizer Making', duration: '12:10', language: 'Bhojpuri', thumb: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=400&q=80' },
];

export default function TrainingHub() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-3xl text-white shadow-xl">
        <div>
          <h1 className="text-3xl font-bold flex items-center space-x-3 mb-2">
            <GraduationCap className="w-8 h-8" />
            <span>Gamified Training Hub</span>
          </h1>
          <p className="opacity-90 max-w-xl">Learn modern farming practices in your local dialect. Earn Carbon Credits and Reward Points for completing short quizzes.</p>
        </div>
        <div className="hidden md:flex items-center space-x-6 backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20">
          <div className="text-center">
            <p className="text-sm opacity-80 font-medium">Your Points</p>
            <p className="text-2xl font-black flex items-center justify-center space-x-1"><Star className="w-5 h-5 text-amber-400" /> <span>2,450</span></p>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-sm opacity-80 font-medium">Rank</p>
            <p className="text-2xl font-black flex items-center justify-center space-x-1"><Trophy className="w-5 h-5 text-emerald-300" /> <span>Expert</span></p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VIDEOS.map((vid, i) => (
          <motion.div 
            key={vid.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glassmorphism rounded-2xl dark:glassmorphism-dark overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="h-48 w-full relative">
              <Image src={vid.thumb} alt={vid.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-md font-medium">
                {vid.duration}
              </div>
            </div>
            <div className="p-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 mb-1 block">{vid.language}</span>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white line-clamp-1">{vid.title}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-500 flex items-center"><Star className="w-3 h-3 mr-1"/> +50 Points</span>
                <button className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300">Watch & Earn</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
