// Demo only: no backend. Cart and orders live in localStorage so the admin page can show demo orders.
export const BANK = { id: 'VCB', acc: '0123456789', name: 'TEN CHU SHOP' };
export const DEPOSIT = 100000;
// The deposit never exceeds the order total (a 95k tube of lube is paid in full, not 100k).
export const depositFor = (total) => Math.min(DEPOSIT, Math.max(0, total));
export const orderDeposit = (o) => o.deposit ?? depositFor(o.total);
export const CONTACT_HOTLINE = '0942 109 929';
export const CONTACT_ZALO = 'https://zalo.me/0942109929';
export const CONTACT_TIKTOK = 'https://www.tiktok.com/@_strongxxx';
export const CONTACT_INSTAGRAM = 'https://www.instagram.com/zynxx_ori/';
export const CONTACT_ADDRESS = '158/65 Phạm Văn Chiêu, Gò Vấp, HCM';
export const STORE_NAME = 'MoneyKeyboard';

const R = (v, c) => `assets/objects/product-render/specs/stills/keyboard-75-${v}-${c}.webp`;
const P = (n) => `img/${n}.webp`;

export const BRANDS = ['Tất cả', 'Aula', 'Leobog', 'Madlions', 'MonsGeek', 'Akko', 'Xinmeng', 'Weikav', 'Titan Elite', 'Lingbao', 'GravaStar'];

export const PRODUCT = {
  switches: [
    { id: 'graywood', name: 'LEOBOG Graywood V3', kind: 'Linear, tiếng trầm (Thock)', add: 0, sound: { bp: 850, q: 1.2, thump: 120, decay: 0.07 } },
    { id: 'reaper', name: 'LEOBOG Reaper Axis', kind: 'Linear, tiếng đanh giòn (Clack)', add: 50000, sound: { bp: 1500, q: 1.5, thump: 170, decay: 0.05 } },
    { id: 'tactile', name: 'Tactile Holy Panda', kind: 'Có khấc nảy, âm chắc', add: 70000, sound: { bp: 2300, q: 2, thump: 210, decay: 0.04, bump: true } },
    { id: 'silent', name: 'Outemu Silent Peach V3', kind: 'Siêu êm, chống ồn văn phòng', add: 40000, sound: { bp: 450, q: 0.8, thump: 70, decay: 0.02 } },
    { id: 'clicky', name: 'Kailh Box White Clicky', kind: 'Tiếng clicky sắc nét, nảy đanh', add: 60000, sound: { bp: 3200, q: 3.2, thump: 260, decay: 0.03, bump: true } },
    { id: 'magnetic-he', name: 'Hall Effect Magnetic Switch', kind: 'Switch từ tính Rapid Trigger 0.1mm', add: 90000, sound: { bp: 1900, q: 1.8, thump: 150, decay: 0.045 } },
  ],
};

// Cấu trúc phân loại sao chép chính xác từ kietmodphimdao.com + Danh mục Custom Build
export const CAT_TABS = [
  { id: 'all', name: 'Tất cả' },
  { id: 'ban-phim-co', name: 'Bàn Phím Cơ' },
  { id: 'switch', name: 'Switch' },
  { id: 'keycap', name: 'Keycap' },
  { id: 'phu-kien', name: 'Phụ Kiện' },
  { id: 'hang-order', name: 'Hàng Order' },
  { id: 'custom-build', name: 'Custom Build ⭐' },
];

export const SUB_FILTERS = {
  all: [],
  'ban-phim-co': [
    { id: 'all', name: 'Tất cả layout' },
    { id: 'layout-40', name: 'Layout 40%' },
    { id: 'layout-65', name: 'Layout 65%' },
    { id: 'layout-75', name: 'Layout 75%' },
    { id: 'layout-tkl', name: 'Layout TKL – FRL' },
    { id: 'layout-96', name: 'Layout 96%' },
    { id: 'layout-fullsize', name: 'Layout Fullsize' },
    { id: 'numpad', name: 'Numpad' },
    { id: 'phim-he', name: 'Phím HE – Chuyên Game' },
  ],
  switch: [
    { id: 'all', name: 'Tất cả switch' },
    { id: 'switch-linear', name: 'Switch Linear' },
    { id: 'switch-tactile', name: 'Switch Tactile' },
    { id: 'switch-silent', name: 'Switch Silent' },
    { id: 'switch-clicky', name: 'Switch Clicky' },
  ],
  keycap: [
    { id: 'all', name: 'Tất cả profile' },
    { id: 'profile-cherry', name: 'Profile Cherry' },
    { id: 'profile-moa', name: 'Profile MOA' },
    { id: 'profile-xoa', name: 'Profile XOA' },
    { id: 'profile-moc-moe', name: 'Profile MOC – MOE' },
    { id: 'keycap-xuyen-led', name: 'Keycap Xuyên LED' },
    { id: 'keycap-artisan', name: 'Keycap Artisan' },
    { id: 'profile-asa', name: 'Profile ASA' },
    { id: 'keycap-akko', name: 'Keycap Akko' },
    { id: 'profile-oem', name: 'Profile OEM' },
    { id: 'profile-xda', name: 'Profile XDA' },
    { id: 'profile-mao', name: 'Profile MAO' },
    { id: 'profile-mda', name: 'Profile MDA' },
    { id: 'profile-khac', name: 'Profile Khác' },
    { id: 'keycap-piifox', name: 'Keycap Piifox' },
    { id: 'keycap-fbb', name: 'Keycap FBB' },
  ],
  'phu-kien': [
    { id: 'all', name: 'Tất cả phụ kiện' },
    { id: 'deskmat', name: 'Deskmat' },
    { id: 'day-cap-custom', name: 'Dây Cáp Custom' },
    { id: 'chuot-wireless', name: 'Chuột Wireless' },
    { id: 'dau-lube', name: 'Dầu Lube' },
    { id: 'dung-cu-mod-phim', name: 'Dụng Cụ Mod Phím' },
    { id: 'stab', name: 'Stab' },
    { id: 'plate', name: 'Plate' },
    { id: 'switches', name: 'SWITCHES' },
    { id: 'phu-kien-khac', name: 'Phụ Kiện Khác' },
  ],
  'hang-order': [
    { id: 'all', name: 'Tất cả hàng order' },
    { id: 'phim-chuot', name: 'Phím – Chuột' },
    { id: 'keycap-order', name: 'Keycap Order' },
    { id: 'mo-hinh', name: 'Mô Hình' },
  ],
  'custom-build': [
    { id: 'all', name: 'Tất cả tác phẩm build' },
    { id: 'nhom-cnc', name: 'Kit Nhôm Nguyên Khối' },
    { id: 'he-gaming', name: 'Phím HE Rapid Trigger' },
    { id: 'am-thock', name: 'Build Âm Thock Trầm' },
    { id: 'am-clack', name: 'Build Âm Clack Đanh' },
  ],
};

export const slugify = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/gi, 'd')
  .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Sub-categories the admin typed in ("Layout 80%", "Profile KDA"...) live in kb-custom-subs as { cat: [{ id, name }] }
// and are merged into SUB_FILTERS on load, so the san-pham filters and the admin picker both list them.
const readCustomSubs = () => { try { return JSON.parse(localStorage.getItem('kb-custom-subs') || '{}') || {}; } catch { return {}; } };
const subList = (cat) => (SUB_FILTERS[cat] ||= [{ id: 'all', name: 'Tất cả' }]);
if (typeof localStorage !== 'undefined') {
  for (const [cat, subs] of Object.entries(readCustomSubs())) subs.forEach((s) => subList(cat).some((x) => x.id === s.id) || subList(cat).push(s));
}
export function addCustomSub(cat, name) {
  const label = String(name || '').trim();
  const id = slugify(label);
  if (!id) return '';
  const hit = subList(cat).find((s) => s.id === id || s.name.toLowerCase() === label.toLowerCase());
  if (hit) return hit.id; // typing an existing name reuses it instead of making a duplicate
  subList(cat).push({ id, name: label });
  const store = readCustomSubs();
  (store[cat] ||= []).push({ id, name: label });
  localStorage.setItem('kb-custom-subs', JSON.stringify(store));
  return id;
}

