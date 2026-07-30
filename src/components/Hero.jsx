import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Camera, Link2, Sparkles, Users, Video } from "lucide-react";
import MagneticButton from "./MagneticButton";
import CompanyLogo from "./CompanyLogo";

const orbitTags = [
  { icon: Users, label: "Recruitment", x: "6%", y: "18%", delay: 0.1 },
  { icon: Video, label: "Livestream", x: "80%", y: "12%", delay: 0.25 },
  { icon: Link2, label: "Activation", x: "8%", y: "60%", delay: 0.15 },
  { icon: Camera, label: "Production", x: "80%", y: "54%", delay: 0.3 },
  { icon: BarChart3, label: "Optimization", x: "42%", y: "74%", delay: 0.2 },
];

export default function Hero({ stats }) {
  return (
    <section id="home" className="hero-grid wave-lines relative overflow-hidden pt-24 md:pt-28">
      <div className="dot-corner absolute inset-0" />
      <div className="container-main relative z-10 grid gap-8 pb-8 pt-8 xl:grid-cols-2 xl:items-center xl:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 xl:max-w-[640px]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/80 bg-white/70 px-4 py-2 text-sm font-semibold tracking-[0.12em] text-sunmind-primary">
            <Sparkles size={14} />
            SUNMIND MEDIA
          </span>
          <h1 className="mt-6 max-w-[760px] text-[40px] font-extrabold leading-[1.14] tracking-[-0.01em] sm:text-[50px] lg:text-[56px] xl:text-[60px]">
            <span className="block py-0.5 xl:whitespace-nowrap">Kết nối giá trị</span>
            <span className="block py-0.5 text-sunmind-primary xl:whitespace-nowrap">Lan tỏa thương hiệu</span>
            <span className="block py-0.5 xl:whitespace-nowrap">Kiến tạo tương lai</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sunmind-gray">
            SunMind Media là đơn vị phát triển hệ sinh thái nội dung thương mại điện tử, kết nối nền tảng,
            creator và thương hiệu thông qua sản xuất nội dung, affiliate marketing và livestream commerce.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#services" className="inline-flex items-center gap-2">
              Khám phá năng lực <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#about" light className="border border-orange-300 bg-white text-sunmind-dark hover:bg-orange-50">
              Tìm hiểu về SunMind
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-sunmind-dark/75">
            <span className="rounded-full border border-orange-200 bg-white/75 px-4 py-2">Sản xuất nội dung</span>
            <span className="rounded-full border border-orange-200 bg-white/75 px-4 py-2">Livestream commerce</span>
            <span className="rounded-full border border-orange-200 bg-white/75 px-4 py-2">Tối ưu theo dữ liệu</span>
          </div>
        </motion.div>

        <div className="relative mx-auto hidden w-full max-w-[560px] xl:mx-0 xl:ml-auto xl:block">
          <div className="flow-surface relative h-[520px] rounded-[2.2rem] border border-orange-100/80 shadow-soft">
            <div className="absolute left-1/2 top-1/2 h-[72%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/35 blur-3xl" />
            <div className="orbit-ring absolute left-1/2 top-1/2 h-[62%] w-[82%] -translate-x-1/2 -translate-y-1/2" />
            <div className="orbit-ring absolute left-1/2 top-1/2 h-[74%] w-[92%] -translate-x-1/2 -translate-y-1/2" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 34 }}
              className="absolute left-1/2 top-1/2 h-[74%] w-[92%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-orange-300" />
              <div className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-orange-300" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 m-auto flex h-[250px] w-[250px] items-center justify-center rounded-full bg-white shadow-[0_24px_70px_rgba(255,107,0,0.2)]"
            >
              <div className="flex h-[178px] w-[178px] items-center justify-center rounded-full border border-orange-100 bg-gradient-to-br from-orange-500/10 via-orange-300/10 to-orange-200/10 shadow-[inset_0_12px_34px_rgba(255,255,255,0.45)]">
                <CompanyLogo type="full" className="h-28 w-32" />
              </div>
            </motion.div>

            {orbitTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{ delay: tag.delay, duration: 4.8, repeat: Infinity }}
                  className="card-shine absolute z-20 w-28 rounded-2xl border border-orange-100 bg-white/95 p-3 text-center shadow-soft"
                  style={{ left: tag.x, top: tag.y }}
                >
                  <Icon className="mx-auto mb-2 text-sunmind-primary" size={22} />
                  <p className="text-sm font-semibold">{tag.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-main relative z-20 pb-2 md:pb-6">
        <div className="stats-strip grid gap-4 rounded-[1.8rem] px-5 py-5 sm:grid-cols-2 md:grid-cols-4 md:px-10">
          {stats.map((item, idx) => (
            <div
              key={item.label}
              className={`text-center md:text-left ${idx < stats.length - 1 ? "md:border-r md:border-orange-200" : ""}`}
            >
              <div className="text-4xl font-black text-sunmind-primary">
                {item.value}
                {item.suffix}
              </div>
              <p className="mt-1 text-sm font-semibold text-sunmind-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
