import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import CompanyLogo from "./CompanyLogo";

export default function Footer() {
  const cols = [
    {
      title: "Về chúng tôi",
      items: [
        { label: "Giới thiệu", href: "#about" },
        { label: "Sứ mệnh & tầm nhìn", href: "#about" },
        { label: "Đội ngũ", href: "#about" },
        { label: "Hợp tác Shopee", href: "#partners" },
      ],
    },
    {
      title: "Dịch vụ",
      items: [
        { label: "Creator Recruitment", href: "#services" },
        { label: "Content Enablement", href: "#services" },
        { label: "Commerce Activation", href: "#services" },
        { label: "Livestream Commerce", href: "#services" },
        { label: "Performance Optimization", href: "#services" },
      ],
    },
    {
      title: "Hỗ trợ",
      items: [
        { label: "Case Study", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Cam kết hợp tác", href: "#partners" },
        { label: "Liên hệ", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0f0e0d] pb-8 pt-16 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
      <div className="container-main grid gap-12 xl:grid-cols-[1.8fr_1.5fr_1fr]">
        <div>
          <div className="inline-flex max-w-full overflow-hidden rounded-[2.4rem] border border-orange-300/15 bg-white px-10 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
            <CompanyLogo type="full" className="h-[250px] w-[760px] max-w-none scale-[1.08]" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-orange-100/80">
            SunMind Media phát triển hệ sinh thái nội dung thương mại điện tử theo hướng rõ quy trình, giàu sáng tạo và bền vững hiệu quả.
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
            <li className="flex items-center gap-2"><Phone size={15} /> <a href="tel:0966878344">0966 878 344</a></li>
            <li className="flex items-center gap-2"><Mail size={15} /> <a href="mailto:contact@sunmindmedia.com">contact@sunmindmedia.com</a></li>
            <li className="flex items-center gap-2"><MapPin size={15} /> Ngọc Kim, Tân Yên, Bắc Ninh</li>
          </ul>
        </div>
      </div>
      <p className="container-main mt-10 border-t border-orange-400/20 pt-6 text-center text-sm text-orange-100/70">
        © 2026 SunMind Media. All rights reserved.
      </p>
    </footer>
  );
}
