"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.cropLab': 'AI Crop Lab',
    'nav.advisor': 'Smart Advisor',
    'nav.mandi': 'Digital Mandi',
    'nav.trends': 'AI Price Trends',
    'nav.community': 'Community Feed',
    'nav.alerts': 'Risk Alerts',
    'nav.future': 'Vision 2030',
    'hero.title': 'Smart Mandi Assistant',
    'hero.subtitle': 'Data-driven insights tailored for your wheat and potato crops.',
    'hero.location': 'Live: District Barabanki, UP',
    'weather.title': 'Weather',
    'weather.rainRadar': 'Rain Radar',
    'weather.alert': 'Alert: Rainfall in 48h',
    'weather.action': 'Sudden rain expected. **Immediate Action:** Sell stored Wheat at Lucknow Mandi today for max profit margin!',
    'stat.profit': 'Net Profit Rate',
    'stat.health': 'Fasal Health Index',
    'stat.help': 'Help & Support',
    'stat.bestMandi': 'Best Mandi Premium',
    'advisor.title': 'Gyan Guru Advice',
    'community.title': 'Community Buzz',
    'community.join': 'Join the Community',
    'data.sources': 'Trusted Data Sources',
    'data.mandi': 'Agmarknet (data.gov.in)',
    'data.weather': 'OpenWeather API',
    'data.update': 'Last Sync: Real-time via Agmarknet Feed'
  },
  hi: {
    'nav.dashboard': 'डैशबोर्ड',
    'nav.cropLab': 'एआई फसल लैब',
    'nav.advisor': 'स्मार्ट सलाहकार',
    'nav.mandi': 'डिजिटल मंडी',
    'nav.trends': 'मूल्य रुझान',
    'nav.community': 'सामुदायिक फीड',
    'nav.alerts': 'जोखिम अलर्ट',
    'nav.future': 'विज़न 2030',
    'hero.title': 'स्मार्ट मंडी सहायक',
    'hero.subtitle': 'आपके गेहूं और आलू की फसल के लिए विशेष विश्लेषण।',
    'hero.location': 'लाइव: जिला बाराबंकी, यूपी',
    'weather.title': 'मौसम',
    'weather.rainRadar': 'वर्षा रडार',
    'weather.alert': 'अलर्ट: 48 घंटों में बारिश',
    'weather.action': 'अचानक बारिश की संभावना। **तुरंत कार्रवाई:** अधिकतम लाभ के लिए आज ही लखनऊ मंडी में गेहूं बेचें!',
    'stat.profit': 'शुद्ध लाभ दर',
    'stat.health': 'फसल स्वास्थ्य',
    'stat.help': 'सहायता और सहयोग',
    'stat.bestMandi': 'मंडी का सर्वश्रेष्ठ भाव',
    'advisor.title': 'ज्ञान गुरु का सुझाव',
    'community.title': 'कम्युनिटी चर्चा',
    'community.join': 'कम्युनिटी से जुड़ें',
    'data.sources': 'विश्वसनीय डेटा स्रोत',
    'data.mandi': 'एगमार्कनेट (data.gov.in)',
    'data.weather': 'ओपनवेदर एपीआई',
    'data.update': 'अंतिम अपडेट: एगमार्कनेट फीड के माध्यम से रियल-टाइम'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('kisan_lang') as Language;
    if (saved) setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kisan_lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
