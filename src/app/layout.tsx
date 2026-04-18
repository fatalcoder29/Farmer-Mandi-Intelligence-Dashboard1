import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Chatbot } from "@/components/Chatbot";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KisanAI - Intelligent Mandi Dashboard",
  description: "AI-Agri Ecosystem for Farmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex text-slate-800 dark:text-slate-200 bg-[#f8fafc] dark:bg-[#0f172a] bg-fixed relative">
        <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80 backdrop-blur-3xl -z-10" />
        
        <AuthProvider>
          <LanguageProvider>
            <Sidebar />
            
            <div className="flex-1 flex flex-col min-w-0 md:pl-64 transition-all duration-300">
              <Header />
              <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                {children}
              </main>
            </div>

            <Chatbot />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
