# Phan tich noi dung va lich su chinh sua SunMind Media

Tai lieu nay la ban do nhanh de chinh sua website ma khong phai doan tim lai tung file. Noi dung viet bang tieng Viet khong dau trong phan huong dan ky thuat de tranh loi font khi mo bang cong cu cu.

## 1. Tong quan website

- Cong nghe: React 18, Vite, Tailwind CSS, Framer Motion, GSAP, Swiper va Lucide React.
- Entry point: `src/main.jsx`.
- Bo cuc trang: `src/App.jsx` ghep cac section thanh mot trang home dai.
- Du lieu dung chung: `src/data.js`.
- Component giao dien: `src/components/`.
- Global style: `src/index.css`.
- Tai nguyen tinh: `public/`.
- Favicon: `public/sunmind-favicon.png`, duoc khai bao tai `index.html`.

## 2. Luong hien thi chinh

`src/main.jsx` mount React vao `#root` trong `index.html`, sau do `App.jsx` dieu phoi cac khoi chinh cua trang:

1. Navbar va dieu huong anchor.
2. Hero va CTA dau trang.
3. Gioi thieu, gia tri va dinh huong.
4. Dich vu va quy trinh van hanh.
5. He sinh thai, Creator, doi tac va trust badges.
6. Case study, thanh tuu, testimonials va leadership.
7. FAQ, form/lien he va Footer.

Khi sua bo cuc, uu tien sua component trong `src/components/`. Chi sua `App.jsx` khi thay doi thu tu section, noi dung dieu phoi hoac cac bien du lieu dang duoc khai bao truc tiep trong file nay.

## 3. Noi dung nam o dau

### Nen sua trong `src/data.js`

Day la noi nen sua cac danh sach hien thi lap lai:

- `navItems`: ten menu.
- `serviceItems`: cac dich vu, mo ta, KPI va icon.
- `valueItems`: gia tri cot loi.
- `processSteps`: cac buoc quy trinh ngan.
- `ecosystemNodes`: nhan trong he sinh thai.
- `creators`: danh sach Creator va thong tin the.
- `partnerNames`: ten doi tac/nen tang.
- `trustBadges`: cac cam ket va loi ich.
- `achievements`: cac con so noi bat.
- `testimonials`: loi nhan xet.
- `caseStudies`: case study, thach thuc, giai phap va ket qua.
- `leadership`: thong tin doi ngu.
- `faqs`: cau hoi va cau tra loi.

### Dang nam truc tiep trong `src/App.jsx`

Mot so noi dung home hien dang la cac hang so local trong `App.jsx`, vi du:

- `homeStats`.
- `homeServiceGroups`.
- `aboutStory`.
- `coreValues`.
- `serviceOverview`.
- `creatorGroups` va `creatorCriteria`.
- `collaborationTabs`.
- `heroPillars` va `heroTrustSignals`.
- `operationFlow`.

Khi sua cac phan nay, can tim dung ten bien thay vi sua ngau nhien trong JSX. Neu mot danh sach duoc dung o nhieu component, nen chuyen no sang `src/data.js` de tranh trung lap.

## 4. Ban do component

- `Navbar.jsx`: logo, menu va dieu huong dau trang.
- `CompanyLogo.jsx`: quyet dinh duong dan logo full/mark.
- `Hero.jsx`: khu vuc dau trang neu duoc dung trong layout component.
- `Services.jsx`: hien thi danh sach dich vu tu data.
- `Process.jsx`: hien thi quy trinh.
- `Creators.jsx`: danh sach Creator va bo loc/nhom neu co.
- `Ecosystem.jsx`: he sinh thai.
- `CaseStudies.jsx`: cac minh chung ket qua.
- `Testimonials.jsx`: loi nhan xet.
- `Achievements.jsx`: cac con so.
- `Leadership.jsx`: doi ngu.
- `FAQ.jsx`: cau hoi thuong gap.
- `Footer.jsx`: logo, lien he va chan trang.
- `MagneticButton.jsx`: nut CTA co hieu ung tuong tac.
- `SectionTitle.jsx`: tieu de section dung chung.

Ten component cho biet noi can sua giao dien; ten bien du lieu cho biet noi can sua copy. Khong nen copy nguyen mot card sang component khac de sua rieng vi se tao ra hai nguon noi dung.

## 5. Lich su chinh sua da ghi nhan

Lich su duoi day dua tren commit trong Git, tu cu den moi:

