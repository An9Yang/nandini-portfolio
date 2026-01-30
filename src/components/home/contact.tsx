// @ts-nocheck
import { TechCard } from "@/components/ui/tech-card";

export const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <TechCard className="p-12 md:p-20 text-center relative overflow-hidden bg-black md:bg-[#0c0c0c]">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                            LET'S BUILD SOMETHING
                            <br />
                            <span className="text-accent-blue">EXTRAORDINARY</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
                            If you're hiring for Product or GTM roles, email is best — I respond quickly.
                        </p>
                        <a
                            href="mailto:nsrivastava26@gsb.columbia.edu"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background text-lg font-bold hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-300"
                        >
                            <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            nsrivastava26@gsb.columbia.edu
                        </a>
                    </div>
                </TechCard>
            </div>
        </section>
    );
};
