import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "./SectionTitle";

export default function Testimonials({ items }) {
  return (
    <section className="section-wrap bg-[#fff8ef]">
      <div className="container-main">
        <SectionTitle
          eyebrow="CẢM NHẬN ĐỐI TÁC"
          title="Góc nhìn về"
          highlight="SunMind Media"
          desc="Những gì đối tác và thương hiệu kỳ vọng ở một đơn vị có khả năng kết nối creator, nội dung và hiệu quả thương mại trong cùng một hệ vận hành."
        />

        <div className="mt-12 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false }} loop>
            {items.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="mx-auto max-w-4xl rounded-[1.6rem] border border-orange-100 bg-gradient-to-br from-white to-orange-50/60 p-8 text-left md:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="kpi-chip bg-orange-50 text-sunmind-primary">{item.company}</span>
                    <span className="rounded-full border border-orange-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sunmind-primary">
                      {item.result}
                    </span>
                  </div>
                  <Quote className="mt-6 text-orange-300" size={32} />
                  <p className="mt-5 text-2xl font-semibold leading-relaxed text-sunmind-dark">"{item.quote}"</p>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-sunmind-gray">{item.name}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
