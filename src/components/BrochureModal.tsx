import React, { useState } from 'react';
import { X, Download, CheckCircle2, Sparkles, Phone, User, Mail, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVilla?: string;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  preselectedVilla
}) => {
  const { theme, t, lang } = useThemeLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDocs, setSelectedDocs] = useState<string[]>([
    'price-list',
    'brochure-hd',
    'legal-1500',
    'yield-policy'
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const toggleDoc = (docId: string) => {
    if (selectedDocs.includes(docId)) {
      if (selectedDocs.length > 1) {
        setSelectedDocs(selectedDocs.filter(id => id !== docId));
      }
    } else {
      setSelectedDocs([...selectedDocs, docId]);
    }
  };

  const validatePhone = (val: string) => {
    const cleaned = val.replace(/\s+/g, '');
    const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
    return phoneRegex.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage(lang === 'vi' ? 'Vui lòng nhập họ và tên của Quý khách.' : 'Please enter your full name.');
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMessage(lang === 'vi' ? 'Vui lòng nhập số điện thoại hợp lệ (10 số, đầu 09x, 08x, 07x...).' : 'Please enter a valid Vietnamese phone number.');
      return;
    }

    setIsLoading(true);

    // Simulate server processing & instant automated download
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F9E79F', '#00FFFF', '#22C55E']
      });

      // Automated file download trigger
      const blob = new Blob([
        `GRAND MARINA PREMIER - OFFICIAL DOSSIER 2026\n` +
        `Customer: ${fullName}\n` +
        `Phone: ${phone}\n` +
        `Target Residence: ${preselectedVilla || 'All 120 Bespoke Villas'}\n\n` +
        `Included Documents:\n` +
        `- Official Phase 1 Price List (12% Early Booking Incentive)\n` +
        `- 3D CAD Blueprint & Engineering Drawings\n` +
        `- Approved 1/500 Masterplan & Individual Freehold Ownership Dossier\n` +
        `- 85/15 Operational Revenue Sharing Policy with 5-Star International Management\n\n` +
        `24/7 VIP Concierge Hotline: 1800 6868 (+84 1800 6868)`
      ], { type: 'text/plain;charset=utf-8' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Grand-Marina-Premier-BangGia-Dot1.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden transition-colors ${
          theme === 'dark' 
            ? 'glass-card-gold text-white' 
            : 'bg-white border-[#D4AF37]/50 text-slate-900 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleReset}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            theme === 'dark'
              ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black'
          }`}
          aria-label="Đóng modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header with 100% Native Flawless Vietnamese Font */}
            <div className="text-left mb-6">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md border inline-flex items-center gap-1.5 ${
                theme === 'dark'
                  ? 'text-amber-300 bg-amber-950/70 border-amber-500/40'
                  : 'text-amber-800 bg-amber-100 border-amber-400'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {t('modal.badge')}
              </span>

              {/* Title with Playfair Display: razor-sharp Vietnamese "Đợt 1", "Nhận", "Bảng Giá" */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-normal mt-3 leading-snug">
                {t('modal.title')}
              </h3>

              <p className={`text-xs font-light mt-1.5 leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {preselectedVilla 
                  ? (lang === 'vi' ? `Đang chọn tài liệu căn: ${preselectedVilla}` : `Selected Villa: ${preselectedVilla}`)
                  : t('modal.subtitle')}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.nameLabel')} <span className="text-amber-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={t('modal.namePlaceholder')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                      theme === 'dark'
                        ? 'bg-[#06121E] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.phoneLabel')} <span className="text-amber-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder={t('modal.phonePlaceholder')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                      theme === 'dark'
                        ? 'bg-[#06121E] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  {t('modal.phoneHelp')}
                </span>
              </div>

              {/* Optional Email */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.emailLabel')}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder={t('modal.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                      theme === 'dark'
                        ? 'bg-[#06121E] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              {/* Checklist Documents */}
              <div className="pt-2">
                <span className={`text-xs font-semibold block mb-2 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t('modal.selectDocs')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                    theme === 'dark' 
                      ? 'bg-[#06121E] border-white/10 hover:border-amber-400/50 text-slate-200' 
                      : 'bg-slate-50 border-slate-200 hover:border-amber-500 text-slate-800'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedDocs.includes('price-list')}
                      onChange={() => toggleDoc('price-list')}
                      className="accent-[#D4AF37] rounded"
                    />
                    <span>{t('modal.doc1')}</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                    theme === 'dark' 
                      ? 'bg-[#06121E] border-white/10 hover:border-amber-400/50 text-slate-200' 
                      : 'bg-slate-50 border-slate-200 hover:border-amber-500 text-slate-800'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedDocs.includes('brochure-hd')}
                      onChange={() => toggleDoc('brochure-hd')}
                      className="accent-[#D4AF37] rounded"
                    />
                    <span>{t('modal.doc2')}</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                    theme === 'dark' 
                      ? 'bg-[#06121E] border-white/10 hover:border-amber-400/50 text-slate-200' 
                      : 'bg-slate-50 border-slate-200 hover:border-amber-500 text-slate-800'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedDocs.includes('legal-1500')}
                      onChange={() => toggleDoc('legal-1500')}
                      className="accent-[#D4AF37] rounded"
                    />
                    <span>{t('modal.doc3')}</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                    theme === 'dark' 
                      ? 'bg-[#06121E] border-white/10 hover:border-amber-400/50 text-slate-200' 
                      : 'bg-slate-50 border-slate-200 hover:border-amber-500 text-slate-800'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedDocs.includes('yield-policy')}
                      onChange={() => toggleDoc('yield-policy')}
                      className="accent-[#D4AF37] rounded"
                    />
                    <span>{t('modal.doc4')}</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#050D15] bg-gradient-to-r from-[#F9E79F] via-[#D4AF37] to-[#B8860B] hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 active:scale-98"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#050D15] border-t-transparent rounded-full animate-spin"></span>
                    <span>{t('modal.loading')}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{t('modal.submitBtn')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold">
                {t('modal.successTitle')}
              </h3>
              <p className={`text-sm font-light max-w-sm mx-auto ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t('modal.successMsg')} Phone: <strong className="text-amber-500">{phone}</strong>.
              </p>
            </div>

            <div className={`p-4 rounded-xl border text-left space-y-2 text-xs ${
              theme === 'dark' ? 'bg-[#06121E] border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between text-slate-400">
                <span>Zalo / SMS Dispatch:</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Delivered
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>VIP Hotline:</span>
                <span className="text-amber-500 font-bold font-mono">1800 6868</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050D15] bg-[#D4AF37] hover:bg-amber-300 transition-colors"
            >
              {t('modal.closeBtn')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