// Footage tương tự kietmodphimdao.com (Sound test, bóc hộp, test HE 0.1mm, custom mod)
export const FOOTAGE_ITEMS = [
  {
    id: 'f-1',
    title: 'Sound Test AULA F75 Reaper Switch – Âm Clack giòn tan',
    desc: 'Bản mod tiêu chuẩn: lube switch Krytox 205g0, cân wire stab plate mount, gasket 5 lớp.',
    tag: 'Sound Test ASMR',
    duration: '0:35',
    soundId: 'reaper',
    img: 'img/black-knob-screen.webp',
    stats: '18.4k lượt xem',
    channel: 'TikTok @_strongxxx'
  },
  {
    id: 'f-2',
    title: 'Test Rapid Trigger 0.1mm Phím HE Madlions MAD60 V2',
    desc: 'Test độ trễ phản hồi và khả năng snap tap/DKS trong Valorant và CS2. Cực kỳ nhạy.',
    tag: 'Test Game FPS',
    duration: '0:48',
    soundId: 'magnetic-he',
    img: 'img/red-translucent.webp',
    stats: '34.2k lượt xem',
    channel: 'Instagram @zynxx_ori'
  },
  {
    id: 'f-3',
    title: 'Quy trình Lube Switch Krytox & Cân Stab Holee Mod',
    desc: 'Chi tiết từng công đoạn mod phím thủ công: lube stem, housing, triệt tiêu tiếng tick wire.',
    tag: 'Mod Phím Thủ Công',
    duration: '0:58',
    soundId: 'graywood',
    img: 'img/cathedral-keycaps.webp',
    stats: '15.9k lượt xem',
    channel: 'TikTok @_strongxxx'
  },
  {
    id: 'f-4',
    title: 'Test Âm Switch Outemu Silent Peach V3 – Êm Ru 95%',
    desc: 'Thử nghiệm gõ thực tế trong môi trường phòng ngủ đêm và văn phòng làm việc cần yên tĩnh.',
    tag: 'Silent Switch Test',
    duration: '0:42',
    soundId: 'silent',
    img: 'img/akko-white-rgb.webp',
    stats: '22.7k lượt xem',
    channel: 'TikTok @_strongxxx'
  },
];

