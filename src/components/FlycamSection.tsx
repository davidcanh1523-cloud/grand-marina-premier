import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Film, Zap, CheckCircle2 } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface FlycamSectionProps {
  onOpenBrochure: () => void;
}

export const FlycamSection: React.FC<FlycamSectionProps> = ({ onOpenBrochure }) => {
  const { theme, t, lang } = useThemeLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeAngle, setActiveAngle] = useState<'peninsula' | 'marina' | 'coast'>('peninsula');

  const angles = [
    {
      id: 'peninsula',
      name: lang === 'vi' ? 'Toàn Cảnh Bán Đảo (300m)' : 'Peninsula Panorama (300m)',
      desc: lang === 'vi' ? 'Flycam từ độ cao 300m thu trọn 120 dinh thự ôm lấy vịnh biển ngọc.' : 'Drone vantage point capturing 120 beachfront estates cradled by the bay.',
      poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      duration: '03:45'
    },
    {
      id: 'marina',
      name: lang === 'vi' ? 'Bến Du Thuyền Hoàng Hôn' : 'Sunset Superyacht Marina',
      desc: lang === 'vi' ? 'Hải trình lướt sóng của các siêu du thuyền quốc tế cập bến Marina.' : 'Gliding through azure waves into the international marina harbor.',
      poster: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
      duration: '02:18'
    },
    {
      id: 'coast',
      name: lang === 'vi' ? 'Dải Bờ Biển Riêng Tư 2.5km' : '2.5km Private Shoreline',
      desc: lang === 'vi' ? 'Góc bay sát mặt nước trong veo như pha lê và bờ cát trắng mịn.' : 'Low-altitude pass over crystal waters and powdery white sand beaches.',
      poster: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80',
      duration: '04:02'
    }
  ];

  const currentAngle = angles.find((a) => a.id === activeAngle) || angles[0];

  return (
    <section id="flycam" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#050D15] via-[#061523] to-[#050D15]' 
        : 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
            theme === 'dark' ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-300 text-emerald-800'
          }`}>
            <Zap className="w-3.5 h-3.5 text-emerald-500" />
            {t('flycam.badge')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t('flycam.title')}
          </h2>
          <p className={`text-sm sm:text-base font-light mt-3 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t('flycam.subtitle')}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative rounded-3xl overflow-hidden glass-card-gold p-3 sm:p-5 border border-[#D4AF37]/30 shadow-2xl">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-black group">
            <img
              src={currentAngle.poster}
              alt={currentAngle.name}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-105' : 'group-hover:scale-102'
              }`}
            />

            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 transition-opacity duration-300 ${
              isPlaying ? 'opacity-30' : 'opacity-70'
            }`}></div>

            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-red-600/90 text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                FLYCAM 4K UHD
              </span>
              <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-amber-400 text-[11px] font-semibold border border-white/10">
                {t('flycam.speed')}
              </span>
            </div>

            {!isPlaying ? (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F9E79F] text-[#050D15] p-[2px] shadow-2xl shadow-[#D4AF37]/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group/btn"
                  aria-label="Play 4K Flycam Video"
                >
                  <div className="w-full h-full rounded-full bg-[#050D15]/80 group-hover/btn:bg-[#050D15]/60 flex items-center justify-center transition-colors">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-amber-400 text-amber-400 ml-1" />
                  </div>
                </button>
                <div className="mt-4">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
                    {currentAngle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1 max-w-md">
                    {currentAngle.desc}
                  </p>
                </div>
              </div>
            ) : (
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-white bg-black/60 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="p-2 hover:text-amber-400 transition-colors"
                  >
                    <Pause className="w-5 h-5 fill-current" />
                  </button>
                  <span className="text-xs font-semibold">{currentAngle.name}</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 hover:text-amber-400 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <span className="text-xs text-amber-400 font-mono font-bold">4K 60FPS HDR</span>
                </div>
              </div>
            )}
          </div>

          {/* Angles Navigation Bar */}
          <div className="mt-4 pt-4 border-t border-slate-700/30 grid grid-cols-1 md:grid-cols-3 gap-3">
            {angles.map((ang) => (
              <button
                key={ang.id}
                onClick={() => {
                  setActiveAngle(ang.id as any);
                  setIsPlaying(false);
                }}
                className={`p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  activeAngle === ang.id
                    ? 'bg-[#0E2238] border border-[#D4AF37]/50 shadow-md text-white'
                    : theme === 'dark'
                    ? 'bg-[#06101B] border border-white/5 hover:bg-[#0A1A2E] text-slate-300'
                    : 'bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold flex items-center gap-2">
                    <Film className="w-3.5 h-3.5 text-amber-500" />
                    {ang.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5 line-clamp-1">
                    {ang.desc}
                  </p>
                </div>
                <span className="text-[10px] text-slate-500 font-mono ml-2 shrink-0">
                  {ang.duration}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quality Guarantee Strip */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-xs ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{lang === 'vi' ? 'Tối ưu nén AV1/WebM chuẩn điện ảnh' : 'Cinema AV1/WebM next-gen compression'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{lang === 'vi' ? 'Lazy-loading không chặn luồng render chính' : 'Zero main-thread blocking latency'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{lang === 'vi' ? 'Tự động cân bằng phân giải theo băng thông' : 'Adaptive bitrate resolution matching'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
