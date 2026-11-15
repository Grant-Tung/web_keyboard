# Hướng dẫn dùng CMS cho website MoneyKeyboard

Tổng quan về CMS: xem [cms-tong-quan.md](cms-tong-quan.md).

## Website lấy sản phẩm từ CMS như thế nào

```
CMS (site "MoneyKeyboard", loại nội dung "Sản phẩm")
   │  mỗi giờ GitHub Action chạy: npm run cms:sync
   ▼
landing/cms-catalog.js + demo/cms-catalog.js   ← file sinh tự động, đừng sửa tay
   │  commit lên main
   ▼
GitHub Pages tự deploy → https://grant-tung.github.io/web_keyboard/
```

- Sửa trên CMS → **tối đa ~1 giờ** sau website tự cập nhật.
- Muốn cập nhật **ngay**: GitHub → tab **Actions** → **CMS sync** → **Run workflow**. Hoặc chạy `npm run cms:sync` trên máy rồi commit + push.
- Nếu `cms-catalog.js` rỗng, website dùng danh sách sản phẩm gốc viết sẵn trong `app.js` (nên không bao giờ trắng trang).
- Chỉ sản phẩm **Published** mới lên web. **Draft** = ẩn.

## 1. Đăng nhập & chọn site

1. Vào `https://cms.weeblab.net/admin`, đăng nhập.
2. Ô **Site:** trên cùng → chọn **MoneyKeyboard**. Mọi trang (Content, Media…) đều làm việc trên site đang chọn.

## 2. Sửa một sản phẩm (giá, tồn kho, mô tả, ảnh)

1. Menu **Content** → ô *Content Type* chọn **Sản phẩm**.
2. Bấm vào sản phẩm cần sửa.
3. Các ô:

| Ô | Ý nghĩa trên website |
|---|---|
| **Title** | Tên sản phẩm |
| **Slug** | Mã sản phẩm trong link (`product.html?id=<slug>`) — **đừng đổi** với sản phẩm đã có, link cũ và giỏ hàng của khách sẽ hỏng |
| **brand** | Hãng (Aula, Akko…) — dùng cho bộ lọc hãng |
| **category** | Danh mục lớn: `ban-phim-co`, `switch`, `keycap`, `phu-kien`, `hang-order`, `custom-build` |
| **subCategory** | Danh mục con (vd `phim-he`, `75-percent`…) — copy đúng mã của sản phẩm cùng loại |
| **price** | Giá, số nguyên VND, không dấu chấm (vd `1290000`) |
| **inStock** | Bật = còn hàng, tắt = "Tạm hết hàng" |
| **badge** | Nhãn nhỏ trên thẻ (vd "SẴN HÀNG", "Layout 75%") |
| **line** | Một dòng mô tả ngắn dưới tên |
| **images** | Ảnh sản phẩm, ảnh đầu tiên là ảnh chính. Bấm **Upload Image** hoặc dán URL |
| **sortOrder** | Thứ tự hiển thị, số nhỏ đứng trước |
| **extra** | Dữ liệu kỹ thuật (JSON): `type`, `soundId`, màu `colors`, `specs`, `buildSpecs`… — chỉ sửa nếu hiểu JSON, sai dấu phẩy là lỗi |

4. Bấm **Save**. Nếu sản phẩm đang Published thì giữ nguyên, website sẽ nhận bản mới ở lần đồng bộ tới.

## 3. Thêm sản phẩm mới

1. **Content** → **Sản phẩm** → **Create**.
2. Điền **Title**, **Slug** (chữ thường, không dấu, nối bằng `-`, vd `akko-5075b-plus`), brand, category, subCategory, price, ảnh.
3. **extra**: copy từ một sản phẩm cùng loại rồi sửa — tối thiểu `{"type": "keyboard"}` (hoặc `switch`, `keycap`, `phu-kien`, `hang-order`, `custom-build`).
4. Chọn **Published** (hoặc tạo Draft rồi bấm **Publish** sau).

## 4. Ẩn / xoá sản phẩm

- **Ẩn tạm**: bấm **Unpublish** → về Draft, website bỏ nó ở lần đồng bộ tới.
- **Xoá hẳn**: **Delete**. Không khôi phục được.

## 5. Ảnh (Media)

- Menu **Media** → **Upload** để đưa ảnh lên (nên dùng `.webp`, < 300 KB).
- Trong form sản phẩm, ô **images** → **Upload Image** sẽ tự upload và điền URL.
- Ảnh cũ của shop đang trỏ về GitHub Pages (`grant-tung.github.io/...`) — vẫn dùng bình thường.
- ⚠️ **Clean Unused** sẽ **xoá** ảnh không được nội dung nào dùng — kiểm tra kỹ trước khi bấm.

## 6. Việc cho người lập trình

```bash
# lần đầu: tạo file .env.cms (đã gitignore) với 3 dòng
CMS_API_KEY=<API Token của site MoneyKeyboard — lấy ở Sites → MoneyKeyboard>
CMS_SITE_ID=9be2d956-ef9c-4d41-bd55-3b8b6b1272a9
CMS_CONTENT_TYPE_ID=cf49ba59-cbd0-4284-9872-5cb7549f3cef

npm run cms:sync     # kéo sản phẩm Published về landing/ và demo/cms-catalog.js
```

- Token trên GitHub nằm ở **Settings → Secrets and variables → Actions → `CMS_API_KEY`**. Nếu đổi token trong CMS thì cập nhật secret này.
- Script dừng và **không ghi file** nếu CMS trả về 0 sản phẩm hoặc sản phẩm thiếu id/name/category.
- Repo đang **public**: tuyệt đối không commit token vào code.
- Khi sửa qua API (`PATCH /api/content/:id`): **bỏ `title` và `slug` ra khỏi `data`**, backend báo lỗi nếu có.

## 7. Trang Admin cũ trong web (`demo/admin.html`)

Trang này chỉ lưu vào trình duyệt của người đang mở (localStorage), khách không thấy. Muốn sửa sản phẩm thật → dùng CMS.
Lưu ý: nếu từng sửa sản phẩm ở `admin.html` trên một máy, máy đó sẽ thấy bản sửa local thay vì bản CMS — xoá dữ liệu trang (F12 → Application → Local Storage → xoá `kb-catalog`) để thấy lại bản CMS.
