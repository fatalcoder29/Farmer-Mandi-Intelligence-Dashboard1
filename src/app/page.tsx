"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TrendingUp, 
  MapPin, 
  CloudRain, 
  Leaf, 
  AlertTriangle,
  ArrowUpRight,
  Droplets,
  Wind,
  Zap,
  CheckCircle2,
  Calendar,
  CloudLightning,
  Sparkles,
  MessageSquare,
  ChevronRight,
  PhoneCall,
  Database,
  Search,
  CheckCircle,
  Users
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const STAGGER_DELAY = 0.05;

const StatCard = ({ icon: Icon, label, labelHi, value, delta, isPositive, delay, href, helpNumbers }: any) => {
  const content = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`glassmorphism p-6 rounded-[28px] dark:glassmorphism-dark flex flex-col justify-between group transition-all h-full ${href ? 'hover:border-emerald-500/40 cursor-pointer hover:shadow-2xl hover:shadow-emerald-500/10' : 'cursor-default'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${isPositive ? 'bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/5' : 'bg-red-500/10 text-red-500 shadow-lg shadow-red-500/5'}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest ${isPositive ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
          <span>{delta}</span>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3 rotate-90" />}
        </div>
      </div>
      <div>
        <div className="flex flex-col mb-1">
          <span className="text-emerald-600 dark:text-emerald-500 text-[10px] font-black uppercase tracking-widest leading-none mb-1 opacity-70">{labelHi}</span>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-bold">{label}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">{value}</h3>
            {href && <ChevronRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
          </div>
          
          {helpNumbers && (
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5 space-y-1">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Help & Support</p>
              {helpNumbers.map((num: string) => (
                <div key={num} className="flex items-center space-x-2 text-[10px] font-bold text-emerald-500 hover:text-emerald-600 transition-colors">
                   <PhoneCall className="w-3 h-3" />
                   <span>{num}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (href) return <Link href={href} className="block h-full">{content}</Link>;
  return content;
};

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      
      {/* Hero Welcome & AI Command Center */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Personalized Greeting */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="flex items-center space-x-3 mb-1">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <p className="text-xs text-slate-500 font-black uppercase tracking-widest">{t('hero.location')}</p>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-800 dark:text-white tracking-tighter">
            {t('hero.title')}: <span className="text-gradient underline decoration-emerald-500/20 underline-offset-8">Cryptic Coders</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold max-w-xl leading-relaxed text-sm">
             {t('hero.subtitle')}
          </p>
          
          <div className="flex items-center space-x-4 pt-4">
             <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-black text-slate-700 dark:text-slate-300">17 APRIL 2026</span>
             </div>
             <div className="bg-emerald-500 text-white px-4 py-2 rounded-2xl shadow-lg shadow-emerald-500/20 text-xs font-black tracking-widest flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>EXPERTISE: GOLD LEVEL</span>
             </div>
          </div>
        </motion.div>

        {/* Right: Weather & AI Alert Desk */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="glassmorphism-dark p-6 rounded-[36px] border-2 border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5"><CloudRain className="w-32 h-32" /></div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <CloudLightning className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black text-amber-500 uppercase">Mausam (Weather)</p>
                <p className="text-xl font-black text-white">32°C <span className="text-xs font-medium opacity-60 ml-1">Mostly Cloudy</span></p>
              </div>
            </div>
            <div className="text-right">
               <p className="text-[10px] font-black text-emerald-400 uppercase">Rain Radar</p>
               <p className="text-sm font-black text-white">12% Prob.</p>
            </div>
          </div>

          <div className="h-px w-full bg-white/10 mb-4" />

          <div className="flex gap-4">
            <div className="p-3 bg-white/10 rounded-2xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex-1">
               <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">{t('weather.alert')}</p>
               <p className="text-xs font-semibold text-slate-300 leading-normal">
                  {t('weather.action')}
               </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Stats HUD */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={TrendingUp} 
          label={t('stat.profit')}
          labelHi={language === 'en' ? "शुद्ध लाभ दर" : "Net Profit Rate"}
          value="₹1,24,500" 
          delta="+12.5%" 
          isPositive={true}
          delay={STAGGER_DELAY * 1}
          href="/profit-analysis"
        />
        <StatCard 
          icon={Leaf} 
          label={t('stat.health')}
          labelHi={language === 'en' ? "फसल स्वास्थ्य" : "Crop Health"}
          value="94/100" 
          delta="+2.1%" 
          isPositive={true}
          delay={STAGGER_DELAY * 2}
        />
        <StatCard 
          icon={PhoneCall} 
          label={t('stat.help')}
          labelHi={language === 'en' ? "सहायता और सहयोग" : "Support"}
          value="Emergency (24/7)" 
          delta="LIVE" 
          isPositive={true}
          delay={STAGGER_DELAY * 3}
          helpNumbers={['9519235320', '7355940113', '8340119050']}
        />
        <StatCard 
          icon={MapPin} 
          label={t('stat.bestMandi')}
          labelHi={language === 'en' ? "मंडी का सर्वश्रेष्ठ भाव" : "Market Premium"}
          value="₹2,480/q" 
          delta="+₹180" 
          isPositive={true}
          delay={STAGGER_DELAY * 4}
          href="/trends"
        />
      </div>

      {/* Insights Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Gyan Guru Smart Summary */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glassmorphism rounded-[40px] dark:glassmorphism-dark p-8 border border-white/10 relative overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5"><Sparkles className="w-32 h-32" /></div>
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{t('advisor.title')}</h2>
          </div>
          
          <div className="space-y-6 flex-1">
             <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-white/5">
                <div className="text-[10px] font-black text-emerald-500 uppercase mb-2">Crop Planning Strategy</div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
                   Based on your soil moisture (42%) and upcoming heatwave, we recommend switching to **Mulching** today. This will save **12% extra water** and increase potato yield by 8%.
                </p>
             </div>

             <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-3xl border border-slate-200 dark:border-white/5">
                <div className="text-[10px] font-black text-amber-500 uppercase mb-2">Financial Insight</div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
                   Current Wheat price cycle is at peak. Price crash expected in 10 days due to surplus arrivals from Maharashtra. **Sell 60% of stock now.**
                </p>
             </div>
          </div>

          <Link href="/advisor" className="w-full mt-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
             <span>Talk to Gyan Guru AI</span>
             <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Heatmap Visual (Spans 2) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glassmorphism rounded-[40px] dark:glassmorphism-dark p-8 relative overflow-hidden group border border-white/5"
        >
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div>
              <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Live Munafa Hotspots (मुनाफा)</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Real-time Agmarknet & Logistics Feed</p>
            </div>
            <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse" /> LIVE TRACKING
            </div>
          </div>

          <div className="w-full h-[330px] rounded-[32px] bg-slate-200 dark:bg-slate-900 border border-white/5 overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=25.5941,85.1376&zoom=11&size=800x400&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:water|color:0x1a242f&style=feature:landscape|color:0x0f172a&style=feature:road|color:0x1e293b&style=feature:poi|visibility:off')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" />
            
            {/* Heatmap Overlays */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-emerald-500/30 rounded-full blur-[60px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-amber-500/20 rounded-full blur-[50px] animate-pulse delay-500" />
            
            {/* Price Tags */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/95 text-white px-4 py-2 rounded-2xl border border-emerald-500/40 shadow-2xl backdrop-blur-xl group-hover:scale-110 transition-transform cursor-pointer z-10">
              <p className="text-[10px] text-emerald-400 font-black tracking-widest uppercase mb-1">Lucknow Hub</p>
              <p className="text-lg font-black tracking-tighter">₹2,480/q</p>
            </div>

            <div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/95 text-white px-4 py-2 rounded-2xl border border-amber-500/40 shadow-2xl backdrop-blur-xl group-hover:scale-110 transition-transform cursor-pointer z-10">
              <p className="text-[10px] text-amber-400 font-black tracking-widest uppercase mb-1">Barabanki Local</p>
              <p className="text-lg font-black tracking-tighter">₹2,240/q</p>
            </div>
          </div>
        </motion.div>

        {/* Community Feed Preview */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glassmorphism rounded-[40px] dark:glassmorphism-dark p-8 border border-white/10 relative overflow-hidden flex flex-col group"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight flex items-center">
              <Users className="w-5 h-5 mr-3 text-emerald-500" /> {t('community.title')}
            </h2>
            <Link href="/community" className="text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:underline">{language === 'en' ? 'View All' : 'सभी देखें'}</Link>
          </div>

          <div className="space-y-4">
             {[
               { user: 'Suresh K.', report: 'Bhari bheed hai Lucknow mandi mein today!', time: '10m ago' },
               { user: 'Mahesh S.', report: 'Barabanki local rates are stable now.', time: '45m ago' }
             ].map((item, i) => (
               <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{item.user} • {item.time}</p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 line-clamp-2">&quot;{item.report}&quot;</p>
               </div>
             ))}
          </div>

          <Link href="/community" className="w-full mt-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
             <span>{t('community.join')}</span>
             <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Data Intelligence Sources Section - Slide 3 Alignment */}
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mt-12 p-8 glassmorphism dark:glassmorphism-dark rounded-[40px] border border-emerald-500/10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-500 shadow-inner">
                 <Database className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">{t('data.sources')}</h3>
                 <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{t('data.update')}</p>
              </div>
           </div>

           <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('data.mandi')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-blue-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('data.weather')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-2xl border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-amber-500" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Team ID: RRGI-122</span>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}


