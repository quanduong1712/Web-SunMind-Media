import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "./SectionTitle";

export default function Partners({ names }) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-main">
        <SectionTitle
          eyebrow="ĐỐI TÁC CỦA CHÚNG TÔI"
          title="Mạng lưới"
          highlight="đối tác chiến lược"
          desc="SunMind hợp tác cùng các nền tảng và đối tác vận hành hàng đầu để mở rộng quy mô tăng trưởng bền vững cho thương hiệu và Creator."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="section-enterprise text-center">
            <p className="text-3xl font-black text-sunmind-primary">50M+</p>
            <p className="mt-1 text-sm font-medium text-sunmind-gray">Doanh số vận hành qua hệ sinh thái</p>
          </div>
          <div className="section-enterprise text-center">
            <p className="text-3xl font-black text-sunmind-primary">500+</p>
            <p className="mt-1 text-sm font-medium text-sunmind-gray">Merchant đang đồng hành</p>
          </div>
          <div className="section-enterprise text-center">
            <p className="text-3xl font-black text-sunmind-primary">1000+</p>
            <p className="mt-1 text-sm font-medium text-sunmind-gray">Creator trong mạng lưới</p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.8rem] border border-orange-100 bg-white p-4 shadow-soft">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2.2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3800}
            loop
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
          >
            {[...names, ...names].map((name, idx) => (
              <SwiperSlide key={`${name}-${idx}`}>
                <div className="flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-lg font-bold text-gray-700 saturate-0 transition hover:border-orange-200 hover:text-sunmind-primary hover:saturate-100">
                  {name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
