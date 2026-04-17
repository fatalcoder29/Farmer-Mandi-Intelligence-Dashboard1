"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  ScanLine, 
  Leaf, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  Video, 
  PhoneCall, 
  X,
  User,
  Send,
  Loader2,
  Minimize2,
  Maximize2
} from 'lucide-react';
import Image from 'next/image';

export default function CropLab() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showExpertHub, setShowExpertHub] = useState(false);
  const [expertMessages, setExpertMessages] = useState<any[]>([]);
  const [isExpertTyping, setIsExpertTyping] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [callStatus, setCallStatus] = useState('Connecting...');

  const handleConnect = () => {
    setShowExpertHub(true);
    // Simulate initial expert contact
    if (expertMessages.length === 0) {
      setIsExpertTyping(true);
      setTimeout(() => {
        setExpertMessages([{ 
          role: 'expert', 
          content: 'Namaste! Main Dr. Arvind Sharma hoon. Maine aapki scan report dekhi. Bacterial Leaf Blight ke liye humein turant action lena hoga. Kya aapne Copper spray shuru kiya?' 
        }]);
        setIsExpertTyping(false);
      }, 2000);
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    setResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setResult({
        status: 'disease_detected',
        disease: 'Bacterial Leaf Blight',
        confidence: 94.2,
        recommendation: 'Spray Copper Oxychloride 50% WP immediately. Reduce nitrogen fertilizer usage.',
        qualityGrade: 'B'
      });
    }, 3000);
  };

  const startVideoCall = () => {
    setShowVideoCall(true);
    setCallStatus('Connecting to IARI Secure Server...');
    setTimeout(() => setCallStatus('Establishing Secure Link...'), 2000);
    setTimeout(() => setCallStatus('Expert Dr. Sharma is joining...'), 4000);
    setTimeout(() => setCallStatus('LIVE'), 6000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 relative">
      
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter flex items-center space-x-4">
          <div className="p-3 bg-emerald-500 rounded-2xl text-white shadow-xl shadow-emerald-500/20">
            <ScanLine className="w-10 h-10" />
          </div>
          <span>AI Crop Doctor & Disease Lab</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold max-w-2xl">
          Instantly detect diseases using Gemini AI and get direct emergency access to Agricultural Scientists.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="glassmorphism rounded-[48px] dark:glassmorphism-dark p-8 border-2 border-slate-200/50 dark:border-white/5 relative overflow-hidden"
        >
          <div className="w-full h-[450px] border-4 border-dashed border-slate-300 dark:border-slate-800 rounded-[36px] bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden flex flex-col items-center justify-center group cursor-pointer">
            {!isScanning && !result && (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10" />
                </div>
                <p className="text-xl font-black text-slate-700 dark:text-slate-300">Upload Leaf Image</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Supports Wheat, Potato, & Paddy</p>
              </div>
            )}

            {(isScanning || result) && (
              <>
                <Image 
                  src="https://images.unsplash.com/photo-1589922247738-952a225ee4a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Crop Leaf" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
                
                {isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col z-10 text-white">
                    <div className="w-full h-1 bg-emerald-500 shadow-[0_0_20px_#10B981] absolute top-0 animate-[scan_2.5s_infinite]" />
                    <Loader2 className="w-16 h-16 animate-spin text-emerald-400 mb-6" />
                    <p className="text-2xl font-black tracking-tighter uppercase italic">Gemini Pro Vision Analyzing...</p>
                  </div>
                )}
              </>
            )}
          </div>

          <button 
            onClick={handleScan}
            disabled={isScanning}
            className="mt-8 w-full py-5 rounded-[24px] bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/20 transition-all flex items-center justify-center space-x-3"
          >
            {isScanning ? 'Scannning...' : result ? 'Scan New Fasal' : 'Identify Disease Now'}
          </button>
        </motion.div>

        {/* Results & Expert Link */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          {result ? (
            <div className="space-y-6">
              <div className="glassmorphism rounded-[48px] dark:glassmorphism-dark p-10 border border-red-500/20 bg-red-500/5">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Crisis Detected</h3>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest">Confidence: {result.confidence}%</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-white/5">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Diagnosis</p>
                    <p className="text-xl font-black text-red-500">{result.disease}</p>
                  </div>
                  <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Emergency Remedy</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">{result.recommendation}</p>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConnect}
                className="w-full py-5 bg-slate-900 border-2 border-emerald-500 text-white rounded-[24px] shadow-2xl flex items-center justify-between px-8"
              >
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center"><PhoneCall className="w-5 h-5" /></div>
                   <div className="text-left">
                      <p className="text-xs font-black uppercase tracking-widest text-emerald-400">Expert Rescue</p>
                      <p className="text-sm font-black">Talk to Senior Scientist</p>
                   </div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          ) : (
            <div className="glassmorphism h-[550px] rounded-[48px] dark:glassmorphism-dark p-10 flex flex-col items-center justify-center text-center border border-white/5 opacity-50">
               <Leaf className="w-20 h-20 text-slate-300 mb-6" />
               <h3 className="text-2xl font-black text-slate-500 uppercase tracking-tight">Awaiting Scan Data</h3>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 max-w-xs leading-relaxed">
                  Our AI vision system will identify the exact pathogen and connect you to an expert instantly.
               </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* EXPERT HUB OVERLAY */}
      <AnimatePresence>
        {showExpertHub && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] glassmorphism-dark border-2 border-emerald-500/30 rounded-[40px] shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* Expert Header */}
            <div className="bg-emerald-600 p-6 flex justify-between items-center text-white">
               <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden relative">
                     <Image src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80" alt="Expert" fill className="object-cover" />
                  </div>
                  <div>
                     <p className="text-sm font-black leading-tight">Dr. Arvind Sharma</p>
                     <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Sr. Scientist (IARI)</p>
                  </div>
               </div>
               <div className="flex items-center space-x-2">
                  <button onClick={startVideoCall} className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all"><Video className="w-5 h-5" /></button>
                  <button onClick={() => setShowExpertHub(false)} className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all"><X className="w-5 h-5" /></button>
               </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
               {expertMessages.map((m, i) => (
                 <div key={i} className={`flex ${m.role === 'expert' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] p-4 rounded-3xl text-xs font-bold leading-relaxed ${m.role === 'expert' ? 'bg-slate-800 text-emerald-50 rounded-tl-none' : 'bg-emerald-500 text-white rounded-tr-none'}`}>
                       {m.content}
                    </div>
                 </div>
               ))}
               {isExpertTyping && (
                 <div className="flex justify-start">
                    <div className="bg-slate-800 p-4 rounded-3xl rounded-tl-none flex items-center space-x-1">
                       <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
                       <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-100" />
                       <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-200" />
                    </div>
                 </div>
               )}
            </div>

            {/* Input Bar */}
            <div className="p-6 border-t border-white/10 bg-black/20">
               <div className="bg-slate-800 rounded-2xl p-2 flex items-center space-x-2 border border-white/5">
                  <input placeholder="Type message to Scientist..." className="flex-1 bg-transparent border-none text-xs text-white font-bold outline-none px-3" />
                  <button className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white"><Send className="w-4 h-4" /></button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO CALL MODAL */}
      <AnimatePresence>
        {showVideoCall && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900 flex items-center justify-center p-6 backdrop-blur-3xl"
          >
            <div className="max-w-4xl w-full h-full max-h-[700px] glassmorphism-dark rounded-[64px] border border-white/10 overflow-hidden relative shadow-2xl flex flex-col items-center justify-center">
               
               {/* Background Simulated Feed */}
               <div className="absolute inset-0 z-0">
                  <Image src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80" alt="Video feed" fill className={`object-cover ${callStatus !== 'LIVE' ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'} transition-all duration-1000`} />
                  <div className="absolute inset-0 bg-black/40" />
               </div>

               {/* UI Elements */}
               <div className="relative z-10 text-center space-y-6">
                  {callStatus !== 'LIVE' ? (
                     <>
                        <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                           <Video className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tighter">{callStatus}</h2>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.4em]">Secure Satellite Link</p>
                     </>
                  ) : (
                     <div className="absolute top-10 left-10 flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden shadow-2xl">
                           <Image src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80" alt="Expert" fill className="object-cover" />
                        </div>
                        <div className="text-left">
                           <p className="text-white font-black">Dr. Arvind Sharma</p>
                           <div className="flex items-center space-x-2 text-red-500 font-bold text-[10px] uppercase">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                              <span>Live Interview</span>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

               {/* Controls */}
               <div className="absolute bottom-12 flex space-x-6 z-10">
                  <button className="w-16 h-16 bg-slate-800 rounded-full border border-white/20 flex items-center justify-center text-white"><Minimize2/></button>
                  <button onClick={() => setShowVideoCall(false)} className="w-20 h-20 bg-red-500 rounded-[28px] border-2 border-white flex items-center justify-center text-white shadow-2xl shadow-red-500/40 hover:scale-110 transition-all"><X className="w-8 h-8" /></button>
                  <button className="w-16 h-16 bg-slate-800 rounded-full border border-white/20 flex items-center justify-center text-white"><Maximize2/></button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
