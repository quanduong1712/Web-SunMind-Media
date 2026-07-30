/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sunmind: {
          primary: "#FF6B00",
          secondary: "#FFA726",
          gold: "#FFC857",
          dark: "#111111",
          bg: "#FFFDF8",
          gray: "#666666",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,107,0,0.12), 0 14px 40px rgba(255,107,0,0.18)",
        soft: "0 12px 40px rgba(17,17,17,0.08)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      maxWidth: {
        container: "1320px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      backgroundImage: {
        "sunmind-light":
          "radial-gradient(circle at 50% -20%, rgba(255,166,38,0.34), transparent 60%), radial-gradient(circle at 0% 100%, rgba(255,107,0,0.18), transparent 42%), radial-gradient(circle at 100% 100%, rgba(255,200,87,0.22), transparent 36%)",
        "sunmind-dark":
          "radial-gradient(circle at 50% -10%, rgba(255,166,38,0.28), transparent 45%), linear-gradient(180deg, #151515 0%, #0d0d0d 100%)",
      },
    },
  },
  plugins: [],
};
