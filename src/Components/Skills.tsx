import { skillsData } from "../data/skill";
export default function Skills() {
    return (
        <section id="skills" className="max-w-6xl mx-auto min-h-screen">
            <div className="flex flex-col items-center">
                <div>
                    <div className="flex flex-col items-center">
                        <div className="bg-zinc-600/40 px-2 py-1.5 rounded-full border border-zinc-200/20 flex items-center justify-center space-x-1 w-fit">
                            <span className="text-[12px] text-cyan-400/80 font-mono">03.</span>
                            <span className="text-[12px] font-medium font-mono text-zinc-400">Technical Skills</span>
                        </div>

                        <div className="text-center py-2">
                            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">Technologies & Toolkit</h2>
                            <p className="text-zinc-400 sm:text-lg pt-2">A focused stack of modern tools and libraries I leverage to build scalable, high-performance web interfaces.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full p-3">
                    {skillsData.map((card) => (
                        <div
                            key={card.title}
                            className="border border-zinc-800 p-4 rounded-2xl w-full flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-2 border-b-2 border-zinc-700 pb-3">
                                <div className="bg-zinc-800/50 border border-zinc-700/60 p-1.5 rounded-lg">{card.icon}</div>

                                <div>
                                    <h3 className="text-white text-lg font-bold">{card.title}</h3>
                                    <p className="text-zinc-400 text-xs font-mono">{card.subtitle}</p>
                                </div>
                            </div>
                            <div className="my-4">
                                {card.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex justify-between items-center px-2 py-1 my-2 bg-zinc-900/70 rounded-lg border border-zinc-700/80"
                                    >
                                        <span className="font-bold ">{skill.name}</span>
                                        <span className="text-[12px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-1 rounded-sm border border-cyan-500/20">{skill.description}</span>
                                    </div>
                                ))}

                                <div className="flex items-center justify-between border-t border-zinc-700 mt-4 pt-3">
                                    <span className="text-[12px] font-mono font-semibold text-zinc-500">Verified in projects</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                        <span className="text-sm text-emerald-400">Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}