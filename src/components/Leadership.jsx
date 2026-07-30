import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Leadership({ leaders }) {
  return (
    <section className="section-wrap bg-sunmind-light">
      <div className="container-main">
        <SectionTitle
          eyebrow="LEADERSHIP"
          title="Đội ngũ"
          highlight="lãnh đạo chiến lược"
          desc="Nhóm lãnh đạo kết hợp năng lực tăng trưởng thương mại số, vận hành Creator Network và quản trị hiệu suất doanh nghiệp."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {leaders.map((leader, idx) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="section-enterprise"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-300 text-lg font-extrabold text-white">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(-2)
                    .join("")}
                </div>
                <div>
                  <p className="text-lg font-bold">{leader.name}</p>
                  <p className="text-sm font-semibold text-sunmind-primary">{leader.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sunmind-gray">{leader.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
