import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function CaseStudies({ items }) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-main">
        <SectionTitle
          eyebrow="CASE STUDY"
          title="Dự án thực chiến"
          highlight="với kết quả định lượng"
          desc="Một số dự án tiêu biểu SunMind đã triển khai cho thương hiệu Việt theo hướng dữ liệu, hiệu suất và tăng trưởng bền vững."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="section-enterprise"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
                <span className="kpi-chip">{item.industry}</span>
              </div>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sunmind-primary">Bài toán</p>
              <p className="mt-1 text-sunmind-gray">{item.challenge}</p>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sunmind-primary">Giải pháp</p>
              <p className="mt-1 text-sunmind-gray">{item.solution}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.impact.map((impact) => (
                  <span key={impact} className="kpi-chip">
                    {impact}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
