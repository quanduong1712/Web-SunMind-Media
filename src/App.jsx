import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  achievements,
  caseStudies,
  creators,
  ecosystemNodes,
  faqs,
  leadership,
  partnerNames,
  processSteps,
  serviceItems,
  testimonials,
  trustBadges,
  valueItems,
} from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Ecosystem from "./components/Ecosystem";
import Creators from "./components/Creators";
import Achievements from "./components/Achievements";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MagneticButton from "./components/MagneticButton";
import SectionTitle from "./components/SectionTitle";
import TrustBadges from "./components/TrustBadges";
import CaseStudies from "./components/CaseStudies";
import Leadership from "./components/Leadership";

const Partners = lazy(() => import("./components/Partners"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function LazySectionFallback() {
  return (
    <section className="section-wrap">
      <div className="container-main">
        <div className="section-enterprise h-48 animate-pulse bg-orange-50/70" />
      </div>
    </section>
  );
}

const coreValues = [
  {
    title: "Performance Mindset",
    desc: "Mọi hoạt động được định hướng bằng mục tiêu cụ thể và có khả năng đo lường thông qua dữ liệu, nội dung và kết quả thương mại.",
  },
  {
    title: "Creator First",
    desc: "Tôn trọng cá tính nhà sáng tạo và xây dựng lộ trình phát triển phù hợp với năng lực, phong cách và tệp người xem.",
  },
  {
    title: "Selective Growth",
    desc: "Ưu tiên creator có tiềm năng phát triển dài hạn, không mở rộng mạng lưới bằng số lượng đơn thuần.",
  },
  {
    title: "Operational Discipline",
    desc: "Làm việc theo quy trình rõ ràng, có phân công, theo dõi và đánh giá kết quả để đảm bảo chất lượng triển khai ổn định.",
  },
  {
    title: "Long-term Partnership",
    desc: "Hướng đến quan hệ hợp tác bền vững với nền tảng, creator, thương hiệu và đối tác thương mại điện tử.",
  },
];

export default function App() {
  return (
    <div className="bg-sunmind-bg text-sunmind-dark">
      <Navbar />
      <main>
        <Hero stats={achievements} />

        <div id="services" className="flow-surface">
          <Services items={serviceItems} />
        </div>

        <section id="about" className="section-wrap">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl rounded-[2.2rem] border border-orange-100/80 bg-white/90 p-6 shadow-soft md:p-10"
            >
              <article className="rounded-[1.6rem] border border-orange-100 bg-sunmind-light p-6 md:p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sunmind-primary">Tầm nhìn</span>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-[2.15rem]">
                  Trở thành hệ sinh thái Creator Commerce có năng lực phát triển nhà sáng tạo, sản xuất nội dung và thúc đẩy tăng trưởng kinh doanh trên các nền tảng thương mại điện tử.
                </h3>
              </article>

              <article className="mt-4 rounded-[1.6rem] border border-orange-100 bg-white p-6 md:p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sunmind-primary">Sứ mệnh</span>
                <p className="mt-4 text-lg leading-relaxed text-sunmind-gray">
                  Giúp creator phát triển bền vững thông qua định hướng nội dung, hệ thống hỗ trợ sản xuất, năng lực đọc dữ liệu và cơ hội thương mại phù hợp theo từng giai đoạn.
                </p>
              </article>

              <div className="mt-10">
                <SectionTitle
                  eyebrow="GIÁ TRỊ CỐT LÕI"
                  title="Giá trị cốt lõi"
                  highlight="SunMind"
                  desc="Nền tảng vận hành của SunMind tập trung vào hiệu quả, quy trình và khả năng đồng hành dài hạn với creator, nền tảng và thương hiệu."
                />

                <div className="mt-6 grid gap-3">
                  {coreValues.map((value, idx) => (
                    <article
                      key={value.title}
                      className="rounded-2xl border border-orange-100 bg-white px-4 py-4 shadow-sm transition hover:shadow-md"
                    >
                      <p className="text-lg font-bold text-sunmind-dark">
                        0{idx + 1}. {value.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-sunmind-gray">{value.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <TrustBadges items={trustBadges} />
        <WhyChoose items={valueItems} />
        <Process steps={processSteps} />
        <div id="ecosystem">
          <Ecosystem nodes={ecosystemNodes} />
        </div>
        <CaseStudies items={caseStudies} />
        <Leadership leaders={leadership} />
        <Creators creators={creators} />
        <div id="partners">
          <Suspense fallback={<LazySectionFallback />}>
            <Partners names={partnerNames} />
          </Suspense>
        </div>
        <Achievements items={achievements} />
        <div id="testimonials">
          <Suspense fallback={<LazySectionFallback />}>
            <Testimonials items={testimonials} />
          </Suspense>
        </div>
        <div id="faq">
          <FAQ items={faqs} />
        </div>

        <section className="section-wrap dark-grid relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-36 w-[68%] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="container-main rounded-[2rem] border border-orange-400/20 bg-white/5 px-6 py-16 text-center backdrop-blur md:px-12">
            <h2 className="text-4xl font-black text-white md:text-6xl">
              Sẵn sàng hợp tác phát triển <span className="text-orange-300">Creator Commerce</span> cùng SunMind?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-orange-100/90">
              Chúng tôi đề xuất mô hình hợp tác chất lượng cao cùng Shopee và thương hiệu để tăng sản lượng
              nội dung thương mại, chuẩn hóa vận hành và tạo tăng trưởng bền vững.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="#contact">Đặt lịch tư vấn</MagneticButton>
              <MagneticButton href="#partners" light className="text-white">
                Xem đề xuất hợp tác
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
