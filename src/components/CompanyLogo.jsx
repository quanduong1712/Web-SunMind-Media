export default function CompanyLogo({ type = "full", className = "", alt = "SunMind Media" }) {
  const src = type === "mark" ? "/sunmind-logo-mark.png" : "/sunmind-logo-full.png";
  const baseClassName = type === "mark" ? "object-contain" : "object-contain object-center";

  return (
    <img
      src={src}
      alt={alt}
      className={`${baseClassName} ${className}`.trim()}
      loading="eager"
      decoding="async"
      draggable="false"
    />
  );
}
