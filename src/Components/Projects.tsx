import { projects } from "../data/projects";
export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-4 max-w-6xl mx-auto flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">

        <div className="flex flex-col items-center">
          <div className="bg-zinc-600/40 px-2 py-1.5 rounded-full border border-zinc-200/20 flex items-center justify-center space-x-1 w-fit">
            <span className="text-[12px] text-cyan-400/80 font-mono">02.</span>
            <span className="text-[12px] font-medium font-mono text-zinc-400">Featured Projects</span>
          </div>

          <div className="text-center py-2">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">Selected Works & Applications</h1>
            <p className="text-zinc-400 sm:text-lg pt-2">Real-world web projects focusing on performance, responsive design, and clean architecture.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title}
              className="w-full border border-zinc-800 rounded-xl p-3 bg-zinc-950"
            >
              <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2 ">
                <div className="flex items-center gap-1 border-b border-zinc-500/50 pb-1.5">
                  <div className="bg-red-400 w-2 h-2 rounded-full" />
                  <div className="bg-orange-300 w-2 h-2 rounded-full" />
                  <div className="bg-emerald-400 w-2 h-2 rounded-full" />
                  <span className="text-[9px] font-mono text-zinc-400">preview.app</span>
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-xs max-h-48 object-contain mx-auto block"
                />
              </div>

              <div className="space-y-1.5">
                <h1 className="font-bold mt-3">{project.title}</h1>
                <p className="text-xs font-semibold text-zinc-400/80">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 my-3">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] text-zinc-300 bg-zinc-900 px-1.5 py-0.5 rounded-lg border border-zinc-800 font-semibold font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 text-center gap-4 pt-3 border-t border-zinc-700">
                <a href={project.projectURL}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 text-sm bg-white/95 text-black font-semibold px-2.5
                   py-2.5 rounded-lg hover:bg-white/75 active:scale-95 transition-all ${project.title === 'E-Commerce Platform'
                      ? 'opacity-40 pointer-events-none cursor-not-allowed '
                      : ''
                    }`}
                >
                  <span>{project.projectURL ? 'Live Demo' : 'Coming Soon'}</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>


                <a href={project.githubURL}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 text-sm bg-black text-zinc-200 border border-zinc-700/60 px-2.5 py-2.5 rounded-lg hover:bg-zinc-800 active:scale-95 transition-all ${project.title === 'E-Commerce Platform'
                    ? 'opacity-40 cursor-not-allowed pointer-events-none'
                    : ''
                  }`}
                >
                  <svg className="flex items-center justify-center  w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Source</span>
                </a>

              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}