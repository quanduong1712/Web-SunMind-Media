import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import CompanyLogo from "./CompanyLogo";

export default function Footer() {
  const cols = [
    {
      title: "Về chúng tôi",
      items: [
        { label: "Giới thiệu", href: "#about" },
        { label: "Sứ mệnh & tầm nhìn", href: "#about" },
        { label: "Đội ngũ", href: "#services" },
        { label: "Tuyển dụng", href: "#contact" },
      ],
    },
    {
      title: "Dịch vụ",
      items: [
        { label: "MCN", href: "#services" },
        { label: "Affiliate", href: "#services" },
        { label: "Livestream", href: "#services" },
        { label: "Sản xuất nội dung", href: "#services" },
        { label: "Tiếp thị hiệu suất", href: "#services" },
      ],
    },
    {
      title: "Hỗ trợ",
      items: [
        { label: "Tin tức", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Chính sách bảo mật", href: "#contact" },
        { label: "Điều khoản sử dụng", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0f0e0d] pb-8 pt-16 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      <div className="container-main grid gap-12 xl:grid-cols-[1.2fr_2fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <CompanyLogo type="mark" className="h-12 w-12" />
            <div>
              <p className="text-2xl font-black tracking-wide text-orange-300">SUNMIND</p>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-orange-100/90">Media</p>
            </div>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-orange-100/80">
            Kết nối giá trị - Lan tỏa thương hiệu - Kiến tạo tương lai.
          </p>
          <div className="mt-6 flex gap-3 text-orange-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-orange-400/40 p-2 transition hover:border-orange-300 hover:text-orange-200"><Facebook size={16} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full border border-orange-400/40 p-2 transition hover:border-orange-300 hover:text-orange-200"><Youtube size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-orange-400/40 p-2 transition hover:border-orange-300 hover:text-orange-200"><Instagram size={16} /></a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">{col.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-orange-100/85">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-orange-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Liên hệ</h4>
          <ul className="mt-4 space-y-3 text-sm text-orange-100/90">
            <li className="flex items-center gap-2"><Phone size={15} /> <a href="tel:0888999123">0888 999 123</a></li>
            <li className="flex items-center gap-2"><Mail size={15} /> <a href="mailto:contact@sunmindmedia.vn">contact@sunmindmedia.vn</a></li>
            <li className="flex items-center gap-2"><MapPin size={15} /> Tòa nhà SunMind, Bắc Ninh, Việt Nam</li>
          </ul>
        </div>
      </div>
      <p className="container-main mt-10 border-t border-orange-400/20 pt-6 text-center text-sm text-orange-100/70">
        © 2026 SunMind Media. All rights reserved.
      </p>
    </footer>
  );
}