export const DEFAULT_CATALOG = [
  // ==========================================
  // 1. BÀN PHÍM CƠ (Theo phân loại của kietmodphimdao - 4 sản phẩm đầu chuẩn 100% Ảnh 2)
  // ==========================================
  {
    id: 'madlions-mad60-v2',
    brand: 'Madlions',
    name: 'Bàn phím HE Madlions MAD60 V2',
    category: 'ban-phim-co',
    subCategory: 'phim-he',
    isHe: true,
    badge: 'SẴN HÀNG',
    inStock: true,
    soundId: 'magnetic-he',
    price: 550000,
    line: 'Layout 60%, Hall Effect Rapid Trigger 0.1mm, 8000Hz, Snap Tap',
    imgs: ['img/mad60-v2.jpg', P('red-translucent')]
  },
  {
    id: 'titan-elite-t87',
    brand: 'Titan Elite',
    name: 'Bàn Phím Cơ Titan Elite T87',
    category: 'ban-phim-co',
    subCategory: 'layout-tkl',
    badge: 'SẴN HÀNG',
    inStock: true,
    soundId: 'graywood',
    price: 750000,
    line: 'T87 công nghệ chơi game, trục Black Warrior, gasket mount, kết nối 3 chế độ',
    imgs: ['img/titan-t87.jpg', P('black-knob-screen')]
  },
  {
    id: 'lingbao-k87',
    brand: 'Lingbao',
    name: 'Bàn Phím Cơ Lingbao K87',
    category: 'ban-phim-co',
    subCategory: 'layout-tkl',
    badge: 'SẴN HÀNG',
    inStock: true,
    soundId: 'reaper',
    price: 700000,
    line: 'K87 tùy chỉnh cấp độ thi đấu 3 chế độ, hotswap, cấu trúc Gasket, pin 8000mAh',
    imgs: ['img/lingbao-k87.jpg', P('cathedral-keycaps')]
  },
  {
    id: 'gravastar-mercury-k1-pro',
    brand: 'GravaStar',
    name: 'Bàn Phím Cơ Gravastar Mercury K1 Pro - Ghost Silver | BH 12 Tháng',
    category: 'ban-phim-co',
    subCategory: 'layout-75',
    badge: 'SẴN HÀNG · BH 12 THÁNG',
    inStock: true,
    soundId: 'reaper',
    price: 3900000,
    line: 'Khung hợp kim nhôm Magie xuyên thấu phong cách viễn tưởng, hot-swap 3/5 pin, RGB',
    imgs: ['img/gravastar-k1.jpg', R('three-quarter', 'black')]
  },
  {
    id: 'aula-f75',
    brand: 'Aula',
    name: 'AULA F75',
    category: 'ban-phim-co',
    subCategory: 'layout-75',
    badge: 'Layout 75% · SẴN HÀNG',
    inStock: true,
    soundId: 'graywood',
    price: 1290000,
    line: '75%, núm xoay kim loại, gasket 5 lớp tiêu âm Poron, hotswap 5-pin',
    colors: [
      { id: 'blue', name: 'Xanh nhạt', hex: '#8fb8de', imgs: [R('three-quarter', 'blue'), R('top', 'blue'), R('detail-knob', 'blue')] },
      { id: 'black', name: 'Đen', hex: '#2b2c30', imgs: [R('three-quarter', 'black'), R('top', 'black'), R('detail-knob', 'black')] },
      { id: 'white', name: 'Trắng ngà', hex: '#e6e3dc', imgs: [R('three-quarter', 'white'), R('top', 'white'), R('detail-knob', 'white')] },
    ],
    specs: [['Layout', '75%, 80 phím + núm xoay'], ['Kết cấu', 'Gasket mount, 5 lớp tiêu âm'], ['Hotswap', '3 pin và 5 pin'], ['Kết nối', 'USB-C, Bluetooth 5.0, 2.4 GHz'], ['Pin', '4.000 mAh'], ['Keycap', 'PBT double-shot, profile Cherry'], ['Đèn', 'RGB từng phím']]
  },
  {
    id: 'aula-hero68-he',
    brand: 'Aula',
    name: 'AULA Hero68 HE',
    category: 'ban-phim-co',
    subCategory: 'layout-65',
    isHe: true,
    badge: 'Layout 65% · Phím HE',
    inStock: true,
    soundId: 'magnetic-he',
    price: 1590000,
    line: '65%, switch từ tính Hall Effect, chỉnh hành trình nhận phím 0.1mm-4.0mm',
    imgs: [P('red-translucent'), P('cathedral-keycaps')]
  },
  {
    id: 'aula-s75-pro',
    brand: 'Aula',
    name: 'AULA S75 Pro Nhôm Anode',
    category: 'ban-phim-co',
    subCategory: 'layout-75',
    badge: 'Layout 75% · Vỏ Nhôm',
    inStock: true,
    soundId: 'graywood',
    price: 1390000,
    line: '75%, vỏ nhôm CNC anode, keycap chủ đề đặc biệt, 3 chế độ kết nối',
    imgs: [P('cathedral-keycaps'), P('black-knob-screen')]
  },
  {
    id: 'aula-win60-he',
    brand: 'Aula',
    name: 'AULA Win60 HE',
    category: 'ban-phim-co',
    subCategory: 'layout-40',
    isHe: true,
    badge: 'Layout 60% Siêu Gọn',
    inStock: true,
    soundId: 'magnetic-he',
    price: 990000,
    line: '60%, phím từ tính siêu nhỏ gọn, mở rộng tối đa góc rê chuột',
    imgs: [R('top', 'blue'), R('three-quarter', 'blue')]
  },
  {
    id: 'aula-f99',
    brand: 'Aula',
    name: 'AULA F99 Gasket',
    category: 'ban-phim-co',
    subCategory: 'layout-96',
    badge: 'Layout 96% · Có Numpad',
    inStock: true,
    soundId: 'reaper',
    price: 1490000,
    line: '96%, đầy đủ phím số cho kế toán nhập liệu, pin khủng 8.000 mAh',
    imgs: [R('three-quarter', 'white'), R('detail-knob', 'white')]
  },
  {
    id: 'aula-f108-pro',
    brand: 'Aula',
    name: 'AULA F108 Pro Fullsize',
    category: 'ban-phim-co',
    subCategory: 'layout-fullsize',
    badge: 'Layout Fullsize 108 Phím',
    inStock: true,
    soundId: 'graywood',
    price: 1590000,
    line: 'Fullsize 108 phím, núm xoay đa năng, kết cấu tiêu âm 5 lớp êm ái',
    imgs: [R('three-quarter', 'blue'), R('detail-knob', 'blue')]
  },
  {
    id: 'leobog-hi75c-pro',
    brand: 'Leobog',
    name: 'LEOBOG Hi75C Pro Màn Hình',
    category: 'ban-phim-co',
    subCategory: 'layout-75',
    badge: 'Màn Hình LCD · Núm Xoay',
    inStock: true,
    soundId: 'reaper',
    price: 1690000,
    line: '75% nhôm đúc, màn hình màu GIF tùy biến, núm vặn volume kim loại',
    imgs: [P('black-knob-screen'), P('cathedral-keycaps')]
  },
  {
    id: 'akko-3084b',
    brand: 'Akko',
    name: 'Akko 3084B Plus RGB TKL',
    category: 'ban-phim-co',
    subCategory: 'layout-tkl',
    badge: 'Layout TKL · LED RGB Viền',
    inStock: true,
    soundId: 'tactile',
    price: 1490000,
    line: 'TKL, Bluetooth 5.0 / 2.4GHz / Type-C, LED RGB rực rỡ underglow',
    imgs: [P('akko-white-rgb')]
  },

  // ==========================================
  // 2. SWITCH BÀN PHÍM (Theo phân loại của kietmodphimdao)
  // ==========================================
  {
    id: 'sw-graywood-v3',
    brand: 'Leobog',
    name: 'Switch LEOBOG Graywood V3 (Pack 35 switch)',
    category: 'switch',
    subCategory: 'switch-linear',
    badge: 'Switch Linear · Thock',
    inStock: true,
    soundId: 'graywood',
    price: 165000,
    line: 'Linear 40g, lube sẵn cực mượt, âm trầm đầm tay chuẩn custom',
    imgs: [P('black-knob-screen')]
  },
  {
    id: 'sw-reaper',
    brand: 'Leobog',
    name: 'Switch LEOBOG Reaper Axis (Pack 35 switch)',
    category: 'switch',
    subCategory: 'switch-linear',
    badge: 'Switch Linear · Clack',
    inStock: true,
    soundId: 'reaper',
    price: 195000,
    line: 'Linear 45g, stem dài POM, âm gõ đanh nảy đầm chắc vui tai',
    imgs: [R('top', 'black')]
  },
  {
    id: 'sw-silent-peach',
    brand: 'Aula',
    name: 'Switch Outemu Silent Peach V3 (Pack 35 switch)',
    category: 'switch',
    subCategory: 'switch-silent',
    badge: 'Switch Silent · Siêu Êm',
    inStock: true,
    soundId: 'silent',
    price: 185000,
    line: 'Triệt tiêu 95% tiếng ồn, bấm êm như nhung, lựa chọn số 1 văn phòng',
    imgs: [P('red-translucent')]
  },
  {
    id: 'sw-holy-panda',
    brand: 'Akko',
    name: 'Switch Tactile Holy Panda (Pack 35 switch)',
    category: 'switch',
    subCategory: 'switch-tactile',
    badge: 'Switch Tactile · Khấc Rõ',
    inStock: true,
    soundId: 'tactile',
    price: 245000,
    line: 'Khấc tactile nảy đậm ở đầu hành trình, lò xo kép 62g đàn hồi cao',
    imgs: [P('cathedral-keycaps')]
  },
  {
    id: 'sw-kailh-box-white',
    brand: 'Akko',
    name: 'Switch Kailh Box White Clicky (Pack 35 switch)',
    category: 'switch',
    subCategory: 'switch-clicky',
    badge: 'Switch Clicky · Nảy Đanh',
    inStock: true,
    soundId: 'clicky',
    price: 220000,
    line: 'Click bar tạo tiếng click đanh giòn rụm, chống bụi chống nước IP56',
    imgs: [P('akko-white-rgb')]
  },

  // ==========================================
  // 3. KEYCAP (Theo phân loại của kietmodphimdao)
  // ==========================================
  {
    id: 'kc-cathedral',
    brand: 'MoneyKeyboard',
    name: 'Keycap Nhà Thờ Đức Bà PBT Dyesub 142 Phím',
    category: 'keycap',
    subCategory: 'profile-cherry',
    badge: 'Profile Cherry · Dyesub 5 mặt',
    inStock: true,
    price: 590000,
    line: 'Profile Cherry tiêu chuẩn, PBT dày 1.5mm không bóng mòn, vân đá đỏ trắng',
    imgs: [P('cathedral-keycaps')]
  },
  {
    id: 'kc-moa-cute',
    brand: 'Akko',
    name: 'Keycap MOA Cinnamoroll Pastel Cute 135 Phím',
    category: 'keycap',
    subCategory: 'profile-moa',
    badge: 'Profile MOA · Bo Tròn',
    inStock: true,
    price: 450000,
    line: 'Profile MOA bo tròn các góc, bề mặt lõm đều êm ái đầu ngón tay',
    imgs: [P('akko-white-rgb')]
  },
  {
    id: 'kc-xoa-ice',
    brand: 'Xinmeng',
    name: 'Keycap XOA Gradient Ice Blue Xuyên LED Hông',
    category: 'keycap',
    subCategory: 'profile-xoa',
    badge: 'Profile XOA · Xuyên LED Hông',
    inStock: true,
    price: 490000,
    line: 'Profile XOA công thái học, ký tự khắc bên hông xuyên LED lung linh',
    imgs: [R('three-quarter', 'blue')]
  },
  {
    id: 'kc-artisan-koi',
    brand: 'MoneyKeyboard',
    name: 'Keycap Artisan Resin Cá Koi & Sen Hồ Tây',
    category: 'keycap',
    subCategory: 'keycap-artisan',
    badge: 'Keycap Artisan Thủ Công',
    inStock: true,
    price: 280000,
    line: 'Đúc thủ công từ resin cao cấp nhiều lớp, vảy cá koi 3D sống động',
    imgs: [P('cathedral-keycaps')]
  },
  {
    id: 'kc-piifox-cyber',
    brand: 'MoneyKeyboard',
    name: 'Keycap Piifox Cyberpunk Trong Suốt Xuyên LED',
    category: 'keycap',
    subCategory: 'keycap-piifox',
    badge: 'Keycap Piifox · Trong Suốt',
    inStock: true,
    price: 650000,
    line: 'Nhựa PC cao cấp chống ố vàng, ký tự in lụa UV sắc nét chuẩn cyberpunk',
    imgs: [P('red-translucent')]
  },

  // ==========================================
  // 4. PHỤ KIỆN (Theo phân loại của kietmodphimdao)
  // ==========================================
  {
    id: 'acc-kanagawa-deskmat',
    brand: 'MoneyKeyboard',
    name: 'Deskmat Sóng Nước Kanagawa 900x400x4mm',
    category: 'phu-kien',
    subCategory: 'deskmat',
    badge: 'Deskmat Cỡ Lớn',
    inStock: true,
    price: 220000,
    line: 'Bề mặt vải Speed mượt mà, đáy cao su tự nhiên chống trượt, bo viền tỉ mỉ',
    imgs: [P('cathedral-keycaps')]
  },
  {
    id: 'acc-coiled-cable',
    brand: 'MoneyKeyboard',
    name: 'Dây Cáp Custom Coiled Cable GX16 Aviation Type-C',
    category: 'phu-kien',
    subCategory: 'day-cap-custom',
    badge: 'Dây Cáp Custom',
    inStock: true,
    price: 290000,
    line: 'Đầu nối Aviation GX16 kim loại mạ vàng, bọc lưới PET 2 lớp giữ form xoắn',
    imgs: [P('black-knob-screen')]
  },
  {
    id: 'aula-sc620',
    brand: 'Aula',
    name: 'Chuột Không Dây AULA SC620 PAW3395',
    category: 'phu-kien',
    subCategory: 'chuot-wireless',
    badge: 'Chuột Wireless 58g',
    inStock: true,
    price: 590000,
    line: 'Chuột gaming không dây 3 mode, cảm biến PAW3395 26.000 DPI siêu nhẹ',
    colors: [
      { id: 'black', name: 'Đen', hex: '#1d1d1f', imgs: [P('aula-sc620')] },
      { id: 'white', name: 'Trắng', hex: '#ecebe8', imgs: [P('aula-sc620')] },
    ]
  },
  {
    id: 'acc-krytox-lube',
    brand: 'MoneyKeyboard',
    name: 'Mỡ Lube Switch Krytox GPL 205g0 (Chiết 5g)',
    category: 'phu-kien',
    subCategory: 'dau-lube',
    badge: 'Dầu Lube Chính Hãng',
    inStock: true,
    price: 95000,
    line: 'Krytox 205g0 tiêu chuẩn mod switch, làm mượt stem và triệt tiêu tiếng ma sát',
    imgs: [P('black-knob-screen')]
  },
  {
    id: 'acc-lube-kit',
    brand: 'MoneyKeyboard',
    name: 'Bộ Dụng Cụ Mod Phím Cơ Chuyên Nghiệp (7 Món)',
    category: 'phu-kien',
    subCategory: 'dung-cu-mod-phim',
    badge: 'Dụng Cụ Mod Phím',
    inStock: true,
    price: 180000,
    line: 'Bao gồm switch opener nhôm CNC 2in1, nhíp gắp stem, 2 cọ lube, kẹp switch',
    imgs: [P('red-translucent')]
  },
  {
    id: 'acc-stab-pcb',
    brand: 'MoneyKeyboard',
    name: 'Bộ Stab PCB Mount Screw-in V2 Mạ Vàng',
    category: 'phu-kien',
    subCategory: 'stab',
    badge: 'Stab PCB Mount',
    inStock: true,
    price: 250000,
    line: 'Stab vặn ốc bắt main, wire thẳng tuyệt đối, triệt tiêu tiếng lọc xọc',
    imgs: [P('black-knob-screen')]
  },

  // ==========================================
  // 5. HÀNG ORDER (Theo phân loại của kietmodphimdao)
  // ==========================================
  {
    id: 'ord-monsgeek-m1v3',
    brand: 'MonsGeek',
    name: '[Order] Kit Bàn Phím Nhôm MonsGeek M1 V3 QMK/VIA',
    category: 'hang-order',
    subCategory: 'phim-chuot',
    badge: 'Hàng Order · Về sau 7-10 ngày',
    inStock: false,
    price: 2190000,
    line: 'Kit phím nhôm nguyên khối anode, mạch xuôi VIA, gasket mount đầm chắc',
    imgs: [R('three-quarter', 'black')]
  },
  {
    id: 'ord-keycap-gmk',
    brand: 'MoneyKeyboard',
    name: '[Order] Bộ Keycap GMK Clone Doubleshot ABS 173 Phím',
    category: 'hang-order',
    subCategory: 'keycap-order',
    badge: 'Keycap Order',
    inStock: false,
    price: 520000,
    line: 'ABS Doubleshot dày 1.5mm, màu sắc tương phản sắc nét, hỗ trợ mọi layout',
    imgs: [P('akko-white-rgb')]
  },

  // ==========================================
  // 6. CUSTOM BUILD (DANH MỤC ĐẶC BIỆT THEO YÊU CẦU CỦA BẠN)
  // KHÔNG NẰM TRONG DANH MỤC STOCK - KHÁCH CẦN LIÊN HỆ TRƯỚC KHI BUILD
  // ==========================================
  {
    id: 'build-monsgeek-m1-darkthock',
    brand: 'MonsGeek',
    name: 'Custom Build: MonsGeek M1 Anode Black "Dark Thock"',
    category: 'custom-build',
    subCategory: 'nhom-cnc',
    isCustomBuild: true,
    badge: 'Tác Phẩm Custom · Đã Bàn Giao',
    inStock: false,
    soundId: 'graywood',
    price: 3450000,
    line: 'Kit M1 V3 nhôm đen, Switch Graywood V3 lube Krytox 205g0 + film, Keycap Cathedral Cherry, Tape mod 3 lớp, Stab holee mod',
    buildSpecs: [
      ['Kit phím', 'MonsGeek M1 V3 Nhôm CNC Anode Black nguyên khối'],
      ['Switch', 'LEOBOG Graywood V3 (Lube tay mỡ Krytox 205g0 + lò xo 105)'],
      ['Keycap', 'PBT Dyesub Nhà Thờ Đức Bà (Cherry profile dày 1.5mm)'],
      ['Mod âm', 'Tape mod 3 lớp masking tape, Foam Poron đáy, PE Sheet switch'],
      ['Stab', 'Screw-in PCB mount cân wire thủ công triệt tiêu tick tuyệt đối'],
      ['Chất âm', 'Trầm đầm Thocky, gõ cực kỳ êm tai và đầm tay']
    ],
    imgs: [P('cathedral-keycaps'), P('black-knob-screen')]
  },
  {
    id: 'build-mad60-fps-he',
    brand: 'Madlions',
    name: 'Custom Build: Madlions MAD60 V2 "Apex Predator"',
    category: 'custom-build',
    subCategory: 'he-gaming',
    isCustomBuild: true,
    badge: 'Tác Phẩm Custom · Đã Bàn Giao',
    inStock: false,
    soundId: 'magnetic-he',
    price: 2150000,
    line: 'Kit MAD60 HE Hall Effect, Switch từ tính lube mượt, Keycap XOA Gradient Ice Blue, Mod foam silicone giảm vang vỏ',
    buildSpecs: [
      ['Kit phím', 'Madlions MAD60 V2 Hall Effect Rapid Trigger 0.1mm'],
      ['Switch', 'Gateron Magnetic Switch (Đã lube tay cực mượt 0.1mm)'],
      ['Keycap', 'XOA Profile Gradient Ice Blue xuyên LED hông'],
      ['Mod', 'Đổ đáy silicone đầm nặng chống rỗng, cân wire stab lube XHT-BDZ'],
      ['Mục đích', 'Chuyên tryhard các tựa game FPS: Valorant, CS2, Apex Legends']
    ],
    imgs: [P('red-translucent'), R('three-quarter', 'blue')]
  },
  {
    id: 'build-aula-f75-pureclack',
    brand: 'Aula',
    name: 'Custom Build: AULA F75 "Pure Clack Vintage"',
    category: 'custom-build',
    subCategory: 'am-clack',
    isCustomBuild: true,
    badge: 'Tác Phẩm Custom · Đã Bàn Giao',
    inStock: false,
    soundId: 'reaper',
    price: 2280000,
    line: 'Kit Aula F75 White, Switch LEOBOG Reaper Axis, Keycap MOA Cinnamoroll, Plate Polycarbonate gõ nảy đanh',
    buildSpecs: [
      ['Kit phím', 'AULA F75 White Pearl núm xoay kim loại'],
      ['Switch', 'LEOBOG Reaper Axis (Stem POM âm clack đanh giòn)'],
      ['Keycap', 'MOA Pastel Cute PBT Sublimation'],
      ['Mod', 'Tháo bớt 1 lớp foam tiêu âm để kích thích âm clack nảy, lube stab'],
      ['Chất âm', 'Âm gõ đanh nảy vui tai, phản hồi lực bấm rõ ràng']
    ],
    imgs: [P('black-knob-screen'), P('akko-white-rgb')]
  },
  {
    id: 'build-hi75-icecube-silent',
    brand: 'Leobog',
    name: 'Custom Build: LEOBOG Hi75C Pro "Midnight Silent"',
    category: 'custom-build',
    subCategory: 'am-thock',
    isCustomBuild: true,
    badge: 'Tác Phẩm Custom · Đã Bàn Giao',
    inStock: false,
    soundId: 'silent',
    price: 2690000,
    line: 'Kit Hi75C màn hình GIF, Switch Outemu Silent Peach V3, Keycap Piifox trong suốt, Triệt tiêu 98% tiếng gõ làm đêm',
    buildSpecs: [
      ['Kit phím', 'LEOBOG Hi75C Pro màn hình màu GIF + núm kim loại'],
      ['Switch', 'Outemu Silent Peach V3 (Lube mỏng Krytox 205g0)'],
      ['Keycap', 'Piifox Cyberpunk trong suốt cao cấp'],
      ['Mod', 'Full foam Poron 5 lớp + lót đệm switch pad IXPE'],
      ['Chất âm', 'Siêu êm, không một tiếng động, cực hợp làm việc đêm']
    ],
    imgs: [P('akko-white-rgb'), P('red-translucent')]
  },
  {
    id: 'build-mercury-cyber',
    brand: 'GravaStar',
    name: 'Custom Build: GravaStar Mercury K1 "Cyber Mecha"',
    category: 'custom-build',
    subCategory: 'nhom-cnc',
    isCustomBuild: true,
    badge: 'Tác Phẩm Custom · Đã Bàn Giao',
    inStock: false,
    soundId: 'reaper',
    price: 4850000,
    line: 'Khung kim loại viễn tưởng, Switch Reaper Axis lube film, Keycap Piifox Cyberpunk, Mod custom LED RGB Underglow',
    buildSpecs: [
      ['Kit phím', 'GravaStar Mercury K1 Pro khung hợp kim Magie'],
      ['Switch', 'LEOBOG Reaper Axis (Lube mỡ Krytox 205g0 + film TX 0.15mm)'],
      ['Keycap', 'Keycap Piifox Cyberpunk PC cao cấp'],
      ['Mod', 'Cân chỉnh stab PCB mount, lube permatex wire, tuning RGB'],
      ['Chất âm', 'Âm clack giòn nảy, vẻ ngoài đậm chất tương lai sci-fi']
    ],
    imgs: [R('three-quarter', 'black'), P('cathedral-keycaps')]
  },
  {
    id: 'build-titan-warrior',
    brand: 'Titan Elite',
    name: 'Custom Build: Titan Elite T87 "Black Warrior Edition"',
    category: 'custom-build',
    subCategory: 'am-clack',
    isCustomBuild: true,
    badge: 'Tác Phẩm Custom · Đã Bàn Giao',
    inStock: false,
    soundId: 'graywood',
    price: 1950000,
    line: 'T87 mạch xuôi, Switch Black Warrior lube mượt, Keycap PBT Cathedral, Mod Tape 3 lớp triệt tiêu hollow',
    buildSpecs: [
      ['Kit phím', 'Titan Elite T87 Black Gasket Mount 3 mode'],
      ['Switch', 'Trục Black Warrior switch (lube stem + housing)'],
      ['Keycap', 'PBT Dyesub Nhà Thờ Đức Bà Cherry profile'],
      ['Mod', 'Tape mod 3 lớp, foam đáy EVA đầm chắc'],
      ['Chất âm', 'Trầm ấm, chắc nịch, tối ưu độ bền gaming thi đấu']
    ],
    imgs: [P('black-knob-screen'), P('red-translucent')]
  }
];

