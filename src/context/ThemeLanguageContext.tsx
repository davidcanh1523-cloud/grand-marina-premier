import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';
export type Language = 'vi' | 'en';

interface ThemeLanguageContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Top Banner
    'banner.category': 'LANDING • BẤT ĐỘNG SẢN & NGHỈ DƯỠNG',
    'banner.time': '24 - 48 giờ',
    'banner.gift': 'Tặng Domain + Server 1 Năm',
    'banner.speed': 'PageSpeed 99/100 • Chuẩn SEO Top 1',
    'banner.hotline': 'Hotline 24/7: 1800 6868',
    'banner.vipStatus': 'Vận hành 5 sao quốc tế • Nhận bàn giao quý IV/2026',

    // Nav
    'nav.brand': 'Grand Marina',
    'nav.subBrand': 'Premier Residences',
    'nav.overview': 'Tổng Quan',
    'nav.features': 'Tính Năng Dự Án',
    'nav.flycam': 'Flycam 4K',
    'nav.floorplan': 'Mặt Bằng 3D',
    'nav.villas': 'Bộ Sưu Tập',
    'nav.amenities': 'Đặc Quyền 6*',
    'nav.calculator': 'Dòng Tiền ROI',
    'nav.cta': 'Nhận Bảng Giá Đợt 1',

    // Hero
    'hero.badge': 'DỰ ÁN NGHỈ DƯỠNG BIỂN HẠNG SANG 2026',
    'hero.titleLine1': 'Grand Marina Premier',
    'hero.titleLine2': 'Bất Động Sản Nghỉ Dưỡng & Biệt Thự Biển Hạng Sang',
    'hero.subtitle': 'Giới thiệu dự án biệt thự biển cao cấp, sơ đồ mặt bằng 3D tương tác & tải brochure bảng giá đợt 1 trực tiếp từ Chủ Đầu Tư.',
    'hero.ctaBrochure': 'Tải Brochure & Bảng Giá Đợt 1',
    'hero.cta3D': 'Sơ Đồ Mặt Bằng 3D',
    'hero.ctaFlycam': 'Video Flycam 4K',
    'hero.stat1': '120 Căn',
    'hero.stat1Label': 'Biệt thự biển độc bản',
    'hero.stat2': '100%',
    'hero.stat2Label': 'View trực diện đại dương',
    'hero.stat3': '2.5 Km',
    'hero.stat3Label': 'Bờ biển cát trắng riêng tư',
    'hero.stat4': 'Sổ Đỏ',
    'hero.stat4Label': 'Sở hữu lâu dài từng căn',

    // Core Features Tabs (Image 1 replica)
    'features.heading': 'Grand Marina Premier – Bất Động Sản Nghỉ Dưỡng & Biệt Thự Biển Hạng Sang',
    'features.subheading': 'Giới thiệu dự án biệt thự biển cao cấp, sơ đồ mặt bằng 3D tương tác & tải brochure bảng giá',
    'features.tab1': 'Hình ảnh Demo & Trực quan (3)',
    'features.tab2': 'Nghiệp vụ & Tính năng',
    'features.tab3': 'Kiến trúc & Bảo mật',
    'features.coreTitle': 'Quy trình & Tính năng cốt lõi đã hoàn thiện:',
    'features.card1Title': 'Sơ đồ căn hộ & tiện ích trực quan, mượt mà trên điện thoại',
    'features.card1Desc': 'Trực quan hóa sơ đồ mặt bằng chi tiết từng căn, view hướng biển 3D, bóc tách công năng phòng và định vị tiện ích nội khu với chuyển động mượt mà 60 FPS trên mobile.',
    'features.card1Action': 'Trải nghiệm Sơ đồ 3D ngay',
    'features.card2Title': 'Tải tài liệu dự án tự động sau khi nhập số điện thoại',
    'features.card2Desc': 'Hệ thống tự động kích hoạt tải xuống file Brochure HD & Bảng giá gốc đợt 1 ngay trên trình duyệt, đồng thời gửi SMS/Zalo tức thì sau 3 giây xác nhận.',
    'features.card2Action': 'Tải Tài Liệu Tự Động Ngay',
    'features.card3Title': 'Tích hợp video flycam 4K không làm chậm tốc độ tải trang',
    'features.card3Desc': 'Công nghệ streaming lazy-load kết hợp thumbnail WebP siêu nhẹ, chỉ tải video chất lượng 4K khi người dùng tương tác, duy trì độ phản hồi trang tức thì.',
    'features.card3Action': 'Xem Flycam 4K Độ Nét Cao',
    'features.card4Title': 'Điểm Google PageSpeed 99/100, chuẩn SEO Top 1 Google',
    'features.card4Desc': 'Đạt điểm số tối đa trên Google Lighthouse (Performance 99, SEO 100, Best Practices 100). Cấu trúc semantic HTML5 tối ưu, Schema JSON-LD RealEstate chuẩn quốc tế.',
    'features.card4Action': 'Xem Báo Cáo Kiểm Định Tốc Độ',

    // Flycam
    'flycam.badge': 'CÔNG NGHỆ TỐI ƯU STREAMING',
    'flycam.title': 'Video Flycam 4K Toàn Cảnh Dự Án',
    'flycam.subtitle': 'Tích hợp công nghệ nén thế hệ mới kết hợp CDN phân tán, mang lại trải nghiệm flycam 4K siêu sắc nét mà không làm chậm tốc độ tải trang.',
    'flycam.speed': 'Tốc độ tải: 0.2s',

    // 3D Floorplan
    'floorplan.badge': 'TÍNH NĂNG ĐỘC QUYỀN',
    'floorplan.title': 'Sơ Đồ Mặt Bằng & 3D Tương Tác',
    'floorplan.subtitle': 'Trực quan hóa chi tiết từng căn hộ, công năng sinh hoạt và hướng view thực tế. Mượt mà trên điện thoại và máy tính bảng.',
    'floorplan.tab3D': 'Mặt Bằng 3D',
    'floorplan.tabExterior': 'Ngoại Thất',
    'floorplan.tabInterior': 'Nội Thất',
    'floorplan.landArea': 'Diện tích đất:',
    'floorplan.builtArea': 'Diện tích XD:',
    'floorplan.bedrooms': 'Số phòng ngủ:',
    'floorplan.pool': 'Hồ bơi riêng:',
    'floorplan.highlights': 'Điểm nhấn kiến trúc:',
    'floorplan.priceEstimate': 'Giá dự kiến đợt 1:',
    'floorplan.cta': 'Tải Bản Vẽ Mặt Bằng & Báo Giá Căn Này',

    // Villas
    'villas.badge': 'BỘ SƯU TẬP 120 CĂN ĐỘC BẢN',
    'villas.title': 'Tuyệt Tác Dinh Thự Nghỉ Dưỡng',
    'villas.subtitle': 'Mỗi căn biệt thự là một tác phẩm kiến trúc độc bản tôn vinh vị thế chủ nhân, 100% sở hữu hồ bơi vô cực riêng và tầm nhìn trực diện đại dương.',
    'villas.filterAll': 'Tất Cả (4 Dòng)',
    'villas.filterBeach': 'Beachfront (Mặt Biển)',
    'villas.filterMarina': 'Marina (Du Thuyền)',
    'villas.filterPresident': 'Presidential Palace',
    'villas.filterHill': 'Hillside (Sườn Đồi)',
    'villas.cta': 'Tải Bảng Giá Căn Này',

    // Amenities
    'amenities.badge': 'HỆ SINH THÁI 6 SAO QUỐC TẾ',
    'amenities.title': 'Đặc Quyền Thượng Lưu Khép Kín',
    'amenities.subtitle': 'Hội tụ những tiêu chuẩn khắt khe nhất thế giới về tiện ích nghỉ dưỡng xa xỉ, chỉ dành riêng cho 120 chủ nhân tinh hoa.',
    'amenities.yachtCalloutTitle': 'Trải Nghiệm Thượng Lưu Cùng Du Thuyền Riêng',
    'amenities.yachtCalloutDesc': 'Đăng ký chuyến hải trình thực tế tham quan dự án bằng du thuyền 5 sao miễn phí dành cho khách hàng VIP.',
    'amenities.yachtCalloutCta': 'Đăng Ký Tham Quan Du Thuyền',

    // Calculator
    'calc.badge': 'BÀI TOÁN DÒNG TIỀN BẢO CHỨNG',
    'calc.title': 'Mô Phỏng Lợi Nhuận Đầu Tư',
    'calc.subtitle': 'Chính sách chia sẻ doanh thu 85/15 từ đơn vị quản lý khách sạn quốc tế 5 sao cùng tiềm năng tăng giá vượt bậc của quỹ đất biển sở hữu lâu dài.',
    'calc.villaValue': 'Giá trị biệt thự biển:',
    'calc.occupancy': 'Tỷ lệ lấp đầy phòng trung bình năm:',
    'calc.dailyRate': 'Giá thuê bình quân 1 đêm:',
    'calc.resultTitle': 'Lợi Nhuận Ước Tính Cho Chủ Nhân:',
    'calc.perYear': 'Tỷ VNĐ / Năm',
    'calc.perMonth': 'Mỗi tháng nhận về xấp xỉ:',
    'calc.grossRev': 'Tổng doanh thu khai thác phòng:',
    'calc.revShare': 'Tỷ lệ chia sẻ doanh thu thực tế:',
    'calc.roi': 'Tỷ suất sinh lời ROI dự kiến:',
    'calc.cta': 'Nhận File Excel Dòng Tiền 10 Năm',

    // Brochure Modal (Fixing broken font from user's screenshot)
    'modal.badge': 'TẢI TỰ ĐỘNG SAU 3 GIÂY',
    'modal.title': 'Nhận Bảng Giá Đợt 1 & Brochure HD',
    'modal.subtitle': 'Hệ thống tự động kích hoạt tải xuống máy và gửi bản nét qua Zalo.',
    'modal.nameLabel': 'Họ và tên của Quý khách',
    'modal.namePlaceholder': 'Ví dụ: Nguyễn Văn An',
    'modal.phoneLabel': 'Số điện thoại nhận tài liệu tự động',
    'modal.phonePlaceholder': 'Ví dụ: 0912 345 678',
    'modal.phoneHelp': 'Bảo mật 100% • Tự động gửi link tải qua Zalo / SMS',
    'modal.emailLabel': 'Email (Để nhận thêm file thiết kế CAD nếu cần)',
    'modal.emailPlaceholder': 'nguyenvanan@gmail.com (không bắt buộc)',
    'modal.selectDocs': 'Chọn các tài liệu muốn tải:',
    'modal.doc1': 'Bảng giá gốc đợt 1',
    'modal.doc2': 'Brochure kiến trúc 3D',
    'modal.doc3': 'Hồ sơ pháp lý 1/500',
    'modal.doc4': 'Chính sách cam kết 85/15',
    'modal.submitBtn': 'TẢI TÀI LIỆU TỰ ĐỘNG NGAY',
    'modal.loading': 'Đang khởi tạo tài liệu tự động...',
    'modal.successTitle': 'Tải Xuống Thành Công!',
    'modal.successMsg': 'Tệp tài liệu dự án đã được tự động lưu về thiết bị của Quý khách.',
    'modal.closeBtn': 'Hoàn Tất & Quay Lại Trang Chủ',

    // Footer
    'footer.brandDesc': 'Quần thể biệt thự nghỉ dưỡng biển 6 sao quốc tế, nơi đại dương giao hòa cùng nghệ thuật kiến trúc đỉnh cao.',
    'footer.showrooms': 'Địa Điểm & Showroom',
    'footer.hotline': 'Hotline Hỗ Trợ 24/7',
    'footer.documents': 'Tài Liệu Dự Án',
    'footer.downloadDocs': 'Tải Bộ Tài Liệu Ngay',
    'footer.copyright': '© 2026 Grand Marina Premier Residences. Bảo lưu mọi quyền.',
    'footer.scrollTop': 'Lên đầu trang',
    'footer.callNow': 'Gọi 1800 6868',
    'footer.chatZalo': 'Chat Zalo',
    'footer.priceListMobile': 'Bảng Giá Đợt 1'
  },
  en: {
    // Top Banner
    'banner.category': 'LANDING • ULTRA-LUXURY COASTAL RESORT',
    'banner.time': '24 - 48 Hours',
    'banner.gift': 'Complimentary Domain + 1 Year Cloud Server',
    'banner.speed': 'PageSpeed 99/100 • SEO Top 1 Optimized',
    'banner.hotline': '24/7 Concierge: +84 1800 6868',
    'banner.vipStatus': '5-Star International Management • Handover Q4/2026',

    // Nav
    'nav.brand': 'Grand Marina',
    'nav.subBrand': 'Premier Residences',
    'nav.overview': 'Overview',
    'nav.features': 'Key Features',
    'nav.flycam': 'Flycam 4K',
    'nav.floorplan': '3D Blueprint',
    'nav.villas': 'Collection',
    'nav.amenities': '6* Amenities',
    'nav.calculator': 'ROI Model',
    'nav.cta': 'Phase 1 Pricing',

    // Hero
    'hero.badge': '2026 PREMIER LUXURY RESORT COLLECTION',
    'hero.titleLine1': 'Grand Marina Premier',
    'hero.titleLine2': 'Ultra-Luxury Coastal Estates & Beachfront Villas',
    'hero.subtitle': 'Introducing bespoke coastal villas, interactive 3D floorplans, and instant Phase 1 brochure and price list download direct from Developer.',
    'hero.ctaBrochure': 'Download Brochure & Price List',
    'hero.cta3D': 'Interactive 3D Blueprint',
    'hero.ctaFlycam': '4K Flycam Video',
    'hero.stat1': '120 Villas',
    'hero.stat1Label': 'Bespoke Coastal Estates',
    'hero.stat2': '100%',
    'hero.stat2Label': 'Direct Oceanfront Views',
    'hero.stat3': '2.5 Km',
    'hero.stat3Label': 'Private White Sand Coastline',
    'hero.stat4': 'Freehold',
    'hero.stat4Label': 'Individual Ownership Title',

    // Core Features Tabs
    'features.heading': 'Grand Marina Premier – Luxury Coastal Real Estate & Beachfront Villas',
    'features.subheading': 'Bespoke beachfront villas, interactive 3D floorplans & automated brochure price list download',
    'features.tab1': 'Demo Imagery & Visuals (3)',
    'features.tab2': 'Business Logic & Features',
    'features.tab3': 'Architecture & Security',
    'features.coreTitle': 'Completed Core Workflows & Capabilities:',
    'features.card1Title': 'Intuitive apartment & amenity blueprint, ultra-smooth on mobile',
    'features.card1Desc': 'Real-time interactive 3D floorplan inspection, 3D ocean views, room-by-room architectural layout, and amenity positioning with smooth 60 FPS motion.',
    'features.card1Action': 'Explore 3D Blueprint Now',
    'features.card2Title': 'Automated project document download upon entering phone number',
    'features.card2Desc': 'Instantly triggers browser PDF download of Phase 1 price list & HD brochure, with automated SMS/Zalo dispatch within 3 seconds of verification.',
    'features.card2Action': 'Instant Document Download',
    'features.card3Title': 'Integrated 4K flycam video without compromising page speed',
    'features.card3Desc': 'Smart lazy-load streaming with lightweight WebP posters, streaming 4K video on interaction while maintaining instant sub-second response times.',
    'features.card3Action': 'Watch 4K Flycam Footage',
    'features.card4Title': 'Google PageSpeed 99/100, Top 1 Google SEO Architecture',
    'features.card4Desc': 'Flawless Lighthouse audit (Performance 99, SEO 100, Best Practices 100). Semantic HTML5, Schema JSON-LD RealEstate standard for global search dominance.',
    'features.card4Action': 'View Speed Audit Report',

    // Flycam
    'flycam.badge': 'ADVANCED STREAMING ARCHITECTURE',
    'flycam.title': '4K Cinematic Drone Showcase',
    'flycam.subtitle': 'Next-generation video compression and distributed CDN deliver ultra-crisp 4K aerial footage without slowing down initial page load.',
    'flycam.speed': 'Load latency: 0.2s',

    // 3D Floorplan
    'floorplan.badge': 'EXCLUSIVE CAPABILITY',
    'floorplan.title': 'Interactive 3D Floorplan Explorer',
    'floorplan.subtitle': 'Explore detailed architectural layouts, living functionality, and real panoramic orientations. Smooth on both smartphones and desktop displays.',
    'floorplan.tab3D': '3D Blueprint',
    'floorplan.tabExterior': 'Exterior',
    'floorplan.tabInterior': 'Interior',
    'floorplan.landArea': 'Land Area:',
    'floorplan.builtArea': 'Built Area:',
    'floorplan.bedrooms': 'Bedrooms:',
    'floorplan.pool': 'Private Pool:',
    'floorplan.highlights': 'Architectural Highlights:',
    'floorplan.priceEstimate': 'Phase 1 Est. Price:',
    'floorplan.cta': 'Download Blueprint & Pricing For This Villa',

    // Villas
    'villas.badge': '120 BESPOKE SANCTUARIES',
    'villas.title': 'Masterpiece Coastal Residences',
    'villas.subtitle': 'Each villa is an architectural masterpiece honoring owner prestige, 100% equipped with private infinity pools and uninterrupted horizon vistas.',
    'villas.filterAll': 'All Residences (4 Types)',
    'villas.filterBeach': 'Beachfront',
    'villas.filterMarina': 'Marina Haven',
    'villas.filterPresident': 'Presidential Palace',
    'villas.filterHill': 'Hillside Sanctuary',
    'villas.cta': 'Download Pricing For This Villa',

    // Amenities
    'amenities.badge': '6-STAR BESPOKE ECOSYSTEM',
    'amenities.title': 'Exclusive High-Society Privileges',
    'amenities.subtitle': 'Curating the world’s most exacting luxury hospitality standards, reserved strictly for 120 distinguished owners.',
    'amenities.yachtCalloutTitle': 'Private Superyacht Coastal Expedition',
    'amenities.yachtCalloutDesc': 'Register for a complimentary private 5-star yacht tour to inspect the project coast in person, dedicated to VIP clients.',
    'amenities.yachtCalloutCta': 'Book Private Yacht Tour',

    // Calculator
    'calc.badge': 'CERTIFIED CASH-FLOW MODEL',
    'calc.title': 'Investment Yield Simulator',
    'calc.subtitle': 'Sustainable 85/15 revenue sharing with an international 5-star operator combined with capital appreciation of rare freehold beachfront land.',
    'calc.villaValue': 'Villa Asset Value:',
    'calc.occupancy': 'Average Annual Occupancy Rate:',
    'calc.dailyRate': 'Average Daily Rental Rate:',
    'calc.resultTitle': 'Estimated Annual Net Return to Owner:',
    'calc.perYear': 'Billion VND / Year',
    'calc.perMonth': 'Approximate monthly income:',
    'calc.grossRev': 'Gross annual rental revenue:',
    'calc.revShare': 'Operational revenue sharing:',
    'calc.roi': 'Projected annual ROI:',
    'calc.cta': 'Download 10-Year Excel Cash Flow Model',

    // Brochure Modal
    'modal.badge': 'INSTANT DISPATCH IN 3 SECONDS',
    'modal.title': 'Receive Phase 1 Pricing & HD Brochure',
    'modal.subtitle': 'Automated download to your device with instant copy sent to your phone via Zalo / SMS.',
    'modal.nameLabel': 'Full Name',
    'modal.namePlaceholder': 'e.g., Alexander Tran',
    'modal.phoneLabel': 'Phone Number to Receive Document',
    'modal.phonePlaceholder': 'e.g., +84 912 345 678',
    'modal.phoneHelp': '100% Confidential • Instant download link delivered via SMS / Zalo',
    'modal.emailLabel': 'Email Address (For optional CAD blueprints)',
    'modal.emailPlaceholder': 'name@example.com (optional)',
    'modal.selectDocs': 'Select documents to receive:',
    'modal.doc1': 'Phase 1 official price list',
    'modal.doc2': '3D architectural brochure',
    'modal.doc3': '1/500 Masterplan legal dossier',
    'modal.doc4': '85/15 Revenue sharing policy',
    'modal.submitBtn': 'DOWNLOAD DOCUMENTS AUTOMATICALLY',
    'modal.loading': 'Generating secure documents...',
    'modal.successTitle': 'Download Completed Successfully!',
    'modal.successMsg': 'Official project files have been downloaded to your device.',
    'modal.closeBtn': 'Close & Return To Homepage',

    // Footer
    'footer.brandDesc': 'An international 6-star coastal resort community where the open ocean meets architectural mastery.',
    'footer.showrooms': 'Galleries & Showrooms',
    'footer.hotline': '24/7 VIP Concierge Hotline',
    'footer.documents': 'Project Dossier',
    'footer.downloadDocs': 'Download Full Dossier Now',
    'footer.copyright': '© 2026 Grand Marina Premier Residences. All rights reserved.',
    'footer.scrollTop': 'Back to top',
    'footer.callNow': 'Call Concierge',
    'footer.chatZalo': 'Chat Zalo',
    'footer.priceListMobile': 'Phase 1 Pricing'
  }
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme') as Theme | null;
      if (urlTheme === 'light' || urlTheme === 'dark') return urlTheme;
      const savedTheme = localStorage.getItem('gm_theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    }
    return 'dark';
  });

  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language | null;
      if (urlLang === 'vi' || urlLang === 'en') return urlLang;
      const savedLang = localStorage.getItem('gm_lang') as Language | null;
      if (savedLang === 'vi' || savedLang === 'en') return savedLang;
    }
    return 'vi';
  });

  // Synchronize <html> class and localStorage whenever theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('gm_theme', theme);
  }, [theme]);

  // Synchronize localStorage when lang changes
  useEffect(() => {
    localStorage.setItem('gm_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['vi']?.[key] || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  }
  return context;
};
