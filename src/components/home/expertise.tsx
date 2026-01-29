// @ts-nocheck
export const Expertise = () => {
    return (
        <section id="expertise" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Header */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                            <span className="text-accent-purple font-mono text-sm tracking-wider uppercase mb-4 block">[03] Capabilities</span>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-none">
                                CORE<br /><span className="text-stroke">STACK</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
                                Merging <span className="text-foreground border-b border-accent-purple">product strategy</span> with <span className="text-foreground border-b border-accent-teal">technical reality</span>.
                            </p>

                            <div className="mt-12 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-purple to-accent-teal" />
                                <h3 className="font-mono text-xs text-muted-foreground mb-4 font-bold uppercase">Technical_Toolbelt.json</h3>
                                <div className="flex flex-wrap gap-2 font-mono text-sm text-foreground/80">
                                    {['SQL', 'Python', 'Tableau', 'Google Analytics', 'Linear', 'Figma', 'Cursor', 'Claude'].map((tool, i) => (
                                        <span key={tool} className="hover:text-accent-teal transition-colors">
                                            "{tool}"{i !== 7 && ','}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                        {[
                            {
                                title: 'Product Strategy',
                                id: 'STRAT_01',
                                desc: 'PRDs, roadmap slices, crisp scope.',
                            },
                            {
                                title: 'GTM + Growth',
                                id: 'GROWTH_02',
                                desc: 'Positioning, trials, conversion levers.',
                            },
                            {
                                title: 'Onboarding',
                                id: 'UX_03',
                                desc: 'Funnels, lifecycle, in-app guidance.',
                            },
                            {
                                title: 'Analytics',
                                id: 'DATA_04',
                                desc: 'SQL-first insights → shipped changes.',
                            },
                            {
                                title: 'Legal Tech',
                                id: 'DOMAIN_05',
                                desc: 'Contracts, workflows, buyer empathy.',
                            },
                            {
                                title: 'Cross-functional',
                                id: 'OPS_06',
                                desc: 'Eng + sales alignment, fast iteration.',
                            },
                        ].map((skill, index) => (
                            <div
                                key={skill.title}
                                className="group relative p-8 bg-[#0c0c0c] border border-white/10 hover:border-accent-purple/50 transition-all duration-300 min-h-[220px] flex flex-col justify-between"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30" />

                                <div>
                                    <span className="font-mono text-[10px] text-accent-teal mb-2 block tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                      //{skill.id}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-purple transition-colors">
                                        {skill.title}
                                    </h3>
                                </div>

                                <p className="text-muted-foreground text-sm font-light border-t border-dashed border-white/10 pt-4 group-hover:border-accent-purple/30 transition-colors">
                                    {skill.desc}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
