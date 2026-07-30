import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Creators({ creators }) {
  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(-2)
      .map((part) => part[0])
      .join("");

  return (
    <section className="section-wrap light-band overflow-hidden">
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
              className="soft-card group overflow-hidden p-0 text-center"
            >
              <div className={`relative h-56 bg-gradient-to-br ${creator.tone ?? "from-orange-200 to-orange-400"}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.28),transparent_26%)]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
                {creator.image ? (
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white/80 object-cover shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/80 bg-white/25 text-3xl font-black text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 group-hover:scale-105">
                    {getInitials(creator.name)}
                  </div>
                )}
                <div className="absolute right-4 top-4 rounded-full border border-white/55 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {creator.platform}
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold">{creator.name}</h3>
                <p className="mt-1 text-sm font-medium text-sunmind-gray">{creator.followers}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {creator.category.split("|").map((item) => (
                    <span key={item} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-sunmind-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
