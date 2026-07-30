import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements({ items }) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, idx) => {
      if (!el) return;
      const target = Number(el.dataset.target);
      const proxy = { value: 0 };

      gsap.to(proxy, {
        value: target,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(proxy.value).toLocaleString("en-US");
        },
      });

      if (idx === refs.current.length - 1 && target <= 5) {
        el.textContent = String(target);
      }
    });
  }, []);

  return (
    <section className="section-wrap bg-sunmind-light">
      <div className="container-main">
        <SectionTitle
          eyebrow="THÀNH TỰU"
          title="Những con số"
          highlight="ấn tượng"
          desc="Hiệu quả của SunMind được chứng minh bằng kết quả vận hành thực tế trên nhiều ngành hàng và quy mô doanh nghiệp."
        />

        <div className="mt-14 grid gap-4 rounded-[2rem] border border-orange-200 bg-white p-7 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, idx) => (
            <div key={item.label} className="rounded-2xl border border-orange-100 p-5 text-center">
              <div className="text-5xl font-black text-sunmind-primary">
                <span ref={(node) => (refs.current[idx] = node)} data-target={item.value}>
                  0
                </span>
                <span>{item.suffix}</span>
              </div>
              <p className="mt-2 text-sunmind-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
