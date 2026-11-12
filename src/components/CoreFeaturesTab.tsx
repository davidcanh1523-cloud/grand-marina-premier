import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Eye, 
  ArrowRight,
  Lock,
  Building,
  FileCheck2
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface CoreFeaturesTabProps {
  onOpenBrochure: () => void;
  onOpenFlycam: () => void;
  onOpenAudit: () => void;
}

export const CoreFeaturesTab: React.FC<CoreFeaturesTabProps> = ({
  onOpenBrochure,
  onOpenFlycam,
  onOpenAudit
}) => {
  const { theme, t, lang } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'demo' | 'features' | 'architecture'>('features');
  const [demoImageIndex, setDemoImageIndex] = useState(0);

  const demoImages = [
    {
      title: lang === 'vi' 
        ? 'Toàn cảnh Vịnh Biển Hoàng Hôn & Bến Du Thuyền Marina' 
        : 'Sunset Bay Panorama & Marina Yacht Harbor',
      category: lang === 'vi' ? 'Phối cảnh tổng thể' : 'Master Overview',
      url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85',
      caption: lang === 'vi'
        ? 'Góc nhìn từ không trung bao quát 120 dinh thự biển độc bản trải dài 2.5km đường bờ biển.'
        : 'Aerial perspective overlooking 120 bespoke coastal estates spanning 2.5km of pristine shoreline.'
    },
    {
      title: lang === 'vi'
        ? 'Hồ Bơi Vô Cực Nước Khoáng & Sunken Lounge Riêng Tư'
        : 'Mineral Infinity Pool & Private Sunken Lounge',
      category: lang === 'vi' ? 'Chi tiết biệt thự' : 'Residence Detail',
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      caption: lang === 'vi'
        ? 'Thiết kế hồ bơi điện phân muối khoáng tràn bờ nối liền đại dương, trần nhà cao 6.8m.'
        : 'Cantilevered mineral salt infinity pool merging seamlessly with horizon waters.'
    },
    {
      title: lang === 'vi'
        ? 'Nội Thất Siêu Sang Nhập Khẩu Milan Chuẩn 6 Sao'
        : '6-Star Bespoke Interior Imported from Milan',
      category: lang === 'vi' ? 'Không gian sống' : 'Living Space',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      caption: lang === 'vi'
        ? 'Phòng khách thông tầng hoàn thiện bởi Minotti & Poliform với kính Low-E tràn viền panorama.'
        : 'Double-height grand salon styled by Minotti & Poliform with seamless Low-E floor-to-ceiling glass.'
    }
  ];

  return (
    <section id="core-features" className={`py-24 relative overflow-hidden border-y transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#07090E] border-white/5' 
        : 'bg-[#F5F2EB] border-[#9E773E]/15'
    }`}>
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-amber-500/5 to-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header replicating Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
              theme === 'dark'
                ? 'bg-cyan-950/90 text-cyan-400 border-cyan-500/30'
                : 'bg-cyan-100 text-cyan-900 border-cyan-300'
            }`}>
              {t('banner.category')}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              theme === 'dark'
                ? 'text-emerald-300 bg-emerald-950/70 border-emerald-500/30'
                : 'text-emerald-900 bg-emerald-100 border-emerald-300 font-bold'
            }`}>
              ⏱ {t('banner.time')}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              theme === 'dark'
                ? 'text-amber-300 bg-amber-950/70 border-amber-500/40'
                : 'text-amber-900 bg-amber-100 border-amber-300 font-bold'
            }`}>
              🎁 {t('banner.gift')}
            </span>
          </div>

          <h2 className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-[#111317]'
          }`}>
            {t('features.heading')}
          </h2>

          <p className={`text-sm sm:text-lg max-w-3xl mx-auto transition-colors ${
            theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-medium'
          }`}>
            {t('features.subheading')}
          </p>
        </div>

        {/* 3 Tabs Replicating Image 1 */}
        <div className={`flex items-center justify-center border-b mb-12 ${
          theme === 'dark' ? 'border-white/10' : 'border-black/10'
        }`}>
          <div className="flex gap-2 sm:gap-8 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveTab('demo')}
              className={`pb-4 px-3 sm:px-6 text-sm sm:text-base font-semibold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                activeTab === 'demo'
                  ? 'border-cyan-500 text-cyan-500 font-bold'
                  : theme === 'dark' ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4" />
              {t('features.tab1')}
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`pb-4 px-3 sm:px-6 text-sm sm:text-base font-semibold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                activeTab === 'features'
                  ? 'border-cyan-500 text-cyan-500 font-bold'
                  : theme === 'dark' ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              {t('features.tab2')}
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-4 px-3 sm:px-6 text-sm sm:text-base font-semibold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'border-cyan-500 text-cyan-500 font-bold'
                  : theme === 'dark' ? 'border-transparent text-slate-400 hover:text-slate-200' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              {t('features.tab3')}
            </button>
          </div>
        </div>

        {/* TAB 2: Nghiệp vụ & Tính năng (Active in Image 1) */}
        {activeTab === 'features' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className={`text-lg sm:text-xl font-bold tracking-wide flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                {t('features.coreTitle')}
              </h3>
              <span className={`text-xs px-3 py-1 rounded-full border ${
                theme === 'dark' ? 'text-slate-400 bg-slate-900/80 border-slate-700/60' : 'text-slate-600 bg-white border-slate-300 shadow-sm'
              }`}>
                {lang === 'vi' ? 'Chuẩn bàn giao thực tế 100%' : '100% Production Certified'}
              </span>
            </div>

            {/* The 4 core cards Replicating Image 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div 
                onClick={() => {
                  const el = document.getElementById('floorplan-3d');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                  theme === 'dark' ? 'hover:border-cyan-500/50 hover:bg-[#0A1B2E]/90' : 'hover:border-cyan-500 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-cyan-950/80 border-cyan-500/30' : 'bg-cyan-50 border-cyan-300'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-base sm:text-lg font-bold group-hover:text-cyan-500 transition-colors flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t('features.card1Title')}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-500" />
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                    }`}>
                      {t('features.card1Desc')}
                    </p>
                    <div className="pt-2 flex items-center gap-3 text-xs text-cyan-500 font-semibold">
                      <span>{t('features.card1Action')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                onClick={onOpenBrochure}
                className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                  theme === 'dark' ? 'hover:border-amber-500/50 hover:bg-[#0A1B2E]/90' : 'hover:border-amber-500 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-amber-950/80 border-amber-500/30' : 'bg-amber-50 border-amber-300'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-base sm:text-lg font-bold group-hover:text-amber-500 transition-colors flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t('features.card2Title')}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-amber-500" />
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                    }`}>
                      {t('features.card2Desc')}
                    </p>
                    <div className="pt-2 flex items-center gap-3 text-xs text-amber-500 font-semibold">
                      <span>{t('features.card2Action')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                onClick={onOpenFlycam}
                className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                  theme === 'dark' ? 'hover:border-emerald-500/50 hover:bg-[#0A1B2E]/90' : 'hover:border-emerald-500 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-emerald-950/80 border-emerald-500/30' : 'bg-emerald-50 border-emerald-300'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-base sm:text-lg font-bold group-hover:text-emerald-500 transition-colors flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t('features.card3Title')}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-500" />
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                    }`}>
                      {t('features.card3Desc')}
                    </p>
                    <div className="pt-2 flex items-center gap-3 text-xs text-emerald-500 font-semibold">
                      <span>{t('features.card3Action')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div 
                onClick={onOpenAudit}
                className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                  theme === 'dark' ? 'hover:border-cyan-500/50 hover:bg-[#0A1B2E]/90' : 'hover:border-cyan-500 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                    theme === 'dark' ? 'bg-cyan-950/80 border-cyan-500/30' : 'bg-cyan-50 border-cyan-300'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className={`text-base sm:text-lg font-bold group-hover:text-cyan-500 transition-colors flex items-center gap-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t('features.card4Title')}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-500" />
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                    }`}>
                      {t('features.card4Desc')}
                    </p>
                    <div className="pt-2 flex items-center gap-3 text-xs text-cyan-500 font-semibold">
                      <span>{t('features.card4Action')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: Demo Images */}
        {activeTab === 'demo' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {demoImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setDemoImageIndex(idx)}
                  className={`group relative rounded-2xl overflow-hidden glass-card border transition-all duration-300 cursor-pointer ${
                    demoImageIndex === idx
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 shadow-xl'
                      : 'border-white/10 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      {img.category}
                    </span>
                    <h4 className={`font-serif font-bold text-base leading-snug group-hover:text-amber-500 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Kiến trúc & Bảo mật */}
        {activeTab === 'architecture' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className={`font-serif text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'vi' ? 'Kiến Trúc Sinh Thái Khép Kín' : 'Sustainable Biophilic Architecture'}
                </h4>
                <p className={`text-xs font-light leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lang === 'vi' 
                    ? 'Hệ khung kính Low-E 3 lớp nhập khẩu từ Bỉ, cản nhiệt 85%, chống tia cực tím 99.9% nhưng vẫn thu trọn 100% ánh sáng tự nhiên và hương gió biển.'
                    : 'Triple-glazed Low-E glass panels from Belgium blocking 85% heat and 99.9% UV while capturing 100% natural sea breezes.'}
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className={`font-serif text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'vi' ? 'An Ninh Đa Lớp 24/7' : '24/7 Multi-Tier Smart Security'}
                </h4>
                <p className={`text-xs font-light leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lang === 'vi'
                    ? 'Bảo vệ tuần tra biển chuyên biệt, camera AI nhận diện khuôn mặt và biển số xe từ cổng dự án, cổng vào riêng biệt bảo mật danh tính chủ nhân.'
                    : 'Dedicated marine patrol, AI facial & license plate recognition, and private gated ingress protecting owner confidentiality.'}
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className={`font-serif text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'vi' ? 'Pháp Lý Minh Bạch 100%' : '100% Transparent Legal Dossier'}
                </h4>
                <p className={`text-xs font-light leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lang === 'vi'
                    ? 'Dự án đã có quyết định phê duyệt quy hoạch chi tiết 1/500, giấy phép xây dựng đầy đủ và cấp sổ đỏ sở hữu lâu dài cho từng căn biệt thự.'
                    : 'Approved 1/500 detailed masterplan, certified building permits, and individual freehold title ownership.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
