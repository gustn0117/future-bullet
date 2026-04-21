import Reveal from "./Reveal";

export default function Opportunities() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Earth-from-space backdrop via CSS gradients */}
      <div className="relative h-[70vh] md:h-[85vh] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(40,80,200,0.55)_0%,rgba(10,20,60,0.6)_30%,rgba(0,0,0,1)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_120%,rgba(80,140,255,0.85)_0%,rgba(30,50,150,0.4)_30%,transparent_60%)]" />
        {/* horizon glow */}
        <div className="absolute inset-x-0 bottom-[44%] h-px bg-gradient-to-r from-transparent via-[#7aa4ff]/70 to-transparent blur-[1px]" />
        {/* stars */}
        <Stars />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Innovation Leading the Future
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/60 tracking-wide leading-relaxed">
              퓨처블릿은 열정과 집중력을 다해
              <br />
              모두가 열광하는 최고의 브랜드를 만듭니다.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  const stars = Array.from({ length: 80 });
  return (
    <div className="absolute inset-0">
      {stars.map((_, i) => {
        const top = Math.random() * 60;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 0.5;
        const delay = Math.random() * 4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse-slow"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.1 + Math.random() * 0.7,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
