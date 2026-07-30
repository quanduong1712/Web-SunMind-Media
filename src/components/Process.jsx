import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Process({ steps }) {
  return (
    <section className="section-wrap">
      <div className="container-main">
        <SectionTitle
          eyebrow="QUY TRÌNH HỢP TÁC"
          title="Lộ trình"
          highlight="triển khai"
          desc="Từ đăng ký đến tối ưu hiệu suất, mỗi giai đoạn đều được vận hành theo quy trình rõ ràng, minh bạch và đo lường liên tục."
        />

        <div className="relative mt-12">
          <div className="absolute left-5 right-5 top-6 hidden h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 md:block" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7">
            {steps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="relative flex min-h-[118px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-base font-bold text-sunmind-primary">
                  {idx + 1}
                </div>
                <p className="text-[15px] font-semibold leading-snug text-sunmind-dark">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
