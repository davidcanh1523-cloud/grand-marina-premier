import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Download, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure, onOpenAudit }) => {
  const { theme, toggleTheme, lang, setLang, t } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Prestige Bar: Clean, understated luxury */}
      <aside 
        aria-label="Thông tin đặc quyền dự án" 
        className={`border-b text-[11px] tracking-wider py-1.5 px-4 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-[#05060A] border-white/5 text-slate-400' 
            : 'bg-[#F4F0E8] border-black/5 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse"></span>
            <span className="font-medium text-xs">
              {lang === 'vi' 
                ? 'Grand Marina Premier • Quần thể 120 dinh thự biển độc bản tại Phú Quốc • Bàn giao Quý IV/2026'
                : 'Grand Marina Premier • 120 Bespoke Coastal Estates in Phu Quoc • Handover Q4/2026'}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 shrink-0 text-xs">
            <button 
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 hover:text-[#C8A97E] transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Google PageSpeed 99/100</span>
            </button>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <a 
              href="tel:18006868" 
              className={`inline-flex items-center gap-1.5 font-bold transition-colors ${
                theme === 'dark' ? 'text-[#C8A97E] hover:text-[#DFCAAB]' : 'text-[#9E773E] hover:text-[#7A5B28]'
              }`}
            >
              <Phone className="w-3 h-3" />
              <span>Hotline 24/7: 1800 6868</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Luxury Architectural Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#07090E]/95 backdrop-blur-xl border-b border-[#C8A97E]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
              : 'bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#9E773E]/20 shadow-[0_10px_30px_rgba(40,25,10,0.06)] py-3'
            : theme === 'dark'
              ? 'bg-[#07090E]/80 backdrop-blur-md border-b border-white/5 py-4'
              : 'bg-[#FAF8F5]/85 backdrop-blur-md border-b border-black/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Wordmark & Architectural Monogram */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#1C160E] to-[#0A0D14] border-[#C8A97E]/40 group-hover:border-[#C8A97E]'
                : 'bg-gradient-to-br from-[#FFFFFF] to-[#F3EFEA] border-[#9E773E]/40 group-hover:border-[#9E773E] shadow-sm'
            }`}>
              <svg className={`w-5 h-5 transition-transform duration-300 group-hover:scale-105 ${
                theme === 'dark' ? 'text-[#C8A97E]' : 'text-[#9E773E]'
              }`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" strokeWidth="1.2" stroke="currentColor" fill="none" />
                <path d="M8 16V9L12 13.5L16 9V16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg sm:text-xl font-bold tracking-[0.2em] uppercase transition-colors leading-none ${
                theme === 'dark' ? 'text-white group-hover:text-[#C8A97E]' : 'text-slate-900 group-hover:text-[#9E773E]'
              }`}>
                Grand Marina
              </span>
              <span className={`text-[9px] tracking-[0.34em] font-semibold uppercase mt-1 leading-none ${
                theme === 'dark' ? 'text-[#C8A97E]' : 'text-[#9E773E]'
              }`}>
                Premier Residences
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Spacious, Never Wrapped, High Contrast) */}
          <nav className={`hidden lg:flex items-center gap-3.5 xl:gap-5 text-[11px] xl:text-[11.5px] uppercase tracking-[0.12em] font-medium transition-colors shrink-0 ${
            theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
          }`}>
            <a href="#core-features" className="hover:text-[#C8A97E] transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.features')}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#flycam" className="hover:text-[#C8A97E] transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.flycam')}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#floorplan-3d" className="hover:text-[#C8A97E] transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.floorplan')}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#villas" className="hover:text-[#C8A97E] transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.villas')}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#amenities" className="hover:text-[#C8A97E] transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.amenities')}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#calculator" className="hover:text-[#C8A97E] transition-colors py-1 relative group whitespace-nowrap">
              {t('nav.calculator')}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A97E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <div className={`flex items-center text-[11px] font-semibold tracking-wider rounded-full p-0.5 border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}>
              <button
                onClick={() => setLang('vi')}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'vi' 
                    ? theme === 'dark'
                      ? 'bg-[#C8A97E] text-[#08090C] font-bold shadow-sm'
                      : 'bg-[#9E773E] text-white font-bold shadow-sm' 
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'en' 
                    ? theme === 'dark'
                      ? 'bg-[#C8A97E] text-[#08090C] font-bold shadow-sm'
                      : 'bg-[#9E773E] text-white font-bold shadow-sm' 
                    : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle (Sleek circular icon with tooltip) */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Chuyển sang giao diện Ban ngày' : 'Chuyển sang giao diện Ban đêm'}
              title={theme === 'dark' ? 'Giao diện Ban ngày (Light Mode)' : 'Giao diện Ban đêm (Dark Mode)'}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/15 text-[#C8A97E] hover:bg-white/10 hover:border-[#C8A97E]/50'
                  : 'bg-white border-black/10 text-slate-800 hover:bg-black/5 hover:border-[#9E773E]/50 shadow-sm'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-[#C8A97E]" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-800" />
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenBrochure}
              className={`hidden md:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap shadow-sm ${
                theme === 'dark'
                  ? 'text-[#08090C] bg-gradient-to-r from-[#DFCAAB] via-[#C8A97E] to-[#B08D5B] hover:shadow-lg hover:shadow-[#C8A97E]/25'
                  : 'text-white bg-gradient-to-r from-[#C29B58] via-[#9E773E] to-[#7A5B28] hover:shadow-lg hover:shadow-[#9E773E]/25'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('nav.cta')}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                theme === 'dark' ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-black'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-6 py-6 space-y-4 animate-fadeIn transition-colors ${
            theme === 'dark'
              ? 'bg-[#07090E] border-white/10 text-slate-200'
              : 'bg-[#FAF8F5] border-black/10 text-slate-800 shadow-xl'
          }`}>
            <nav className="flex flex-col gap-3 text-xs uppercase tracking-widest font-semibold">
              <a
                href="#core-features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-black/5 dark:border-white/5 hover:text-[#C8A97E]"
              >
                {t('nav.features')}
              </a>
              <a
                href="#flycam"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-black/5 dark:border-white/5 hover:text-[#C8A97E]"
              >
                {t('nav.flycam')}
              </a>
              <a
                href="#floorplan-3d"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-black/5 dark:border-white/5 hover:text-[#C8A97E]"
              >
                {t('nav.floorplan')}
              </a>
              <a
                href="#villas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-black/5 dark:border-white/5 hover:text-[#C8A97E]"
              >
                {t('nav.villas')}
              </a>
              <a
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-black/5 dark:border-white/5 hover:text-[#C8A97E]"
              >
                {t('nav.amenities')}
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-black/5 dark:border-white/5 hover:text-[#C8A97E]"
              >
                {t('nav.calculator')}
              </a>
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer ${
                  theme === 'dark'
                    ? 'text-[#08090C] bg-gradient-to-r from-[#DFCAAB] to-[#C8A97E]'
                    : 'text-white bg-gradient-to-r from-[#C29B58] to-[#9E773E]'
                }`}
              >
                <Download className="w-4 h-4" />
                {t('nav.cta')}
              </button>
              <a
                href="tel:18006868"
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold border transition-colors ${
                  theme === 'dark'
                    ? 'text-[#C8A97E] border-[#C8A97E]/30 bg-white/5'
                    : 'text-[#9E773E] border-[#9E773E]/40 bg-white shadow-sm'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                Hotline 24/7: 1800 6868
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
