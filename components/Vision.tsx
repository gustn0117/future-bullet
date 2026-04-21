import Reveal from "./Reveal";

const visions = [
  {
    no: "01",
    title: "10개 이상의 메가 브랜드 런칭",
    description: "뷰티부터 건강기능식품까지, 일상을 바꾸는 프리미엄 브랜드를 만들어냅니다.",
  },
  {
    no: "02",
    title: "글로벌 K-브랜드의 주역",
    description: "전 세계가 열광하는 K-브랜드, 글로벌 시장을 이끄는 플레이어로 자리잡습니다.",
  },
  {
    no: "03",
    title: "연 매출 500억+ 돌파",
    description: "2년 내 연 매출 500억, 멈추지 않는 폭발적인 성장 그래프를 그립니다.",
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#05070d] py-28 md:py-40"
    >
      {/* subtle bg */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(ellipse_at_top_left,rgba(79,139,255,0.5),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(167,125,255,0.5),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] text-[#7aa4ff] mb-4">OUR VISION</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              당신의 열정이 곧
              <br />
              <span className="bg-gradient-to-r from-[#7aa4ff] via-[#a77dff] to-[#e27dff] bg-clip-text text-transparent">
                우리의 커리어
              </span>
              가 됩니다.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {visions.map((v, i) => (
            <Reveal key={v.no} delay={i * 100}>
              <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-10 transition-all duration-500 hover:border-white/20 hover:translate-y-[-4px]">
                <div className="text-5xl font-bold bg-gradient-to-br from-white/90 to-white/20 bg-clip-text text-transparent">
                  {v.no}
                </div>
                <h3 className="mt-6 text-xl md:text-2xl font-bold leading-snug">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed">
                  {v.description}
                </p>

                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7aa4ff]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Company images - horizontal scroll */}
      <div className="relative mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#05070d] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#05070d] to-transparent md:w-24" />

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 md:gap-6 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            { src: "/images/office-1.png", alt: "Future Bullet Office" },
            { src: "/images/office-2.png", alt: "Future Bullet Conference Room" },
            { src: "/images/office-3.png", alt: "Future Bullet Workspace" },
            { src: "/images/office-4.png", alt: "Future Bullet Meeting Room" },
          ].map((img, i) => (
            <div
              key={i}
              className="relative aspect-[16/10] w-[82vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/5 md:w-[60vw] lg:w-[48vw]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
