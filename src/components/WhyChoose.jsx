import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import CompanyLogo from "./CompanyLogo";

export default function WhyChoose({ items }) {
  const left = items.slice(0, 3);
  const right = items.slice(3, 6);

  return (
    <section className="section-wrap light-band relative overflow-hidden">
      <div className="container-main relative">
        <SectionTitle
          eyebrow="GIÁ TRỊ CỐT LÕI"
          title="Nguyên tắc vận hành"
          highlight="của SunMind"
          desc="SunMind tập trung vào hiệu quả, quy trình và khả năng đồng hành dài hạn thay vì tăng trưởng quy mô phô trương."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 xl:grid-cols-[1fr_360px_1fr] xl:items-center">
          <div className="grid gap-5">
            {left.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="soft-card card-shine"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-sunmind-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <div className="my-3 h-[3px] w-14 rounded-full bg-sunmind-primary" />
                  <p className="text-sunmind-gray">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center"
          >
            <div className="orbit-ring absolute inset-6" />
            <div className="orbit-ring absolute inset-0" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, ease: "linear", repeat: Infinity }}
              className="absolute inset-0"
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-300" />
              <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-300" />
            </motion.div>
            <div className="flex h-[258px] w-[258px] items-center justify-center rounded-full border border-orange-100 bg-white shadow-[0_24px_80px_rgba(255,107,0,0.22)]">
              <div className="flex h-[238px] w-[238px] items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-white shadow-[inset_0_8px_20px_rgba(255,170,72,0.14)]">
                <CompanyLogo type="full" className="h-56 w-72 scale-[1.34]" />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {right.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="soft-card card-shine"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-sunmind-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <div className="my-3 h-[3px] w-14 rounded-full bg-sunmind-primary" />
                  <p className="text-sunmind-gray">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
