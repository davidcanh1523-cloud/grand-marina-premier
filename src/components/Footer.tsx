import React from 'react';
import { Phone, Mail, MapPin, Download, MessageCircle, ArrowUp } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenAudit }) => {
  const { theme, t, lang } = useThemeLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className={`border-t text-xs pt-16 pb-28 md:pb-16 relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#04060A] border-white/10 text-slate-400' : 'bg-[#F5F2EB] border-black/10 text-slate-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#F9E79F] via-[#D4AF37] to-[#8C6D1F] p-[1px]">
                  <div className={`w-full h-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-[#03080F]' : 'bg-white'
                  }`}>
                    <span className="font-serif font-black text-sm gold-gradient-text">GM</span>
                  </div>
                </div>
                <div>
                  <h4 className={`font-serif text-base font-bold tracking-widest uppercase ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {t('nav.brand')}
                  </h4>
                  <p className="text-[9px] text-[#D4AF37] tracking-[0.25em] font-bold uppercase">
                    {t('nav.subBrand')}
                  </p>
                </div>
              </div>
              <p className="text-xs font-light leading-relaxed">
                {t('footer.brandDesc')}
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={onOpenAudit}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition-colors cursor-pointer ${
                    theme === 'dark' 
                      ? 'bg-[#0A1A2C] border-emerald-500/30 text-emerald-400 hover:border-emerald-400'
                      : 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:border-emerald-500'
                  }`}
                >
                  ⚡ PageSpeed: 99/100
                </button>
                <span className="text-[11px] text-slate-500">SEO Top 1 Google</span>
              </div>
            </div>

            {/* Col 2: Showrooms */}
            <div className="space-y-3">
              <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-500">
                {t('footer.showrooms')}
              </h5>
              <ul className="space-y-2.5 font-light">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{lang === 'vi' ? 'Dự án: Đại lộ Biển Bãi Dài, Đặc Khu Phú Quốc, Kiên Giang' : 'Resort: Long Beach Boulevard, Phu Quoc Island, Vietnam'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{lang === 'vi' ? 'Showroom TP.HCM: Tòa nhà Grand Marina, Ba Son, Quận 1' : 'HCMC Gallery: Grand Marina Tower, Ba Son, District 1'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{lang === 'vi' ? 'Showroom Hà Nội: Khách sạn Capella Hanoi, Hoàn Kiếm' : 'Hanoi Gallery: Capella Hanoi, Hoan Kiem, Hanoi'}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Hotline */}
            <div className="space-y-3">
              <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-500">
                {t('footer.hotline')}
              </h5>
              <div className="space-y-2">
                <a
                  href="tel:18006868"
                  className="inline-flex items-center gap-2 text-base font-bold text-amber-500 hover:text-amber-400 font-mono"
                >
                  <Phone className="w-4 h-4" />
                  1800 6868 (+84 1800 6868)
                </a>
                <p className="text-[11px] text-slate-400">
                  {lang === 'vi' ? 'Dành riêng cho khách hàng VIP và đối tác quốc tế' : 'Dedicated to VIP clients & international partners'}
                </p>
                <a
                  href="mailto:contact@grandmarinapremier.vn"
                  className="flex items-center gap-2 text-xs hover:text-amber-500 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-500" />
                  contact@grandmarinapremier.vn
                </a>
              </div>
            </div>

            {/* Col 4: Dossier Download */}
            <div className="space-y-3">
              <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-500">
                {t('footer.documents')}
              </h5>
              <p className="text-xs font-light">
                {lang === 'vi' 
                  ? 'Tải về trọn bộ pháp lý quy hoạch 1/500, hồ sơ thiết kế kiến trúc và bảng giá gốc đợt 1.'
                  : 'Download complete 1/500 masterplan dossier, architectural drawings, and Phase 1 pricing.'}
              </p>
              <button
                onClick={onOpenBrochure}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050D15] bg-gradient-to-r from-[#F9E79F] to-[#D4AF37] hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {t('footer.downloadDocs')}
              </button>
            </div>
          </div>

          {/* Bottom disclaimer */}
          <div className="pt-8 border-t border-slate-700/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>{t('footer.copyright')}</p>
            <div className="flex items-center gap-4">
              <button onClick={onOpenAudit} className="hover:text-amber-500 transition-colors cursor-pointer">
                Google PageSpeed 99/100
              </button>
              <span>•</span>
              <button onClick={scrollToTop} className="hover:text-amber-500 transition-colors flex items-center gap-1 cursor-pointer">
                {t('footer.scrollTop')} <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Floating Bottom Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl backdrop-blur-md transition-colors ${
        theme === 'dark' ? 'bg-[#06121E]/95 border-[#D4AF37]/30' : 'bg-white/95 border-[#D4AF37]/40'
      }`}>
        <a
          href="tel:18006868"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/30 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-amber-500" />
          {t('footer.callNow')}
        </a>

        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-cyan-500 bg-cyan-500/10 border border-cyan-500/30 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 text-cyan-500" />
          {t('footer.chatZalo')}
        </a>

        <button
          onClick={onOpenBrochure}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-[#050D15] bg-gradient-to-r from-[#F9E79F] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 active:scale-95 transition-transform cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          {t('footer.priceListMobile')}
        </button>
      </div>
    </>
  );
};
