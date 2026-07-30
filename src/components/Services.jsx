import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Services({ items }) {
  return (
    <section className="section-wrap wave-bg">
      <div className="container-main">
        <SectionTitle
          eyebrow="DỊCH VỤ CỦA CHÚNG TÔI"
          title="Giải pháp tăng trưởng"
          highlight="chuẩn B2B"
          desc="SunMind Media triển khai hệ sinh thái Social Commerce theo mô hình full-funnel, đo lường bằng KPI và tối ưu bằng dữ liệu theo từng giai đoạn tăng trưởng."
        />

        <div className="enterprise-divider mt-10" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="soft-card card-shine"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-sunmind-primary">
                    <Icon size={24} />
                  </div>
                  <span className="kpi-chip">{item.kpi}</span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-sunmind-gray">{item.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <a href="#contact" className="font-semibold text-sunmind-primary">
                    Tìm hiểu thêm →
                  </a>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sunmind-gray">Enterprise Ready</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
