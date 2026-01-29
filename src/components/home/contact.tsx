// @ts-nocheck
export const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-purple/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden rounded-[3rem] border-accent-purple/20">
                    {/* Animated Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse duration-[8000ms]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
                            Let's build something
                            <br />
                            <span className="text-accent-purple font-normal">extraordinary</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto font-light leading-relaxed">
                            If you're hiring for Product or GTM roles, email is best — I respond quickly.
                        </p>
                        <a
                            href="mailto:nsrivastava26@gsb.columbia.edu"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background text-lg font-medium hover:scale-105 hover:shadow-xl hover:shadow-accent-purple/20 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            nsrivastava26@gsb.columbia.edu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
