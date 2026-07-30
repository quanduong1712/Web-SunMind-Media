export default function CompanyLogo({ type = "full", className = "", alt = "SunMind Media" }) {
  const src = type === "mark" ? "/sunmind-logo-mark.png" : "/sunmind-logo-full.png";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
      draggable="false"
    />
  );
}
