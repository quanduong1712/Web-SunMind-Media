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
    title: "Tăng trưởng",
    desc: "Lấy kết quả thực chất làm trọng tâm trong mọi hoạt động triển khai.",
  },
  {
    title: "Chính trực",
    desc: "Minh bạch trong dữ liệu, ngân sách và báo cáo hiệu suất cho đối tác.",
  },
  {
    title: "Đổi mới",
    desc: "Liên tục cập nhật xu hướng nội dung và mô hình vận hành Social Commerce.",
  },
  {
    title: "Hợp tác",
    desc: "Làm việc đồng hành cùng Creator, Merchant và Brand theo mục tiêu chung.",
  },
  {
    title: "Trách nhiệm",
    desc: "Cam kết chất lượng đầu ra, bền vững hiệu suất và bảo vệ uy tín thương hiệu.",
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
                  Trở thành MCN Social Commerce dẫn đầu tại Việt Nam.
                </h3>
              </article>

              <article className="mt-4 rounded-[1.6rem] border border-orange-100 bg-white p-6 md:p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sunmind-primary">Sứ mệnh</span>
                <p className="mt-4 text-lg leading-relaxed text-sunmind-gray">
                  Trao quyền cho Creator và Merchant bằng công nghệ, dữ liệu và quy trình vận hành bền vững.
                </p>
              </article>

              <div className="mt-10">
                <SectionTitle
                  eyebrow="GIÁ TRỊ CỐT LÕI"
                  title="Giá trị cốt lõi"
                  highlight="SunMind"
                  desc="Năng lực thực thi của SunMind được định hình từ 5 giá trị cốt lõi, đảm bảo mỗi dự án đều hướng đến hiệu quả thực chất và quan hệ bền vững."
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
              Bạn sẵn sàng tăng tốc cùng <span className="text-orange-300">SunMind Media</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-orange-100/90">
              Kết nối ngay với đội ngũ tư vấn để xây dựng lộ trình tăng trưởng Social Commerce phù hợp
              với mục tiêu doanh nghiệp của bạn.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="#contact">Đặt lịch tư vấn</MagneticButton>
              <MagneticButton href="#partners" light className="text-white">
                Xem hệ sinh thái đối tác
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
