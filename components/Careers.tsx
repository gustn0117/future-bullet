import Reveal from "./Reveal";

const RECRUIT_URL =
  "https://alert-expansion-f1c.notion.site/348b64af6b6680c48c6df45135071c89?source=copy_link";

export default function Careers() {
  return (
    <section id="careers" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                지금 우리의 여정에
                <br />
                함께하세요
              </h2>
              <a
                href={RECRUIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white md:text-base"
              >
                <span className="tracking-wide">채용공고 바로가기</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative select-none">
              <div className="bg-gradient-to-r from-white/90 via-white/60 to-white/20 bg-clip-text text-6xl font-black tracking-[-0.02em] text-transparent md:text-8xl lg:text-9xl">
                FUTURE
              </div>
              <div className="mt-1 bg-gradient-to-r from-[#7aa4ff] via-[#a77dff] to-[#e27dff] bg-clip-text text-6xl font-black tracking-[-0.02em] text-transparent md:text-8xl lg:text-9xl">
                BULLET
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
