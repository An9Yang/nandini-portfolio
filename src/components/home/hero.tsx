// @ts-nocheck
export const Hero = () => {
    return (
        <section className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-20">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-dot-white [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

            {/* Decorative Gradient Splashes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">

                {/* Left Column: Typography */}
                <div className="lg:col-span-8 flex flex-col items-start text-left">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-purple/20 bg-accent-purple/5 backdrop-blur-md mb-8 hover:border-accent-purple/40 transition-colors cursor-default group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors">AVAILABLE FOR WORK</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50">
                            PRODUCT
                        </span>
                        <span className="block pl-4 md:pl-20 text-stroke italic font-serif opacity-80">
                            OPERATOR
                        </span>
                        <span className="block text-accent-purple/90">
                            + GTM
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed border-l-2 border-accent-purple/30 pl-6 my-8">
                        The bridge between <span className="text-foreground font-normal border-b border-accent-purple/30">user empathy</span> and <span className="text-foreground font-normal border-b border-accent-teal/30">business logic</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-foreground text-background font-bold text-lg rounded-none hover:bg-accent-purple hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                        >
                            EXPLORE WORK
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-border text-foreground font-medium text-lg rounded-none hover:border-accent-purple hover:text-accent-purple transition-all"
                        >
                            CONTACT ME
                        </a>
                    </div>
                </div>

                {/* Right Column: Abstract Visualization */}
                <div className="lg:col-span-4 relative hidden lg:block h-[600px]">
                    {/* Abstract Floating Cards / Elements */}
                    <div className="absolute top-10 right-0 w-64 h-80 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl rounded-2xl rotate-6 z-10 p-6 flex flex-col justify-between hover:rotate-2 hover:scale-105 transition-all duration-500">
                        <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-accent-purple rounded-full" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                            <div className="h-2 w-full bg-white/5 rounded-full" />
                            <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                        </div>
                    </div>

                    <div className="absolute top-40 -left-10 w-72 h-64 bg-[#0a0a0a] border border-accent-teal/20 rounded-2xl -rotate-3 z-20 p-6 shadow-2xl shadow-black/50 hover:rotate-0 hover:scale-105 transition-all duration-500 group">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="font-mono text-xs text-muted-foreground/50 space-y-2">
                            <p><span className="text-accent-purple">const</span> <span className="text-accent-teal">growth</span> = <span className="text-white">require</span>('strategy');</p>
                            <p><span className="text-accent-purple">function</span> <span className="text-yellow-200">scale</span>() {`{`}</p>
                            <p className="pl-4 text-muted-foreground">return impact * velocity;</p>
                            <p>{`}`}</p>
                        </div>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                    </div>

                    {/* Decorative Lines */}
                    <div className="absolute top-1/2 right-10 w-px h-32 bg-gradient-to-b from-transparent via-accent-purple to-transparent z-0" />
                    <div className="absolute bottom-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-accent-teal to-transparent z-0" />
                </div>
            </div>
        </section>
    );
};
