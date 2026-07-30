import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";
import MagneticButton from "./MagneticButton";
import CompanyLogo from "./CompanyLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navMap = {
    "Giới thiệu": "#about",
    "Năng lực": "#services",
    "Hệ sinh thái": "#ecosystem",
    "Dự án": "#testimonials",
    "Đối tác": "#partners",
    "Liên hệ": "#contact",
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close, { once: true });
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
      <div className="container-main flex h-20 items-center justify-between">
        <a className="inline-flex items-center" href="#home" aria-label="SunMind Media">
          <CompanyLogo type="full" className="h-14 w-[260px] sm:h-16 sm:w-[300px]" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-sunmind-dark lg:flex">
          {navItems.map((item) => (
            <a key={item} href={navMap[item] ?? "#"} className="transition hover:text-sunmind-primary">
              {item}
            </a>
          ))}
        </nav>
        <MagneticButton href="#contact" className="hidden lg:inline-flex">Liên hệ tư vấn</MagneticButton>
        <button
          className="inline-flex rounded-xl border border-orange-200 bg-white/80 p-2 text-sunmind-primary lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="glass-nav border-t border-orange-200/70 px-5 pb-4 pt-2 lg:hidden">
          <div className="container-main grid gap-2 px-0">
            {navItems.map((item) => (
              <a
                key={item}
                href={navMap[item] ?? "#"}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 font-semibold text-sunmind-dark transition hover:bg-orange-50 hover:text-sunmind-primary"
              >
                {item}
              </a>
            ))}
            <MagneticButton href="#contact" className="mt-2 w-full">Liên hệ tư vấn</MagneticButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
