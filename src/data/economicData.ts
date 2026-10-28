import { EconomicHighlight } from '../types';

export const ECONOMIC_HIGHLIGHTS: EconomicHighlight[] = [
  {
    id: 'gdp',
    number: 9.01,
    formattedMetric: '9,01%',
    unit: '%',
    title: 'GDP 9 tháng tăng',
    subtext: 'Đạt mức tăng cao nhất trong 15 năm qua',
    badgeText: '9,01%',
    accentColor: '#1d63b8',
    detailStats: [
      { label: 'Tốc độ tăng GDP 9 tháng', value: '9,01%', badge: 'Mức tăng kỷ lục' },
      { label: 'Thời gian so sánh', value: '15 năm qua (2011 - 2026)', badge: 'Đỉnh cao tăng trưởng' }
    ]
  },
  {
    id: 'fdi',
    number: 50.4,
    formattedMetric: '50,4 tỷ USD',
    unit: 'tỷ USD',
    title: 'Vốn FDI đăng ký đạt gần 50,4 tỷ USD',
    subtext: 'Tăng 76,4%; vốn FDI thực hiện ước đạt trên 21 tỷ USD',
    accentColor: '#0284c7',
    detailStats: [
      { label: 'Vốn FDI đăng ký', value: 'Gần 50,4 tỷ USD', badge: '+76,4%' },
      { label: 'Vốn FDI thực hiện', value: 'Ước đạt trên 21 tỷ USD', badge: 'Giải ngân tích cực' }
    ]
  },
  {
    id: 'enterprise',
    number: 224000,
    formattedMetric: 'Gần 224.000',
    unit: 'doanh nghiệp',
    title: 'Gần 224.000 doanh nghiệp gia nhập thị trường',
    subtext: 'Cao hơn mức 172.000 doanh nghiệp rút lui',
    accentColor: '#2563eb',
    detailStats: [
      { label: 'Doanh nghiệp gia nhập & quay lại', value: 'Gần 224.000 doanh nghiệp' },
      { label: 'Doanh nghiệp rút lui khỏi thị trường', value: '172.000 doanh nghiệp' },
      { label: 'Chênh lệch phát triển ròng', value: '+52.000 doanh nghiệp' }
    ]
  },
  {
    id: 'trade',
    number: 888,
    formattedMetric: '888 tỷ USD',
    unit: 'tỷ USD',
    title: 'Tổng kim ngạch xuất nhập khẩu đạt 888 tỷ USD',
    subtext: 'Tăng 30,4% so với cùng kỳ',
    accentColor: '#0369a1',
    detailStats: [
      { label: 'Tổng kim ngạch xuất nhập khẩu', value: '888 tỷ USD', badge: '+30,4%' },
      { label: 'Tăng trưởng so cùng kỳ', value: 'Tăng 30,4%' }
    ]
  },
  {
    id: 'infrastructure',
    number: 395,
    formattedMetric: '395km',
    unit: 'km',
    title: 'Hoàn thành thêm 395km cao tốc',
    subtext: 'Khai thác toàn tuyến Bắc - Nam; khởi công 5 tuyến đường sắt đô thị',
    accentColor: '#1e40af',
    detailStats: [
      { label: 'Chiều dài cao tốc hoàn thành thêm', value: '395 km cao tốc' },
      { label: 'Tuyến đường bộ Bắc - Nam', value: 'Khai thác toàn tuyến' },
      { label: 'Đường sắt đô thị', value: 'Khởi công 5 tuyến' }
    ]
  }
];

export const SOURCE_FOOTER = "Nguồn: Báo cáo kinh tế - xã hội do Thủ tướng Lê Minh Hưng trình bày tại Kỳ họp thứ 2, Quốc hội khóa XVI; Thông tin tại phiên họp Chính phủ thường kỳ tháng 9-2026";
