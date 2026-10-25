import { Code2, Smartphone, GitPullRequest, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export default function About() {
    const { t } = useLanguage();
    const icons = [
        <Code2 className="w-5 h-5 text-cyan-400" />,
        <Smartphone className="w-5 h-5 text-emerald-400" />,
        <GitPullRequest className="w-5 h-5 text-amber-400" />,
        <Rocket className="w-5 h-5 text-purple-400" />,
    ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center max-w-7xl mx-auto">
            <div className="w-full px-4 flex flex-col">
                <div className="flex flex-col items-center gap-3 m-5">
                    <div className="bg-zinc-600/40 px-2 py-0.5 rounded-full border border-zinc-200/20 flex items-center justify-center space-x-1 w-fit">
                        <span className="text-[12px] text-cyan-400/80 font-mono">01.</span>
                        <span className="text-[12px] text-zinc-400 font-medium font-mono">{t.about.badge}</span>
                    </div>
                    <div className="text-center space-y-1.5 mb-8">
                        <h1 className="font-extrabold text-3xl text-white sm:text-4xl">{t.about.title}</h1>
                        <p className="text-zinc-400 md:text-lg">{t.about.subtitle}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start max-w-7xl mx-auto w-full">
                    <div className="lg:col-span-5 rounded-2xl border border-zinc-500/60 p-5 text-left space-y-2.5">
                        <div className="flex gap-2 items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                            <span className="font-semibold">{t.about.cardTitle}</span>
                        </div>
                        <h2 className="text-zinc-300/90">{t.about.cardLead}</h2>
                        <p className="text-zinc-400/90">
                            {t.about.cardP1}
                        </p>
                        <p className="text-zinc-400/90 border-b border-zinc-500/60 pb-3">
                            {t.about.cardP2}
                        </p>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col text-xs">
                                <span className="text-zinc-400 font-medium">{t.about.locationLabel}</span>
                                <span className="font-mono">{t.about.locationVal}</span>
                            </div>
                            <div className="text-xs flex flex-col ">
                                <span className="text-zinc-400 font-medium">{t.about.roleLabel}</span>
                                <span className="text-emerald-400 font-mono">{t.about.roleVal}</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {t.about.highlights.map((item, index) => (
                            <div key={item.title}
                                className="flex flex-col justify-between  border p-4 rounded-2xl border-zinc-500/60 w-full"
                            >
                                <div className="w-9 h-9 bg-zinc-400/30 flex justify-center items-center rounded-lg">
                                    <span className="text-lg">{icons[index]}</span>
                                </div>
                                <div className="mt-3">
                                    <h1 className={`font-bold mb-2 ${index === 0 ? 'text-cyan-400' : 'text-white'}`}>{item.title}</h1>
                                    <p className="text-zinc-400/90 text-sm">{item.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}