import Reveal from "./Reveal";

const brands = [
  {
    name: "ESTHE'LIVE",
    korean: "에스테리브",
    tagline: "Professional Anti-Aging Ampoule",
    description: "프로페셔널 안티에이징 앰플로 피부 본연의 감각을 깨웁니다.",
    image: "/brands/esthelive.png",
    href: "#",
    accent: "from-[#3a2a5c] to-[#111018]",
  },
  {
    name: "ON THE CELL",
    korean: "온더셀",
    tagline: "Deep Cleansing Scalp Care",
    description: "딥클렌징과 영양 공급을 동시에, 두피의 균형을 되찾습니다.",
    image: "/brands/onthecell.png",
    href: "#",
    accent: "from-[#1f2a3d] to-[#0b0f18]",
  },
  {
    name: "8H LAB",
    korean: "에잇아워랩",
    tagline: "NoseMode · Precision Breathing",
    description: "깊은 수면과 상쾌한 아침을 위한 정밀 호흡 솔루션.",
    image: "/brands/8hlab.png",
    href: "#",
    accent: "from-[#1b2a4a] to-[#0a101c]",
  },
  {
    name: "SLENIX",
    korean: "슬레닉스",
    tagline: "Body Boost Shot",
    description: "타겟 활성과 고성능 포뮬러로 바디 컨디션을 재정의합니다.",
    image: "/brands/slenix.png",
    href: "#",
    accent: "from-[#123a3b] to-[#0a1418]",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="relative bg-[#05070d] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.35em] text-[#a77dff] mb-4">OUR BRANDS</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              소비자의 감각을 이해하고,
              <br />
              트렌드를 선도하며,{" "}
              <span className="bg-gradient-to-r from-[#7aa4ff] to-[#e27dff] bg-clip-text text-transparent">
                브랜드에 새로운 의미
              </span>
              를 더합니다.
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <a
                href={b.href}
                className={`group relative flex aspect-[4/5] md:aspect-[5/4] overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br ${b.accent}`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
                  {/* Use plain img to avoid next/image optimization config */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.image}
                    alt={b.name}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="relative z-10 mt-auto w-full p-8 md:p-10">
                  <div className="text-[11px] tracking-[0.3em] text-white/60">{b.korean}</div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-wide">{b.name}</h3>
                  <p className="mt-1 text-sm text-[#a77dff]">{b.tagline}</p>
                  <p className="mt-4 max-w-md text-sm text-white/70">{b.description}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                    홈페이지 보기
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* corner index */}
                <div className="absolute top-6 right-6 text-xs tracking-[0.3em] text-white/30">
                  0{i + 1} / 0{brands.length}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