export function getLiveCatalog() {
  let list = DEFAULT_CATALOG;
  if (typeof localStorage !== 'undefined') {
    const raw = localStorage.getItem('kb-catalog');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) list = parsed;
      } catch (e) {}
    }
  }
  // Đồng bộ ảnh và thứ tự 4 bàn phím nổi bật chuẩn 100% Ảnh 2
  const photoMap = {
    'madlions-mad60-v2': 'img/mad60-v2.jpg',
    'titan-elite-t87': 'img/titan-t87.jpg',
    'lingbao-k87': 'img/lingbao-k87.jpg',
    'gravastar-mercury-k1-pro': 'img/gravastar-k1.jpg',
  };
  // the admin stock table is the truth for "in stock"; read it here so every page agrees without a sync step
  let inv = null;
  try { inv = JSON.parse(localStorage.getItem('kb-inventory') || 'null'); } catch (e) {}
  list.forEach(p => {
    // migrate catalogs saved before the real photos existed, but never override an admin's own image choice
    const photo = photoMap[p.id];
    if (photo && !p.adminEdited && p.imgs?.[0] !== photo) p.imgs = [photo, ...(p.imgs || []).slice(1)];
    const row = Array.isArray(inv) && inv.find((r) => r.id === p.id);
    if (!row || row.isCustom) return;
    // colours managed in the admin replace the catalog's list; each keeps its photos (matched by id) and gets its own stock
    if (Array.isArray(row.colors)) {
      p.colors = row.colors.length
        ? row.colors.map((rc) => ({ ...(p.colors?.find((c) => c.id === rc.id) || {}), id: rc.id, name: rc.name, hex: rc.hex, stock: rc.stock }))
        : undefined;
    }
    if (p.category !== 'hang-order') p.inStock = row.colors?.length ? row.colors.some((c) => c.stock > 0) : row.stock > 0;
  });
  return list;
}

