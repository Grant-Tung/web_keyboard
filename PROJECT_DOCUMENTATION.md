# MONEYKEYBOARD - TÀI LIỆU TOÀN DIỆN VỀ KIẾN TRÚC & HƯỚNG DẪN PHÁT TRIỂN DỰ ÁN
> **Dành cho Lập trình viên & AI tiếp quản phát triển, bảo trì và mở rộng mã nguồn**  
> *Phiên bản tài liệu: 2.0 (Cập nhật toàn diện kiến trúc, phân loại con & mobile responsive)*  
> *Thương hiệu chính thức: **MoneyKeyboard***  
> *Địa chỉ showroom: 158/65 Phạm Văn Chiêu, Phường 9, Gò Vấp, TP. Hồ Chí Minh*  
> *Hotline / Zalo hỗ trợ: 0942 109 929 (https://zalo.me/0942109929)*  
> *Kênh truyền thông: TikTok [@_strongxxx](https://www.tiktok.com/@_strongxxx) | Instagram [@zynxx_ori](https://www.instagram.com/zynxx_ori/)*

---

## 1. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)

### 1.1. Giới thiệu
**MoneyKeyboard** là nền tảng Web thương mại điện tử chuyên biệt dành cho thị trường **Bàn phím cơ chính hãng, Switch, Keycap, Phụ kiện Mod phím chuyên nghiệp và Dịch vụ Custom Build theo yêu cầu**.

### 1.2. Nguồn cảm hứng & Phong cách thiết kế (Design Benchmark)
* **Cấu trúc chức năng:** Lấy cảm hứng từ chuẩn UI/UX của các website phím cơ hàng đầu như `kietmodphimdao.com` (Kiệt Mod Phím Dạo - Mechkey Studio) với Mega Menu 5 cột, hệ thống dãy kéo ngang carousel 5 danh mục, và bộ phát âm thanh Sound Test trực quan.
* **Phong cách chủ đạo:** **Clean Apple Light Aesthetic**
  * Nền sáng sạch sẽ kiểu Apple (`--p-bg: #ffffff`, `--p-surface: #f5f5f7`).
  * Văn bản tối tương phản cao (`--p-ink: #1d1d1f`, `--p-muted: #6d6d71`).
  * Màu hành động điểm nhấn (`--p-action: #0071e3` - Apple Blue).
  * Thẻ sản phẩm nền trắng bo góc tinh tế (`border-radius: 20px`), khung ảnh sản phẩm tương phản tối (`#0b0b0d`) làm nổi bật đèn LED và keycap.
  * **Zero Wasted Space:** Loại bỏ toàn bộ các khối hero text tiếp thị rườm rà; ngay khi mở trang là khách hàng tiếp cận được ngay video review thực tế và danh sách sản phẩm.
* **Mục tiêu công nghệ:**
  * Xây dựng bằng **Pure Vanilla HTML5 / Modern CSS3 / JavaScript ES Modules thuần**.
  * **Không dùng framework nặng:** Tuyệt đối không cài React, Vue, Angular, jQuery hay Tailwind CSS.
  * **Zero Build Step:** Chạy trực tiếp trên trình duyệt, tốc độ tải trang cực nhanh (<50ms), dễ bảo trì và dễ mở rộng.

---

## 2. HƯỚNG DẪN KHỞI CHẠY & KIỂM TRA (QUICK START)

### 2.1. Yêu cầu môi trường
* Node.js phiên bản 18+ trở lên (khuyên dùng Node.js 20 hoặc 22/24 LTS).
* Trình duyệt web hiện đại hỗ trợ ES Modules và Web Audio API (Chrome, Edge, Safari, Firefox).

### 2.2. Khởi động Local Server
Mở terminal tại thư mục gốc dự án (`d:\web_keyboard`):
```bash
npm run dev
# hoặc
node server.js
```
> *Lưu ý về server:* File `server.js` tự động phát hiện cổng bận. Nếu cổng `3000` đang được dùng, server sẽ tự nhảy sang `3001`, `3002`,... và in link truy cập rõ ràng ra console.

### 2.3. Sơ đồ các trang chính
* **Trang chủ (`demo/index.html`):** Mega Menu 5 cột, Video Footage Reels, 5 dãy sản phẩm kéo ngang (Bàn phím cơ, Switch, Keycap, Phụ kiện, Custom Build).
* **Trang Danh mục sản phẩm (`demo/san-pham.html`):** Bộ lọc 2 tầng (Faceted Filter Hub), lọc theo hãng, thanh sắp xếp giá/tên, phân loại theo URL (`?cat=...&sub=...`).
* **Trang Custom Build (`demo/custom-build.html`):** Danh sách tác phẩm build hoàn thiện, bảng báo giá tạm tính (Configurator 4 bước), nút copy cấu hình gửi shop qua Zalo.
* **Trang Thương hiệu (`demo/thuong-hieu.html`):** Tổng hợp sản phẩm theo từng hãng danh tiếng (Aula, Madlions, MonsGeek, Leobog, Akko, Xinmeng, Weikav, GravaStar, Titan Elite).
* **Trang Chi tiết sản phẩm (`demo/product.html`):** Chọn màu sắc, chọn switch, nghe thử âm gõ switch, chọn số lượng, thêm vào giỏ hàng.
* **Trang Thanh toán (`demo/checkout.html`):** Form đặt hàng, áp dụng mã giảm giá (`CHAOBANMOI`, `FREESHIP`), tự tính tiền cọc 100k, tạo mã đơn `KH-XXXXXX` và hiển thị mã QR thanh toán.
* **Trang Quản trị Admin (`demo/admin.html`):** Quản lý kho hàng, quản lý đơn hàng, đổi trạng thái đơn, thêm/sửa/xóa sản phẩm với **bộ chọn phân loại con động** và upload trực tiếp file ảnh / âm thanh từ máy tính.
* **Các trang thông tin:** `demo/gioi-thieu.html`, `demo/hdsd.html`, `demo/bao-hanh.html`, `demo/lien-he.html`.

---

## 3. CẤU TRÚC THƯ MỤC & FILE TRỌNG YẾU

```
d:\web_keyboard\
├── package.json               # Scripts khởi chạy ("dev": "node server.js")
├── server.js                  # Local Static Web Server Node.js thuần (port fallback tự động)
├── index.html                 # Redirect root về demo/
├── PROJECT_DOCUMENTATION.md   # Tài liệu kiến trúc toàn diện (File này)
└── demo\
    ├── assets\                # Thư viện dùng chung (system.css, motion, stills)
    │   ├── system.css         # CSS token hệ thống (Lưu ý: đã được override các lỗi 100vh)
    │   ├── motion\motion.js   # Script hiệu ứng chuyển động
    │   └── ...
    ├── img\                   # Ảnh chụp thực tế sản phẩm và banner Spotlight
    │   ├── mad60-v2.jpg       # Ảnh Madlions MAD60 V2 HE
    │   ├── titan-t87.jpg      # Ảnh Titan Elite T87
    │   ├── lingbao-k87.jpg    # Ảnh Lingbao K87
    │   ├── gravastar-k1.jpg   # Ảnh Gravastar Mercury K1 Pro
    │   ├── gravastar-k98-banner.jpg # Banner Spotlight K98 ở cột 5 Mega Menu
    │   └── ...
    ├── app.css                # Toàn bộ CSS phong cách Clean Apple Light, Responsive & Grid
    ├── app.js                 # Core Store, Audio Engine, Cart, Mega Menu, Search, Orders
    ├── index.html             # Trang chủ
    ├── san-pham.html          # Trang danh mục & bộ lọc
    ├── custom-build.html      # Trang Custom Build
    ├── thuong-hieu.html       # Trang Thương hiệu
    ├── product.html           # Trang chi tiết sản phẩm
    ├── checkout.html          # Trang đặt hàng & thanh toán
    ├── admin.html             # Trang quản trị kho & đơn hàng
    ├── gioi-thieu.html        # Trang Giới thiệu
    ├── hdsd.html              # Hướng dẫn sử dụng
    ├── bao-hanh.html          # Chính sách bảo hành
    └── lien-he.html           # Liên hệ & Showroom
```

---

## 4. HỆ THỐNG PHÂN LOẠI CON CHI TIẾT (`SUB_FILTERS`)

Dữ liệu phân loại 2 cấp được chuẩn hóa trong `SUB_FILTERS` (tại [`demo/app.js`](file:///d:/web_keyboard/demo/app.js)) và được đồng bộ xuyên suốt từ Mega Menu, Trang Danh mục đến Form Thêm/Sửa Sản phẩm trong Admin:

```javascript
export const SUB_FILTERS = {
  // 1. BÀN PHÍM CƠ (Phân loại theo Layout & Tính năng)
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

  // 2. SWITCH (Phân loại theo cơ chế & chất âm)
  'switch': [
    { id: 'all', name: 'Tất cả switch' },
    { id: 'switch-linear', name: 'Switch Linear' },
    { id: 'switch-tactile', name: 'Switch Tactile' },
    { id: 'switch-silent', name: 'Switch Silent' },
    { id: 'switch-clicky', name: 'Switch Clicky' },
  ],

  // 3. KEYCAP (Phân loại theo Profile & Kiểu thiết kế)
  'keycap': [
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

  // 4. PHỤ KIỆN (Phân loại theo nhóm phụ kiện)
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

  // 5. HÀNG ORDER
  'hang-order': [
    { id: 'all', name: 'Tất cả hàng order' },
    { id: 'phim-chuot', name: 'Phím – Chuột' },
    { id: 'keycap-order', name: 'Keycap Order' },
    { id: 'mo-hinh', name: 'Mô Hình' },
  ],

  // 6. CUSTOM BUILD (Phân loại theo dạng build)
  'custom-build': [
    { id: 'all', name: 'Tất cả tác phẩm build' },
    { id: 'nhom-cnc', name: 'Kit Nhôm Nguyên Khối' },
    { id: 'he-gaming', name: 'Phím HE Rapid Trigger' },
    { id: 'am-thock', name: 'Build Âm Thock Trầm' },
    { id: 'am-clack', name: 'Build Âm Clack Đanh' },
  ]
};
```

### Cơ chế hoạt động trong Admin (`demo/admin.html`):
* Trong form thêm/sửa sản phẩm `#form-product`, ô chọn danh mục chính `#p-category` lắng nghe sự kiện `onchange`.
* Khi người dùng đổi danh mục (ví dụ từ *Bàn phím cơ* sang *Switch*), hàm `updateSubcatOptions(cat, val)` tự động đổi nhãn thành `Phân loại switch (Linear, Tactile, Silent...) *` và đổ các option tương ứng vào `#p-subcategory`.
* Dữ liệu phân loại con được lưu vào cả `item.subCategory` trong `kb-inventory` và `catProd.subCategory` trong `kb-catalog`.
* Cột danh mục trong bảng kho hàng hiển thị rõ: `Hãng · Danh mục · Phân loại con` (VD: `Aula · Bàn phím cơ · Layout 75%`).

### Phân loại con tự tạo (Admin gõ thêm)
* Cuối danh sách `#p-subcategory` luôn có lựa chọn **"➕ Nhập phân loại mới..."** (giá trị `__new`). Chọn nó sẽ hiện ô `#p-subcat-new` để gõ tên bất kỳ (VD: `Layout 80%`, `Switch Dual-Stage`, `Profile KDA`).
* Khi lưu, `addCustomSub(category, name)` trong `app.js` tạo id bằng `slugify()` (`Layout 80%` → `layout-80`), lưu vào localStorage `kb-custom-subs` dạng `{ "ban-phim-co": [{ id, name }] }` và thêm ngay vào `SUB_FILTERS`. Gõ lại một tên đã có thì dùng lại phân loại cũ, không tạo trùng.
* Khi tải trang, `app.js` gộp `kb-custom-subs` vào `SUB_FILTERS`, nên phân loại mới tự xuất hiện trong ô chọn của admin và trong bộ lọc cấp 2 của `san-pham.html` (`?cat=ban-phim-co&sub=layout-80`).
* Menu mega (HTML tĩnh trong 9 trang) **không** tự thêm link cho phân loại mới; muốn có link trong menu thì thêm tay.

---

## 5. MÔ HÌNH DỮ LIỆU & LƯU TRỮ (LOCALSTORAGE DATA SCHEMA)

Hệ thống hoạt động offline-first hoàn chỉnh thông qua `localStorage`:

| Khóa | Kiểu dữ liệu | Ý nghĩa |
| :--- | :--- | :--- |
| `kb-catalog` | `Array<Product>` | Danh mục sản phẩm (sản phẩm stock & custom build) |
| `kb-inventory` | `Array<InventoryItem>` | Danh sách quản lý kho hàng của Admin (nguồn sự thật về số lượng tồn) |
| `kb-orders` | `Array<Order>` | Danh sách đơn đặt hàng của khách hàng |
| `kb-cart` | `Array<CartItem>` | Giỏ hàng hiện tại |
| `kb-coupon` | `Object` | Mã giảm giá đang áp dụng (`CHAOBANMOI`, `FREESHIP`, `KMOD10`) |
| `kb-custom-subs` | `Object` | Phân loại con admin tự gõ thêm: `{ category: [{ id, name }] }` |

### 5.1. Schema Sản phẩm (`Product`)
```javascript
{
  id: "aula-f75",                  // ID duy nhất (slug)
  brand: "Aula",                   // Thương hiệu
  name: "Bàn phím cơ AULA F75 Gasket Mount",
  category: "ban-phim-co",         // 'ban-phim-co' | 'switch' | 'keycap' | 'phu-kien' | 'hang-order' | 'custom-build'
  subCategory: "layout-75",        // Phân loại con (khớp với SUB_FILTERS)
  type: "ban-phim-co",
  badge: "BÁN CHẠY NHẤT",
  inStock: true,                   // Đồng bộ tự động từ số lượng tồn kho của admin
  price: 890000,                   // Giá bán (VNĐ)
  line: "Layout 75%, núm xoay kim loại, mạch xuôi, 3 chế độ kết nối",
  imgs: ["assets/.../keyboard-75.webp"], // Mảng URL ảnh hoặc DataURL Base64
  soundId: "graywood",             // ID âm thanh fallback cho Web Audio Synth
  audioData: "data:audio/mp3;base64,...", // File âm thanh upload thực tế (nếu có)
  isCustomBuild: false,            // true nếu là tác phẩm Custom Build
  buildSpecs: null,                // Mảng [k, v] thông số linh kiện nếu là Custom Build
  colors: [                        // Mẫu mã / màu (không bắt buộc). stock được getLiveCatalog() điền từ kb-inventory
    { id: "blue", name: "Xanh nhạt", hex: "#8fb8de", imgs: ["..."], stock: 5 }
  ],
  specs: [["Layout", "75%"], ["Kết nối", "Type-C / 2.4G / Bluetooth"]]
}
```

### 5.1b. Schema dòng kho (`InventoryItem`) và Đơn (`Order.items`)
```javascript
// kb-inventory
{
  id: "aula-f75", name, brand, category, subCategory, price, img, soundId, line,
  isCustom: false,
  stock: 11,                       // = tổng các màu khi có colors (luôn tự tính lại, không nhập tay)
  colors: [                        // undefined = sản phẩm không quản lý theo màu (dùng stock chung)
    { id: "blue",  name: "Xanh nhạt", hex: "#8fb8de", stock: 5 },
    { id: "black", name: "Đen",       hex: "#2b2c30", stock: 6 },
    { id: "white", name: "Trắng ngà", hex: "#e6e3dc", stock: 0 }
  ]
}
// kb-cart và kb-orders[].items: mỗi dòng mang theo màu đã chọn
{ key: "aula-f75:blue:graywood", id: "aula-f75", colorId: "blue", title, variant: "Màu Xanh nhạt · LEOBOG Graywood V3", price, qty }
```
* **Switch không có tồn kho riêng** (không có ma trận Màu × Switch). Switch chỉ là thuộc tính mô tả / sound test; bàn phím có 2 loại switch khác nhau thì tạo thành 2 sản phẩm riêng.

### 5.2. Đồng bộ Tồn kho & Nguồn Sự Thật (Single Source of Truth)
* Bảng `kb-inventory` trong Admin là **nguồn sự thật duy nhất** về số lượng tồn kho.
* Hàm `getLiveCatalog()` trong `demo/app.js` luôn tự động đọc bảng `kb-inventory` để tính toán trạng thái `inStock`:
  * Nếu `stock === 0`: Huy hiệu tự đổi thành `TẠM HẾT HÀNG`, nút mua hàng tự động khóa (`canBuy(p) === false`).
  * Nếu `stock > 0`: Huy hiệu hiển thị `SẴN HÀNG`.
  * Hàng order (`hang-order`): Luôn hiển thị `HÀNG ORDER`.
* Khi khách đặt hàng thành công (`checkout.html`), hàm `adjustStock(items, -1)` tự động trừ kho. Khi admin hủy đơn, hàm `adjustStock(items, +1)` hoàn trả lại tồn kho.

### 5.3. Tồn kho theo từng màu
* **Admin – form Thêm/Sửa (`#modal-product`):** khu vực "Mẫu mã / Màu sắc" với nút **+ Thêm màu / mẫu**; mỗi dòng gồm ô chọn màu (hex), tên màu, tồn kho riêng và nút ✕ xóa. Có màu thì ô `#p-stock` khóa lại và hiển thị tổng (tự cộng). Không có màu thì dùng một số tồn chung như cũ. Màu giữ `id` khi đổi tên, nên ảnh và tồn kho gắn theo màu không bị mất.
* **Admin – bảng kho:** sản phẩm có màu hiển thị từng màu kèm nút +/− riêng (`Xanh nhạt [5] · Đen [6] · Trắng ngà [0] ➔ Tổng: 11`), màu hết hàng tô đỏ và có huy hiệu `⚠️ Hết màu: …`. KPI "Sắp hết hàng" tính cả sản phẩm có một màu bằng 0. Hàm `setStock(item, colorId, fn)` cập nhật một màu rồi tính lại tổng.
* **`getLiveCatalog()`:** dòng kho có `colors` thì thay danh sách màu của sản phẩm (giữ `imgs` theo `id`), gắn `stock` cho từng màu; `inStock = có ít nhất một màu còn hàng`.
* **`product.html`:** mở trang ở màu còn hàng đầu tiên (hoặc `?color=`). Bấm màu hiển thị `Còn N sản phẩm` hoặc `Màu này tạm hết hàng`; màu hết bị gạch chéo và nút **Thêm vào giỏ** (cả thanh mua dính) bị khóa. Số lượng tối đa = min(5, tồn màu đó). Item giỏ lưu `id` + `colorId`.
* **`checkout.html`:** trước khi tạo đơn, cộng dồn số lượng theo `sản phẩm + màu` (các dòng cùng màu khác switch dùng chung tồn) và so với `itemStock()`; thiếu hàng thì hiện lỗi đỏ, không tạo đơn. Đơn lưu `colorId` cho từng item.
* **`adjustStock(items, ±1)`:** trừ/hoàn đúng màu (`colorId`, hoặc phần màu trong `key` của đơn cũ) rồi tính lại tổng; item không có màu thì trừ vào tồn chung.
* **Dữ liệu cũ:** bảng kho đã lưu trước khi có tính năng này được tự chia tồn cho các màu một lần (`seedColors()`; AULA F75 mẫu: Xanh 5 · Đen 6 · Trắng 0). Bấm "Xóa dữ liệu demo" để về dữ liệu mẫu chuẩn.

---

## 6. NHỮNG LỖI LỚN ĐÃ ĐƯỢC KHẮC PHỤC TRIỆT ĐỂ (QUAN TRỌNG)

Khi tiếp quản dự án, **tuyệt đối không để xảy ra các lỗi sau**:

### 6.1. Lỗi Cắt Nửa Dưới Thẻ Custom Build (Height 100vh Clipping)
* **Nguyên nhân gốc:** Template cũ trong `assets/system.css` (dòng 218-223) ép cứng `main > :is(section, .section) { height: 100vh; }` và `.wrap { height: 100%; display: flex; flex-direction: column; }`. Khi kết hợp với `.kmpd-track-wrap { overflow: hidden; }`, trên màn hình laptop/điện thoại, vùng chứa chỉ cao ~450px khiến thẻ Custom Build (cao ~610px do có khung Specs, nút nghe âm thanh, giá tham khảo, nút đặt build) **bị cắt đứt ngang chân**.
* **Giải pháp đã sửa trong `demo/app.css`:**
  ```css
  main > :is(section, .section),
  main > section,
  .kmpd-carousel-section,
  .footage-section,
  .cb-configurator-section,
  .section-xl {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
  }
  main > :is(section, .section) > :is(.wrap, .container),
  main > section > .wrap,
  .kmpd-carousel-section > .wrap {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    display: block !important;
  }
  .kmpd-track-wrap {
    position: relative;
    overflow: visible !important;
    width: 100%;
  }
  ```

### 6.2. Loại Bỏ Khối Hero Cồng Kềnh (Zero Wasted Space Homepage)
* Đã gỡ bỏ hoàn toàn thẻ `<section class="hero--kb">` khỏi `demo/index.html` (tiêu đề khổng lồ *"Chất riêng trên từng phím"*, văn bản chiếm chỗ và ảnh lớn).
* Giảm `padding-top` phần nội dung chính xuống `36px` (và `20px` trên mobile). Khách hàng mở web là nhìn thấy ngay các video review chân thực và dãy sản phẩm nổi bật mà không cần cuộn chuột.

### 6.3. Sửa Lỗi Giao Diện Trên Điện Thoại & Tablet (Mobile Responsive)
1. **Thanh Header:**
   * File `system.css` cũ có rule ẩn `.nav__actions` trên màn hình `< 1023px`, làm mất nút Giỏ hàng và Tra cứu trên tablet/mobile. Đã sửa trong `app.css` với `.nav__actions { display: flex !important; }`.
   * Trên màn hình `≤ 540px` (iPhone 375px/390px), tự động ẩn chữ `.action-btn__label` và chuyển các nút thành icon tròn 38px chuẩn Apple, không bị vỡ hàng.
2. **Thanh Lọc Sản Phẩm (Filter Hubs):**
   * Các nút lọc `.tier-1`, `.tier-2`, `.brand-pills`, `.brand-showcase-bar`, `.cb-filter-bar` trên màn hình `≤ 640px` chuyển từ dạng xếp chồng 5 tầng thành **thanh vuốt trượt ngang cảm ứng mượt mà** (`flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; margin-inline: -16px; padding-inline: 16px;`).
3. **Lưới Sản Phẩm (`.catalog-grid`, `.brand-grid`, `.cb-grid`):**
   * Trước đây không có CSS Grid và thẻ `.kmpd-pcard` bị cố định 290px gây tràn mép trên điện thoại. Đã bổ sung CSS Grid tự động co giãn 1 cột trên mobile (`grid-template-columns: 1fr; .kmpd-pcard { width: 100% !important; flex: none; }`).
4. **Sửa Lỗi Nút Phụ `.btn--secondary`:**
   * Rule cũ của `system.css` dòng 449 lột sạch viền và nền của nút phụ trên mobile biến thành link gạch chân. Đã override để giữ nguyên nút bo tròn Apple pill button sạch sẽ.
5. **Trang Chi Tiết Sản Phẩm (PDP):**
   * Bảng thông số kỹ thuật `.specs dl div` trên mobile chuyển sang 1 cột (nhãn nằm trên, giá trị nằm dưới), không ép chật nội dung.
6. **Trang Quản Trị Admin:**
   * Form sản phẩm tự co thành 1 cột trên mobile (`grid-template-columns: 1fr !important;`).
   * Thanh công cụ tồn kho (tìm kiếm, nút ẩn tồn = 0, sort) tự động căn chỉnh full-width.
   * Modal dialog có `max-height: calc(100svh - 32px); overflow-y: auto;` để luôn bấm được nút Lưu/Đóng.

### 6.4. Sửa Lỗi Hộp Đen Trống Trải (Interactive Switch Sound Bench)
* Đã xóa bỏ chiếc hộp đen trống không có nội dung nằm trên đỉnh dãy sản phẩm `index.html`.

### 6.5. Widget Liên Hệ Nổi (`.kmod-floating-contact`)
* Được ghim cố định ở góc dưới cùng bên phải: `position: fixed !important; right: 20px !important; bottom: 20px !important; z-index: 99999 !important;`.
* Khi ngăn kéo giỏ hàng mở (`.cart-open`), widget tự động ẩn đi (`opacity: 0 !important; visibility: hidden !important;`) để không che khuất nút thanh toán.

---

## 7. CÔNG NGHỆ LÕI (CORE ENGINES)

### 7.1. Bộ Tổng Hợp Âm Thanh Kép (Sound Engine)
* **Phát file âm thanh thật:** Nếu thẻ có thuộc tính `data-sound-file="data:audio/..."` (do admin upload trực tiếp), trình duyệt sẽ ưu tiên phát file âm thanh thật này qua `new Audio(file).play()`.
* **Fallback Web Audio API Synthesizer:** Nếu không có file âm thanh tải lên, hàm `playFallbackSynth(b)` sẽ tự động phát âm thanh giả lập dựa trên profile:
  * `graywood`: Âm Thock trầm đầm (tần số thấp ~180Hz).
  * `reaper`: Âm Clack đanh giòn (tần số cao ~420Hz).
  * `magnetic-he`: Phím từ tính Hall Effect, hành trình ngắn, click dứt khoát.
  * `silent`: Phím tĩnh âm, triệt tiêu tiếng ồn.
* **Nguyên tắc an toàn:** Hàm `bindSoundButtons()` chỉ gắn 1 listener duy nhất trên `document.body` (sử dụng cờ `_soundBound`), có thể gọi lại nhiều lần sau mỗi lần render mà không sợ bị chồng lặp âm thanh.

### 7.2. Tra Cứu Đơn Hàng Thông Minh & Bảo Mật
* Hàm `doTrackOrders(query)` trong `demo/app.js`:
  * Tìm kiếm theo mã đơn chính xác `KH-XXXXXX` (hoặc nhập 6 chữ số).
  * Tìm kiếm theo số điện thoại (so sánh 9 chữ số cuối).
  * **Chặn tìm kiếm chuỗi ngắn:** Bắt buộc nhập đủ số điện thoại hoặc mã đơn hoàn chỉnh để bảo vệ quyền riêng tư của khách hàng khác.

### 7.3. Giỏ Hàng & Tăng Giảm Số Lượng
* Ngăn kéo giỏ hàng (`renderCart`) tích hợp cụm nút điều khiển số lượng `+` / `−` ngay trên từng sản phẩm, tự động cập nhật tổng tiền và kiểm tra điều kiện mã giảm giá.

---

## 8. QUY TRÌNH KIỂM THỬ KHI CHỈNH SỬA CODE (VERIFICATION SCRIPTS)

Trước khi bàn giao bất kỳ chỉnh sửa nào, hãy chạy 3 script kiểm tra cú pháp và tính toàn vẹn:

```bash
# 1. Kiểm tra cú pháp tất cả các script trong HTML
node --experimental-vm-modules -e "
import fs from 'fs';
import vm from 'vm';
const htmlFiles = fs.readdirSync('demo').filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
  const content = fs.readFileSync('demo/' + file, 'utf8');
  const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(content)) !== null) {
    const code = match[1].trim();
    if (code && !match[0].includes('src=')) {
      new vm.SourceTextModule(code, { initializeImportMeta() {} });
    }
  }
}
console.log('All inline scripts valid!');
"

# 2. Kiểm tra tính đồng bộ của Mega Menu trên cả 9 trang HTML
node -e "
import fs from 'fs';
const pages = ['index.html', 'san-pham.html', 'custom-build.html', 'thuong-hieu.html', 'product.html', 'gioi-thieu.html', 'hdsd.html', 'bao-hanh.html', 'lien-he.html'];
const getNav = (f) => {
  const m = fs.readFileSync('demo/' + f, 'utf8').match(/<nav class=\"main-menu\"[\s\S]*?<\/nav>/);
  return m ? m[0] : '';
};
const base = getNav('index.html');
pages.forEach(p => console.log(p, getNav(p) === base ? '100% IDENTICAL' : 'MISMATCH!'));
"
```

---

## 9. HƯỚNG DẪN DÀNH CHO AI / LẬP TRÌNH VIÊN PHÁT TRIỂN TIẾP THEO

1. **Tuân thủ tone nền sáng Apple Clean:** `--p-bg: #ffffff`, `--p-surface: #f5f5f7`, chữ `--p-ink: #1d1d1f`. Không tự ý đổi nền trang web sang màu tối.
2. **Không dùng thư viện nặng:** Duy trì kiến trúc thuần Vanilla HTML5, CSS3, ES Modules.
3. **Đồng bộ Mega Menu:** Bất kỳ thay đổi nào trên thanh menu ngang phải được áp dụng đồng thời trên cả 9 trang HTML.
4. **Không tái tạo lỗi `height: 100vh`:** Tuyệt đối không thêm thuộc tính `height: 100vh` hoặc `height: 100%` vào các thẻ `section` hoặc `.wrap`.
5. **Đóng modal đúng chuẩn:** Luôn dùng `data-close-dialog` cho nút đóng modal, không dùng inline `onclick="$('#modal').close()"`.

---
*Tài liệu được cập nhật toàn diện để lưu giữ trọn vẹn bối cảnh kỹ thuật cho các kỹ sư và AI tiếp tục phát triển MoneyKeyboard.*
