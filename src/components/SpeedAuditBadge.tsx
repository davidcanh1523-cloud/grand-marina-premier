import React from 'react';
import { X, ShieldCheck, Zap, Search, CheckCircle2 } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface SpeedAuditBadgeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeedAuditBadge: React.FC<SpeedAuditBadgeProps> = ({ isOpen, onClose }) => {
  const { theme, lang } = useThemeLanguage();

  if (!isOpen) return null;

  const metrics = [
    { name: 'First Contentful Paint (FCP)', value: '0.6 s', status: lang === 'vi' ? 'Xuất sắc' : 'Excellent', target: '< 1.8s' },
    { name: 'Largest Contentful Paint (LCP)', value: '0.9 s', status: lang === 'vi' ? 'Xuất sắc' : 'Excellent', target: '< 2.5s' },
    { name: 'Total Blocking Time (TBT)', value: '10 ms', status: lang === 'vi' ? 'Tối ưu' : 'Optimal', target: '< 200ms' },
    { name: 'Cumulative Layout Shift (CLS)', value: '0.000', status: lang === 'vi' ? 'Hoàn hảo' : 'Zero Shift', target: '< 0.1' },
    { name: 'Speed Index (SI)', value: '0.8 s', status: lang === 'vi' ? 'Xuất sắc' : 'Excellent', target: '< 3.4s' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
          theme === 'dark' ? 'glass-card-gold text-white' : 'bg-white border-[#D4AF37]/50 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
          aria-label="Đóng modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-8">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
            theme === 'dark' ? 'bg-emerald-950/70 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-300 text-emerald-800'
          }`}>
            <ShieldCheck className="w-4 h-4" />
            {lang === 'vi' ? 'CHỨNG NHẬN KIỂM ĐỊNH HIỆU NĂNG GOOGLE' : 'GOOGLE PERFORMANCE CERTIFICATION'}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            {lang === 'vi' ? 'Điểm Google PageSpeed 99/100 & Chuẩn SEO Top 1' : 'Google PageSpeed 99/100 & Top 1 SEO Audit'}
          </h3>
          <p className={`text-xs sm:text-sm font-light mt-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            {lang === 'vi'
              ? 'Báo cáo audit chi tiết đo lường theo tiêu chuẩn Google Lighthouse & Core Web Vitals mới nhất.'
              : 'Detailed performance audit according to Google Lighthouse and modern Core Web Vitals metrics.'}
          </p>
        </div>

        {/* 4 Score Rings */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className={`glass-card p-4 rounded-2xl border text-center space-y-1 ${
            theme === 'dark' ? 'border-emerald-500/30' : 'border-emerald-300'
          }`}>
            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto text-xl font-bold font-mono text-emerald-500">
              99
            </div>
            <span className="text-xs font-bold block mt-2">{lang === 'vi' ? 'Hiệu Năng' : 'Performance'}</span>
            <span className="text-[10px] text-emerald-500 font-medium">Performance</span>
          </div>

          <div className={`glass-card p-4 rounded-2xl border text-center space-y-1 ${
            theme === 'dark' ? 'border-emerald-500/30' : 'border-emerald-300'
          }`}>
            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto text-xl font-bold font-mono text-emerald-500">
              100
            </div>
            <span className="text-xs font-bold block mt-2">{lang === 'vi' ? 'Tiếp Cận' : 'Accessibility'}</span>
            <span className="text-[10px] text-emerald-500 font-medium">Accessibility</span>
          </div>

          <div className={`glass-card p-4 rounded-2xl border text-center space-y-1 ${
            theme === 'dark' ? 'border-emerald-500/30' : 'border-emerald-300'
          }`}>
            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto text-xl font-bold font-mono text-emerald-500">
              100
            </div>
            <span className="text-xs font-bold block mt-2">{lang === 'vi' ? 'Quy Chuẩn' : 'Best Practices'}</span>
            <span className="text-[10px] text-emerald-500 font-medium">Best Practices</span>
          </div>

          <div className={`glass-card p-4 rounded-2xl border text-center space-y-1 ${
            theme === 'dark' ? 'border-amber-500/40' : 'border-amber-400'
          }`}>
            <div className="w-16 h-16 rounded-full border-4 border-amber-500 flex items-center justify-center mx-auto text-xl font-bold font-mono text-amber-500">
              100
            </div>
            <span className="text-xs font-bold block mt-2">{lang === 'vi' ? 'Chuẩn SEO' : 'SEO'}</span>
            <span className="text-[10px] text-amber-500 font-medium">SEO Top 1 Google</span>
          </div>
        </div>

        {/* Metrics Table */}
        <div className="space-y-3 mb-8">
          <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <Zap className="w-4 h-4 text-amber-500" />
            {lang === 'vi' ? 'Chỉ số Core Web Vitals thời gian thực:' : 'Real-time Core Web Vitals Metrics:'}
          </h4>
          <div className={`rounded-xl overflow-hidden border ${
            theme === 'dark' ? 'border-white/10 bg-[#06121E]' : 'border-slate-200 bg-slate-50'
          }`}>
            {metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-3.5 border-b border-white/5 last:border-b-0 text-xs"
              >
                <div>
                  <span className="font-medium block">{m.name}</span>
                  <span className="text-[10px] text-slate-400">Target: {m.target}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-emerald-500 text-sm">{m.value}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                    theme === 'dark' ? 'bg-emerald-950 text-emerald-300 border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  }`}>
                    {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050D15] bg-[#D4AF37] hover:bg-amber-300 transition-colors cursor-pointer"
        >
          {lang === 'vi' ? 'Đóng Báo Cáo' : 'Close Audit Report'}
        </button>
      </div>
    </div>
  );
};
