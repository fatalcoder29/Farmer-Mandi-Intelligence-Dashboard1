"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Leaf, 
  Map as MapIcon, 
  ShoppingCart,
  TrendingUp, 
  GraduationCap, 
  ShieldAlert,
  Menu,
  X,
  Zap,
  BadgeInfo,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'AI Crop Lab', path: '/crop-lab', icon: Leaf },
  { name: 'Smart Advisor', path: '/advisor', icon: Sparkles },
  { name: 'Digital Mandi', path: '/mandi', icon: ShoppingCart },
  { name: 'Profit Analysis', path: '/profit-analysis', icon: TrendingUp },
  { name: 'Sarkari Yojana', path: '/schemes', icon: BadgeInfo },
  { name: 'Profit Heatmap', path: '/heatmap', icon: MapIcon },
  { name: 'Training Hub', path: '/training', icon: GraduationCap },
  { name: 'Risk Alerts', path: '/alerts', icon: ShieldAlert },
  { name: 'Vision 2030', path: '/future', icon: Zap },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 glassmorphism rounded-xl dark:glassmorphism-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar background overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 glassmorphism-dark border-r border-slate-700/50 flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out dark:bg-slate-900/60`}
      >
        <div className="p-6 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
            KisanAI
          </span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link 
                key={item.name} 
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}>
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 m-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
          <div className="flex items-center mb-2 space-x-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Mandi Open</span>
          </div>
          <p className="text-xs text-slate-400">Next price update in 14m</p>
        </div>
      </motion.aside>
    </>
  );
}
