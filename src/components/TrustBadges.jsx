import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function TrustBadges({ items }) {
  return (
    <section className="section-wrap bg-sunmind-light">
      <div className="container-main">
        <SectionTitle
          eyebrow="TRUST SIGNAL"
          title="Nền tảng"
          highlight="tin cậy doanh nghiệp"
          desc="Những yếu tố cốt lõi giúp SunMind vận hành như một growth partner dài hạn cho thương hiệu và hệ sinh thái Creator."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="section-enterprise"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-sunmind-primary">
                  <BadgeCheck size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sunmind-dark">{item.title}</h3>
                  <p className="mt-2 text-sunmind-gray">{item.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
