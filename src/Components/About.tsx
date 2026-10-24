

export default function About() {
    const highlights = [
        {
            icon: '⚡',
            title: 'Frontend Development',
            description: 'Building interactive and component-driven user interfaces using React. TypeScript, and modern JavaScript standards.'
        },
        {
            icon: '📱',
            title: 'Responsive & Pixel-Perfect',
            description: 'Translating designs into clean, fluid mobile-first layouts using Tailwind CSS that work across all screen sizes.'
        },
        {
            icon: '🛠️',
            title: 'Workflow & Tooling',
            description: 'Managing versions with Git and GitHub, integrating REST APIs, and following clean. folder structures for maintainable code.'
        },
        {
            icon: '🚀',
            title: 'Growth & Dedication',
            description: 'Continuously self-learning, improving problem-solving abilities, and eager to contribute to collaborative dev teams.'
        }

    ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center max-w-7xl mx-auto">
            <div className="w-full px-4 flex flex-col">
                <div className="flex flex-col items-center gap-3 m-5">
                    <div className="bg-zinc-600/40 px-2 py-0.5 rounded-full border border-zinc-200/20 flex items-center justify-center space-x-1 w-fit">
                        <span className="text-[12px] text-cyan-400/80 font-mono">01.</span>
                        <span className="text-[12px] text-zinc-400 font-medium font-mono">About Me</span>
                    </div>
                    <div className="text-center space-y-1.5 mb-8">
                        <h1 className="font-extrabold text-3xl text-white sm:text-4xl">Engineering clean & practical web experiences</h1>
                        <p className="text-zinc-400 md:text-lg">Passionate about bridging visual design with performant frontend architecture.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start max-w-7xl mx-auto w-full">
                    <div className="lg:col-span-5 rounded-2xl border border-zinc-500/60 p-5 text-left space-y-2.5">
                        <div className="flex gap-2 items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                            <span className="font-semibold">Who I am</span>
                        </div>
                        <h2 className="text-zinc-300/90">I am a focused junior Frontend Developer with a strong dedication to crafting functional, accessible, and clean digital interfaces.</h2>
                        <p className="text-zinc-400/90">
                            My daily focus revolves around building responsive web applications using React and TypeScript
                            styling with Tailwind Css, and writing clean, structured code that is easy to understand and maintain.
                        </p>
                        <p className="text-zinc-400/90 border-b border-zinc-500/60 pb-3">
                            I enjoy transforming UI concepts into reality, paying close attention to user experience, performance, and cross-browser consistency.
                        </p>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col text-xs">
                                <span className="text-zinc-400 font-medium">LOCATION</span>
                                <span className="font-mono">Turkey</span>
                            </div>
                            <div className="text-xs flex flex-col ">
                                <span className="text-zinc-400 font-medium">ROLE</span>
                                <span className="text-emerald-400 font-mono">Open to Work</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((index) => (
                            <div key={index.title}
                                className="flex flex-col justify-between  border p-4 rounded-2xl border-zinc-500/60 w-full"
                            >
                                <div className="w-9 h-9 bg-zinc-400/30 flex justify-center items-center rounded-lg">
                                    <span className="text-lg">{index.icon}</span>
                                </div>
                                <div className="mt-3">
                                    <h1 className={`font-bold mb-2 ${index.title === 'Frontend Development' ? 'text-cyan-400' : 'text-white'}`}>{index.title}</h1>
                                    <p className="text-zinc-400/90 text-sm">{index.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}