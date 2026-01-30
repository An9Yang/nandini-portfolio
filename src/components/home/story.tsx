// @ts-nocheck
import { TechCard } from "@/components/ui/tech-card";

export const Story = () => {
    return (
        <section id="story" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="relative">
                        <h2 className="text-6xl font-bold mb-8 pt-4">
                            THE <span className="text-stroke italic">JOURNEY</span>
                        </h2>
                        <p className="text-xl text-muted-foreground font-light mb-12 max-w-lg leading-relaxed">
                            From sales floors to product backlogs — a path defined by user empathy and data.
                        </p>

                        <div className="space-y-12 relative border-l border-white/10 pl-12 ml-6">
                            {[
                                { label: 'PAST', desc: 'Built GTM instincts in legal + enterprise software across sales and growth roles.' },
                                { label: 'PIVOT', desc: 'Shifted closer to product: onboarding, activation, and feedback loops that ship.' },
                                { label: 'NOW', desc: 'MBA at Columbia focused on Product, Data Analytics & AI — building practical AI tools.' },
                            ].map((item, i) => (
                                <div key={item.label} className="relative group">
                                    <div className="absolute -left-[54px] top-1 w-3 h-3 bg-black border border-white/30 rotate-45 group-hover:bg-accent-blue group-hover:border-accent-blue transition-colors" />
                                    <h3 className="font-mono text-sm tracking-widest text-accent-blue mb-2 uppercase">{item.label}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8 lg:pt-24">
                        {/* Education */}
                        <TechCard className="p-10 hover:border-accent-blue/30">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <span className="text-[10px] font-mono border border-white/20 px-1">EDU_LOG</span>
                            </div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Education</h3>
                            <div className="space-y-8">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-lg group-hover:text-accent-blue transition-colors">Columbia Business School</h4>
                                        <span className="font-mono text-sm text-muted-foreground">2024 - 2026</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Master of Business Administration (MBA)</p>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-lg group-hover:text-accent-blue transition-colors">McGill University</h4>
                                        <span className="font-mono text-sm text-muted-foreground">2014 - 2017</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Bachelor of Arts (B.A.)</p>
                                </div>
                            </div>
                        </TechCard>

                        {/* Values */}
                        <TechCard className="p-10 bg-white/5 backdrop-blur-sm hover:border-accent-teal/30">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Guiding Values</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Curiosity', 'Bias for Action', 'User Empathy', 'Impact'].map((value) => (
                                    <span key={value} className="px-4 py-2 bg-black/50 border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-accent-teal transition-all duration-300">
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </TechCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