| Commit | Noi dung | Muc dich |
| --- | --- | --- |
| `5e824d7` | Align site structure and content with Word document | Dong bo cau truc va noi dung website theo tai lieu dau vao. |
| `84574b1` | Refine site copy to follow requirements-driven structure | Lam ro copy theo yeu cau va luong thong tin. |
| `2e52750` | Polish premium agency hero and conversion CTA | Cai thien hero, dinh vi hinh anh va CTA chuyen doi. |
| `2f3de5b` | Vietnamize UI and rebalance layout density | Viet hoa giao dien, dieu chinh mat do noi dung va mot so thanh phan dung chung. |
| `2ee8776` | Rework hero and intro layout for better visual balance | Can bang lai hero va phan gioi thieu dau trang. |
| `72be40e` | Redesign process section with professional step layout | Thiet ke lai section quy trinh theo dang buoc ro rang. |
| `0638eeb` | Convert services process into boxed flow steps | Chuyen luong quy trinh dich vu thanh cac khoi step de de quet thong tin. |
| `7056043` | Add SunMind favicon | Them anh `logo cong ty nen trang.png` vao `public` voi ten on dinh `sunmind-favicon.png` va khai bao favicon trong `index.html`. Commit nay da duoc push len GitHub. |

## 6. Quy tac sua de tranh loi lap lai

1. Luon mo terminal tai thu muc `sunmind-media-site`, vi `package.json` nam o day.
2. Truoc khi sua, chay `git status --short` de biet thay doi cu cua ai dang ton tai.
3. Sua noi dung danh sach tai `src/data.js` hoac bien local trong `App.jsx`, khong sua truc tiep nhieu ban sao trong JSX.
4. Giu nguyen ten field ma component dang doc, vi du `title`, `desc`, `icon`, `kpi`, `image`.
5. Khi them icon cho data, import icon tu `lucide-react` o dau file va gan component, khong gan chuoi ten icon neu component dang can component reference.
6. Khi them anh, dat anh vao `public/` va tham chieu bang duong dan bat dau bang `/`; khong dung duong dan tuyet doi tren may ca nhan.
7. Sau thay doi React/CSS, chay `npm run build`.
8. Chi stage cac file thuoc thay doi dang lam: `git add -- <file1> <file2>`.
9. Xem lai `git diff --cached` truoc commit.
10. Commit mot muc dich moi lan de de tim lai va rollback.
11. Sau commit, dung `git push origin main` neu can cap nhat GitHub.

## 7. Quy trinh cap nhat noi dung de xuat

### Sua copy hien co

1. Tim ten bien hoac chuoi bang Search.
2. Sua tai nguon du lieu gan nhat.
3. Chay `npm run build`.
4. Mo trang va kiem tra anchor, mobile, CTA va section vua sua.
5. Commit voi message mo ta ro muc dich.

### Them mot dich vu, FAQ hoac Creator

1. Them object vao mang tuong ung trong `src/data.js`.
2. Dung dung cac field ma component dang su dung.
3. Kiem tra icon, anh, do dai text va responsive.
4. Build truoc khi commit.

### Doi logo hoac favicon

- Logo trong noi dung: kiem tra `src/components/CompanyLogo.jsx` va cac noi goi `CompanyLogo`.
- Favicon tab trinh duyet: kiem tra link `rel="icon"` trong `index.html` va file tuong ung trong `public/`.
- Sau khi doi favicon, hard refresh trinh duyet bang `Ctrl+F5` vi favicon co the bi cache.

## 8. Checklist truoc khi push

- [ ] `git status` khong co file ngoai pham vi thay doi.
- [ ] Noi dung khong bi trung lap giua `App.jsx` va `data.js`.
- [ ] Khong con duong dan anh tuyet doi tren may local.
- [ ] `npm run build` thanh cong.
- [ ] Da kiem tra desktop va mobile.
- [ ] Da kiem tra menu anchor, CTA, FAQ va form lien he.
- [ ] Da xem `git diff --cached`.
- [ ] Commit message mo ta dung thay doi.
- [ ] Da push va xac nhan `git status --branch` dong bo voi `origin/main`.

## 9. Lenh thuong dung

```powershell
Set-Location 'C:\Users\Admin\Documents\SunMindMediaWebsite\sunmind-media-site'
npm run dev
npm run build
git status --short --branch
git log -5 --oneline --decorate
git push origin main
```
