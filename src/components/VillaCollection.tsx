import React, { useState } from 'react';
import { VILLA_LIST } from '../data/projectData.ts';
import { Bed, Waves, Maximize2, Download, Sparkles, Check } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface VillaCollectionProps {
  onSelectVilla: (villaName: string) => void;
  onOpenBrochure: () => void;
}

export const VillaCollection: React.FC<VillaCollectionProps> = ({
  onSelectVilla,
  onOpenBrochure
}) => {
  const { theme, t, lang } = useThemeLanguage();
  const [filter, setFilter] = useState<'all' | 'beachfront' | 'marina' | 'president' | 'hillside'>('all');

  const filteredVillas = filter === 'all' 
    ? VILLA_LIST 
    : VILLA_LIST.filter(v => v.type === filter);

  return (
    <section id="villas" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#071320]/40' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
              theme === 'dark' ? 'bg-amber-950/70 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {t('villas.badge')}
            </div>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {t('villas.title')}
            </h2>
            <p className={`text-sm sm:text-base font-light mt-2 max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t('villas.subtitle')}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#D4AF37] text-[#050D15] font-bold shadow-lg'
                  : theme === 'dark' ? 'bg-[#0E1F33] text-slate-300 hover:bg-[#162D4A]' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {t('villas.filterAll')}
            </button>
            <button
              onClick={() => setFilter('beachfront')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === 'beachfront'
                  ? 'bg-[#D4AF37] text-[#050D15] font-bold shadow-lg'
                  : theme === 'dark' ? 'bg-[#0E1F33] text-slate-300 hover:bg-[#162D4A]' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {t('villas.filterBeach')}
            </button>
            <button
              onClick={() => setFilter('marina')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === 'marina'
                  ? 'bg-[#D4AF37] text-[#050D15] font-bold shadow-lg'
                  : theme === 'dark' ? 'bg-[#0E1F33] text-slate-300 hover:bg-[#162D4A]' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {t('villas.filterMarina')}
            </button>
            <button
              onClick={() => setFilter('president')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === 'president'
                  ? 'bg-[#D4AF37] text-[#050D15] font-bold shadow-lg'
                  : theme === 'dark' ? 'bg-[#0E1F33] text-slate-300 hover:bg-[#162D4A]' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {t('villas.filterPresident')}
            </button>
            <button
              onClick={() => setFilter('hillside')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === 'hillside'
                  ? 'bg-[#D4AF37] text-[#050D15] font-bold shadow-lg'
                  : theme === 'dark' ? 'bg-[#0E1F33] text-slate-300 hover:bg-[#162D4A]' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {t('villas.filterHill')}
            </button>
          </div>
        </div>

        {/* Villa Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVillas.map((villa) => (
            <div
              key={villa.id}
              className={`glass-card rounded-3xl overflow-hidden interactive-lift group flex flex-col justify-between ${
                theme === 'dark' ? 'border border-white/10 hover:border-[#D4AF37]/50' : 'border border-slate-200 hover:border-amber-500 shadow-md'
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#D4AF37] text-[#050D15] shadow-lg">
                    {villa.tag}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border ${
                    villa.status === 'Chỉ còn 2 căn'
                      ? 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                      : villa.status === 'Đang mở bán'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                      : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                  }`}>
                    {lang === 'vi' ? villa.status : (villa.status === 'Chỉ còn 2 căn' ? 'Only 2 Units Left' : villa.status === 'Đang mở bán' ? 'Phase 1 Open' : '80% Reserved')}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-xs text-white">
                  <div className="flex items-center gap-1.5 bg-[#050D15]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <Bed className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{villa.bedrooms} {lang === 'vi' ? 'PN' : 'BR'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#050D15]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{villa.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#050D15]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <Waves className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'vi' ? 'Hồ bơi riêng' : 'Private Pool'}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-serif text-2xl font-bold group-hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {villa.name}
                  </h3>
                  <p className={`text-xs font-light mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {villa.subTitle}
                  </p>

                  <div className={`mt-4 pt-4 border-t space-y-2 ${
                    theme === 'dark' ? 'border-white/10' : 'border-black/5'
                  }`}>
                    {villa.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-xs ${
                        theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                      }`}>
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between flex-wrap gap-3 ${
                  theme === 'dark' ? 'border-white/10' : 'border-black/5'
                }`}>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t('floorplan.priceEstimate')}</span>
                    <span className="font-serif text-lg font-bold text-amber-500">
                      {villa.priceEstimate}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectVilla(villa.name)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050D15] bg-[#D4AF37] hover:bg-amber-300 transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t('villas.cta')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
