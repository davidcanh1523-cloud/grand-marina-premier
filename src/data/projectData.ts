export interface VillaModel {
  id: string;
  name: string;
  subTitle: string;
  tag: string;
  type: 'beachfront' | 'marina' | 'president' | 'hillside';
  area: string;
  constructionArea: string;
  bedrooms: number;
  bathrooms: number;
  privatePoolSize: string;
  view: string;
  priceEstimate: string;
  status: 'Đang mở bán' | 'Chỉ còn 2 căn' | 'Đã đặt chỗ 80%';
  image: string;
  gallery: string[];
  features: string[];
  floorplanSvg: string;
}

export const VILLA_LIST: VillaModel[] = [
  {
    id: 'villa-ocean-pearl',
    name: 'The Ocean Pearl Villa',
    subTitle: 'Biệt Thự Trực Diện Biển Độc Bản',
    tag: 'Mặt biển số 1',
    type: 'beachfront',
    area: '485 m²',
    constructionArea: '360 m²',
    bedrooms: 3,
    bathrooms: 4,
    privatePoolSize: '85 m² (Hồ bơi tràn viền muối khoáng)',
    view: '100% Trực diện biển hoàng hôn',
    priceEstimate: 'Từ 38.5 Tỷ VNĐ',
    status: 'Chỉ còn 2 căn',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Lối đi bộ riêng ra bãi cát trắng dài 50m',
      'Hồ bơi vô cực view trực diện chân trời',
      'Phòng khách thông tầng trần cao 6.8m',
      'Full nội thất nhập khẩu từ Milan (Minotti & Poliform)',
      'Hệ thống kính Low-E 3 lớp chống nóng & cản tia UV 99%'
    ],
    floorplanSvg: 'ocean-pearl'
  },
  {
    id: 'villa-royal-marina',
    name: 'The Royal Marina Villa',
    subTitle: 'Dinh Thự Bến Du Thuyền Quốc Tế',
    tag: 'Đặc quyền Du thuyền',
    type: 'marina',
    area: '680 m²',
    constructionArea: '520 m²',
    bedrooms: 4,
    bathrooms: 5,
    privatePoolSize: '120 m² (Hồ bơi thác nước 2 tầng)',
    view: 'Bến du thuyền tư gia & vịnh ngọc',
    priceEstimate: 'Từ 56.8 Tỷ VNĐ',
    status: 'Đang mở bán',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Cầu cảng riêng neo đậu du thuyền cỡ lớn (lên đến 80ft)',
      'Hầm rượu vang nhiệt độ chuẩn châu Âu & Cigar Lounge',
      'Sky bar sân thượng ngắm trọn vẹn vịnh biển về đêm',
      'Gara đỗ xe ngầm chứa 4 siêu xe có trạm sạc điện Porsche',
      'Sân tập golf mini 3D trong nhà'
    ],
    floorplanSvg: 'royal-marina'
  },
  {
    id: 'villa-diamond-president',
    name: 'The Diamond Presidential Palace',
    subTitle: 'Dinh Thự Tổng Thống - Đỉnh Cao Độc Bản',
    tag: 'Giới hạn 3 căn duy nhất',
    type: 'president',
    area: '1,250 m²',
    constructionArea: '920 m²',
    bedrooms: 5,
    bathrooms: 7,
    privatePoolSize: '210 m² (Hồ bơi Olympic view 360 độ)',
    view: 'Toàn cảnh đại dương không góc chết',
    priceEstimate: 'Từ 118 Tỷ VNĐ',
    status: 'Đã đặt chỗ 80%',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Bãi tắm cát trắng riêng tư biệt lập hoàn toàn',
      'Phòng chiếu phim gia đình Dolby Atmos 12 ghế da bò Ý',
      'Khu vực chăm sóc sức khỏe riêng: Sauna, Onsen, Phòng gym',
      'Phòng yến tiệc sang trọng phục vụ tiệc riêng 30 khách',
      'Hệ thống an ninh sinh trắc học và phòng trú ẩn an toàn'
    ],
    floorplanSvg: 'diamond-president'
  },
  {
    id: 'villa-hillside-sanctuary',
    name: 'The Hillside Sanctuary Villa',
    subTitle: 'Biệt Thự Sườn Đồi Ôm Trọn Vịnh Ngọc',
    tag: 'Cao độ 65m ngắm hoàng hôn',
    type: 'hillside',
    area: '540 m²',
    constructionArea: '410 m²',
    bedrooms: 3,
    bathrooms: 4,
    privatePoolSize: '95 m² (Hồ bơi vô cực treo vách đá)',
    view: 'Tầm nhìn từ trên cao bao quát vịnh biển',
    priceEstimate: 'Từ 42.9 Tỷ VNĐ',
    status: 'Đang mở bán',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Kiến trúc giật cấp nương theo địa hình rừng nguyên sinh',
      'Hồ bơi cantilever vươn ra không trung ngắm trọn hoàng hôn',
      'Khu vườn Zen thiền tịnh và góc yoga trên không',
      'Không gian xanh chiếm hơn 65% diện tích khuôn viên',
      'Hệ thống thang máy kính quan sát toàn cảnh thiên nhiên'
    ],
    floorplanSvg: 'hillside-sanctuary'
  }
];

