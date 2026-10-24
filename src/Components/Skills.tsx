import { skillsData } from "../data/skill";

export default function Skills() {
    return (
        <section id="skills" className="max-w-6xl mx-auto py-20 px-4 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center w-full">

                <div className="flex flex-col items-center mb-12">
                    <div className="bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/40 flex items-center justify-center space-x-1.5 w-fit">
                        <span className="text-[12px] text-cyan-400 font-mono font-semibold">03.</span>
                        <span className="text-[12px] font-medium font-mono text-zinc-400">Technical Skills</span>
                    </div>

                    <div className="text-center py-3">
                        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                            Technologies & Toolkit
                        </h2>
                        <p className="text-zinc-400 sm:text-base pt-2 max-w-2xl leading-relaxed">
                            A focused stack of modern tools and libraries I leverage to build scalable, high-performance web interfaces.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {skillsData.map((card) => (
                        <div
                            key={card.title}
                            className="bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/70 transition-all duration-300 p-6 rounded-2xl w-full flex flex-col justify-between backdrop-blur-sm"
                        >
                            <div>
                                <div className="flex items-center gap-3.5 border-b border-zinc-800/80 pb-4 mb-4">
                                    <div className="bg-zinc-800/60 border border-zinc-700/50 p-2 rounded-xl text-cyan-400">
                                        {card.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-white text-base font-semibold tracking-wide">{card.title}</h3>
                                        <p className="text-zinc-400 text-xs font-mono mt-0.5">{card.subtitle}</p>
                                    </div>
                                </div>

                                <div className="space-y-1 my-2">
                                    {card.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex justify-between items-center py-2 px-2.5 rounded-lg hover:bg-zinc-800/30 transition-colors"
                                        >
                                            <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                                            <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/50 px-2 py-0.5 rounded border border-zinc-700/40">
                                                {skill.description}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4 mt-4">
                                <span className="text-[11px] font-mono text-zinc-500">Verified in projects</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                    <span className="text-xs text-emerald-400 font-mono font-medium">Active</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}