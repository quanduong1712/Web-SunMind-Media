import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function CaseStudies({ items }) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-main">
        <SectionTitle
          eyebrow="DỰ ÁN TIÊU BIỂU"
          title="Kết quả thực tế"
          highlight="từ cách làm có hệ thống"
          desc="Mỗi dự án của SunMind bắt đầu từ một bài toán rõ ràng, được triển khai bằng quy trình cụ thể và đo bằng kết quả có thể kiểm chứng."
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
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="kpi-chip">{item.industry}</span>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{item.title}</h3>
                </div>
              </div>

              <p className="mt-4 border-l-4 border-orange-200 pl-4 text-sm leading-relaxed text-sunmind-gray">
                {item.summary}
              </p>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sunmind-primary">Bài toán</p>
              <p className="mt-1 text-sunmind-gray">{item.challenge}</p>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sunmind-primary">Giải pháp</p>
              <p className="mt-1 text-sunmind-gray">{item.solution}</p>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-sunmind-primary">Kết quả nổi bật</p>
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
