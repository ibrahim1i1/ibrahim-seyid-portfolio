import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-105px)] flex items-center justify-center bg-black px-4 py-12 sm:px-8 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 50%, transparent 100%)',
        }}
      />
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-400">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 " />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{t.home.badge}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.home.title1}<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              {t.home.titleGradient}
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {t.home.intro}<span className="text-white font-medium"> İbrahim Seyid </span>{t.home.description}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <span>{t.home.exploreBtn}</span>
              <span className="font-mono text-base">↓</span>
            </a>

            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-7 py-3 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/80 hover:text-white transition-all active:scale-95"
              href="#contact"
            >
              <span>{t.home.contactBtn}</span>
              <span className="font-mono text-base">→</span>
            </a>
          </div>

          <div className="pt-6 border-t border-zinc-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
            <span className="text-zinc-500 font-mono font-bold uppercase tracking-wider text-[11px] mr-1">{t.home.techStack}</span>
            {['React', 'TypeScript', 'Tailwind Css', 'Git & GitHub'].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 px-2.5 py-1 font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>



        <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">

          <div className="relative">
            <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] rounded-[2.5rem] p-2 bg-gradient-to-b from-zinc-700/40 via-zinc-800/20 to-zinc-950 border border-zinc-700/40 shadow-2xl backdrop-blur-xl">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-zinc-900/90 to-black overflow-hidden relative flex items-end justify-center">

                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
                <img src="/images/demo.png"
                  alt="İbrahim Seyid"
                  className="w-full h-[98%] object-contain object-bottom filter contrast-100 select-none"
                />

                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="absolute -top-3 -right-3 sm:-right-5 z-20 flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-700/60 bg-zinc-900/90 px-3.5 py-2 shadow-2xl backdrop-blur-md">
              <span className="text-lg">⚛️</span>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 font-mono leading-none">Frontend</p>
                <p className="text-xs font-semibold text-white mt-0.5">React & TS</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 sm:-left-5 z-20 flex items-center gap-2.5 rounded-2xl border border-zinc-700/60 bg-zinc-900/90 p-3.5 py-2 shadow-2xl backdrop-blur-md">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 font-mono text-[12px] font-bold">
                UI
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">{t.home.responsiveTitle}</p>
                <p className="text-[10px] text-zinc-500 font-mono">{t.home.responsiveSub}</p>
              </div>
            </div>

          </div>
        </div>




      </div>

    </section>
  );
}