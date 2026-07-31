import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import Navbar from "./components/Navbar";
import MagneticButton from "./components/MagneticButton";
import Footer from "./components/Footer";

const homeStats = [
  "50+ Creator/KOC đang hợp tác",
  "120+ chiến dịch đã triển khai",
  "3000+ nội dung được sản xuất",
  "300+ phiên livestream",
  "20+ tỷ đồng GMV",
  "35% tăng trưởng trung bình",
];

const homeServiceGroups = [
  {
    title: "Quản lý Creator",
    items: [
      "Tuyển chọn Creator",
      "Đào tạo và định hướng nội dung",
      "Quản lý hiệu suất",
      "Kết nối chiến dịch và nhãn hàng",
      "Xây dựng lộ trình phát triển dài hạn",
    ],
  },
  {
    title: "Tiếp thị Affiliate",
    items: [
      "Xây dựng mạng lưới Affiliate Creator",
      "Phân phối sản phẩm phù hợp",
      "Theo dõi doanh thu và đơn hàng",
      "Tối ưu nội dung theo hiệu suất",
      "Báo cáo chiến dịch",
    ],
  },
  {
    title: "Vận hành Livestream Commerce",
    items: [
      "Xây dựng kịch bản livestream",
      "Tuyển chọn và đào tạo host",
      "Setup phòng livestream",
      "Vận hành phiên live",
      "Theo dõi traffic, tỷ lệ chuyển đổi và GMV",
    ],
  },
  {
    title: "Sản xuất nội dung",
    items: [
      "Nghiên cứu insight",
      "Lên ý tưởng và kịch bản",
      "Quay dựng video",
      "Kiểm duyệt nội dung",
      "Sản xuất nội dung bán hàng đa nền tảng",
    ],
  },
  {
    title: "Chiến dịch thương hiệu",
    items: [
      "Kết nối thương hiệu với Creator",
      "Triển khai chiến dịch KOC",
      "Seeding và review sản phẩm",
      "Quản lý tiến độ, nội dung và báo cáo",
      "Đánh giá hiệu quả chiến dịch",
    ],
  },
];

const aboutStory = [
  "SUNMIND MEDIA bắt đầu từ một nhu cầu rất rõ của thị trường: kết nối đúng Creator với đúng thương hiệu để tạo ra tăng trưởng thật, thay vì chạy theo chỉ số bề nổi.",
  "Chúng tôi xây dựng năng lực vận hành từ thực tế triển khai Affiliate, sản xuất nội dung và livestream commerce trên các nền tảng thương mại điện tử.",
  "SUNMIND tập trung vào 3 lớp giá trị: chuẩn hóa quy trình, nâng chất lượng nội dung và tối ưu hiệu suất theo dữ liệu đo lường.",
  "Với Creator, chúng tôi đồng hành theo lộ trình phát triển dài hạn. Với thương hiệu, chúng tôi thiết kế giải pháp phù hợp mục tiêu doanh thu và năng lực vận hành nội bộ.",
  "Mục tiêu xuyên suốt của SUNMIND là xây dựng hệ sinh thái hợp tác minh bạch, hiệu quả và bền vững cho Creator, thương hiệu và nền tảng.",
];

const coreValues = [
  {
    title: "Minh bạch",
    desc: "SUNMIND đề cao sự rõ ràng trong mọi hoạt động hợp tác, từ quy trình triển khai, quyền lợi, trách nhiệm đến dữ liệu và kết quả.",
  },
  {
    title: "Hiệu quả",
    desc: "Mọi hoạt động đều hướng tới kết quả có thể đo lường, tối ưu hiệu suất và tạo ra giá trị thực cho Creator, thương hiệu và nền tảng.",
  },
  {
    title: "Đồng hành",
    desc: "SUNMIND đồng hành cùng đối tác từ định hướng, triển khai đến đánh giá và phát triển dài hạn.",
  },
  {
    title: "Đổi mới",
    desc: "Chủ động cập nhật xu hướng, công nghệ và phương thức vận hành mới để thích ứng nhanh với thị trường.",
  },
  {
    title: "Phát triển bền vững",
    desc: "Ưu tiên tăng trưởng cân bằng giữa doanh thu, chất lượng nội dung và giá trị hợp tác lâu dài.",
  },
  {
    title: "Trách nhiệm",
    desc: "Chịu trách nhiệm với từng cam kết, từng nội dung và từng kết quả triển khai trong mọi dự án.",
  },
];