export const AMENITIES_LIST = [
  {
    id: 'amenity-marina',
    title: 'Bến Du Thuyền Quốc Tế Marina Bay',
    description: 'Sức chứa 50+ du thuyền siêu sang trọng, dịch vụ thuyền trưởng, bảo dưỡng và hải trình ngắm hoàng hôn 6 sao.',
    icon: 'Anchor',
    badge: 'Đẳng cấp thượng lưu',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amenity-dining',
    title: 'Nhà Hàng Biển Chuẩn Sao Michelin',
    description: 'Được vận hành bởi các bếp trưởng danh tiếng thế giới, hải sản tươi đánh bắt trong ngày cùng hầm rượu hơn 2.000 chai vang hảo hạng.',
    icon: 'UtensilsCrossed',
    badge: 'Ẩm thực đỉnh cao',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amenity-pool',
    title: 'Bể Bơi Vô Cực Nước Khoáng 3 Tầng',
    description: 'Diện tích mặt nước 3.200 m² nối dài ra đại dương, ứng dụng công nghệ điện phân muối khoáng tự nhiên tốt cho sức khỏe và làn da.',
    icon: 'Waves',
    badge: '3.200 m² mặt nước',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amenity-spa',
    title: 'Swiss Wellness Spa & Onsen Nhật',
    description: 'Liệu trình trẻ hóa tế bào chuẩn Thụy Sĩ kết hợp suối khoáng nóng Onsen tinh khiết, xông hơi đá muối Himalaya.',
    icon: 'Sparkles',
    badge: 'Chăm sóc sức khỏe',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amenity-clubhouse',
    title: 'VIP Cigar & Single Malt Lounge',
    description: 'Không gian gặp gỡ của giới tinh hoa, hội tụ các bộ sưu tập xì gà Cuba quý hiếm và rượu mạch nha đơn cất trăm năm tuổi.',
    icon: 'GlassWater',
    badge: 'Câu lạc bộ thượng lưu',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'amenity-helipad',
    title: 'Sân Bay Trực Thăng & Dịch Vụ Quản Gia 24/7',
    description: 'Hạ cánh trực thăng thẳng tới khu nghỉ dưỡng, phục vụ đưa đón Maybach chuyên biệt và quản gia cá nhân theo chuẩn Les Clefs d\'Or.',
    icon: 'Plane',
    badge: 'Đặc quyền chuyên biệt',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80'
  }
];

export const CORE_FEATURES_DATA = {
  badgeTitle: 'LANDING • BẤT ĐỘNG SẢN & NGHỈ DƯỠNG',
  deliveryTime: '24 - 48 giờ',
  giftBadge: 'Tặng Domain + Server 1 Năm',
  mainHeading: 'Grand Marina Premier – Bất Động Sản Nghỉ Dưỡng & Biệt Thự Biển Hạng Sang',
  subHeading: 'Giới thiệu dự án biệt thự biển cao cấp, sơ đồ mặt bằng 3D tương tác & tải brochure bảng giá',
  tabs: [
    { id: 'demo', label: 'Hình ảnh Demo & Trực quan (3)' },
    { id: 'features', label: 'Nghiệp vụ & Tính năng' },
    { id: 'architecture', label: 'Kiến trúc & Bảo mật' }
  ],
  featuresList: [
    {
      id: 'f1',
      title: 'Sơ đồ căn hộ & tiện ích trực quan, mượt mà trên điện thoại',
      desc: 'Công nghệ mô phỏng mặt bằng 3D tương tác siêu nhẹ, zoom mượt mà không giật lag trên cả màn hình di động 390px lẫn desktop 4K.',
      metric: '60 FPS Motion',
      actionText: 'Trải nghiệm Sơ đồ 3D'
    },
    {
      id: 'f2',
      title: 'Tải tài liệu dự án tự động sau khi nhập số điện thoại',
      desc: 'Hệ thống gửi tự động brochure PDF, bảng giá chi tiết đợt 1 và link xem video thực tế tới Zalo / SMS ngay sau 3 giây xác nhận.',
      metric: 'Tải file tức thì 100%',
      actionText: 'Tải Tài Liệu Ngay'
    },
    {
      id: 'f3',
      title: 'Tích hợp video flycam 4K không làm chậm tốc độ tải trang',
      desc: 'Sử dụng streaming thông minh kết hợp nén WebM/AV1 chuẩn điện ảnh và lazy-loading poster WebP, không gây nghẽn băng thông.',
      metric: 'Tải trang < 1.0 giây',
      actionText: 'Xem Flycam 4K'
    },
    {
      id: 'f4',
      title: 'Điểm Google PageSpeed 99/100, chuẩn SEO Top 1 Google',
      desc: 'Cấu trúc semantic HTML5 tối ưu, Schema JSON-LD RealEstateListing chuẩn quốc tế, nén ảnh thế hệ mới giúp website thống trị Google tìm kiếm.',
      metric: 'PageSpeed 99/100',
      actionText: 'Xem Báo Cáo Tốc Độ'
    }
  ]
};
