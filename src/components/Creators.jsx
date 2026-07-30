import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Creators({ creators }) {
  return (
    <section className="section-wrap">
      <div className="container-main">
        <SectionTitle
          eyebrow="CREATOR NETWORK"
          title="Mạng lưới creator"
          highlight="có chọn lọc"
          desc="Creator được tuyển chọn theo năng lực nội dung, tệp người xem và khả năng phát triển thương mại bền vững."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {creators.map((creator, idx) => (
            <motion.article
              key={creator.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="soft-card text-center"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-300" />
              <h3 className="mt-4 text-xl font-bold">{creator.name}</h3>
              <p className="text-sm text-sunmind-gray">{creator.category}</p>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-orange-50 px-3 py-2 text-sm font-semibold">
                <span>{creator.followers} người theo dõi</span>
                <span className="text-sunmind-primary">{creator.platform}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
