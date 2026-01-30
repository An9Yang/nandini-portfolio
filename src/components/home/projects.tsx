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
                    <div className="flex items-center gap-2 text-sm font-mono text-accent-blue border border-accent-blue/30 px-4 py-2 bg-accent-blue/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full bg-accent-blue opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 bg-accent-blue"></span>
                        </span>
                        3 ACTIVE PROJECTS
                    </div>
                </div>

                {/* BENTO GRID */}
                {/* Force row height for perfect alignment */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 grid-auto-rows-[minmax(350px,auto)]">

                    {/* Card 1: Large Featured (Spans 4 cols) */}
                    <TechCard className="md:col-span-4 h-full min-h-[400px] group overflow-hidden border-white/10 hover:border-accent-blue/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-ad7117a3a63b?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                        {/* Tech accents */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <div className="w-2 h-2 bg-white/20" />
                            <div className="w-2 h-2 bg-white/10" />
                        </div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="mb-auto">
                                <span className="px-3 py-1 bg-accent-blue text-black font-bold text-xs uppercase tracking-wider rounded-none">Featured</span>
                            </div>

                            <h3 className="text-4xl font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-300">ML for SMB Funding</h3>
                            <p className="text-muted-foreground text-lg max-w-xl mb-6">Using machine learning models to accelerate funding decisions for small businesses, reducing risk while increasing approval speed.</p>
                            <div className="flex justify-between items-end border-t border-white/5 pt-6">
                                <div className="flex gap-3">
                                    {['Machine Learning', 'Fintech', 'Python'].map(tag => (
                                        <span key={tag} className="text-xs font-bold tracking-wide text-zinc-400 border border-zinc-800 px-3 py-1 bg-zinc-900/50">{tag}</span>
                                    ))}
                                </div>
                                <div className="p-2 border border-white/10 hover:bg-white hover:text-black transition-colors cursor-pointer">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </div>
                    </TechCard>

                    {/* Card 2: Vertical (Spans 2 cols) */}
                    <TechCard className="md:col-span-2 h-full min-h-[400px] group overflow-hidden border-white/10 hover:border-accent-teal/50 transition-colors duration-500 relative">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black" />

                        {/* Visual: Abstract Wave/Graph */}
                        <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
                            <div className="w-[120%] h-[120%] border-[20px] border-accent-teal/20 rounded-full blur-[40px]" />
                        </div>

                        {/* Decorative 99.9% in background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                            <div className="text-7xl font-bold text-accent-teal/20 text-stroke-sm">99.9%</div>
                        </div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <span className="px-3 py-1 bg-accent-teal text-black font-bold text-xs uppercase tracking-wider">Accuracy</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-teal transition-colors">News Guardian</h3>
                                <p className="text-muted-foreground text-sm">Real-time news evaluation tool.</p>
                            </div>
                            <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                                <a href="https://github.com/NandiniLearnsCode/News-Guardian" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white flex items-center gap-2">
                                    View Project <span className="w-4 h-px bg-zinc-500 group-hover:bg-white transition-colors" />
                                </a>
                                <a href="https://github.com/NandiniLearnsCode/News-Guardian" target="_blank" className="p-2 border border-white/10 hover:bg-white hover:text-black transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </a>
                            </div>
                        </div>
                    </TechCard>

                    {/* Card 3: Horizontal (Spans 3 cols) */}
                    <TechCard className="md:col-span-3 h-full min-h-[300px] group border-white/10 hover:border-accent-blue/50 transition-colors duration-500 overflow-hidden relative">
                        {/* Gradient overlay for visual consistency */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black" />
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -right-20 -top-20 w-40 h-40 border-[10px] border-accent-blue/30 rounded-full blur-[30px]" />
                        </div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <span className="px-3 py-1 bg-accent-blue text-black font-bold text-xs uppercase tracking-wider rounded-none">Chatbot</span>
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
                        </div>
                    </TechCard>

                    {/* Card 4: Horizontal (Spans 3 cols) */}
                    <TechCard className="md:col-span-3 h-full min-h-[300px] group border-white/10 hover:border-white/30 transition-colors duration-500 overflow-hidden relative">
                        {/* Gradient overlay for visual consistency */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black" />
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -left-20 -bottom-20 w-40 h-40 border-[10px] border-white/20 rounded-full blur-[30px]" />
                        </div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <span className="px-3 py-1 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-none">Open Source</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-500">More on GitHub</h3>
                                <p className="text-muted-foreground text-sm">Explore experiments and side quests.</p>
                            </div>
                            <div>
                                <a href="https://github.com/NandiniLearnsCode" className="inline-block px-6 py-3 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white transition-colors rounded-none font-medium">
                                    @NandiniLearnsCode
                                </a>
                            </div>
                        </div>
                    </TechCard>

                </div>
            </div>
        </section>
    );
};