// Opening colour stock for the stock table: the F75 example from the spec, otherwise the total split evenly.
const SEED_COLOR_STOCK = { 'aula-f75': { blue: 5, black: 6, white: 0 }, 'aula-sc620': { black: 4, white: 3 } };
export function seedColors(p, total) {
  if (!p.colors?.length) return undefined;
  const per = Math.floor(total / p.colors.length);
  return p.colors.map((c, i) => ({
    id: c.id, name: c.name, hex: c.hex || '#cccccc',
    stock: SEED_COLOR_STOCK[p.id]?.[c.id] ?? per + (i === 0 ? total - per * p.colors.length : 0),
  }));
}
export const colorTotal = (colors) => (colors || []).reduce((s, c) => s + (Number(c.stock) || 0), 0);

const readInventory = () => { try { const v = JSON.parse(localStorage.getItem('kb-inventory') || 'null'); return Array.isArray(v) ? v : null; } catch { return null; } };
// Units left for a product, or for one colour of it. Infinity until the admin page has created the stock table.
export function stockFor(id, colorId) {
  const row = readInventory()?.find((r) => r.id === id);
  if (!row || row.isCustom) return Infinity;
  if (row.colors?.length) {
    const c = row.colors.find((x) => x.id === colorId);
    return c ? c.stock : colorTotal(row.colors);
  }
  return row.stock;
}
// cart/order items carry their colour as colorId, older ones only inside key "productId:colorId:switchId"
const itemRef = (it) => {
  const [kid, kcolor] = String(it.key || '').split(':');
  return { id: it.id || kid, colorId: it.colorId ?? kcolor ?? '' };
};
export const itemStock = (it) => { const r = itemRef(it); return stockFor(r.id, r.colorId); };

// Throws on a full browser storage (base64 images/audio); callers show the error instead of half-saving.
export function saveCatalog(list) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('kb-catalog', JSON.stringify(list));
  }
}

// sign -1 when an order is placed, +1 when it is cancelled. No-op until the admin page has created the stock table.
export function adjustStock(items, sign) {
  const inv = JSON.parse(getStorage('kb-inventory', 'null'));
  if (!Array.isArray(inv)) return;
  items.forEach((it) => {
    const ref = itemRef(it), q = sign * (it.qty || 1);
    const row = inv.find((r) => r.id === ref.id);
    if (!row || row.isCustom) return;
    const color = row.colors?.find((c) => c.id === ref.colorId);
    if (color) { // the colour that was ordered; the product total follows
      color.stock = Math.max(0, color.stock + q);
      row.stock = colorTotal(row.colors);
    } else row.stock = Math.max(0, row.stock + q);
  });
  setStorage('kb-inventory', JSON.stringify(inv));
}

export const stockBadge = (p) => (p.category === 'hang-order' ? 'HÀNG ORDER' : p.inStock === false ? 'TẠM HẾT HÀNG' : 'SẴN HÀNG');
export const canBuy = (p) => !p.isCustomBuild && (p.inStock !== false || p.category === 'hang-order');

export const CATALOG = getLiveCatalog();

// Backwards compatibility
CATALOG.forEach((item) => {
  if (!item.type) item.type = item.category === 'ban-phim-co' ? 'keyboard' : item.category;
});

export const isPhoto = (src) => !!src && (src.startsWith('img/') || src.startsWith('data:image'));
export const firstImg = (p) => p.imgs?.[0] || p.colors?.[0]?.imgs?.[0] || 'img/red-translucent.webp';
export const vnd = (n) => (Number(n) || 0).toLocaleString('vi-VN') + 'đ';
export const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const $ = (s, el = document) => el.querySelector(s);

/* ---------- coupon definitions ---------- */
export const COUPONS = {
  'CHAOBANMOI': { code: 'CHAOBANMOI', name: 'Chào bạn mới', min: 500000, discount: 50000, type: 'fixed' },
  'FREESHIP': { code: 'FREESHIP', name: 'Miễn phí vận chuyển', min: 300000, discount: 30000, type: 'fixed' },
  'KMOD10': { code: 'KMOD10', name: 'Giảm 10% tối đa 150k', min: 1000000, percent: 10, max: 150000, type: 'percent' },
};

const getStorage = (k, def = '[]') => (typeof localStorage !== 'undefined' ? localStorage.getItem(k) || def : def);
const setStorage = (k, v) => (typeof localStorage !== 'undefined' ? localStorage.setItem(k, v) : null);
const rmStorage = (k) => (typeof localStorage !== 'undefined' ? localStorage.removeItem(k) : null);

/* ---------- cart ---------- */
export const cart = {
  get: () => JSON.parse(getStorage('kb-cart', '[]')),
  set(items) { setStorage('kb-cart', JSON.stringify(items)); renderCart(); },
  add(item) {
    const items = cart.get();
    const same = items.find((i) => i.key === item.key);
    same ? (same.qty += item.qty) : items.push(item);
    cart.set(items);
    toast(`Đã thêm "${item.title}" vào giỏ hàng`);
  },
  total: () => cart.get().reduce((s, i) => s + i.price * i.qty, 0),
  getCoupon: () => JSON.parse(getStorage('kb-coupon', 'null')),
  applyCoupon(code) {
    const upper = (code || '').trim().toUpperCase();
    const c = COUPONS[upper];
    if (!c) return { ok: false, msg: 'Mã không hợp lệ. Hãy thử: CHAOBANMOI hoặc FREESHIP' };
    const tot = cart.total();
    if (tot < c.min) return { ok: false, msg: `Mã ${c.code} chỉ áp dụng cho đơn từ ${vnd(c.min)}` };
    let discount = 0;
    if (c.type === 'fixed') discount = c.discount;
    else if (c.type === 'percent') discount = Math.min(c.max, Math.round((tot * c.percent) / 100));
    const applied = { ...c, discount };
    setStorage('kb-coupon', JSON.stringify(applied));
    renderCart();
    return { ok: true, msg: `Đã áp dụng mã ${c.code}! Giảm ${vnd(discount)}`, applied };
  },
  removeCoupon() {
    rmStorage('kb-coupon');
    renderCart();
    toast('Đã xóa mã giảm giá');
  },
  discount() {
    const c = cart.getCoupon();
    if (!c) return 0;
    const tot = cart.total();
    if (tot < c.min) {
      rmStorage('kb-coupon');
      return 0;
    }
    if (c.type === 'fixed') return c.discount;
    if (c.type === 'percent') return Math.min(c.max, Math.round((tot * c.percent) / 100));
    return 0;
  },
  finalTotal() {
    return Math.max(0, cart.total() - cart.discount());
  }
};

