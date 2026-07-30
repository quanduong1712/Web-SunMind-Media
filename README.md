# Website SunMind Media

Website được xây dựng theo yêu cầu trong file SunMind_Media_Super_Prompt_2.0.

## Công nghệ sử dụng

- React + Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Swiper
- Lucide Icons

## Cấu trúc chính

- src/App.jsx: Ghép toàn bộ section của trang
- src/data.js: Dữ liệu nội dung (dịch vụ, FAQ, testimonial...)
- src/components: Các component tái sử dụng
- src/index.css: Global style và visual system
- public/sunmind-logo-full.png: Logo đầy đủ
- public/sunmind-logo-mark.png: Logo biểu tượng

## Hướng dẫn chạy lần đầu

1. Cài Node.js LTS

- Tải tại: https://nodejs.org
- Khuyến nghị bản LTS

2. Mở terminal tại thư mục dự án

```bash
cd C:\Users\Admin\Documents\SunMindMediaWebsite\sunmind-media-site
```

3. Cài dependencies

```bash
npm install
```

4. Chạy môi trường dev

```bash
npm run dev
```

5. Mở trình duyệt theo link Vite hiển thị

- Thường là: http://localhost:5173

## Hướng dẫn chạy những lần sau

Mỗi lần mở lại máy, chỉ cần:

```bash
cd C:\Users\Admin\Documents\SunMindMediaWebsite\sunmind-media-site
npm run dev
```

Không cần chạy lại npm install nếu package không thay đổi.

## Hướng dẫn sau mỗi lần cập nhật code

Áp dụng khi bạn pull code mới từ Git hoặc ai đó vừa cập nhật dependencies.

1. Cập nhật mã nguồn

```bash
git pull
```

2. Đồng bộ thư viện

```bash
npm install
```

3. Chạy lại dev để kiểm tra nhanh

```bash
npm run dev
```

4. Build production để đảm bảo không lỗi

```bash
npm run build
```

## Quy trình build và publish bản chính thức

1. Build:

```bash
npm run build
```

2. Kết quả nằm trong thư mục dist

3. Deploy dist lên Vercel/Netlify/Cloudflare Pages

## CI tự động với GitHub Actions

Repository đã có workflow tại `.github/workflows/build.yml`.

- Tự chạy khi `push` lên `main`
- Tự chạy khi mở/cập nhật `pull request` vào `main`
- Các bước: `npm ci` -> `npm run build`

Bạn có thể xem kết quả tại tab **Actions** của repo GitHub.

## Auto deploy với Vercel (mỗi lần cập nhật code)

1. Vào Vercel: https://vercel.com/new
2. Chọn **Import Git Repository**
3. Chọn repo: `quanduong1712/Web-SunMind-Media`
4. Framework Preset: `Vite`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Nhấn **Deploy**

Sau khi kết nối xong:

- Mỗi lần push lên `main`: Vercel tự tạo Production Deployment
- Mỗi pull request/branch: Vercel tự tạo Preview Deployment

Nếu muốn dùng domain riêng:

1. Vào project trên Vercel -> **Settings** -> **Domains**
2. Thêm domain/subdomain của bạn
3. Cập nhật DNS theo hướng dẫn của Vercel

## Xử lý lỗi thường gặp

1. npm is not recognized

- Đóng terminal cũ, mở terminal mới
- Kiểm tra:

```bash
node -v
npm -v
```

2. Lỗi thiếu thư viện khi chạy

```bash
npm install
```

3. Port 5173 bị chiếm

```bash
npm run dev -- --port 5174
```

4. Build lỗi do cache

```bash
rd /s /q node_modules
del package-lock.json
npm install
npm run build
```

## Danh sách section đã hoàn thiện

1. Header sticky glass + menu mobile
2. Hero premium có logo, orbit, stats
3. Tầm nhìn, sứ mệnh, giá trị cốt lõi
4. Dịch vụ
5. Trust badges (nền tảng tin cậy)
6. Vì sao chọn SunMind
7. Quy trình hợp tác
8. Hệ sinh thái
9. Case Study
10. Leadership
11. Creator nổi bật
12. Đối tác
13. Thành tựu
14. Cảm nhận đối tác
15. FAQ
16. CTA chuyển đổi
17. Footer chuyên nghiệp
