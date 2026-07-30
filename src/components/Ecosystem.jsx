import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Ecosystem({ nodes }) {
  return (
    <section className="section-wrap bg-sunmind-light relative overflow-hidden">
      <div className="container-main">
        <SectionTitle
          eyebrow="SUNMIND CREATOR COMMERCE ECOSYSTEM"
          title="Hệ sinh thái Creator"
          highlight="kết nối đa thành phần"
          desc="Kết nối nền tảng, nhà sáng tạo, thương hiệu và người tiêu dùng thông qua nội dung thương mại và luồng dữ liệu hiệu suất."
        />

        <div className="relative mx-auto mt-16 max-w-5xl rounded-[2rem] border border-orange-100 bg-white/90 px-5 py-12 shadow-soft md:px-10">
          <div className="absolute left-1/2 top-1/2 h-[74%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/70" />
          <div className="absolute left-1/2 top-1/2 h-[50%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/60" />

          <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {nodes.map((node, idx) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-orange-100 bg-white p-4 text-center font-semibold text-sunmind-dark shadow-sm"
              >
                {node}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