const serviceOverview = [
  "Quản lý và phát triển Creator",
  "Tiếp thị Affiliate",
  "Livestream Commerce",
  "Sản xuất nội dung",
  "Chiến dịch dành cho thương hiệu",
];

const creatorGroups = [
  "Creator nội dung",
  "Creator Affiliate",
  "Creator KOC/Review",
  "Livestream Host",
  "Creator hiệu suất",
];

const creatorCriteria = [
  "Sự phù hợp với ngành hàng",
  "Chất lượng và phong cách nội dung",
  "Tệp người xem",
  "Mức độ tương tác",
  "Hiệu suất Affiliate hoặc Livestream",
  "Tinh thần hợp tác và tiềm năng phát triển",
];

const collaborationTabs = [
  { key: "brand", label: "Dành cho Thương hiệu" },
  { key: "creator", label: "Dành cho Creator" },
  { key: "platform", label: "Dành cho nền tảng" },
];

const heroPillars = [
  {
    title: "Lộ trình hiệu suất",
    desc: "Thiết kế lộ trình tăng trưởng theo mục tiêu doanh thu và ngân sách thực tế.",
    icon: TrendingUp,
  },
  {
    title: "Độ khớp Creator - thị trường",
    desc: "Kết nối Creator với ngành hàng và hành vi mua sắm để tăng tỷ lệ chuyển đổi.",
    icon: Zap,
  },
  {
    title: "Theo dõi toàn phễu",
    desc: "Theo dõi minh bạch từ nội dung đến GMV, tối ưu theo chu kỳ triển khai.",
    icon: ShieldCheck,
  },
];

const heroTrustSignals = [
  "Chiến lược theo KPI",
  "Vận hành xuyên suốt",
  "Báo cáo minh bạch",
];

