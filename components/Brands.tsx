import Reveal from "./Reveal";

const brands = [
  {
    name: "ESTHE'LIVE",
    korean: "에스테리브",
    tagline: "Professional Home Aesthetic Brand",
    description: "홈에스테틱 스킨케어 브랜드 에스테리브",
    logo: "/brands/esthelive-logo.png",
    href: "#",
    accent: "from-[#3a2a5c] to-[#111018]",
  },
  {
    name: "ON THE CELL",
    korean: "온더셀",
    tagline: "Advanced Science for Scalp Balance",
    description: "과학으로 검증된 온더셀 헤어케어 솔루션",
    logo: "/brands/onthecell-logo.png",
    href: "#",
    accent: "from-[#1f2a3d] to-[#0b0f18]",
  },
  {
    name: "8H LAB",
    korean: "에잇아워랩",
    tagline: "Designing Your 8 Hours of Sleep",
    description: "당신의 잠든 8시간을 설계합니다",
    logo: "/brands/8hlab-logo.png",
    href: "#",
    accent: "from-[#1b2a4a] to-[#0a101c]",
  },
  {
    name: "SLENIX",
    korean: "슬레닉스",
    tagline: "Setting a New Standard for Your Body",
    description: "과학이 만든 똑똑한 바디 루틴",
    logo: "/brands/slenix-logo.png",
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
              소비자의 감각을 이해하고, 트렌드를 선도하며
              <br />
              <span className="bg-gradient-to-r from-[#7aa4ff] to-[#e27dff] bg-clip-text text-transparent">
                브랜드에 새로운 의미
              </span>
              를 더합니다.
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-16 md:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#05070d] to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#05070d] to-transparent md:w-24" />

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 md:gap-6 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {brands.map((b, i) => (
            <a
              key={b.name}
              href={b.href}
              className={`group relative flex aspect-[3/4] w-[72vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br ${b.accent} sm:w-[48vw] md:w-[32vw] lg:w-[24vw]`}
            >
              <div className="flex flex-1 items-center justify-center p-10 transition-transform duration-700 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.logo}
                  alt={b.name}
                  className="max-h-24 w-auto max-w-[70%] object-contain brightness-0 invert md:max-h-28"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <div className="relative z-10 mt-auto w-full p-6 md:p-7">
                <div className="text-[10px] tracking-[0.3em] text-white/60">{b.korean}</div>
                <h3 className="mt-1.5 text-lg font-bold tracking-wide md:text-xl">{b.name}</h3>
                <p className="mt-1 text-xs text-[#a77dff] md:text-sm">{b.tagline}</p>
                <p className="mt-3 text-xs text-white/70 md:text-sm">{b.description}</p>
              </div>

              <div className="absolute top-5 right-5 text-[10px] tracking-[0.3em] text-white/30">
                0{i + 1} / 0{brands.length}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
