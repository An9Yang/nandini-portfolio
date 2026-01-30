// @ts-nocheck
export const Footer = () => {
    return (
        <footer className="py-12 border-t border-border-subtle bg-background/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-muted-foreground font-light">
                    © {new Date().getFullYear()} Nandini Srivastava. All rights reserved.
                </p>
                <div className="flex gap-8">
                    <a href="https://github.com/NandiniLearnsCode" className="text-sm text-muted-foreground hover:text-accent-blue transition-colors font-medium">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/nandini-srivastava/" className="text-sm text-muted-foreground hover:text-accent-blue transition-colors font-medium">
                        LinkedIn
                    </a>
                    <a href="mailto:nsrivastava26@gsb.columbia.edu" className="text-sm text-muted-foreground hover:text-accent-blue transition-colors font-medium">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};
