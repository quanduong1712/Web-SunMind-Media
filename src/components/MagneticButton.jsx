import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticButton({
  children,
  className = "",
  light = false,
  href,
  onClick,
  type = "button",
}) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(ref.current, {
      x: x * 0.22,
      y: y * 0.28,
      duration: 0.24,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.35)" });
  };

  const baseClass = `magnetic rounded-2xl px-6 py-3 text-sm font-semibold transition ${
    light
      ? "border border-white/40 bg-white/10 text-white hover:bg-white/20"
      : "bg-sunmind-primary text-white shadow-glow hover:-translate-y-0.5 hover:bg-orange-600"
  } ${className}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
        className={baseClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={baseClass}
    >
      {children}
    </button>
  );
}
