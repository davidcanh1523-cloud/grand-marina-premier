import React, { useState } from 'react';
import { TrendingUp, Calculator, Calendar, Percent, Download } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface InvestmentCalculatorProps {
  onOpenBrochure: () => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ onOpenBrochure }) => {
  const { theme, t, lang } = useThemeLanguage();
  const [villaPrice, setVillaPrice] = useState<number>(45); // in Billion VND
  const [occupancyRate, setOccupancyRate] = useState<number>(68); // in percentage
  const [dailyRate, setDailyRate] = useState<number>(22); // in Million VND / night

  const rentalDays = Math.round(365 * (occupancyRate / 100));
  const grossRevenue = Math.round((rentalDays * dailyRate) / 1000 * 10) / 10;
  const investorShare = Math.round((grossRevenue * 0.85) * 10) / 10;
  const estimatedRoi = Math.round((investorShare / villaPrice) * 100 * 10) / 10;

  return (
    <section id="calculator" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#071320]/80 border-white/5' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
            theme === 'dark' ? 'bg-emerald-950/70 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-300 text-emerald-800'
          }`}>
            <TrendingUp className="w-3.5 h-3.5" />
            {t('calc.badge')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            {t('calc.title')}
          </h2>
          <p className={`text-sm sm:text-base font-light mt-3 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t('calc.subtitle')}
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Sliders */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className={`font-serif text-xl font-bold flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              <Calculator className="w-5 h-5 text-amber-500" />
              {lang === 'vi' ? 'Tùy Chỉnh Giả Định Đầu Tư:' : 'Customize Investment Assumptions:'}
            </h3>

            {/* Slider 1: Villa Price */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {t('calc.villaValue')}
                </span>
                <span className="font-mono font-bold text-amber-500 text-base">{villaPrice} {lang === 'vi' ? 'Tỷ VNĐ' : 'Billion VND'}</span>
              </div>
              <input
                type="range"
                min="35"
                max="120"
                step="5"
                value={villaPrice}
                onChange={(e) => setVillaPrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>35 {lang === 'vi' ? 'Tỷ' : 'B'} (The Ocean Pearl)</span>
                <span>120 {lang === 'vi' ? 'Tỷ' : 'B'} (Presidential Palace)</span>
              </div>
            </div>

            {/* Slider 2: Occupancy Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {t('calc.occupancy')}
                </span>
                <span className="font-mono font-bold text-emerald-500 text-base">{occupancyRate} % (~{rentalDays} {lang === 'vi' ? 'đêm' : 'nights'})</span>
              </div>
              <input
                type="range"
                min="50"
                max="85"
                step="1"
                value={occupancyRate}
                onChange={(e) => setOccupancyRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>50% ({lang === 'vi' ? 'Mùa thấp điểm' : 'Low season'})</span>
                <span>85% ({lang === 'vi' ? 'Mùa cao điểm' : 'Peak season'})</span>
              </div>
            </div>

            {/* Slider 3: Daily Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className={`font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {t('calc.dailyRate')}
                </span>
                <span className="font-mono font-bold text-cyan-500 text-base">{dailyRate} {lang === 'vi' ? 'Triệu VNĐ' : 'Million VND'}</span>
              </div>
              <input
                type="range"
                min="15"
                max="50"
                step="1"
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>15 {lang === 'vi' ? 'Triệu/đêm' : 'M/night'}</span>
                <span>50 {lang === 'vi' ? 'Triệu/đêm' : 'M/night'} (VIP)</span>
              </div>
            </div>

            {/* Program perks */}
            <div className={`pt-4 border-t border-slate-700/30 grid grid-cols-2 gap-3 text-xs ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{lang === 'vi' ? 'Tặng 30 đêm nghỉ miễn phí/năm' : '30 complimentary annual luxury nights'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{lang === 'vi' ? 'Chiết khấu 12% khi thanh toán sớm' : '12% early payment discount'}</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-3xl space-y-6 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                {t('calc.resultTitle')}
              </span>
              <div className="mt-2 flex items-baseline justify-center lg:justify-start gap-2">
                <span className={`font-serif text-4xl sm:text-5xl font-extrabold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {investorShare}
                </span>
                <span className="text-lg text-amber-500 font-bold">{t('calc.perYear')}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {t('calc.perMonth')} ~{Math.round(investorShare * 1000 / 12)} {lang === 'vi' ? 'Triệu VNĐ/tháng' : 'Million VND/mo'}
              </p>
            </div>

            <div className={`p-4 rounded-2xl border space-y-3 text-xs text-left ${
              theme === 'dark' ? 'bg-[#06121E] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex justify-between items-center">
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>{t('calc.grossRev')}</span>
                <span className="font-mono font-bold text-amber-500">{grossRevenue} {lang === 'vi' ? 'Tỷ/năm' : 'B/year'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>{t('calc.revShare')}</span>
                <span className="font-mono font-bold text-amber-500">85% : 15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>{t('calc.roi')}</span>
                <span className="font-mono font-bold text-emerald-500 text-sm">{estimatedRoi}% / {lang === 'vi' ? 'năm' : 'yr'}</span>
              </div>
            </div>

            <button
              onClick={onOpenBrochure}
              className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050D15] bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B8860B] hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Download className="w-4 h-4 text-[#050D15]" />
              {t('calc.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
