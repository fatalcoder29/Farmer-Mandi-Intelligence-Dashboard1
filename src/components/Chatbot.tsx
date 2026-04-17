"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Leaf,
  TrendingUp,
  CloudRain,
  Mic,
  Languages,
  RotateCcw
} from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  "Mandi rates today? (आज का भाव?)",
  "Wheat disease help? (गेहूं की बीमारी?)",
  "Weather forecast? (मौसम का हाल?)",
  "How to earn reward points?"
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Namaste Cryptic Coders! 🙏 Main hoon aapka Gyan Guru. Main aapki fasal, mandi bhav aur mausam ki jaankari mein madad kar sakta hoon. Poochiye apna sawaal!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [dialectStatus, setDialectStatus] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Initialize Speech Recognition
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'hi-IN'; // Default to Hindi

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setDialectStatus('सुन रहा हूँ... (Recognizing Local Dialect)');
      };

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setDialectStatus('Bhojpuri/Awadhi Detected! Translating...');
        setTimeout(() => {
           setDialectStatus('');
           handleSend(transcript);
        }, 800);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech Error:", event.error);
        setIsListening(false);
        setDialectStatus('Error: Mic blocked or busy.');
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
      } else {
        alert("Voice recognition is not supported in this browser.");
      }
    }
  };

  useEffect(() => {
    const handleVoiceTrigger = () => {
      setIsOpen(true);
      setTimeout(() => {
        toggleListening();
      }, 500);
    };

    window.addEventListener('open-voice-chat', handleVoiceTrigger);
    return () => window.removeEventListener('open-voice-chat', handleVoiceTrigger);
  }, []);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Logic for Hackathon
    setTimeout(() => {
      let botResponse = "Checking my records... (AI विश्लेषण जारी है...)";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('rate') || lowerText.includes('bhav') || lowerText.includes('price')) {
         botResponse = "Lucknow Mandi mein Gehu (Wheat) ka aaj ka bhav ₹2,480/quintal hai. Ye pichle hafte se ₹150 upar chal raha hai. Aapko abhi bechna chahiye!";
      } else if (lowerText.includes('disease') || lowerText.includes('bimari') || lowerText.includes('leaf')) {
         botResponse = "Aisa lag raha hai ki aapki patto par Bacterial Blight ka asar hai. Kripya Copper Oxychloride ka 50% WP spray karein aur nitrogen kum karein.";
      } else if (lowerText.includes('weather') || lowerText.includes('mausam') || lowerText.includes('rain')) {
         botResponse = "Agle 48 ghanto mein Barabanki kshetra mein halki baarish (Light Rain) ka anuman hai. Fasal ko surakshit sthan par rakhein!";
      } else {
         botResponse = "Aapka sawal mil gaya hai! AI Assistant iska vishleshan kar raha hai. Kya aap Mandi bhav dekhna chahenge?";
      }

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Voice Status Alert Overlay */}
      <AnimatePresence>
        {dialectStatus && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 z-50 border border-emerald-400 font-bold"
          >
             <Languages className="w-5 h-5 animate-spin-slow" />
             <span className="text-xs uppercase tracking-widest">{dialectStatus}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="mb-4 w-[360px] md:w-[400px] h-[600px] glassmorphism-dark border border-white/20 rounded-[32px] shadow-2xl overflow-hidden flex flex-col backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-lg">
                  <Bot className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                   <h3 className="font-black text-sm tracking-tight text-white m-0">ज्ञान गुरु (Gyan Guru)</h3>
                   <div className="text-[10px] font-bold opacity-80 uppercase flex items-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" /> AI Assistant Online
                   </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
               {messages.map((msg, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                   animate={{ opacity: 1, x: 0 }}
                   className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                 >
                   <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                     msg.role === 'bot' 
                       ? 'bg-slate-800/80 text-emerald-50 border border-slate-700/50 rounded-tl-none' 
                       : 'bg-emerald-600 text-white shadow-lg rounded-tr-none'
                   }`}>
                      {msg.content}
                   </div>
                 </motion.div>
               ))}
               
               {isTyping && (
                 <div className="flex justify-start">
                   <div className="bg-slate-800/80 p-3 rounded-2xl rounded-tl-none border border-slate-700/50 flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-200" />
                   </div>
                 </div>
               )}
            </div>

            {/* Suggestions */}
            <div className="px-5 py-2 flex items-center space-x-2 overflow-x-auto scrollbar-hide no-scrollbar whitespace-nowrap">
               {SUGGESTED_QUESTIONS.map((q, i) => (
                 <button 
                   key={i}
                   onClick={() => handleSend(q)}
                   className="text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap bg-transparent"
                 >
                   {q}
                 </button>
               ))}
            </div>

            {/* Input Area */}
            <div className="p-5 bg-slate-900/40 border-t border-white/10">
               <div className="flex items-center space-x-2 bg-slate-800/60 rounded-2xl p-2 border border-white/5">
                 <button 
                   onClick={toggleListening}
                   className={`p-2 transition-all rounded-lg ${isListening ? 'text-red-500 bg-red-500/10 animate-pulse' : 'text-slate-400 hover:text-emerald-400'}`}
                 >
                    <Mic className="w-5 h-5" />
                 </button>
                 <input 
                   type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                   placeholder={isListening ? "Listening..." : "Aapka sawal? (Ask me...)"}
                   className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-slate-500 outline-none"
                 />
                 <button 
                   onClick={() => handleSend(input)}
                   className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
                 >
                   <Send className="w-4 h-4" />
                 </button>
               </div>
               <div className="mt-2 text-[8px] text-center text-slate-500 font-bold uppercase tracking-[0.2em]">
                  Powered by Gemini AI • Multilingual Recognition
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 relative group"
      >
        <div className="absolute inset-0 rounded-3xl bg-emerald-400 animate-ping opacity-20 group-hover:opacity-40" />
        <MessageCircle className="w-8 h-8 relative z-10" />
        
        {/* Helper text bubble on hover */}
        <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-emerald-500">
          Kisan AI Assistant 🎙️
        </div>
      </motion.button>
    </div>
  );
}
