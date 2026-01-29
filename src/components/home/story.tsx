// @ts-nocheck
export const Story = () => {
    return (
        <section id="story" className="py-32">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="relative">
                        <div className="absolute -left-8 top-0 w-1 h-24 bg-gradient-to-b from-accent-purple to-transparent opacity-50 hidden lg:block" />

                        <h2 className="text-4xl md:text-5xl font-light mb-8 pt-4">
                            The <span className="font-script text-accent-purple text-6xl ml-2">Journey</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-lg">
                            From sales floors to product backlogs — a path defined by user empathy and data.
                        </p>

                        <div className="space-y-12 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-[2px] before:bg-border-subtle">
                            {[
                                { label: 'Past', desc: 'Built GTM instincts in legal + enterprise software across sales and growth roles.' },
                                { label: 'Pivot', desc: 'Shifted closer to product: onboarding, activation, and feedback loops that ship.' },
                                { label: 'Now', desc: 'MBA at Columbia focused on Product, Data Analytics & AI — building practical AI tools.' },
                            ].map((item, i) => (
                                <div key={item.label} className="flex gap-8 relative items-start group">
                                    <div className="w-12 h-12 rounded-full bg-card border-4 border-background flex items-center justify-center text-muted-foreground font-medium shrink-0 relative z-10 group-hover:border-accent-purple/30 group-hover:text-accent-purple transition-colors">
                                        {i + 1}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="font-medium text-lg mb-2 group-hover:text-accent-purple transition-colors">{item.label}</h3>
                                        <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8 lg:pt-24">
                        {/* Education */}
                        <div className="p-10 rounded-3xl bg-card border border-border-subtle hover:border-accent-purple/30 transition-colors duration-300">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-8">Education</h3>
                            <div className="space-y-8">
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-medium text-lg group-hover:text-accent-purple transition-colors">Columbia Business School</h4>
                                        <span className="text-sm text-muted-foreground">2024 - 2026</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Master of Business Administration (MBA)</p>
                                </div>
                                <div className="w-full h-px bg-border-subtle" />
                                <div className="group">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-medium text-lg group-hover:text-accent-purple transition-colors">McGill University</h4>
                                        <span className="text-sm text-muted-foreground">2014 - 2017</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Bachelor of Arts (B.A.)</p>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="p-10 rounded-3xl bg-secondary/30 border border-border-subtle backdrop-blur-sm">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-8">Guiding Values</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Curiosity', 'Bias for Action', 'User Empathy', 'Impact'].map((value) => (
                                    <span key={value} className="px-5 py-2.5 rounded-full bg-background/80 border border-border-subtle text-sm text-muted-foreground hover:text-accent-purple hover:border-accent-purple/30 transition-all duration-300">
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
