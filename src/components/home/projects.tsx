// @ts-nocheck
import { TechCard } from "@/components/ui/tech-card";

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            FEATURED <span className="text-stroke">WORK</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed border-l border-zinc-700 pl-6">
                            Building in public. <span className="text-accent-teal">Solving real problems.</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-accent-purple border border-accent-purple/30 px-4 py-2 bg-accent-purple/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent-purple opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent-purple"></span>
                        </span>
                        3 ACTIVE PROJECTS
                    </div>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[400px]">

                    {/* Card 1: Large Featured (Spans 4 cols) */}
                    <TechCard className="md:col-span-4 group overflow-hidden border-white/10 hover:border-accent-purple/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-ad7117a3a63b?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                        {/* Tech accents */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="w-2 h-2 bg-white/20" />
                            <div className="w-2 h-2 bg-white/10" />
                        </div>

                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <div className="mb-auto flex justify-between items-start">
                                <span className="px-3 py-1 bg-accent-purple text-black font-bold text-xs uppercase tracking-wider rounded-none">Featured</span>
                                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-accent-purple group-hover:text-accent-purple transition-all hover:rotate-90 cursor-pointer bg-black/50 backdrop-blur-sm">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>

                            <h3 className="text-4xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">ML for SMB Funding</h3>
                            <p className="text-muted-foreground text-lg max-w-xl mb-6">Using machine learning models to accelerate funding decisions for small businesses, reducing risk while increasing approval speed.</p>
                            <div className="flex gap-3">
                                {['Machine Learning', 'Fintech', 'Python'].map(tag => (
                                    <span key={tag} className="text-xs font-mono text-zinc-400 border border-zinc-800 px-3 py-1 bg-zinc-900/50">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </TechCard>

                    {/* Card 2: Vertical (Spans 2 cols) */}
                    <TechCard className="md:col-span-2 group overflow-hidden border-white/10 hover:border-accent-teal/50 transition-colors duration-500 flex flex-col">
                        <div className="h-1/2 bg-gradient-to-br from-zinc-900 to-black p-6 relative overflow-hidden group-hover:from-zinc-900/80 transition-colors border-b border-white/5">
                            {/* Visual noise/code effect */}
                            <div className="font-mono text-[10px] text-zinc-700 leading-tight opacity-50 select-none">
                                {`import { guardian } from 'news-ai';
const analyze = async (url) => {
  const safety = await guardian.check(url);
  return safety.score > 0.9;
}`}
                            </div>
                        </div>
                        <div className="flex-1 p-8 bg-black relative">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-teal transition-colors">News Guardian</h3>
                            <p className="text-sm text-muted-foreground mb-6">Real-time news evaluation tool.</p>
                            <a href="https://github.com/NandiniLearnsCode/News-Guardian" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white flex items-center gap-2">
                                View Source <span className="w-4 h-px bg-zinc-500 group-hover:bg-white transition-colors" />
                            </a>
                        </div>
                    </TechCard>

                    {/* Card 3: Horizontal (Spans 3 cols) */}
                    <TechCard className="md:col-span-3 group border-white/10 hover:border-blue-500/50 transition-colors duration-500 p-8 flex flex-col justify-between h-[300px]">
                        <div>
                            <div className="w-10 h-10 bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 border border-blue-500/20">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">CBS Orientation Bot</h3>
                            <p className="text-muted-foreground text-sm max-w-sm">RAG-powered chatbot helping 500+ students navigate integration week.</p>
                        </div>
                        <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-none bg-zinc-800 border-2 border-black" />
                                <div className="w-8 h-8 rounded-none bg-zinc-700 border-2 border-black" />
                            </div>
                            <a href="https://github.com/NandiniLearnsCode/CBS-Orientation-Bot" className="p-2 border border-white/10 hover:bg-white hover:text-black transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </TechCard>

                    {/* Card 4: Horizontal (Spans 3 cols) */}
                    <TechCard className="md:col-span-3 group border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 flex items-center justify-center min-h-[300px]">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold mb-2 text-zinc-700 group-hover:text-white transition-colors duration-500">More on GitHub</h3>
                            <p className="text-zinc-600 mb-6 font-mono text-xs">Explore experiments and side quests.</p>
                            <a href="https://github.com/NandiniLearnsCode" className="inline-block px-6 py-3 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white transition-colors rounded-none font-medium">
                                @NandiniLearnsCode
                            </a>
                        </div>
                    </TechCard>

                </div>
            </div>
        </section>
    );
};
