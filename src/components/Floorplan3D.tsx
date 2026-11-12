import React, { useState } from 'react';
import { VILLA_LIST, VillaModel } from '../data/projectData.ts';
import { 
  Bed, 
  Waves, 
  Compass, 
  Download, 
  Check, 
  Layers,
  Info
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface Floorplan3DProps {
  onSelectVillaForBrochure: (villaName: string) => void;
}

export const Floorplan3D: React.FC<Floorplan3DProps> = ({ onSelectVillaForBrochure }) => {
  const { theme, t, lang } = useThemeLanguage();
  const [selectedVilla, setSelectedVilla] = useState<VillaModel>(VILLA_LIST[0]);
  const [viewMode, setViewMode] = useState<'3d-floorplan' | 'exterior' | 'interior'>('3d-floorplan');
  const [activeHotspot, setActiveHotspot] = useState<string | null>('pool');

  const hotspots = [
    {
      id: 'pool',
      title: lang === 'vi' ? 'Hồ Bơi Vô Cực Nước Khoáng' : 'Mineral Salt Infinity Pool',
      top: '32%',
      left: '72%',
      desc: lang === 'vi' 
        ? 'Điện phân muối khoáng tự nhiên, thiết kế tràn viền nối liền chân trời đại dương.' 
        : 'Natural mineral electrolysis filtration, cantilevered infinity edge seamlessly meeting the ocean horizon.'
    },
    {
      id: 'living',
      title: lang === 'vi' ? 'Phòng Khách Thông Tầng 6.8m' : '6.8m Double-Height Grand Salon',
      top: '55%',
      left: '48%',
      desc: lang === 'vi'
        ? 'Kính Low-E nguyên tấm cao kịch trần, đón gió biển tự nhiên không cần điều hòa.'
        : 'Floor-to-ceiling Low-E glass panels capturing fresh sea breeze naturally.'
    },
    {
      id: 'master',
      title: lang === 'vi' ? 'Master Suite Hoàng Gia' : 'Royal Master Suite',
      top: '38%',
      left: '25%',
      desc: lang === 'vi'
        ? 'Phòng ngủ tổng thống với bồn tắm đá lộ thiên ngắm bình minh và phòng thay đồ walk-in closet.'
        : 'Presidential suite with outdoor stone soaking tub facing sunrise and custom walk-in closet.'
    },
    {
      id: 'terrace',
      title: lang === 'vi' ? 'Sân Phơi Nắng & Tiệc BBQ' : 'Sun Deck & BBQ Terrace',
      top: '75%',
      left: '60%',
      desc: lang === 'vi'
        ? 'Không gian ngoài trời lý tưởng cho các buổi tiệc rượu vang và ẩm thực bên bờ sóng.'
        : 'Al fresco oceanfront terrace designed for private wine tasting and culinary soirees.'
    }
  ];

  return (
    <section id="floorplan-3d" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050D15]' : 'bg-white'
    }`}>
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
              theme === 'dark' ? 'bg-cyan-950/80 border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-300 text-cyan-800'
            }`}>
              <Compass className="w-3.5 h-3.5" />
              {t('floorplan.badge')}
            </div>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {t('floorplan.title')}
            </h2>
            <p className={`text-sm sm:text-base font-light mt-2 max-w-2xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t('floorplan.subtitle')}
            </p>
          </div>

          {/* Quick Filter Tabs for Villas */}
          <div className="flex flex-wrap gap-2">
            {VILLA_LIST.map((villa) => (
              <button
                key={villa.id}
                onClick={() => setSelectedVilla(villa)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedVilla.id === villa.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#050D15] shadow-lg shadow-[#D4AF37]/20 font-bold'
                    : theme === 'dark'
                    ? 'bg-[#0E1F33] text-slate-300 hover:bg-[#162D4A] border border-white/5'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {villa.name.replace(' Villa', '').replace(' Palace', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Main 3D / Interactive Canvas Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas - 8 cols */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-4 sm:p-6 relative overflow-hidden">
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4 pb-4 border-b border-slate-700/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  {lang === 'vi' ? 'Mô phỏng: ' : 'Simulation: '}
                  <span className="text-amber-500 font-bold">{selectedVilla.name}</span>
                </span>
              </div>

              <div className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs ${
                theme === 'dark' ? 'bg-[#071320] border-white/10' : 'bg-slate-100 border-slate-300'
              }`}>
                <button
                  onClick={() => setViewMode('3d-floorplan')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    viewMode === '3d-floorplan'
                      ? 'bg-[#D4AF37] text-[#050D15] font-bold'
                      : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t('floorplan.tab3D')}
                </button>
                <button
                  onClick={() => setViewMode('exterior')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    viewMode === 'exterior'
                      ? 'bg-[#D4AF37] text-[#050D15] font-bold'
                      : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t('floorplan.tabExterior')}
                </button>
                <button
                  onClick={() => setViewMode('interior')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    viewMode === 'interior'
                      ? 'bg-[#D4AF37] text-[#050D15] font-bold'
                      : theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t('floorplan.tabInterior')}
                </button>
              </div>
            </div>

            {/* Interactive Image Frame */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/5 group">
              {viewMode === '3d-floorplan' && (
                <>
                  <img
                    src={selectedVilla.image}
                    alt={selectedVilla.name}
                    className="w-full h-full object-cover filter contrast-105 brightness-95 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#050D15]/40 backdrop-blur-[2px]"></div>

                  {/* SVG Blueprint Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                    <svg viewBox="0 0 800 500" className="w-full h-full stroke-cyan-400/40 fill-cyan-950/20 stroke-1">
                      <rect x="50" y="60" width="700" height="380" rx="20" strokeDasharray="6 6" />
                      <rect x="80" y="90" width="300" height="200" rx="10" className="fill-cyan-900/30 stroke-cyan-400/60" />
                      <rect x="400" y="90" width="320" height="150" rx="10" className="fill-amber-900/20 stroke-amber-400/60" />
                      <rect x="80" y="310" width="400" height="100" rx="10" className="fill-blue-900/30 stroke-blue-400/60" />
                      <rect x="500" y="260" width="220" height="150" rx="10" className="fill-emerald-900/25 stroke-emerald-400/60" />
                      <text x="130" y="190" fill="#93C5FD" fontSize="14" fontWeight="bold">MASTER BEDROOM</text>
                      <text x="470" y="170" fill="#FCD34D" fontSize="14" fontWeight="bold">LIVING &amp; DINING</text>
                      <text x="180" y="365" fill="#67E8F9" fontSize="14" fontWeight="bold">PRIVATE INFINITY POOL</text>
                      <text x="540" y="340" fill="#6EE7B7" fontSize="14" fontWeight="bold">SPA &amp; SUN DECK</text>
                    </svg>
                  </div>

                  {/* Clickable Hotspots */}
                  {hotspots.map((hs) => (
                    <button
                      key={hs.id}
                      onClick={() => setActiveHotspot(hs.id)}
                      style={{ top: hs.top, left: hs.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer transition-transform duration-300 ${
                        activeHotspot === hs.id ? 'scale-125' : 'hover:scale-110'
                      }`}
                      aria-label={hs.title}
                    >
                      <span className="relative flex h-7 w-7 items-center justify-center">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          activeHotspot === hs.id ? 'bg-amber-400' : 'bg-cyan-400'
                        }`}></span>
                        <span className={`relative inline-flex rounded-full h-5 w-5 border-2 border-white items-center justify-center text-[10px] font-bold text-[#050D15] ${
                          activeHotspot === hs.id ? 'bg-amber-400' : 'bg-cyan-400'
                        }`}>
                          +
                        </span>
                      </span>
                    </button>
                  ))}
                </>
              )}

              {viewMode === 'exterior' && (
                <img
                  src={selectedVilla.gallery[0] || selectedVilla.image}
                  alt={`${selectedVilla.name} Exterior`}
                  className="w-full h-full object-cover animate-fadeIn"
                />
              )}

              {viewMode === 'interior' && (
                <img
                  src={selectedVilla.gallery[1] || selectedVilla.image}
                  alt={`${selectedVilla.name} Interior`}
                  className="w-full h-full object-cover animate-fadeIn"
                />
              )}

              {/* Watermark badge */}
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-[11px] text-slate-200 border border-white/10 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D CAD Blueprint • Grand Marina Premier</span>
              </div>
            </div>

            {/* Active Hotspot Info Card */}
            {viewMode === '3d-floorplan' && activeHotspot && (
              <div className={`mt-4 p-4 rounded-xl border flex items-start justify-between gap-4 animate-fadeIn ${
                theme === 'dark' ? 'bg-[#081729]/90 border-cyan-500/30' : 'bg-cyan-50 border-cyan-300'
              }`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/40 text-cyan-500">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {hotspots.find(h => h.id === activeHotspot)?.title}
                    </h4>
                    <p className={`text-xs font-light mt-0.5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                      {hotspots.find(h => h.id === activeHotspot)?.desc}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Villa Specifications - 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <div className="glass-card-gold rounded-3xl p-6 sm:p-7 space-y-6">
              <div className="border-b border-[#D4AF37]/20 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                  {selectedVilla.tag}
                </span>
                <h3 className={`font-serif text-2xl font-bold mt-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {selectedVilla.name}
                </h3>
                <p className={`text-xs font-light mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {selectedVilla.subTitle}
                </p>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-[#081524] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-slate-400 block mb-1">{t('floorplan.landArea')}</span>
                  <span className={`font-serif font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{selectedVilla.area}</span>
                </div>
                <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-[#081524] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-slate-400 block mb-1">{t('floorplan.builtArea')}</span>
                  <span className={`font-serif font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{selectedVilla.constructionArea}</span>
                </div>
                <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-[#081524] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-slate-400 block mb-1">{t('floorplan.bedrooms')}</span>
                  <span className="font-serif font-bold text-base text-cyan-500 flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    {selectedVilla.bedrooms} {lang === 'vi' ? 'PN Master' : 'Master BR'}
                  </span>
                </div>
                <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-[#081524] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-slate-400 block mb-1">{t('floorplan.pool')}</span>
                  <span className="font-serif font-bold text-base text-emerald-500 flex items-center gap-1.5">
                    <Waves className="w-4 h-4" />
                    {selectedVilla.privatePoolSize.split(' ')[0]} {selectedVilla.privatePoolSize.split(' ')[1]}
                  </span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-2">
                <span className={`text-xs font-semibold block uppercase tracking-wider ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {t('floorplan.highlights')}
                </span>
                <ul className={`space-y-2 text-xs font-light ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {selectedVilla.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Booking Call */}
              <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">{t('floorplan.priceEstimate')}</span>
                  <span className="font-serif text-xl font-bold text-amber-500">
                    {selectedVilla.priceEstimate}
                  </span>
                </div>

                <button
                  onClick={() => onSelectVillaForBrochure(selectedVilla.name)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050D15] bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B8860B] hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Download className="w-4 h-4 text-[#050D15]" />
                  {t('floorplan.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
