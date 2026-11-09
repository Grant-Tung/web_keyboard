# MONEYKEYBOARD - TÀI LIỆU TOÀN DIỆN VỀ KIẾN TRÚC & HƯỚNG DẪN PHÁT TRIỂN DỰ ÁN
> **Dành cho Lập trình viên / AI tiếp quản phát triển và chỉnh sửa mã nguồn**  
> *Phiên bản tài liệu: 1.1 — Thương hiệu chính thức: **MoneyKeyboard***  
> *Địa chỉ showroom: 158/65 Phạm Văn Chiêu, Gò Vấp, HCM*  
> *Hotline / Zalo: 0942 109 929 (https://zalo.me/0942109929)*  
> *TikTok: https://www.tiktok.com/@_strongxxx (@_strongxxx) | Instagram: https://www.instagram.com/zynxx_ori/ (@zynxx_ori)*

---

## 1. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)

### 1.1. Giới thiệu
**MoneyKeyboard** là một nền tảng Web thương mại điện tử chuyên biệt dành cho thị trường **Bàn phím cơ chính hãng, Switch, Keycap, Phụ kiện Mod phím và Dịch vụ Custom Build theo yêu cầu**.

### 1.2. Nguồn cảm hứng & Phong cách thiết kế (Design Benchmark)
* Dự án được cấu trúc theo phân loại và bố cục của `kietmodphimdao.com` (Kiệt Mod Phím Dạo - Mechkey Studio) với menu thả xuống 4 cột + dãy sản phẩm kéo ngang.
* **Phong cách chủ đạo:** **Clean Apple Light Aesthetic** (Nền trắng sáng hiện đại `#ffffff`, bề mặt phụ `#f5f5f7`, chữ tối sắc nét `#1d1d1f`, thẻ sản phẩm trắng bo tròn tinh tế với khung ảnh sản phẩm tương phản cao).
* **Mục tiêu công nghệ:** Xây dựng bằng **Pure Vanilla HTML5 / Modern CSS3 / Modern JavaScript (ES Modules)** không dùng các framework nặng nề (No React, No Vue, No Angular, No Build step). Trang web tải tức thì (<50ms), chạy độc lập không phụ thuộc thư viện bên ngoài.

---

## 2. HƯỚNG DẪN KHỞI CHẠY (QUICK START)

### 2.1. Yêu cầu môi trường
* Node.js phiên bản 18+ trở lên (khuyên dùng Node.js 20 hoặc 22/24).
* Trình duyệt web hiện đại hỗ trợ ES Modules và Web Audio API (Chrome, Edge, Safari, Firefox).

### 2.2. Khởi động Local Server
Mở terminal tại thư mục gốc của dự án (`d:\web_keyboard`):
```bash
npm run dev
# hoặc
node server.js
```

### 2.3. Các đường dẫn truy cập
* **Trang chủ Demo (Khách hàng):** `http://localhost:3000/demo/` (hoặc `http://localhost:3000/` tự redirect).
* **Trang Quản trị viên (Admin):** `http://localhost:3000/demo/admin.html`
* **Trang Danh mục sản phẩm (Phân loại 2 cấp):** `http://localhost:3000/demo/san-pham.html`
* **Trang Custom Build (Tác phẩm đã bàn giao):** `http://localhost:3000/demo/custom-build.html`
* **Trang Thương hiệu:** `http://localhost:3000/demo/thuong-hieu.html`
* **Trang Thanh toán:** `http://localhost:3000/demo/checkout.html`

> *Lưu ý về server:* File `server.js` được lập trình tự động phát hiện cổng bận: nếu cổng `3000` đang được dùng, server sẽ tự nhảy sang `3001`, `3002`,... và hiển thị rõ ràng trên terminal.

---

## 3. CẤU TRÚC THƯ MỤC & VAI TRÒ CỦA TỪNG FILE

```
d:\web_keyboard\
├── package.json               # Cấu hình scripts ("dev": "node server.js")
├── server.js                  # Local Static Web Server viết bằng Node.js thuần
├── index.html                 # File chuyển hướng root sang /demo/
├── PROJECT_DOCUMENTATION.md   # File tài liệu này
└── demo\
    ├── assets\                # Các file giao diện hệ thống (system.css, motion, layout, 3D stills)
    │   ├── layout\
    │   ├── motion\
    │   ├── objects\product-render\specs\stills\
    │   └── system.css         # Hệ thống token biến gốc
    ├── img\                   # Kho ảnh chụp thực tế sản phẩm và banner
    │   ├── mad60-v2.jpg       # Ảnh Bàn phím HE Madlions MAD60 V2
    │   ├── titan-t87.jpg      # Ảnh Bàn Phím Cơ Titan Elite T87
    │   ├── lingbao-k87.jpg    # Ảnh Bàn Phím Cơ Lingbao K87
    │   ├── gravastar-k1.jpg   # Ảnh Bàn Phím Cơ Gravastar Mercury K1 Pro
    │   ├── gravastar-k98-banner.jpg # Banner GravaStar Mercury K98 cột 5 của Mega Menu
    │   ├── red-translucent.webp
    │   ├── cathedral-keycaps.webp
    │   ├── black-knob-screen.webp
    │   └── ...
    ├── app.css                # Toàn bộ CSS phong cách Clean Apple Light & responsive
    ├── app.js                 # Toàn bộ logic lõi JavaScript, Data Store, Web Audio, Cart, Mega Menu
    ├── index.html             # Trang chủ (Header, Mega Menu, Hero, Footage, 5 dãy kéo ngang)
    ├── san-pham.html          # Trang danh mục sản phẩm (Bộ lọc 2 cấp chuẩn, lọc thương hiệu, sort)
    ├── custom-build.html      # Trang tác phẩm Custom Build (Giá tham khảo, nút copy cấu hình Zalo)
    ├── thuong-hieu.html       # Trang tất cả thương hiệu (Aula, Madlions, MonsGeek, Leobog,...)
    ├── product.html           # Trang chi tiết sản phẩm đơn lẻ (Chọn màu, switch, nghe âm, thêm giỏ)
    ├── checkout.html          # Trang thanh toán & đặt hàng COD / Chuyển khoản QR, mã giảm giá
    ├── admin.html             # Trang quản trị kho hàng, đơn hàng, upload ảnh Base64 & audio trực tiếp
    ├── gioi-thieu.html        # Trang Giới thiệu cửa hàng MoneyKeyboard
    ├── hdsd.html              # Trang Hướng dẫn sử dụng phím cơ
    ├── bao-hanh.html          # Trang Chính sách bảo hành & Đổi trả
    └── lien-he.html           # Trang Liên hệ & Bản đồ cửa hàng
```

---

## 4. HỆ THỐNG THIẾT KẾ & BẢNG MÀU (DESIGN SYSTEM)

Hệ thống token màu chuẩn tone sáng hiện đại khai báo tại `:root` trong `demo/app.css`:

```css
:root {
  --p-bg: #ffffff;               /* Nền trắng sáng tinh tế tổng thể trang */
  --p-surface: #f5f5f7;          /* Nền thẻ bento / dải phụ / container */
  --p-ink: #1d1d1f;              /* Chữ chính màu tối tương phản cao */
  --p-muted: #6d6d71;            /* Chữ phụ / mô tả / metadata */
  --p-accent: #0071e3;           /* Màu điểm nhấn chính (Apple Blue) */
  --p-accent-ink: #ffffff;       /* Chữ trên nền điểm nhấn */
  --p-action: #0071e3;           /* Màu nút bấm và liên kết hành động */
  --p-action-ink: #ffffff;
}
```

### Các quy tắc màu đặc trưng:
1. **Huy hiệu tồn kho (`.kmpd-badge-stock`):**
   * Nền: `#1b6e33` (Xanh lục sang trọng).
   * Chữ: `#ffffff` (Trắng tinh).
   * Chữ: `SẴN HÀNG` (In hoa, font size 11px, bold 700, padding 4px 9px, bo góc 5px).
2. **Khung ảnh sản phẩm (`.kmpd-pcard__img`):**
   * Hộp ảnh bên trong có nền tối `#0b0b0d` để tôn vinh tối đa đèn LED và đường nét cơ khí của phím cơ.
3. **Thẻ sản phẩm (`.kmpd-pcard`):**
   * Nền trắng viền xám nhẹ `border: 1px solid rgb(0 0 0 / .08)` phong cách Apple cao cấp.
4. **Giá tiền (`.kmpd-pcard__price`):**
   * Hiển thị chữ tối đậm `#1d1d1f`, font size 17px, font-weight 700.

---

## 5. CẤU TRÚC CHI TIẾT CÁC PHẦN MẪU (THEO ẢNH CHỤP KIETMODPHIMDAO)

### 5.1. Thanh Menu Điều Hướng & Mega Dropdown "SẢN PHẨM" (Khớp Ảnh 1 & 3)
* **Thanh menu chính:**
  * Đầu thanh menu có icon Hamburger 3 vạch vàng đồng `☰` (`.nav__hamburger-kmpd`).
  * Danh sách menu in hoa: `GIỚI THIỆU` | `SẢN PHẨM ⌄` | `THƯƠNG HIỆU ⌄` | `CUSTOM BUILD` | `HƯỚNG DẪN SỬ DỤNG` | `CHÍNH SÁCH BẢO HÀNH` | `LIÊN HỆ`.
* **Mega Menu Dropdown xổ xuống (5 cột):**
  * **Cột 1: `BÀN PHÍM CƠ →`**
    * `Layout 40% ›` (`san-pham.html?cat=ban-phim-co&sub=layout-40`)
    * `Layout 65% ›` (`san-pham.html?cat=ban-phim-co&sub=layout-65`)
    * `Layout 75% ›` (`san-pham.html?cat=ban-phim-co&sub=layout-75`)
    * `Layout 96% ›` (`san-pham.html?cat=ban-phim-co&sub=layout-96`)
    * `Layout Fullsize ›` (`san-pham.html?cat=ban-phim-co&sub=layout-fullsize`)
    * `Layout TKL – FRL ›` (`san-pham.html?cat=ban-phim-co&sub=layout-tkl`)
    * `Numpad ›` (`san-pham.html?cat=ban-phim-co&sub=numpad`)
    * `Phím HE – Chuyên Game ›` (`san-pham.html?cat=ban-phim-co&sub=phim-he`)
  * **Cột 2: `SWITCH →`**
    * `Switch Clicky ›`
    * `Switch Linear ›`
    * `Switch Silent ›`
    * `Switch Tactile ›`
  * **Cột 3: `KEYCAP →`**
    * `Keycap Akko ›`, `Keycap Artisan ›`, `Keycap FBB ›`, `Keycap Piifox ›`, `Keycap Xuyên LED ›`
    * Profiles: `Profile ASA ›`, `Profile Cherry ›`, `Profile Khác ›`, `Profile MAO ›`, `Profile MDA ›`, `Profile MOA ›`, `Profile MOC – MOE ›`
  * **Cột 4: `PHỤ KIỆN →`**
    * `Chuột Wireless ›`, `Dầu Lube ›`, `Dây Cáp Custom ›`, `Deskmat ›`, `Dụng Cụ Mod Phím ›`, `Phụ Kiện Khác ›`, `Plate ›`, `Stab ›`, `SWITCHES ›`
  * **Cột 5: `GRAVASTAR SPOTLIGHT BANNER`**
    * Card ảnh kích thước chuẩn hiển thị banner GravaStar Mercury K98 (`img/gravastar-k98-banner.jpg`) với robot nhện mecha và phím viễn tưởng kèm thông số kỹ thuật.
* **Cơ chế chống hụt hover (Hover Bridge):**
  * Sử dụng pseudo-element `.dropdown-mega-rich::before` cao 14px nằm trên đỉnh dropdown che phủ khoảng cách giữa thanh navbar và menu.
  * Trong `app.js`, hàm `initMegaMenu()` áp dụng thời gian chờ `mouseleave` 180ms giúp người dùng di chuột thoải mái mà không bị menu đóng đột ngột.

### 5.2. Dãy Sản Phẩm Kéo Ngang Tại Trang Chủ (Khớp 100% Ảnh 2)
Trang chủ bao gồm 5 section kéo ngang dạng carousel với 2 nút mũi tên tròn `‹` và `›`:
1. `Bàn phím cơ nổi bật ↗` (Nhãn: `LATEST ARRIVALS`)
2. `Switch bàn phím ↗` (Nhãn: `SWITCH & MOD SOUND`)
3. `Keycap cá tính ↗` (Nhãn: `KEYCAP COLLECTION`)
4. `Phụ kiện setup ↗` (Nhãn: `DESK ACCESSORIES`)
5. `Custom build nổi bật ↗` (Nhãn: `CUSTOM WORKSHOP - Tác phẩm đã từng build`)

#### Thứ tự 4 sản phẩm đầu tiên của dãy Bàn phím cơ (Khớp 100% ảnh 2):
1. **Bàn phím HE Madlions MAD60 V2**
   * Giá: `550.000 đ`
   * Ảnh: `img/mad60-v2.jpg`
   * Mô tả: Layout 60%, Hall Effect Rapid Trigger 0.1mm, 8000Hz, Snap Tap.
2. **Bàn Phím Cơ Titan Elite T87**
   * Giá: `750.000 đ`
   * Ảnh: `img/titan-t87.jpg`
   * Mô tả: T87 công nghệ chơi game, trục Black Warrior, gasket mount, kết nối 3 chế độ.
3. **Bàn Phím Cơ Lingbao K87**
   * Giá: `700.000 đ`
   * Ảnh: `img/lingbao-k87.jpg`
   * Mô tả: K87 tùy chỉnh cấp độ thi đấu 3 chế độ, hotswap, cấu trúc Gasket, pin 8000mAh.
4. **Bàn Phím Cơ Gravastar Mercury K1 Pro - Ghost Silver | BH 12 Tháng**
   * Giá: `3.900.000 đ`
   * Ảnh: `img/gravastar-k1.jpg`
   * Mô tả: Khung hợp kim nhôm Magie xuyên thấu phong cách viễn tưởng, hot-swap 3/5 pin, RGB.

---

## 6. MÔ HÌNH DỮ LIỆU & LƯU TRỮ (DATA SCHEMA)

Toàn bộ dữ liệu được lưu cục bộ trong `localStorage` giúp ứng dụng hoạt động không cần database server:

| Khóa LocalStorage | Kiểu dữ liệu | Ý nghĩa |
| :--- | :--- | :--- |
| `kb-catalog` | `Array<Product>` | Danh mục sản phẩm (sản phẩm stock & custom build) |
| `kb-inventory` | `Array<InventoryItem>` | Danh sách quản lý tồn kho cho trang Quản trị |
| `kb-orders` | `Array<Order>` | Danh sách đơn đặt hàng của khách |
| `kb-cart` | `Array<CartItem>` | Giỏ hàng hiện tại của người dùng |

### 6.1. Schema của một Sản phẩm (`Product`)
```javascript
{
  id: "madlions-mad60-v2",         // ID duy nhất (slug)
  brand: "Madlions",               // Tên hãng
  name: "Bàn phím HE Madlions MAD60 V2",
  category: "ban-phim-co",         // 'ban-phim-co' | 'switch' | 'keycap' | 'phu-kien' | 'custom-build'
  subCategory: "phim-he",          // slug phân loại con (layout-75, switch-linear,...)
  badge: "SẴN HÀNG",
  inStock: true,                   // true nếu còn hàng
  price: 550000,                   // Đơn vị VND (số nguyên)
  line: "Layout 60%, Hall Effect Rapid Trigger 0.1mm...", // Tóm tắt 1 dòng
  imgs: ["img/mad60-v2.jpg"],      // Mảng đường dẫn ảnh hoặc chuỗi Base64 DataURL
  audioData: null,                 // Chuỗi DataURL file audio upload trực tiếp (nếu có)
  soundId: "magnetic-he",          // Sound ID dự phòng cho Web Audio Synth ('graywood'|'reaper'|'magnetic-he'|'silent')
  specs: [["Layout", "60%"], ...], // Thông số kỹ thuật chi tiết
  isCustomBuild: false,            // true nếu là tác phẩm Custom Build
  buildSpecs: null                 // Dành riêng cho Custom Build (Kit, Switch, Keycap, Mod)
}
```

### 6.2. Phân biệt Sản phẩm Thường vs Sản phẩm Custom Build
* **Sản phẩm Thường (Stock):** Nằm trong danh mục bán hàng thường, có số lượng tồn kho `quantity`, khách bấm được nút "Thêm vào giỏ" / "Mua ngay".
* **Sản phẩm Custom Build:** `category: 'custom-build'`, `isCustomBuild: true`. **Không nằm trong tồn kho stock**, chỉ có **"Chi phí tham khảo"**. Thẻ card có nút **"Nhắn tin đặt build 💬"** — khi bấm sẽ tự động sao chép cấu hình phím vào clipboard để khách gửi cho shop qua Zalo/Facebook Messenger.

---

## 7. CÁC TÍNH NĂNG ĐẶC BIỆT & KỸ THUẬT LÕI

### 7.1. Hệ thống Âm thanh kép (Sound Engine)
Hàm `bindSoundButtons()` trong `demo/app.js` hỗ trợ 2 cơ chế phát âm thanh:
1. **Âm thanh thực tế (Uploaded Audio File):**
   * Nếu sản phẩm có thuộc tính `data-sound-file` (chứa DataURL base64 của file `.mp3`/`.wav` tải lên từ trang admin), trình duyệt sẽ ưu tiên phát file này qua `new Audio(soundFile).play()`.
   * Thẻ card hiển thị nút: `Nghe âm thực tế 🎵`.
2. **Bộ tổng hợp âm thanh giả lập (Web Audio API Synthesizer):**
   * Nếu không có file thực tế, hệ thống fallback sang bộ tạo sóng âm thanh qua hàm `playSwitch(soundType)`.
   * Hỗ trợ 4 profile âm thanh gõ thực thụ:
     * `graywood`: Linear, âm Thock trầm (tần số thấp).
     * `reaper`: Linear, âm Clack đanh giòn (tần số cao hơn).
     * `magnetic-he`: Phím từ tính Hall Effect, hành trình cực ngắn, click nhẹ.
     * `silent`: Phím tĩnh âm, triệt tiêu tiếng ồn đến 95%.

### 7.2. Upload ảnh và âm thanh trực tiếp trong Quản trị (`admin.html`)
Khắc phục hoàn toàn việc phải dán link Google Drive hay link web ngoài:
* **Upload ảnh:**
  * Thẻ `<input type="file" id="p-img-file" accept="image/*">`.
  * Ảnh tải lên được xử lý qua `<canvas>` tự động nén kích thước tối đa 640px, lưu dưới dạng JPEG chất lượng cao (~40KB - 70KB).
  * Hiển thị khung xem trước (Live Preview) ngay lập tức.
* **Upload âm thanh gõ phím:**
  * Thẻ `<input type="file" id="p-audio-file" accept="audio/*,.mp3,.wav,.ogg,.m4a">`.
  * Sử dụng `FileReader.readAsDataURL` để nén thành Base64 DataURL.
  * Tích hợp thẻ `<audio controls>` nghe thử trực tiếp ngay bên trong form thêm/sửa sản phẩm.

### 7.3. Widget Liên hệ Đa kênh Nổi (`.kmod-floating-contact`)
* Được ghim **chắc chắn ở góc dưới cùng bên phải màn hình**:
  `position: fixed !important; right: 20px !important; bottom: 20px !important; z-index: 99999 !important;`
* Bao gồm 3 nút hành động nhanh:
  1. **Zalo:** Mở trực tiếp hộp thoại chat Zalo tư vấn (`https://zalo.me/...`).
  2. **Hotline:** Gọi trực tiếp số điện thoại cửa hàng (`tel:...`).
  3. **Tra cứu đơn hàng:** Mở modal tra cứu tiến độ đơn hàng và bảo hành bằng mã vận đơn hoặc số điện thoại.

### 7.4. Quy chuẩn đóng Modal / Dialog trên toàn bộ website
* **Nguyên tắc kỹ thuật:** Trong JavaScript ES Modules (`<script type="module">`), các biến như `$` không thuộc phạm vi toàn cục `window`. Vì vậy **tuyệt đối không dùng inline `onclick="$('#modal').close()"`**.
* **Giải pháp chuẩn hóa:**
  * Mọi nút đóng trong toàn bộ các file đều sử dụng thuộc tính: `data-close-dialog`.
  * Có listener toàn cục bắt sự kiện click:
    ```javascript
    document.addEventListener('click', (e) => {
      // Đóng khi click vào vùng mờ backdrop bên ngoài
      if (e.target.tagName === 'DIALOG') e.target.close();
      // Đóng khi click vào nút có data-close-dialog
      const closeBtn = e.target.closest('[data-close-dialog]');
      if (closeBtn) closeBtn.closest('dialog')?.close();
    });
    ```

---

## 8. HƯỚNG DẪN DÀNH CHO AI / LẬP TRÌNH VIÊN TIẾP QUẢN

Khi bạn (AI hoặc dev mới) tiếp nhận dự án này để thêm tính năng hay sửa lỗi, hãy tuân theo các chỉ dẫn sau:

### 8.1. Những điều NÊN làm:
1. **Giữ phong cách Clean Apple Light nhất quán:** Nền sáng `--p-bg: #ffffff`, `--p-surface: #f5f5f7`, chữ `--p-ink: #1d1d1f`, nút `--p-action: #0071e3` (mục 4). Không đổi nền toàn trang sang tối; chỉ khung ảnh sản phẩm và vài khối nhấn dùng nền tối.
2. **Đồng bộ Navigation Menu:** Khi sửa menu điều hướng, hãy đồng bộ trên cả 9 file HTML (`index.html`, `san-pham.html`, `custom-build.html`, `thuong-hieu.html`, `product.html`, `gioi-thieu.html`, `hdsd.html`, `bao-hanh.html`, `lien-he.html`).
3. **Thêm sản phẩm mới:** Hãy thêm thông qua trang `admin.html` hoặc thêm vào mảng `DEFAULT_CATALOG` trong `demo/app.js`.
4. **Giữ tính gọn nhẹ:** Không tự ý cài đặt thêm các thư viện NPM nặng (như React, Bootstrap, Tailwind, jQuery,...) vào repo trừ khi người dùng yêu cầu rõ ràng.

### 8.2. Những lỗi ĐÃ FIX cần tránh lặp lại:
1. Không đặt widget `.kmod-floating-contact` nằm lơ lửng ở giữa trang — nó bắt buộc phải nằm cố định góc dưới bên phải (`bottom: 20px; right: 20px`).
2. Không bắt người dùng nhập link URL ảnh/nhạc từ Google Drive — tính năng upload file trực tiếp từ máy tính đã được tích hợp hoàn chỉnh trong `admin.html`.
3. Không để mất hover của Mega Menu — luôn giữ pseudo-element `.dropdown-mega-rich::before` và hàm `initMegaMenu()` để ngăn dropdown bị giật tắt khi rê chuột.
4. Không xóa thuộc tính `data-close-dialog` trên các nút đóng modal.
5. `bindSoundButtons()` chỉ gắn **một** listener cho mỗi root (gọi lại sau mỗi lần render là an toàn). Đừng tự thêm listener âm thanh khác, nếu không mỗi cú bấm sẽ phát nhiều lần.
6. Ô tìm kiếm đầu trang dùng chung hàm `initSearch()` trong `app.js` cho mọi trang. Không chép lại code tìm kiếm vào từng trang, và luôn escape chuỗi người dùng gõ (hàm `esc()`) trước khi chèn vào `innerHTML`.
7. Thanh menu ngang dài ~1020px: ở màn ≤1024px nó cuộn ngang bên trong chính nó (`.menu-list { overflow-x: auto }`). Thêm mục menu mới thì kiểm tra lại ở 375px để trang không bị rộng ra.
8. Tồn kho: bảng `kb-inventory` của admin là nguồn sự thật. `getLiveCatalog()` đọc nó để tính `inStock` (nhãn SẴN HÀNG / TẠM HẾT HÀNG / HÀNG ORDER qua `stockBadge()`; hết hàng thì nút mua bị khóa qua `canBuy()`). Đặt hàng trừ kho, hủy đơn cộng lại (`adjustStock()`).
9. Mã đơn có dạng `KH-XXXXXX` (6 số, không trùng). Tiền cọc = min(100.000đ, tổng đơn), lưu trong `order.deposit`.
10. Tra cứu đơn chỉ khớp **đủ số điện thoại** (so 9 số cuối), không khớp một phần, để không lộ đơn của người khác.
11. File âm thanh upload ≤ 1,5MB và chỉ lưu một lần (trong `kb-catalog`). localStorage của cả trang chỉ khoảng 5MB.

### 8.3. Gợi ý các tính năng có thể mở rộng tiếp theo (Roadmap):
* **Backend Database:** Thay thế `localStorage` bằng Backend Node.js / Express kết nối cơ sở dữ liệu SQLite hoặc PostgreSQL.
* **Webhook Telegram/Zalo:** Gửi thông báo có đơn hàng mới tức thì về nhóm Telegram hoặc Zalo OA của chủ shop.
* **Tích hợp VietQR động:** Tạo mã VietQR chuẩn NAPAS tự động điền sẵn số tài khoản, số tiền và nội dung chuyển khoản `KH-XXXXXX` khi khách chọn phương thức chuyển khoản ngân hàng.
* **Hệ thống Đăng nhập / Phân quyền:** Thêm xác thực Admin Login (mật khẩu) để bảo vệ trang `admin.html`.

---
*Tài liệu này được tạo tự động bởi AI trợ lý để lưu lại toàn bộ tri thức và bối cảnh mã nguồn của dự án MoneyKeyboard.*
