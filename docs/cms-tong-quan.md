# Tổng quan CMS — cms.weeblab.net

> Khảo sát ngày 2026-11-16, chỉ đọc. Không ghi token/secret vào file này — lấy trong CMS khi cần.

## 1. CMS này là gì

- **Headless CMS tự viết** (không phải Strapi/WordPress), giao diện admin bằng **Next.js**, chạy sau **Cloudflare**.
- Một CMS quản lý **nhiều website (multi-site)**: mỗi site có nội dung, media, token API, webhook riêng.
- Cách đặt schema (content type, field type, `draftAndPublish`, `i18n`, component) **bắt chước Strapi**, nên tài liệu Strapi đọc tham khảo được.
- Có thêm bộ **sinh nội dung bằng AI** (DeepSeek / Grok) để viết blog, SEO, dịch.
- Ảnh lưu trên **Cloudflare R2**, phục vụ qua domain static riêng.

| Thành phần | Địa chỉ |
|---|---|
| Trang quản trị | `https://cms.weeblab.net/admin` |
| API | `https://cms.weeblab.net/api` |
| Đăng nhập | `/login` → token lưu ở `localStorage.cms_token` của trình duyệt |

## 2. Site của website này

CMS phục vụ khoảng 10 website khác nhau. Đã thêm site **MoneyKeyboard** (slug `moneykeyboard`) cho website này, có content type **Sản phẩm** (`product`) và 36 sản phẩm lấy từ `app.js`. Cách dùng xem [cms-huong-dan.md](cms-huong-dan.md).

## 3. Các mục trong menu

| Menu | Dùng để | Ghi chú |
|---|---|---|
| **Dashboard** | Trang tổng, có tóm tắt field type & validation | |
| **Sites** | Tạo/sửa/xoá site: tên, slug, domain, mô tả, ngôn ngữ, webhook, **API Token** (nút Copy) | Chỉ admin sửa được |
| **Content Types** | Thiết kế "khuôn" dữ liệu (vd *Blog Post* gồm title, content, ảnh…) | Theo site đang chọn |
| **Components** | Khối field dùng lại (SEO, Address…) | Hiện chưa có component nào |
| **Content** | Nhập bài theo content type + tab **Services** (dịch vụ/sản phẩm có danh mục, ảnh cover/before/after, video, bản dịch, SEO) | Có draft/publish, dịch, viết lại bằng AI |
| **Content Generator** | Bộ AI: SEO Planner, AI Writer, AI Chat, X Blog Generator, Full Pipeline, Local Blog Pages, Runs & Monitor, Other Tools | Provider đang dùng: DeepSeek |
| **Media** | Thư viện ảnh của site: Upload, Select, **Clean Unused**, **Scan R2 Orphans** | Clean Unused **xoá** ảnh, cẩn thận |
| **Users & Roles** | Tài khoản và phân quyền | Chỉ admin |
| **Documentation** | Hướng dẫn schema, field types, workflows ngay trong CMS | |

Thanh trên cùng: **chọn Site** (mọi trang đều theo site này) và nút **Sync LDP** = báo landing page của site làm mới cache trang blog/dịch vụ (không đổi dữ liệu).

## 4. Phân quyền

| Role | Được làm |
|---|---|
| **viewer** | Chỉ xem content, content type, component, site |
| **editor** | Thêm/sửa/xoá/publish content; sửa content type & component; xem site |
| **admin** | Toàn quyền, kể cả user, role, site |

## 5. Content type mẫu có sẵn

**Blog Post** (Draft/Publish, i18n): `title, slug, author*, content* (markdown), excerpt, category*, tags, featured, readTime, featuredImage, publishedDate*` — tạo nhanh từ template khi bấm *Create Content Type*.

## 6. API cho website bên ngoài đọc dữ liệu

Website (landing page) đọc dữ liệu bằng **API Token của site**, gửi qua header `x-api-key` (không phải `Authorization: Bearer`):

```bash
curl -H "x-api-key: <API_TOKEN_CUA_SITE>" \
  "https://cms.weeblab.net/api/services?siteId=<SITE_ID>"
curl -H "x-api-key: <API_TOKEN_CUA_SITE>" \
  "https://cms.weeblab.net/api/content?siteId=<SITE_ID>&contentTypeId=<ID>&status=published&locale=vi"
curl -H "x-api-key: <API_TOKEN_CUA_SITE>" \
  "https://cms.weeblab.net/api/media?siteId=<SITE_ID>"
```

Tham số lọc của `/api/content`: `siteId`, `contentTypeId`, `status`, `locale`, `contentSlug`.

Các nhóm endpoint (admin dùng `Authorization: Bearer <cms_token>`):

| Nhóm | Endpoint |
|---|---|
| Auth | `POST /auth/login`, `GET /auth/me`, `POST /auth/regenerate-api-key` |
| Site | `/sites`, `/sites/:id`, `POST /sites/:id/revalidate` (= Sync LDP) |
| Content type / component | `/content-types[/:id]`, `/components[/:id]`, `/components/categories` |
| Content | `/content[/:id]`, `/content/:id/publish`, `/unpublish`, `/translate`, `/rewrite-content` |
| Services | `/services[/:id]`, `/services/:id/publish`, `/translate`, `/generate-seo`, `/translations/:locale` |
| Media | `/media?siteId=`, `/media/:id`, `/media/usages?siteId=` |
| Users/roles | `/users`, `/roles`, `/roles/:id/permissions`, `/permissions/:id` |
| AI | `/content-generator/*`, `/content-plans/:id/execute` |

**CORS:** API không trả `Access-Control-Allow-Origin` cho domain lạ → gọi thẳng từ trình duyệt ở domain khác sẽ bị chặn, trừ khi chủ CMS thêm domain đó vào danh sách cho phép. Gọi từ server / script Node thì không bị.

**Lưu ý khi ghi qua API:** backend chỉ nhận field type: `text, uid, integer, decimal, boolean, date, datetime, enumeration, media, json, richtext.markdown, …` — **không nhận `textarea`** dù giao diện có. Khi `PATCH /content/:id`, bỏ `title` và `slug` ra khỏi `data`.

**Webhook:** mỗi site đặt được URL + secret; CMS gọi URL đó khi `content.create / update / publish / delete` — dùng để landing page tự build lại.