function renderCart() {
  const items = cart.get();
  document.querySelectorAll('.cart-btn__n').forEach((n) => {
    const c = items.reduce((s, i) => s + i.qty, 0);
    n.textContent = c || '';
    n.dataset.n = c;
  });
  const body = $('.drawer__body');
  if (!body) return;
  body.innerHTML = items.length
    ? items.map((i, idx) => `
      <div class="line" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 0">
        <div style="flex:1;min-width:0">
          <strong style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(i.title)}</strong>
          <small class="muted">${esc(i.variant || 'Tiêu chuẩn')}</small>
          <div class="cart-qty-ctrl" style="display:inline-flex;align-items:center;gap:6px;margin-top:6px">
            <button type="button" class="btn-cart-qty" data-cart-q="-1" data-idx="${idx}" aria-label="Giảm số lượng" style="width:24px;height:24px;border-radius:6px;border:1px solid #ddd;background:#f5f5f7;cursor:pointer;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1">−</button>
            <span style="font-weight:600;font-size:13px;min-width:18px;text-align:center">${i.qty}</span>
            <button type="button" class="btn-cart-qty" data-cart-q="1" data-idx="${idx}" aria-label="Tăng số lượng" style="width:24px;height:24px;border-radius:6px;border:1px solid #ddd;background:#f5f5f7;cursor:pointer;font-weight:700;display:inline-flex;align-items:center;justify-content:center;line-height:1">+</button>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <span class="price">${vnd(i.price * i.qty)}</span><br>
          <button class="line__rm" data-rm="${idx}" aria-label="Xóa sản phẩm" style="margin-top:6px;font-size:13px">Xóa</button>
        </div>
      </div>`).join('')
    : '<p class="empty" style="text-align:center;padding:40px 0;color:var(--p-muted)">Giỏ hàng đang trống.</p>';

  const coupon = cart.getCoupon();
  const subtotal = cart.total();
  const discount = cart.discount();
  const finalTotal = cart.finalTotal();

  const cBox = $('.cart-coupon-area');
  if (cBox) {
    if (coupon && discount > 0) {
      cBox.innerHTML = `
        <div class="coupon-discount-line">
          <span>Mã ${coupon.code}:</span>
          <span>-${vnd(discount)}</span>
        </div>
        <div class="coupon-active-badge">
          ✅ Đã giảm ${vnd(discount)} (${coupon.name})
          <button type="button" class="coupon-remove-btn" data-rm-coupon>Xóa</button>
        </div>
      `;
    } else {
      cBox.innerHTML = `
        <div class="cart-coupon-form">
          <input type="text" class="cart-coupon-input" id="cart-coupon-code" placeholder="MÃ GIẢM: CHAOBANMOI" aria-label="Mã giảm giá">
          <button type="button" class="btn-coupon-apply" id="btn-apply-coupon">Áp dụng</button>
        </div>
      `;
    }
  }

  $('.drawer__subtotal') && ($('.drawer__subtotal').textContent = vnd(subtotal));
  $('.drawer__total') && ($('.drawer__total').textContent = vnd(finalTotal));
  const payBtn = $('.drawer__foot .btn');
  if (payBtn) {
    payBtn.toggleAttribute('aria-disabled', !items.length);
    payBtn.style.pointerEvents = items.length ? 'auto' : 'none';
    payBtn.style.opacity = items.length ? '1' : '0.5';
  }
}

export function openCart() { document.documentElement.classList.add('cart-open'); $('.drawer')?.focus(); }
function closeCart() { document.documentElement.classList.remove('cart-open'); }

