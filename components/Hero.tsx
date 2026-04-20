import ParticleRing from "./ParticleRing";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      <ParticleRing />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_70%,#000_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] tracking-[0.3em] text-white/70 backdrop-blur-sm animate-fade-up">
          NO.1 D2C COMPANY
        </div>
        <h1
          className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-up"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          숫자로 증명하고,
          <br />
          <span className="bg-gradient-to-r from-[#7aa4ff] via-[#a77dff] to-[#e27dff] bg-clip-text text-transparent">
            감각으로 압도합니다.
          </span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.35s", animationFillMode: "both" }}
        >
          제품 기획부터 퍼포먼스 마케팅까지,<br className="md:hidden" />
          성공의 공식을 현실로 구현합니다.
        </p>
        <div
          className="mt-10 flex items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.55s", animationFillMode: "both" }}
        >
          <a
            href="#growth"
            className="rounded-full bg-white text-black px-7 py-3 text-sm font-semibold transition hover:bg-white/90"
          >
            Explore Growth
          </a>
          <a
            href="#brands"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Our Brands
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em]">
        <div className="flex flex-col items-center gap-2">
          <span>SCROLL</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
