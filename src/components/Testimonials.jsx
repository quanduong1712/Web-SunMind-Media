import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "./SectionTitle";

export default function Testimonials({ items }) {
  return (
    <section className="section-wrap dark-grid text-white">
      <div className="container-main">
        <SectionTitle
          light
          eyebrow="CẢM NHẬN ĐỐI TÁC"
          title="Đối tác đánh giá về"
          highlight="SunMind Media"
          desc="Những phản hồi từ doanh nghiệp đang triển khai Social Commerce cùng SunMind theo mục tiêu tăng trưởng định lượng."
        />

        <div className="mt-12 rounded-[2rem] border border-orange-400/20 bg-white/5 p-6 backdrop-blur">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false }} loop>
            {items.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="mx-auto max-w-4xl rounded-[1.6rem] border border-orange-300/20 bg-black/15 p-8 text-left md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="kpi-chip border-orange-300/35 bg-orange-400/10 text-orange-100">{item.company}</span>
                    <span className="rounded-full border border-orange-300/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-100">
                      {item.result}
                    </span>
                  </div>
                  <Quote className="mt-6 text-orange-300" size={32} />
                  <p className="mt-5 text-2xl font-semibold leading-relaxed text-orange-50">"{item.quote}"</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-orange-200">{item.name}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
