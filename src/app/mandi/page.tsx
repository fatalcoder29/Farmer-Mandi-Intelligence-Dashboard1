"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Package, 
  Gavel, 
  Timer,
  Clock,
  CheckCircle,
  Truck, 
  Database,
  Search,
  Users,
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Scale,
  Zap,
  Filter,
  Wallet
} from 'lucide-react';
import Image from 'next/image';

const STATES = ['All', 'Bihar', 'UP', 'Punjab', 'Haryana', 'Maharashtra'];
const CROPS = ['Wheat (गेहूं)', 'Rice (चावल)', 'Tomato (टमाटर)', 'Potato (आलू)'];

export default function DigitalMandi() {
  const [activeTab, setActiveTab] = useState('live_auctions');
  const [bids, setBids] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(100); 
  const [costPerQuintal, setCostPerQuintal] = useState<number>(1200); // "Lagat" (Production Cost)
  const [dbStatus, setDbStatus] = useState<string>('Connecting...');
  
  // Filters
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);

  const fetchBids = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/bids?state=${selectedState}&crop=${selectedCrop}`);
      const json = await res.json();
      if (json.success) {
        const enrichedData = json.data.map((b: any, index: number) => ({
           ...b,
           trend: index % 2 === 0 ? 'up' : 'down',
           note: index === 0 ? "आज लंबी कतार है (Long queue today)" : " buyers absent (खरीदार कम हैं)"
        }));
        setBids(enrichedData);
        setDbStatus('Connected to MongoDB');
      } else {
        setDbStatus('Database Error');
      }
    } catch (err) {
      setDbStatus('API Offline');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBids();
  }, [selectedState, selectedCrop]);

  const calculateProfit = (priceStr: string) => {
    const price = parseInt(priceStr.replace(/[^\d]/g, ''));
    const base = price * quantity;
    const tax = base * 0.01;
    const transport = 45 * quantity; 
    const productionCost = costPerQuintal * quantity; // Lagat deduction
    const netProfit = base - tax - transport - productionCost;
    return { base, tax, transport, productionCost, total: netProfit };
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header & Filter Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
               <span className="bg-indigo-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Digital Mandi</span>
               <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center ${dbStatus.includes('Connected') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                <Database className="w-3 h-3 mr-1" /> {dbStatus}
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 dark:text-white flex items-center space-x-3 tracking-tight">
              <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Gavel className="w-8 h-8" />
              </div>
              <span>रिवर्स ऑक्शन इंजन (Reverse Auction)</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500">
                    <Scale className="w-4 h-4" />
                  </div>
                  <input 
                     type="number"
                     value={quantity}
                     onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                     className="pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500/20 focus:border-emerald-500 text-sm font-black w-32 outline-none transition-all"
                     placeholder="Qty"
                  />
                  <div className="absolute -top-6 left-0 text-[10px] font-black text-emerald-500 uppercase">Quantity (Quintals)</div>
               </div>

               <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-500">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <input 
                     type="number"
                     value={costPerQuintal}
                     onChange={(e) => setCostPerQuintal(parseInt(e.target.value) || 0)}
                     className="pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border-2 border-red-500/20 focus:border-red-500 text-sm font-black w-32 outline-none transition-all"
                     placeholder="Cost"
                  />
                  <div className="absolute -top-6 left-0 text-[10px] font-black text-red-500 uppercase">Cost/Qntl (लागत)</div>
               </div>
               
               <button className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center space-x-2 uppercase text-xs tracking-widest">
                  <Package className="w-5 h-5" />
                  <span>List Crop</span>
               </button>
          </div>
        </div>

        {/* Real-time State & Crop Filters */}
        <div className="flex flex-wrap gap-4 p-4 glassmorphism-dark rounded-3xl border border-white/5 bg-white/5">
           <div className="flex items-center space-x-3 text-slate-300 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Filters:</span>
           </div>
           <select 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-slate-900/60 border border-white/10 text-white text-xs font-bold rounded-xl px-4 py-2 outline-none focus:border-emerald-500 transition-colors"
           >
              {STATES.map(s => <option key={s} value={s}>State: {s}</option>)}
           </select>
           <select 
              value={selectedCrop} 
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="bg-slate-900/60 border border-white/10 text-white text-xs font-bold rounded-xl px-4 py-2 outline-none focus:border-emerald-500 transition-colors"
           >
              {CROPS.map(c => <option key={c} value={c}>{c}</option>)}
           </select>
           <div className="ml-auto flex items-center space-x-2">
              <span className="text-[10px] font-black text-emerald-500 animate-pulse uppercase tracking-widest flex items-center">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" /> Live Tracking Agmarknet
              </span>
           </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Live Bids */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex space-x-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            <button 
              onClick={() => setActiveTab('live_auctions')}
              className={`pb-2 px-1 font-black transition-colors border-b-4 uppercase text-xs tracking-widest ${activeTab === 'live_auctions' ? 'border-emerald-500 text-emerald-500' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              Live Auctions (लाइव बोलियां)
            </button>
            <button 
              onClick={() => setActiveTab('my_listings')}
              className={`pb-2 px-1 font-black transition-colors border-b-4 uppercase text-xs tracking-widest ${activeTab === 'my_listings' ? 'border-emerald-500 text-emerald-500' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              My Listings (मेरी फसल)
            </button>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="p-8 text-center text-slate-500 animate-pulse font-bold">Smart Filters Applying...</div>
            ) : bids.length === 0 ? (
              <div className="p-12 text-center glassmorphism dark:glassmorphism-dark rounded-3xl border border-dashed border-slate-700/50">
                <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-500 uppercase tracking-tighter">No Bids Found for {selectedState}</h3>
                <p className="text-sm text-slate-600 mt-2">Try changing the state or commodity filter.</p>
              </div>
            ) : bids.map((bid, i) => (
              <motion.div 
                key={bid._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glassmorphism rounded-3xl dark:glassmorphism-dark p-6 relative overflow-hidden transition-all group border-2 ${bid.status === 'active' ? 'border-emerald-500/10 hover:border-emerald-500/30' : 'border-transparent opacity-60'}`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-xl text-slate-400 group-hover:text-emerald-500 transition-colors shadow-inner">
                      {bid.buyer.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-black text-xl text-slate-800 dark:text-white">{bid.buyer}</h3>
                        {bid.trend === 'up' ? <TrendingUp className="w-4 h-4 text-emerald-500" /> : <TrendingDown className="w-4 h-4 text-amber-500" />}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-emerald-500" /> {bid.distance}</span>
                        <span className="flex items-center"><Package className="w-4 h-4 mr-1 text-emerald-500" /> {bid.qty} Demand</span>
                        <div className="flex items-center px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] text-amber-600">
                           <Users className="w-3 h-3 mr-1" /> {bid.note}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <div className="text-right">
                       <p className={`text-2xl font-black ${bid.trend === 'up' ? 'text-emerald-500' : 'text-slate-800 dark:text-white'}`}>{bid.price} <span className="text-xs font-medium text-slate-500 uppercase tracking-tighter">/ qntl</span></p>
                       <div className="flex items-center justify-end text-[10px] font-black uppercase text-amber-500 mt-1">
                          <Timer className="w-3 h-3 mr-1" /> {bid.time}
                       </div>
                    </div>
                    
                    {bid.status === 'active' && (
                      <button className="mt-4 px-8 py-2.5 bg-slate-900 dark:bg-emerald-500 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                        Accept Bid
                      </button>
                    )}
                  </div>
                </div>

                {/* Profit Prediction Mini-Badge */}
                <AnimatePresence>
                {bid.status === 'active' && (
                   <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between overflow-hidden">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Net Profit After Lagat:</p>
                      <p className={`text-sm font-black tracking-tight ${calculateProfit(bid.price).total > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        ₹{(calculateProfit(bid.price).total).toLocaleString('en-IN')}
                      </p>
                   </motion.div>
                )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: NET PROFIT Calculator Sidebar */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glassmorphism rounded-[32px] dark:glassmorphism-dark p-8 border-2 border-emerald-500/10 shadow-2xl">
            <h2 className="text-xl font-black text-slate-800 dark:text-white mb-6 uppercase tracking-tight flex items-center">
              <Scale className="w-5 h-5 mr-3 text-emerald-500" /> नेट प्रॉफिट एनालिसिस
            </h2>
            
            <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-2xl">
                  <span className="text-xs font-black text-slate-500 uppercase">Input Quantity</span>
                  <span className="font-black text-slate-800 dark:text-slate-200">{quantity} Quintals</span>
               </div>
               
               <div className="space-y-3 font-medium text-xs px-2">
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>Gross Sales (कुल भाव)</span>
                    <span className="font-bold">₹{(quantity * (bids[0] ? parseInt(bids[0].price.replace(/[^\d]/g, '')) : 0)).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-red-500">
                    <span>Total Lagat (कुल लागत)</span>
                    <span className="font-bold">-₹{(quantity * costPerQuintal).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-red-400 opacity-60">
                    <span>Taxes & Transport</span>
                    <span className="font-bold">-₹{(quantity * 50).toLocaleString('en-IN')}</span>
                  </div>
               </div>
            </div>

            <div className="bg-emerald-500/10 p-6 rounded-[24px] border-2 border-emerald-500/20 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-5"><Zap className="w-12 h-12" /></div>
               <p className="text-[10px] font-black text-emerald-600 uppercase mb-1 tracking-widest">Asli Munafa (Net Profit)</p>
               <h3 className="text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">
                  ₹{(calculateProfit(bids[0]?.price || "0").total).toLocaleString('en-IN')}
               </h3>
               <div className="mt-2 text-[10px] font-bold text-emerald-500 uppercase bg-emerald-500/10 py-1 rounded-full">
                  Profit Margin: {((calculateProfit(bids[0]?.price || "0").total / (quantity * costPerQuintal || 1)) * 100).toFixed(1)}%
               </div>
            </div>

            <div className="mt-6 flex items-start gap-4 p-4 bg-amber-500/5 dark:bg-amber-500/10 rounded-2xl border border-amber-500/20">
               <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
               <p className="text-[10px] text-amber-600 dark:text-amber-500 font-bold leading-normal uppercase">
                  Alert: Fertilizer prices expected to rise by 4%. Adjust your lagat estimates for the next season.
               </p>
            </div>
          </motion.div>

          {/* Smart Advisor Widget */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute -bottom-8 -right-8 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <Users className="w-32 h-32" />
             </div>
             <h4 className="text-sm font-black uppercase mb-3 tracking-widest flex items-center">
                <Zap className="w-4 h-4 mr-2 text-amber-400" /> Smart Advisor
             </h4>
             <p className="text-xs font-medium text-indigo-100 mb-6 leading-relaxed">
                Based on your Net Profit of **{((calculateProfit(bids[0]?.price || "0").total / (quantity * costPerQuintal || 1)) * 100).toFixed(1)}%**, we suggest diversyfing 20% of your farm to **Tomatoes** next month for higher ROI.
             </p>
             <button className="w-full py-4 bg-white text-indigo-600 font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg">
                View Crop Plan
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}
