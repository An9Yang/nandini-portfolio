// @ts-nocheck
export const TrustedBy = () => {
    return (
        <section className="py-16 border-y border-border-subtle bg-card/20 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70 mb-10">
                    Trusted by teams at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {['Salesforce', 'Sprout Social', 'Kira Systems', 'DraftWise', 'Noetica AI'].map((company) => (
                        <span key={company} className="text-xl font-medium text-foreground/80 hover:text-accent-purple cursor-default transition-colors">
                            {company}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
