import React from 'react';
import { AMENITIES_LIST } from '../data/projectData.ts';
import { Sparkles, Anchor, UtensilsCrossed, Waves, GlassWater, Plane } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface AmenitiesSectionProps {
  onOpenBrochure: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBrochure }) => {
  const { theme, t } = useThemeLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Anchor': return <Anchor className="w-5 h-5 text-amber-500" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-amber-500" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'GlassWater': return <GlassWater className="w-5 h-5 text-amber-500" />;
      case 'Plane': return <Plane className="w-5 h-5 text-amber-500" />;
      default: return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="amenities" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050D15]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
            theme === 'dark' ? 'bg-amber-950/70 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {t('amenities.badge')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t('amenities.title')}
          </h2>
          <p className={`text-sm sm:text-base font-light mt-3 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t('amenities.subtitle')}
          </p>
        </div>

        {/* 6 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES_LIST.map((amenity) => (
            <div
              key={amenity.id}
              className={`glass-card rounded-2xl overflow-hidden interactive-lift group flex flex-col justify-between ${
                theme === 'dark' ? 'border border-white/10 hover:border-[#D4AF37]/50' : 'border border-slate-200 hover:border-amber-500 shadow-md'
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full border border-white/10">
                  {amenity.badge}
                </span>

                <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl backdrop-blur-md border flex items-center justify-center ${
                  theme === 'dark' ? 'bg-[#050D15]/90 border-[#D4AF37]/40' : 'bg-white/90 border-amber-400'
                }`}>
                  {getIcon(amenity.icon)}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`font-serif text-lg font-bold group-hover:text-amber-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {amenity.title}
                  </h3>
                  <p className={`text-xs mt-1.5 leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                  }`}>
                    {amenity.description}
                  </p>
                </div>

                <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${
                  theme === 'dark' ? 'border-white/10 text-amber-400' : 'border-black/5 text-amber-600'
                }`}>
                  <span>6-Star Privilege</span>
                  <span className="text-slate-400 font-light">24/7 Concierge</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-card-gold flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className={`font-serif text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {t('amenities.yachtCalloutTitle')}
            </h3>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'}`}>
              {t('amenities.yachtCalloutDesc')}
            </p>
          </div>
          <button
            onClick={onOpenBrochure}
            className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#050D15] bg-gradient-to-r from-[#F9E79F] to-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer shrink-0"
          >
            {t('amenities.yachtCalloutCta')}
          </button>
        </div>
      </div>
    </section>
  );
};
