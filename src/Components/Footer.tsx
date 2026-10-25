import { ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8 sm:flex-row">
            
                <div 
                    onClick={scrollToTop}
                    className="group flex items-center gap-3 cursor-pointer select-none"
                    title="Back to top"
                >
                    <div className="relative flex items-center justify-center p-2 rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                        <img 
                            src="/images/logo-white.png" 
                            alt="Logo" 
                            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:rotate-6"
                        />
                    </div>
                    <div>
                        <span className="block font-bold text-sm tracking-wider text-white transition-colors group-hover:text-cyan-400">
                            IBRAHIM SEYİD
                        </span>
                        <span className="block text-[11px] font-mono text-zinc-500 font-semibold">
                            Frontend Developer
                        </span>
                    </div>
                </div>
                <div className="text-center sm:text-right text-xs font-mono font-semibold text-zinc-500 space-y-1">
                    <p>© 2026 Ibrahim Said. All rights reserved.</p>
                    <p className="flex items-center justify-center sm:justify-end gap-1.5 text-zinc-400">
                        <span>Crafted with React & Tailwind CSS</span>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/ibrahim1i1"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                        title="GitHub"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ibrahim-seyid-2abb26407"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                        title="LinkedIn"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                        </svg>
                    </a>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all group cursor-pointer"
                        title="Scroll to top"
                    >
                        <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </button>
                </div>

            </div>
        </footer>
    );
}