function mountDrawer() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="scrim" data-close></div>
    <aside class="drawer" tabindex="-1" aria-label="Giỏ hàng">
      <div class="drawer__head">
        <h2>Giỏ hàng của bạn</h2>
        <button class="drawer__x" data-close aria-label="Đóng">✕</button>
      </div>
      <div class="drawer__body"></div>
      <div class="drawer__foot">
        <div class="cart-coupon-wrap cart-coupon-area"></div>
        <div class="sum" style="margin-bottom:6px">
          <span class="muted">Tạm tính:</span>
          <span class="drawer__subtotal"></span>
        </div>
        <div class="sum" style="font-weight:700;font-size:17px;border-top:1px solid rgb(0 0 0 / .08);padding-top:10px;margin-bottom:12px">
          <span>Tổng thanh toán:</span>
          <span class="price drawer__total" style="color:var(--p-action)"></span>
        </div>
        <a class="btn btn--primary" href="checkout.html" style="width:100%;justify-content:center">Đặt cọc 100.000đ ngay</a>
      </div>
    </aside>`);

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeCart();
    if (e.target.closest('.cart-btn')) openCart();
    const qBtn = e.target.closest('[data-cart-q]');
    if (qBtn) {
      const idx = +qBtn.dataset.idx;
      const delta = +qBtn.dataset.cartQ;
      const items = cart.get();
      if (items[idx]) {
        items[idx].qty += delta;
        if (items[idx].qty <= 0) {
          items.splice(idx, 1);
        }
        cart.set(items);
      }
      return;
    }
    const rm = e.target.closest('[data-rm]');
    if (rm) { const items = cart.get(); items.splice(+rm.dataset.rm, 1); cart.set(items); }
    if (e.target.closest('[data-rm-coupon]')) cart.removeCoupon();
    if (e.target.closest('#btn-apply-coupon')) {
      const code = $('#cart-coupon-code')?.value;
      const res = cart.applyCoupon(code);
      toast(res.msg);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
    if (e.key === 'Enter' && e.target.id === 'cart-coupon-code') {
      e.preventDefault();
      const res = cart.applyCoupon(e.target.value);
      toast(res.msg);
    }
  });
  renderCart();
}

/* ---------- switch sound synthesizer (Web Audio API) ---------- */
let ctx, playing;
export function playSwitch(profile, onAmp = () => {}, onEnd = () => {}) {
  try {
    ctx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    playing?.stop();
    const an = ctx.createAnalyser(); an.fftSize = 256; an.connect(ctx.destination);
    const now = ctx.currentTime + 0.05;
    const rhythm = [0, 0.14, 0.28, 0.44, 0.56, 0.72, 0.85, 1.05, 1.18, 1.30];
    const srcs = [];
    for (const t of rhythm) srcs.push(...stroke(profile, now + t + Math.random() * 0.02, an, 0.8 + Math.random() * 0.4));
    const buf = new Uint8Array(an.frequencyBinCount);
    let raf;
    const tick = () => {
      an.getByteTimeDomainData(buf);
      let m = 0;
      for (const v of buf) m = Math.max(m, Math.abs(v - 128));
      onAmp(Math.min(1, m / 45));
      raf = requestAnimationFrame(tick);
    };
    tick();
    const end = setTimeout(() => stop(), 1650);
    function stop() {
      cancelAnimationFrame(raf);
      clearTimeout(end);
      srcs.forEach((s) => { try { s.stop(); } catch {} });
      onAmp(0);
      onEnd();
      playing = null;
    }
    playing = { stop };
  } catch (err) {
    console.warn('AudioContext failed:', err);
    onEnd();
  }
}

function stroke(p, t, out, vel) {
  const len = 0.12, buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const n = ctx.createBufferSource(); n.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = p.bp * (0.92 + Math.random() * 0.16); bp.Q.value = p.q;
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9 * vel, t + 0.002); g.gain.exponentialRampToValueAtTime(0.0001, t + p.decay);
  n.connect(bp).connect(g).connect(out); n.start(t); n.stop(t + len);
  const o = ctx.createOscillator(); o.frequency.setValueAtTime(p.thump * 1.6, t); o.frequency.exponentialRampToValueAtTime(p.thump, t + 0.03);
  const og = ctx.createGain(); og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.6 * vel, t + 0.003); og.gain.exponentialRampToValueAtTime(0.0001, t + p.decay * 1.4);
  o.connect(og).connect(out); o.start(t); o.stop(t + 0.15);
  const srcs = [n, o];
  if (p.bump) {
    const n2 = ctx.createBufferSource(); n2.buffer = buf; const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, t - 0.03); g2.gain.exponentialRampToValueAtTime(0.25 * vel, t - 0.028); g2.gain.exponentialRampToValueAtTime(0.0001, t - 0.015);
    n2.connect(bp); n2.connect(g2).connect(out); n2.start(t - 0.03); n2.stop(t); srcs.push(n2);
  }
  return srcs;
}

// Pages call this after every re-render; one delegated listener per root is enough, more would play the sound N times.
const soundRoots = new WeakSet();

function playFallbackSynth(b) {
  const soundId = b.dataset.sound || b.closest('[data-sound-host]')?.dataset.sound;
  const sw = PRODUCT.switches.find((s) => s.id === soundId) || PRODUCT.switches[0];
  const host = b.closest('[data-sound-host]') || b;
  const bars = host.querySelectorAll('.wave i');
  document.querySelectorAll('.is-playing').forEach(el => el !== host && el.classList.remove('is-playing'));
  host.classList.add('is-playing');
  toast(`Đang phát âm switch: ${sw.name} 🎵`);
  playSwitch(sw.sound, (a) => {
    host.style.setProperty('--amp', a.toFixed(2));
    bars.forEach((i, k) => {
      i.style.height = Math.max(12, a * 100 * (0.45 + 0.55 * Math.sin(k * 1.6 + performance.now() / 80))) + '%';
    });
  }, () => host.classList.remove('is-playing'));
}

export function bindSoundButtons(root = document) {
  if (soundRoots.has(root)) return;
  soundRoots.add(root);
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-sound], [data-sound-file]');
    if (!b || b.tagName !== 'BUTTON') return; // a card carrying data-sound-file must not play when its image/link is clicked
    e.stopPropagation();

    // Phát âm thanh thực tế nếu sản phẩm có file audio upload riêng
    const soundFile = b.dataset.soundFile || b.closest('[data-sound-host]')?.dataset.soundFile;
    if (soundFile) {
      try {
        const audio = new Audio(soundFile);
        audio.play().then(() => {
          toast('Đang phát âm thanh gõ thực tế của sản phẩm 🎵');
        }).catch((err) => {
          console.warn('Audio play error, falling back to synth:', err);
          playFallbackSynth(b);
        });
      } catch (err) {
        console.warn('Audio error, falling back to synth:', err);
        playFallbackSynth(b);
      }
      return;
    }

    playFallbackSynth(b);
  });
}

function reveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
}

export function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.textContent = msg; t.classList.add('is-on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('is-on'), 2500);
}

/* ---------- order & warranty tracking modal ---------- */
export function openTrackingModal(phone = '') {
  let modal = $('#modal-tracking');
  if (!modal) {
    mountTrackingModal();
    modal = $('#modal-tracking');
  }
  modal.showModal();
  if (phone) {
    const input = $('#track-phone-input');
    if (input) {
      input.value = phone;
      doTrackOrders(phone);
    }
  }
}

// Demand a full phone number (last 9 digits) or exact order code (KH-XXXXXX)
// to prevent partial queries from exposing other customers' details.
const phoneKey = (s) => String(s || '').replace(/\D/g, '').slice(-9);
function doTrackOrders(rawQuery) {
  const query = (rawQuery || '').trim();
  const container = $('#track-results-container');
  if (!container) return;
  if (!query) {
    container.innerHTML = '<p class="muted" style="text-align:center;padding:24px 0">Vui lòng nhập số điện thoại hoặc mã đơn hàng (VD: KH-123456).</p>';
    return;
  }

  const allOrders = orders.get();
  const qUpper = query.toUpperCase();
  const qPhone = phoneKey(query);

  let matches = [];
  if (qUpper.startsWith('KH-') || allOrders.some(o => o.code && o.code.toUpperCase() === qUpper)) {
    // 1. Match by exact order code
    matches = allOrders.filter(o => o.code && o.code.toUpperCase() === qUpper);
  } else if (/^\d{6}$/.test(query) && allOrders.some(o => o.code && o.code.toUpperCase() === `KH-${query}`)) {
    // 1b. Match by 6-digit code part
    matches = allOrders.filter(o => o.code && o.code.toUpperCase() === `KH-${query}`);
  } else if (qPhone.length >= 9) {
    // 2. Match by full phone number
    matches = allOrders.filter(o => phoneKey(o.phone) === qPhone);
  } else {
    container.innerHTML = '<p class="muted" style="text-align:center;padding:24px 0">Vui lòng nhập đầy đủ số điện thoại đặt hàng (10 số) hoặc mã đơn hàng chính xác (dạng KH-XXXXXX).</p>';
    return;
  }

  if (!matches.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:28px 16px;background:var(--p-surface);border-radius:18px">
        <div style="font-size:36px;margin-bottom:8px">🔍</div>
        <strong style="font-size:15px">Chưa tìm thấy đơn hàng với thông tin: "${esc(query)}"</strong>
        <p class="muted" style="font-size:13px;margin:8px 0 16px">
          Quý khách vui lòng kiểm tra lại mã đơn hàng hoặc số điện thoại đã dùng khi đặt hàng, hoặc liên hệ trực tiếp shop để được hỗ trợ kiểm tra nhanh!
        </p>
        <a class="btn btn--secondary btn--sm" href="${CONTACT_ZALO}" target="_blank" rel="noopener">
          💬 Nhắn Zalo shop kiểm tra ngay
        </a>
      </div>
    `;
    return;
  }

  const stepLabels = ['Chờ cọc', 'Đã cọc', 'Đóng gói', 'Đang giao', 'Hoàn tất'];
  const stepKeys = ['pending', 'paid', 'packing', 'shipping', 'done'];

  container.innerHTML = matches.map((o) => {
    const idx = stepKeys.indexOf(o.status);
    const curIdx = idx >= 0 ? idx : 0;
    const isCancel = o.status === 'cancel';

    const orderDate = new Date(o.at || Date.now());
    const warrantyDate = new Date(orderDate.getTime() + 365 * 24 * 3600 * 1000);
    const isUnderWarranty = Date.now() < warrantyDate.getTime() && o.status !== 'cancel';
    const fmtDate = (d) => d.toLocaleDateString('vi-VN');

    return `
      <div class="tracking-box">
        <div class="track-header">
          <div>
            <div style="font-weight:700;font-size:16px">Mã đơn: ${o.code}</div>
            <small class="muted">Đặt lúc: ${new Date(o.at).toLocaleString('vi-VN')} · Người nhận: ${esc(o.name)}</small>
          </div>
          <span class="st st--${o.status}" style="font-size:12px;padding:3px 10px">
            ${isCancel ? 'Đã hủy' : stepLabels[curIdx] || o.status}
          </span>
        </div>

        ${!isCancel ? `
          <div class="track-steps">
            ${stepLabels.map((lbl, sIdx) => {
              let cls = '';
              if (sIdx < curIdx) cls = 'is-done';
              else if (sIdx === curIdx) cls = 'is-active';
              return `
                <div class="track-step ${cls}">
                  <div class="track-step-dot">${sIdx < curIdx ? '✓' : (sIdx + 1)}</div>
                  <span>${lbl}</span>
                </div>
              `;
            }).join('')}
          </div>
        ` : '<p style="color:#d70015;font-weight:600;margin:10px 0">Đơn hàng này đã được hủy.</p>'}

        <div style="background:#fff;border-radius:12px;padding:14px;margin:12px 0;font-size:13px;border:1px solid rgb(0 0 0 / .06)">
          <div style="margin-bottom:6px"><strong>Sản phẩm:</strong> ${o.items.map((i) => `${esc(i.title)} (${esc(i.variant)}) × ${i.qty}`).join(', ')}</div>
          <div><strong>Tổng giá trị:</strong> ${vnd(o.total)} · <span class="muted">Thu COD: ${vnd(Math.max(0, o.total - orderDeposit(o)))}</span></div>
          <div style="margin-top:4px;color:var(--p-muted)"><strong>Địa chỉ giao:</strong> ${esc(o.address)}</div>
        </div>

        <div class="track-warranty">
          <span style="font-size:22px">🛡️</span>
          <div>
            <strong>${isUnderWarranty ? 'Bảo hành chính hãng: CÒN HẠN' : 'Thời hạn bảo hành'}</strong>
            <div style="font-size:12px;margin-top:2px">
              ${isUnderWarranty ? `Hiệu lực đến <b>${fmtDate(warrantyDate)}</b> (Bảo hành 12 tháng mạch/switch, hỗ trợ cân chỉnh stab miễn phí trọn đời)` : `Hết hạn bảo hành từ ngày ${fmtDate(warrantyDate)}`}
            </div>
          </div>
        </div>

        <div style="display:flex;gap:8px;margin-top:14px">
          <a class="btn btn--secondary btn--sm" href="${CONTACT_ZALO}" target="_blank" rel="noopener" style="flex:1;justify-content:center">
            💬 Nhắn Zalo về đơn ${o.code}
          </a>
          <a class="btn btn--secondary btn--sm" href="tel:${CONTACT_HOTLINE.replace(/\s+/g, '')}" style="justify-content:center">
            📞 Hotline: ${CONTACT_HOTLINE}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function mountTrackingModal() {
  if ($('#modal-tracking')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <dialog class="modal modal--lg" id="modal-tracking">
      <div class="modal__in">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
          <div>
            <h2 style="margin:0;font-size:22px">🔍 Tra cứu Đơn hàng & Bảo hành</h2>
            <p class="muted" style="margin:4px 0 0;font-size:13px">Nhập số điện thoại hoặc mã đơn hàng (KH-XXXXXX) để xem tình trạng vận chuyển và hạn bảo hành.</p>
          </div>
          <button type="button" class="btn btn--secondary btn--sm" data-close-dialog aria-label="Đóng">✕ Đóng</button>
        </div>

        <form id="track-form" style="display:flex;gap:10px;margin-bottom:12px">
          <input type="text" id="track-phone-input" placeholder="Nhập SĐT hoặc Mã đơn (VD: KH-123456 hoặc 0912345678)" style="flex:1;height:46px;padding:0 16px;border-radius:12px;border:1.5px solid color-mix(in oklab, var(--p-ink) 14%, transparent);font:600 15px var(--font-text);outline:none" required>
          <button type="submit" class="btn btn--primary" style="height:46px;padding:0 20px">Tra cứu ngay</button>
        </form>

        <div style="font-size:12px;color:var(--p-muted);margin-bottom:16px">
          💡 Gợi ý thử nghiệm:
          <button type="button" class="track-sample-btn link" data-phone="0912345678" style="cursor:pointer;background:none;border:0;padding:0;color:var(--p-action)">0912345678 (Minh Anh)</button> ·
          <button type="button" class="track-sample-btn link" data-phone="KH-883921" style="cursor:pointer;background:none;border:0;padding:0;color:var(--p-action)">Mã KH-883921</button>
        </div>

        <div id="track-results-container"></div>
      </div>
    </dialog>
  `);

  $('#track-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    doTrackOrders($('#track-phone-input')?.value);
  });

  document.addEventListener('click', (e) => {
    const sample = e.target.closest('.track-sample-btn');
    if (sample) {
      const p = sample.dataset.phone;
      if ($('#track-phone-input')) $('#track-phone-input').value = p;
      doTrackOrders(p);
    }
    if (e.target.closest('[data-open-tracking]')) {
      openTrackingModal();
    }
  });
}

