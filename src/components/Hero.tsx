import React from 'react';
import { ArrowDown, Download, Play, Compass } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface HeroProps {
  onOpenBrochure: () => void;
  onOpenFlycam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrochure, onOpenFlycam }) => {
  const { theme, t, lang } = useThemeLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-10 pb-20">
      {/* Cinematic Luxury Ocean Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=85"
          alt="Grand Marina Premier Luxury Oceanfront Resort"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms]"
        />
        {/* Soft luxury veil ensuring 100% crystal-clear readability without washing out */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-[#07090E]/40'
            : 'bg-gradient-to-b from-[#FAF8F5]/92 via-[#FAF8F5]/60 to-[#FAF8F5]'
        }`}></div>
        <div className={`absolute inset-0 pointer-events-none ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent'
            : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF8F5]/70 via-transparent to-transparent'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Prestige Sub-title Eyebrow (Quiet luxury) */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className={`w-8 h-[1px] ${theme === 'dark' ? 'bg-[#C8A97E]/70' : 'bg-[#9E773E]/70'}`}></span>
          <span className={`text-xs uppercase tracking-[0.3em] font-bold ${
            theme === 'dark' ? 'text-[#C8A97E]' : 'text-[#9E773E]'
          }`}>
            {lang === 'vi' 
              ? 'Quần Thể Nghỉ Dưỡng & Biệt Thự Biển 6 Sao'
              : '6-Star Ultra-Luxury Coastal Sanctuary'}
          </span>
          <span className={`w-8 h-[1px] ${theme === 'dark' ? 'bg-[#C8A97E]/70' : 'bg-[#9E773E]/70'}`}></span>
        </div>

        {/* Main Headline: Flawless Playfair Display, razor sharp, bold and authoritative */}
        <h1 className={`font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl leading-[1.12] mb-6 transition-colors ${
          theme === 'dark' ? 'text-white' : 'text-[#111317]'
        }`}>
          Grand Marina Premier <br />
          <span className="gold-gradient-text italic font-normal">
            {lang === 'vi' ? 'Biệt Thự Biển Hạng Sang' : 'Ultra-Luxury Coastal Estates'}
          </span>
        </h1>

        {/* Subtitle with high contrast and breathing room */}
        <p className={`text-sm sm:text-lg max-w-2xl tracking-wide leading-relaxed mb-10 transition-colors ${
          theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-800 font-medium'
        }`}>
          {t('hero.subtitle')}
        </p>

        {/* Action Buttons: Tailored, high-craft, elegant */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBrochure}
            className={`w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase cursor-pointer flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all duration-300 ${
              theme === 'dark'
                ? 'btn-gold'
                : 'text-white bg-gradient-to-r from-[#C29B58] via-[#9E773E] to-[#7A5B28] hover:shadow-xl hover:shadow-[#9E773E]/30'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>{t('hero.ctaBrochure')}</span>
          </button>

          <a
            href="#floorplan-3d"
            className={`w-full sm:w-auto px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              theme === 'dark'
                ? 'text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C8A97E]/50'
                : 'text-slate-900 bg-white hover:bg-[#F3EFEA] border border-[#9E773E]/30 hover:border-[#9E773E] shadow-sm font-semibold'
            }`}
          >
            <Compass className={`w-4 h-4 ${theme === 'dark' ? 'text-[#C8A97E]' : 'text-[#9E773E]'}`} />
            <span>{t('hero.cta3D')}</span>
          </a>

          <button
            onClick={onOpenFlycam}
            className={`w-full sm:w-auto px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              theme === 'dark'
                ? 'text-[#C8A97E] bg-white/5 border-[#C8A97E]/30 hover:bg-white/10'
                : 'text-[#9E773E] bg-white border-[#9E773E]/40 hover:bg-[#F3EFEA] shadow-sm font-semibold'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{t('hero.ctaFlycam')}</span>
          </button>
        </div>

        {/* 4 Key Pillars (Minimalist, elegant) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
          <div className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#0F131D]/80 border-white/10 hover:border-[#C8A97E]/50'
              : 'bg-white border-[#C8A97E]/30 shadow-[0_10px_25px_rgba(40,25,10,0.06)] hover:border-[#9E773E]'
          }`}>
            <div className={`text-2xl sm:text-3xl font-serif font-bold mb-1 ${
              theme === 'dark' ? 'text-[#C8A97E]' : 'text-[#9E773E]'
            }`}>{t('hero.stat1')}</div>
            <div className={`text-[11px] uppercase tracking-wider font-semibold ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-700'
            }`}>{t('hero.stat1Label')}</div>
          </div>

          <div className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#0F131D]/80 border-white/10 hover:border-cyan-500/50'
              : 'bg-white border-[#C8A97E]/30 shadow-[0_10px_25px_rgba(40,25,10,0.06)] hover:border-cyan-600'
          }`}>
            <div className={`text-2xl sm:text-3xl font-serif font-bold mb-1 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            }`}>{t('hero.stat2')}</div>
            <div className={`text-[11px] uppercase tracking-wider font-semibold ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-700'
            }`}>{t('hero.stat2Label')}</div>
          </div>

          <div className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#0F131D]/80 border-white/10 hover:border-emerald-500/50'
              : 'bg-white border-[#C8A97E]/30 shadow-[0_10px_25px_rgba(40,25,10,0.06)] hover:border-emerald-600'
          }`}>
            <div className={`text-2xl sm:text-3xl font-serif font-bold mb-1 ${
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
            }`}>{t('hero.stat3')}</div>
            <div className={`text-[11px] uppercase tracking-wider font-semibold ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-700'
            }`}>{t('hero.stat3Label')}</div>
          </div>

          <div className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-[#0F131D]/80 border-white/10 hover:border-[#C8A97E]/50'
              : 'bg-white border-[#C8A97E]/30 shadow-[0_10px_25px_rgba(40,25,10,0.06)] hover:border-[#9E773E]'
          }`}>
            <div className={`text-2xl sm:text-3xl font-serif font-bold mb-1 ${
              theme === 'dark' ? 'text-[#C8A97E]' : 'text-[#9E773E]'
            }`}>{t('hero.stat4')}</div>
            <div className={`text-[11px] uppercase tracking-wider font-semibold ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-700'
            }`}>{t('hero.stat4Label')}</div>
          </div>
        </div>

        {/* Subtle indicator */}
        <a
          href="#core-features"
          className={`mt-12 inline-flex items-center gap-2 text-xs font-semibold tracking-wider transition-colors ${
            theme === 'dark' ? 'text-slate-400 hover:text-[#C8A97E]' : 'text-slate-700 hover:text-[#9E773E]'
          }`}
        >
          <span>{lang === 'vi' ? 'Khám phá chi tiết dự án' : 'Explore Project Details'}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
