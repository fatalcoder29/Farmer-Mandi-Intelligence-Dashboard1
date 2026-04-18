"use client";
import React, { useState } from 'react';
import { Bell, Search, User, Mic, LogOut, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { Languages } from 'lucide-react';

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const triggerVoice = () => {
    window.dispatchEvent(new CustomEvent('open-voice-chat'));
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 glassmorphism border-b border-slate-700/50 backdrop-blur-xl dark:bg-slate-900/60 dark:border-slate-800">
      
      {/* Mobile spacer for the menu button */}
      <div className="w-12 md:hidden" />

      {/* Search Bar */}
      <div className="flex-1 max-w-xl hidden md:flex items-center group relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-slate-400 group-focus-within:text-emerald-400 transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder={language === 'en' ? "Search prices, weather, experts..." : "कीमतें, मौसम, विशेषज्ञ खोजें..."}
          className="block w-full pl-10 pr-12 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
        />
        <button 
          onClick={triggerVoice}
          className="absolute inset-y-0 right-1 px-3 flex items-center bg-transparent border-0 group-focus-within:text-emerald-400 hover:text-emerald-500 text-slate-400 transition-colors"
        >
          <Mic className="w-4 h-4" />
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-3 md:space-x-4">
        
        {/* Language Toggle */}
        <button 
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="flex items-center space-x-2 px-3 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          <Languages className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-black uppercase tracking-widest">{language === 'en' ? 'हिन्दी' : 'EN'}</span>
        </button>

        {/* Voice Assistant Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerVoice}
          className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-3 py-2 rounded-full shadow-lg shadow-emerald-500/30 transition-all"
        >
          <Mic className="w-4 h-4" />
          <span className="hidden sm:inline-block text-sm font-black pr-1 tracking-tight">{language === 'en' ? 'Kisan Voice' : 'किसान वॉयस'}</span>
        </motion.button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white dark:border-slate-900" />
        </button>

        {/* Account Section */}
        {isAuthenticated ? (
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-emerald-500/20"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="hidden md:block text-left mr-2">
                <p className="text-xs font-black text-slate-800 dark:text-slate-200 leading-none">{user?.name}</p>
                <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mt-0.5">Score: {user?.trustScore}</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="absolute right-0 mt-3 w-48 glassmorphism dark:glassmorphism-dark-heavy rounded-2xl shadow-2xl border border-white/20 dark:border-white/5 py-2 z-50 overflow-hidden"
                >
                  <button className="w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-white/10 flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                    <User className="w-4 h-4" /> <span>My Profile</span>
                  </button>
                  <div className="h-px bg-white/5 mx-3 my-1" />
                  <button 
                    onClick={() => { logout(); setShowDropdown(false); }}
                    className="w-full px-4 py-2.5 text-left text-xs font-black hover:bg-red-500/10 flex items-center space-x-3 text-red-500"
                  >
                    <LogOut className="w-4 h-4" /> <span>Logout</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link href="/login">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-black text-xs uppercase tracking-widest shadow-lg flex items-center space-x-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </motion.button>
          </Link>
        )}
      </div>
    </header>
  );
}