function PageHeader({ title, subtitle }) {
  return (
    <section className="section-wrap pb-0 pt-24 md:pt-28">
      <div className="container-main">
        <div className="rounded-[1.8rem] border border-orange-100 bg-white px-6 py-7 shadow-soft md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sunmind-primary">SunMind Media</p>
          <h1 className="mt-2 text-3xl font-black text-sunmind-dark md:text-5xl">{title}</h1>
          {subtitle ? <p className="mt-4 max-w-4xl text-base text-sunmind-gray md:text-lg">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-sunmind-gray md:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-sunmind-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [collaborationTarget, setCollaborationTarget] = useState("brand");

  const pageTitles = useMemo(
    () => ({
      home: "Trang chủ",
      about: "Về SUNMIND",
      services: "Dịch vụ",
      "creator-network": "Mạng lưới Creator",
      collaboration: "Hợp tác",
      contact: "Liên hệ",
    }),
    []
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage, collaborationTarget]);

  const renderHomePage = () => (
    <>
      <section className="section-wrap relative overflow-hidden pb-8 pt-28 md:pt-32">
        <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
        <div className="container-main grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
          <div className="h-full rounded-[2rem] border border-orange-100 bg-white p-7 shadow-[0_28px_80px_rgba(28,20,5,0.08)] md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">SUNMIND MEDIA</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-sunmind-primary">
                <BadgeCheck size={13} /> Đối tác tăng trưởng
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight text-sunmind-dark md:text-6xl">
              Creator Commerce Engine cho <span className="text-sunmind-primary">thương hiệu muốn scale doanh thu</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-sunmind-gray md:text-lg">
              SunMind kết hợp chiến lược Creator, nội dung chuyển đổi và vận hành livestream để tạo tăng trưởng bền vững,
              không phụ thuộc vào các chiến dịch ngắn hạn.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton onClick={() => { setActivePage("collaboration"); setCollaborationTarget("brand"); }}>
                <span className="inline-flex items-center gap-2">Đặt lịch tư vấn chiến lược <ArrowRight size={16} /></span>
              </MagneticButton>
              <MagneticButton onClick={() => setActivePage("creator-network")} light className="border-orange-300 text-sunmind-primary">
                Đăng ký trở thành Creator
              </MagneticButton>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {heroTrustSignals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-semibold text-sunmind-gray"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="h-full rounded-[2rem] border border-orange-100 bg-gradient-to-b from-white to-orange-50/50 p-7 shadow-[0_24px_60px_rgba(35,20,0,0.08)] md:p-9">
            <h2 className="text-2xl font-extrabold text-sunmind-dark md:text-3xl">Bản đồ tăng trưởng</h2>
            <p className="mt-3 text-sm leading-relaxed text-sunmind-gray md:text-base">
              Mỗi chiến dịch được vận hành như một mô hình tăng trưởng đầy đủ: từ insight đến doanh thu.
            </p>
            <div className="mt-6 grid gap-3">
              {heroPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="rounded-xl border border-orange-100 bg-white px-4 py-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg border border-orange-200 bg-orange-50 p-2 text-sunmind-primary">
                        <Icon size={15} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-sunmind-dark">{pillar.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-sunmind-gray">{pillar.desc}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-5 rounded-xl border border-orange-200/80 bg-white px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sunmind-primary">Tăng tốc chuyển đổi</p>
              <p className="mt-2 text-sm text-sunmind-gray">Xem cách SunMind thiết kế mô hình hợp tác cho thương hiệu trong 3 bước triển khai đầu tiên.</p>
              <button
                type="button"
                onClick={() => { setActivePage("collaboration"); setCollaborationTarget("brand"); }}
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-sunmind-primary transition hover:text-orange-700"
              >
                Xem mô hình hợp tác <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-0">
        <div className="container-main grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeStats.map((stat) => (
            <article key={stat} className="relative overflow-hidden rounded-[1.25rem] border border-orange-100 bg-white px-5 py-4 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-transparent" />
              <p className="text-sm font-bold text-sunmind-dark md:text-base">{stat}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="container-main rounded-[2rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
          <div className="grid gap-7 xl:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black text-sunmind-dark md:text-5xl">Giới thiệu ngắn về SUNMIND</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
                <p>
                  SUNMIND MEDIA là đơn vị truyền thông và thương mại nội dung tập trung vào hệ sinh thái Creator Commerce. Chúng tôi kết nối Creator, thương hiệu và nền tảng bằng cách làm việc theo quy trình rõ ràng và mục tiêu đo lường cụ thể.
                </p>
                <p>
                  Từ tuyển chọn Creator, xây dựng nội dung, triển khai livestream đến tối ưu chuyển đổi, mọi hoạt động đều được vận hành dựa trên dữ liệu và phản hồi thực tế từ thị trường.
                </p>
                <p>
                  SUNMIND ưu tiên giá trị dài hạn: nội dung đúng tệp, vận hành đúng nhịp, và tăng trưởng đủ bền để có thể mở rộng theo từng giai đoạn.
                </p>
              </div>
            </div>

            <aside className="rounded-[1.4rem] border border-orange-100 bg-orange-50/45 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sunmind-primary">Lợi thế triển khai</p>
              <div className="mt-4 grid gap-3">
                {[
                  "Đội ngũ vận hành chuyên trách theo ngành hàng",
                  "Quy trình phối hợp rõ vai trò, rõ thời gian",
                  "Hệ theo dõi hiệu suất và báo cáo định kỳ",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm font-semibold text-sunmind-dark">
                    {item}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActivePage("about")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sunmind-primary transition hover:text-orange-700"
              >
                Xem thêm về SUNMIND <ArrowRight size={15} />
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main">
          <h2 className="text-center text-3xl font-black text-sunmind-dark md:text-5xl">Dịch vụ nổi bật</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-sunmind-gray md:text-lg">
            SUNMIND triển khai theo 5 nhóm chính, tập trung vào quy trình rõ ràng và hiệu quả có thể đo lường.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceGroups.map((group) => (
              <article key={group.title} className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-sunmind-dark">{group.title}</h3>
                <BulletList items={group.items} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main rounded-[1.8rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
          <h3 className="text-2xl font-extrabold text-sunmind-dark md:text-3xl">Quy trình vận hành</h3>
          <p className="mt-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
            {"Tiếp nhận mục tiêu -> Phân tích sản phẩm -> Lựa chọn Creator -> Sản xuất nội dung -> Triển khai -> Theo dõi dữ liệu -> Tối ưu -> Báo cáo"}
          </p>
          <p className="mt-4 text-sm text-sunmind-gray">
            SUNMIND tập trung chứng minh năng lực bằng quy trình rõ ràng, minh bạch và có thể theo dõi hiệu suất theo từng giai đoạn.
          </p>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main rounded-[1.8rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
          <h3 className="text-2xl font-extrabold text-sunmind-dark md:text-3xl">Ngành hàng đã triển khai</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Làm đẹp và chăm sóc cá nhân",
              "Thời trang",
              "Gia dụng",
              "Mẹ và bé",
              "Thực phẩm",
              "Đời sống",
              "Điện tử và phụ kiện",
            ].map((item) => (
              <span key={item} className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-sunmind-primary">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap dark-grid relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-36 w-[70%] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="container-main rounded-[2rem] border border-orange-400/20 bg-white/5 px-6 py-14 text-center backdrop-blur md:px-12">
          <h2 className="text-3xl font-black text-white md:text-5xl">Sẵn sàng biến nội dung thành doanh thu?</h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-orange-100/90 md:text-lg">
            SunMind giúp bạn đi từ ý tưởng chiến dịch đến kết quả thương mại bằng một hệ vận hành có thể đo lường và mở rộng.
          </p>
          <div className="mx-auto mt-6 grid max-w-4xl gap-3 text-left md:grid-cols-3">
            {[
              "Lộ trình 90 ngày để kiểm chứng hiệu quả",
              "Đội ngũ triển khai bám sát KPI theo tuần",
              "Báo cáo rõ ràng cho từng giai đoạn",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-orange-300/30 bg-white/10 px-4 py-3 text-sm font-semibold text-orange-100">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton onClick={() => { setActivePage("collaboration"); setCollaborationTarget("brand"); }}>
              <span className="inline-flex items-center gap-2">Nhận kế hoạch cho Thương hiệu <ArrowRight size={16} /></span>
            </MagneticButton>
            <MagneticButton onClick={() => setActivePage("creator-network")} light className="text-white">Dành cho Creator</MagneticButton>
            <MagneticButton onClick={() => setActivePage("contact")} light className="text-white">Liên hệ SUNMIND</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );

  const renderAboutPage = () => (
    <>
      <PageHeader
        title="Về SUNMIND"
        subtitle="Một đơn vị vận hành Creator Commerce theo định hướng dài hạn: chiến lược rõ, quy trình chắc và kết quả đo lường được."
      />

      <section className="section-wrap">
        <div className="container-main rounded-[2rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
          <h2 className="text-3xl font-black text-sunmind-dark md:text-5xl">Câu chuyện về SUNMIND</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Tầm nhìn</h3>
            <p className="mt-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
              Trở thành hệ sinh thái Creator Commerce uy tín, giúp Creator, thương hiệu và các nền tảng thương mại điện tử cùng tăng trưởng bền vững.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Sứ mệnh</h3>
            <p className="mt-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
              Tạo môi trường hợp tác chuyên nghiệp, minh bạch; giúp Creator phát triển năng lực nội dung và giúp thương hiệu tăng trưởng doanh thu có thể đo lường.
            </p>
          </article>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main">
          <h3 className="text-center text-3xl font-black text-sunmind-dark md:text-5xl">Giá trị cốt lõi</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value, idx) => (
              <article key={value.title} className="rounded-[1.4rem] border border-orange-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-sunmind-primary">0{idx + 1}</p>
                <h4 className="mt-2 text-xl font-extrabold text-sunmind-dark">{value.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-sunmind-gray">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const renderServicesPage = () => (
    <>
      <PageHeader
        title="Dịch vụ"
        subtitle="Giải pháp tăng trưởng cho Creator và thương hiệu, thiết kế theo mục tiêu kinh doanh và hành vi người mua trên từng nền tảng."
      />

      <section className="section-wrap pt-8">
        <div className="container-main flex flex-wrap gap-4">
          <MagneticButton onClick={() => setActivePage("contact")}>Nhận tư vấn dịch vụ</MagneticButton>
          <MagneticButton onClick={() => { setActivePage("collaboration"); setCollaborationTarget("brand"); }} light className="border-orange-300 text-sunmind-primary">
            Gửi yêu cầu hợp tác
          </MagneticButton>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceOverview.map((item) => (
            <article key={item} className="rounded-[1.4rem] border border-orange-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-sunmind-primary">Nhóm dịch vụ</p>
              <h3 className="mt-2 text-xl font-bold text-sunmind-dark">{item}</h3>
              <p className="mt-2 text-sm text-sunmind-gray">Thiết kế linh hoạt theo ngành hàng, ngân sách và mục tiêu chuyển đổi.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main grid gap-5 xl:grid-cols-2">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Affiliate Marketing</h3>
            <BulletList
              items={[
                "Phân tích sản phẩm và khách hàng mục tiêu",
                "Lựa chọn, kết nối Creator",
                "Quản lý nội dung và tiến độ",
                "Theo dõi đơn hàng, doanh thu và hiệu suất",
                "Báo cáo, tối ưu chiến dịch",
              ]}
            />
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Creator Management</h3>
            <BulletList
              items={[
                "Tuyển chọn và phân loại Creator",
                "Định hướng nội dung",
                "Kết nối sản phẩm và chiến dịch",
                "Hỗ trợ Affiliate và Livestream",
                "Theo dõi, cải thiện hiệu suất",
              ]}
            />
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Livestream Commerce</h3>
            <BulletList
              items={[
                "Xây dựng kế hoạch và lịch livestream",
                "Chuẩn bị kịch bản, sản phẩm và ưu đãi",
                "Tuyển chọn, điều phối host",
                "Setup và vận hành phiên live",
                "Theo dõi GMV, đơn hàng và tỷ lệ chuyển đổi",
              ]}
            />
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Sản xuất nội dung</h3>
            <BulletList
              items={[
                "Nghiên cứu insight và ý tưởng",
                "Xây dựng kịch bản",
                "Quay dựng video",
                "Sản xuất nội dung review, Affiliate và quảng cáo",
                "Kiểm duyệt và hoàn thiện nội dung",
              ]}
            />
          </article>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main rounded-[1.8rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
          <h3 className="text-2xl font-extrabold text-sunmind-dark md:text-3xl">Quy trình hợp tác</h3>
          <p className="mt-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
            {"Tiếp nhận yêu cầu -> Đề xuất giải pháp -> Triển khai -> Theo dõi và tối ưu -> Báo cáo kết quả"}
          </p>
        </div>
      </section>

      <section className="section-wrap dark-grid relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-36 w-[70%] -translate-x-1/2 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="container-main rounded-[2rem] border border-orange-400/20 bg-white/5 px-6 py-14 text-center backdrop-blur md:px-12">
          <h3 className="text-3xl font-black text-white md:text-5xl">Bắt đầu hợp tác cùng SUNMIND</h3>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-orange-100/90 md:text-lg">
            Dù bạn là Creator đang muốn phát triển hoạt động Affiliate hay thương hiệu cần triển khai nội dung, KOC và Livestream, SUNMIND sẵn sàng đồng hành từ xây dựng kế hoạch đến vận hành và tối ưu hiệu quả.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton onClick={() => setActivePage("contact")}>Nhận tư vấn</MagneticButton>
            <MagneticButton onClick={() => setActivePage("creator-network")} light className="text-white">Đăng ký Creator</MagneticButton>
            <MagneticButton onClick={() => { setActivePage("collaboration"); setCollaborationTarget("brand"); }} light className="text-white">
              Gửi yêu cầu hợp tác
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );

  const renderCreatorNetworkPage = () => (
    <>
      <PageHeader
        title="Mạng lưới Creator"
        subtitle="Mạng lưới Creator được tuyển chọn theo độ phù hợp ngành hàng, chất lượng nội dung và năng lực tạo hiệu quả thương mại."
      />

      <section className="section-wrap">
        <div className="container-main grid gap-5 xl:grid-cols-2">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Các nhóm Creator</h3>
            <BulletList items={creatorGroups} />
            <p className="mt-4 text-sm text-sunmind-gray">
              Các lĩnh vực chính gồm làm đẹp, thời trang, gia dụng, mẹ và bé, ẩm thực, công nghệ và đời sống.
            </p>
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Tiêu chí lựa chọn</h3>
            <BulletList items={creatorCriteria} />
            <p className="mt-4 text-sm font-semibold text-sunmind-primary">Số lượng người theo dõi không phải là tiêu chí duy nhất.</p>
          </article>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="container-main grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Dành cho thương hiệu</h3>
            <BulletList
              items={[
                "Lựa chọn Creator phù hợp",
                "Kết nối và quản lý hợp tác",
                "Định hướng, kiểm duyệt nội dung",
                "Theo dõi tiến độ và hiệu suất",
                "Tổng hợp báo cáo chiến dịch",
              ]}
            />
            <MagneticButton onClick={() => { setActivePage("collaboration"); setCollaborationTarget("brand"); }} className="mt-6">
              Tìm Creator cho chiến dịch
            </MagneticButton>
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Dành cho Creator</h3>
            <BulletList
              items={[
                "Tiếp cận sản phẩm và chiến dịch phù hợp",
                "Kết nối với thương hiệu",
                "Hỗ trợ định hướng nội dung",
                "Tham gia Affiliate và Livestream",
                "Theo dõi, cải thiện hiệu suất",
                "Phát triển cơ hội hợp tác lâu dài",
              ]}
            />
            <MagneticButton onClick={() => setActivePage("contact")} className="mt-6">Đăng ký trở thành Creator</MagneticButton>
          </article>
        </div>
      </section>
    </>
  );

  const renderCollaborationBody = () => {
    if (collaborationTarget === "creator") {
      return (
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Dành cho Creator</h3>
            <BulletList
              items={[
                "Đăng ký để nhận chiến dịch phù hợp ngành hàng",
                "Nhận hỗ trợ định hướng nội dung và lịch triển khai",
                "Kết nối cơ hội Affiliate, Livestream và chiến dịch thương hiệu",
                "Kết nối cơ hội Affiliate, Livestream và chiến dịch thương hiệu",
                "Theo dõi hiệu suất để cải thiện tăng trưởng dài hạn",
              ]}
            />
          </article>
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Mục tiêu hợp tác</h3>
            <p className="mt-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
              SUNMIND đồng hành cùng Creator theo mô hình minh bạch, có lộ trình và tập trung kết quả thực để phát triển bền vững.
            </p>
            <MagneticButton onClick={() => setActivePage("contact")} className="mt-6">Đăng ký Creator</MagneticButton>
          </article>
        </div>
      );
    }

    if (collaborationTarget === "platform") {
      return (
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Dành cho nền tảng</h3>
            <BulletList
              items={[
                "Hợp tác phát triển mạng lưới Creator chất lượng",
                "Chuẩn hóa quy trình nội dung và livestream theo chính sách",
                "Tối ưu hiệu suất chiến dịch theo dữ liệu",
                "Đồng triển khai các chương trình tăng trưởng dài hạn",
              ]}
            />
          </article>
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Mục tiêu hợp tác</h3>
            <p className="mt-4 text-base leading-relaxed text-sunmind-gray md:text-lg">
              SUNMIND xây dựng năng lực vận hành để phối hợp cùng nền tảng một cách minh bạch, ổn định và có trách nhiệm.
            </p>
            <MagneticButton onClick={() => setActivePage("contact")} className="mt-6">Gửi yêu cầu hợp tác</MagneticButton>
          </article>
        </div>
      );
    }

    return (
      <>
        <div className="grid gap-5 xl:grid-cols-3">
          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Những vấn đề thương hiệu thường gặp</h3>
            <BulletList
              items={[
                "Khó tìm Creator phù hợp",
                "Nội dung không đồng đều",
                "Khó kiểm soát tiến độ",
                "Creator có view nhưng không tạo ra doanh thu",
                "Không có hệ thống theo dõi hiệu suất",
                "Livestream thiếu quy trình",
              ]}
            />
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">SUNMIND giải quyết như thế nào</h3>
            <BulletList
              items={[
                "Tuyển chọn Creator theo dữ liệu",
                "Ghép sản phẩm với Creator phù hợp",
                "Kiểm duyệt nội dung",
                "Theo dõi chỉ số",
                "Điều chỉnh chiến dịch",
                "Báo cáo minh bạch",
              ]}
            />
          </article>

          <article className="rounded-[1.6rem] border border-orange-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Các mô hình hợp tác</h3>
            <BulletList
              items={[
                "Booking Creator theo chiến dịch",
                "Affiliate Performance",
                "Livestream trọn gói",
                "Sản xuất nội dung",
                "Quản lý Creator dài hạn",
                "Hợp tác vận hành theo tháng",
              ]}
            />
          </article>
        </div>

        <section className="section-wrap px-0 pb-0 pt-7">
          <div className="container-main rounded-[1.8rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
            <h3 className="text-2xl font-extrabold text-sunmind-dark md:text-3xl">Form nhận yêu cầu</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Tên doanh nghiệp",
                "Người liên hệ",
                "Số điện thoại/email",
                "Ngành hàng",
                "Sản phẩm",
                "Mục tiêu chiến dịch",
                "Ngân sách dự kiến",
                "Thời gian triển khai",
              ].map((field) => (
                <label key={field} className="text-sm font-semibold text-sunmind-dark">
                  {field}
                  <input
                    type="text"
                    placeholder={field}
                    className="mt-2 w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-sm text-sunmind-dark outline-none transition focus:border-sunmind-primary"
                  />
                </label>
              ))}
            </div>
            <div className="mt-6">
              <MagneticButton onClick={() => setActivePage("contact")}>Gửi yêu cầu hợp tác</MagneticButton>
            </div>
          </div>
        </section>
      </>
    );
  };

  const renderCollaborationPage = () => (
    <>
      <PageHeader title="Hợp tác" subtitle="Chọn hình thức hợp tác phù hợp để bắt đầu nhanh, vận hành chắc và mở rộng bền vững cùng SunMind." />
      

      <section className="section-wrap pt-8">
        <div className="container-main flex flex-wrap gap-3">
          {collaborationTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setCollaborationTarget(tab.key)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                collaborationTarget === tab.key
                  ? "border-sunmind-primary bg-sunmind-primary text-white"
                  : "border-orange-200 bg-white text-sunmind-dark hover:border-orange-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-6">
        <div className="container-main">{renderCollaborationBody()}</div>
      </section>
    </>
  );

  const renderContactPage = () => (
    <>
      <PageHeader title="Liên hệ" subtitle="Để lại nhu cầu của bạn, đội ngũ SunMind sẽ phản hồi nhanh với đề xuất phù hợp mục tiêu triển khai." />

      <section className="section-wrap">
        <div className="container-main grid gap-5 xl:grid-cols-[1fr_1.1fr]">
          <article className="rounded-[1.8rem] border border-orange-100 bg-white p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Thông tin công ty</h3>
            <BulletList
              items={[
                "Tên công ty: SUNMIND MEDIA",
                "Địa chỉ: Ngọc Kim, Tân Yên, Bắc Ninh",
                "Website: sunmindmedia.vn",
                "Email: contact@sunmindmedia.com",
                "Số điện thoại: 0966 878 344",
                "Mã số doanh nghiệp: cập nhật khi công khai",
                "Thời gian làm việc: Thứ 2 - Thứ 7, 08:30 - 18:00",
              ]}
            />
            <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-sunmind-gray">
              Kênh mạng xã hội: Facebook | TikTok | Zalo
            </div>
            <div className="mt-4 rounded-xl border border-orange-200 bg-white px-4 py-6 text-center text-sm text-sunmind-gray">
              Bản đồ: có thể nhúng Google Maps tại khu vực thông tin liên hệ chính thức.
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-orange-100 bg-white p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-extrabold text-sunmind-dark">Form liên hệ</h3>
            <p className="mt-3 text-sm text-sunmind-gray">
              Chọn mục đích liên hệ: Hợp tác dành cho Thương hiệu, Đăng ký Creator, Hợp tác nền tảng, Tuyển dụng, Hỗ trợ chung.
            </p>
            <div className="mt-5 grid gap-4">
              <input type="text" placeholder="Họ và tên" className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm outline-none focus:border-sunmind-primary" />
              <input type="text" placeholder="Số điện thoại" className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm outline-none focus:border-sunmind-primary" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm outline-none focus:border-sunmind-primary" />
              <select className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm outline-none focus:border-sunmind-primary" defaultValue="">
                <option value="" disabled>Chọn mục đích liên hệ</option>
                <option>Hợp tác dành cho Thương hiệu</option>
                <option>Đăng ký Creator</option>
                <option>Hợp tác nền tảng</option>
                <option>Tuyển dụng</option>
                <option>Hỗ trợ chung</option>
              </select>
              <textarea rows={4} placeholder="Nội dung liên hệ" className="w-full rounded-xl border border-orange-200 px-4 py-3 text-sm outline-none focus:border-sunmind-primary" />
            </div>
            <MagneticButton className="mt-6">Gửi liên hệ</MagneticButton>
          </article>
        </div>
      </section>
    </>
  );

  const renderPage = () => {
    if (activePage === "home") return renderHomePage();
    if (activePage === "about") return renderAboutPage();
    if (activePage === "services") return renderServicesPage();
    if (activePage === "creator-network") return renderCreatorNetworkPage();
    if (activePage === "collaboration") return renderCollaborationPage();
    return renderContactPage();
  };

  return (
    <div className="bg-sunmind-bg text-sunmind-dark">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
}
