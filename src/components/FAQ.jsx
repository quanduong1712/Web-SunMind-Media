import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-wrap">
      <div className="container-main">
        <SectionTitle
          eyebrow="FAQ"
          title="Câu hỏi"
          highlight="thường gặp"
          desc="Tổng hợp các thông tin quan trọng để doanh nghiệp nhanh chóng đánh giá và bắt đầu hợp tác cùng SunMind Media."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <article key={item.q} className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-bold">{item.q}</h3>
                  <ChevronDown
                    className={`transition ${isOpen ? "rotate-180 text-sunmind-primary" : "text-sunmind-gray"}`}
                  />
                </button>
                {isOpen ? <p className="mt-3 leading-relaxed text-sunmind-gray">{item.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