/* ---------- floating contact widget (strictly bottom right corner) ---------- */
function mountSpeedDial() {
  if ($('#kmod-contact-widget')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="kmod-floating-contact" id="kmod-contact-widget">
      <!-- Nút Tra cứu đơn -->
      <button type="button" class="kmod-contact-btn kmod-contact-btn--track" data-open-tracking title="Tra cứu đơn hàng & bảo hành" aria-label="Tra cứu đơn hàng">
        <span>🔍</span>
        <span class="kmod-btn-tooltip">Tra cứu đơn hàng & bảo hành</span>
      </button>

      <!-- Nút Hotline -->
      <a href="tel:${CONTACT_HOTLINE.replace(/\s+/g, '')}" class="kmod-contact-btn kmod-contact-btn--phone" title="Gọi Hotline: ${CONTACT_HOTLINE}" aria-label="Gọi Hotline">
        <span>📞</span>
        <span class="kmod-btn-tooltip">Hotline: ${CONTACT_HOTLINE}</span>
      </a>

      <!-- Nút Zalo (Chính) -->
      <a href="${CONTACT_ZALO}" target="_blank" rel="noopener" class="kmod-contact-btn kmod-contact-btn--zalo" title="Chat Zalo tư vấn phím" aria-label="Chat Zalo">
        <span class="kmod-btn-pulse"></span>
        <span style="font-size:13px;font-weight:900">Zalo</span>
        <span class="kmod-btn-tooltip">Chat Zalo tư vấn ngay</span>
      </a>
    </div>
  `);
}

// Universal dialog closer (backdrop click and data-close-dialog)
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIALOG') {
      const rect = e.target.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        e.target.close();
      }
    }
    const closeBtn = e.target.closest('[data-close-dialog]');
    if (closeBtn) {
      closeBtn.closest('dialog')?.close();
    }
  });
}

export function initMegaMenu() {
  if (typeof document === 'undefined') return;
  const dropdownItems = document.querySelectorAll('.menu-item.has-dropdown');
  dropdownItems.forEach((item) => {
    let timer = null;
    const link = item.querySelector('.menu-link');

    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      dropdownItems.forEach(other => { if (other !== item) other.classList.remove('is-open'); });
      item.classList.add('is-open');
    });

    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        item.classList.remove('is-open');
      }, 180);
    });

    if (link) {
      link.addEventListener('click', (e) => {
        // touch screens have no hover: the first tap opens the panel instead of leaving the page (iPad landscape is > 1024px)
        if (window.innerWidth <= 1024 || matchMedia('(hover: none)').matches || e.target.classList.contains('arrow-down')) {
          e.preventDefault();
          const isOpen = item.classList.contains('is-open');
          dropdownItems.forEach(other => other.classList.remove('is-open'));
          if (!isOpen) item.classList.add('is-open');
        }
      });
    }
  });

  // the ☰ button opens the product mega menu (all categories)
  const burger = document.querySelector('.nav__hamburger-kmpd');
  burger?.setAttribute('aria-expanded', 'false');
  const menu = document.querySelector('.main-menu');
  const sheet = (open) => { menu?.classList.toggle('is-sheet', open); burger?.setAttribute('aria-expanded', String(open)); };
  burger?.addEventListener('click', (e) => {
    e.stopPropagation();
    // phones/tablets: the button sits at the bottom (thumb reach) and opens the whole menu as a bottom sheet
    if (matchMedia('(max-width: 1024px)').matches) return sheet(!menu.classList.contains('is-sheet'));
    const first = dropdownItems[0];
    if (!first) return;
    const open = !first.classList.contains('is-open');
    dropdownItems.forEach((other) => other.classList.remove('is-open'));
    first.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-item.has-dropdown')) {
      dropdownItems.forEach(item => item.classList.remove('is-open'));
      burger?.setAttribute('aria-expanded', 'false');
    }
    if (menu?.classList.contains('is-sheet') && !e.target.closest('.menu-list')) sheet(false); // tap on the dimmed backdrop
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu?.classList.contains('is-sheet')) sheet(false); });

  // a menu link to an empty listing is a dead end: hide it until the admin adds a product there
  const live = getLiveCatalog();
  document.querySelectorAll('.main-menu a[href*="sub="], .brands-pill-list a[href*="brand="]').forEach((a) => {
    const q = new URL(a.href).searchParams, cat = q.get('cat'), sub = q.get('sub'), brand = q.get('brand')?.toLowerCase();
    const has = live.some((p) => (!cat || p.category === cat) && (!sub || p.subCategory === sub) && (!brand || p.brand.toLowerCase() === brand));
    (a.parentElement.tagName === 'LI' ? a.parentElement : a).hidden = !has; // brand pills sit inside the menu's own <li>

  });
}

/* ---------- header search (shared by every storefront page) ---------- */
function initSearch() {
  const input = $('#top-search');
  if (!input) return;
  let box = $('#search-dropdown');
  if (!box) {
    input.insertAdjacentHTML('afterend', `
      <div class="search-dropdown" id="search-dropdown">
        <div class="search-dropdown__header">
          <span id="search-results-count">Kết quả tìm kiếm</span>
          <button type="button" id="search-clear-btn" style="cursor:pointer;color:var(--p-action);background:none;border:0;font:inherit">Đóng ✕</button>
        </div>
        <div id="search-results-list"></div>
      </div>`);
    box = $('#search-dropdown');
  }
  const list = $('#search-results-list'), count = $('#search-results-count');
  const run = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return box.classList.remove('is-open');
    const liveCatalog = getLiveCatalog();
    const matches = liveCatalog.filter((p) => [p.name, p.brand, p.line, p.subCategory].some((v) => v && v.toLowerCase().includes(q))).slice(0, 8);
    count.textContent = matches.length ? `Tìm thấy ${matches.length} sản phẩm` : 'Không có kết quả';
    list.innerHTML = matches.length
      ? matches.map((p) => `
        <a class="search-item" href="${p.isCustomBuild ? 'custom-build.html' : `product.html?id=${encodeURIComponent(p.id)}`}">
          <img src="${firstImg(p)}" alt="${esc(p.name)}" loading="lazy">
          <div class="search-item__info">
            <div class="search-item__name">${esc(p.name)}</div>
            <div class="search-item__meta">${esc(p.brand)} · ${esc(p.category)}</div>
          </div>
          <div class="search-item__price">${vnd(p.price)}</div>
        </a>`).join('')
      : `<p style="padding:16px 12px;margin:0;font-size:13px;color:var(--p-muted)">Không tìm thấy sản phẩm khớp với "${esc(input.value)}".</p>`;
    box.classList.add('is-open');
  };
  input.addEventListener('input', run);
  input.addEventListener('focus', run);
  document.addEventListener('click', (e) => {
    if (e.target.closest('#search-clear-btn')) { input.value = ''; box.classList.remove('is-open'); }
    else if (!e.target.closest('.nav__search')) box.classList.remove('is-open');
  });
}

export const orders = {
  get: () => JSON.parse(getStorage('kb-orders', '[]')),
  save: (list) => setStorage('kb-orders', JSON.stringify(list)),
};

if (typeof document !== 'undefined') {
  if (!document.body.classList.contains('admin')) {
    mountDrawer();
    mountSpeedDial();
    mountTrackingModal();
    initMegaMenu();
    initSearch();
    // pages without the account dialog: the account button offers order tracking instead of doing nothing
    document.getElementById('account-btn')?.addEventListener('click', () => {
      if (!document.getElementById('account-modal')) openTrackingModal();
    });
  }
  reveal();
}
