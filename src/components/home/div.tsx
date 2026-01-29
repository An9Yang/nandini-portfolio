// @ts-nocheck

export const Div = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Nandini<span className="text-accent-purple">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#story" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Story
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NandiniLearnsCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-purple transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nandini-srivastava/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-purple transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[100px]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-card/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to work</span>
            <span className="text-muted-foreground/50">·</span>
            <span className="text-sm text-muted-foreground">NYC / SF</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight mb-8">
            Product + GTM
            <br />
            <span className="text-shimmer">operator</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            I turn customer pain into clear product bets, crisp positioning, and measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border-subtle text-foreground font-medium hover:bg-card/50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-y border-border-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Salesforce', 'Sprout Social', 'Kira Systems', 'DraftWise', 'Noetica AI'].map((company) => (
              <span key={company} className="text-lg font-medium text-muted-foreground/60 hover:text-foreground transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Core <span className="text-accent-purple">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              A blend of product thinking, technical curiosity, and go-to-market execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Product Strategy',
                desc: 'PRDs, roadmap slices, crisp scope',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: 'GTM + Growth',
                desc: 'Positioning, trials, conversion levers',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              },
              {
                title: 'Onboarding',
                desc: 'Funnels, lifecycle, in-app guidance',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: 'Analytics',
                desc: 'SQL-first insights → shipped changes',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              },
              {
                title: 'Legal Tech',
                desc: 'Contracts, workflows, buyer empathy',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              },
              {
                title: 'Cross-functional',
                desc: 'Eng + sales alignment, fast iteration',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="group p-6 rounded-2xl bg-card border border-border-subtle hover:border-accent-purple/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center mb-4 group-hover:bg-accent-purple group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-accent-purple transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border-subtle">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Technical Toolbelt
            </h3>
            <div className="flex flex-wrap gap-3">
              {['SQL', 'Python', 'Tableau', 'Google Analytics', 'Linear', 'Figma', 'Cursor', 'Claude'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-background border border-border-subtle text-sm hover:border-accent-purple/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Featured <span className="text-accent-teal">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Building tools to solve real problems and learn by doing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ML for SMB Funding',
                desc: 'Using ML to make faster, smarter funding decisions for small businesses.',
                tags: ['Machine Learning', 'Fintech'],
                featured: true,
              },
              {
                title: 'News Guardian',
                desc: 'A lightweight tool to help users evaluate news content quickly.',
                tags: ['Chrome Extension', 'GenAI'],
                github: 'https://github.com/NandiniLearnsCode/News-Guardian',
              },
              {
                title: 'CBS Orientation Bot',
                desc: 'A student-facing bot to answer incoming student questions.',
                tags: ['AI Chatbot', 'RAG'],
                github: 'https://github.com/NandiniLearnsCode/CBS-Orientation-Bot',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group relative flex flex-col rounded-2xl bg-card border border-border-subtle overflow-hidden hover:border-accent-purple/50 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="h-40 bg-gradient-to-br from-accent-purple/10 to-accent-teal/10 flex items-center justify-center relative">
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-medium">
                      Featured
                    </span>
                  )}
                  <span className="text-5xl font-light text-foreground/10 group-hover:text-accent-purple/30 transition-colors">
                    {project.title[0]}
                  </span>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-purple transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                The <span className="font-script text-accent-purple">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light mb-12">
                From sales floors to product backlogs.
              </p>

              <div className="space-y-8">
                {[
                  { label: 'Past', desc: 'Built GTM instincts in legal + enterprise software across sales and growth roles.' },
                  { label: 'Pivot', desc: 'Shifted closer to product: onboarding, activation, and feedback loops that ship.' },
                  { label: 'Now', desc: 'MBA at Columbia focused on Product, Data Analytics & AI — building practical AI tools.' },
                ].map((item, i) => (
                  <div key={item.label} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple font-medium shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Education */}
              <div className="p-8 rounded-2xl bg-card border border-border-subtle">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">Education</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium">Columbia Business School</h4>
                    <p className="text-sm text-muted-foreground">MBA · 2024 - 2026</p>
                  </div>
                  <div>
                    <h4 className="font-medium">McGill University</h4>
                    <p className="text-sm text-muted-foreground">Bachelor of Arts · 2014 - 2017</p>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="p-8 rounded-2xl bg-card/50 border border-border-subtle">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">Guiding Values</h3>
                <div className="flex flex-wrap gap-3">
                  {['Curiosity', 'Bias for Action', 'Impact'].map((value) => (
                    <span key={value} className="px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-purple/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Let's build something
                <br />
                <span className="text-accent-purple">extraordinary</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                If you're hiring for Product or GTM roles, email is best — I respond quickly.
              </p>
              <a
                href="mailto:nsrivastava26@gsb.columbia.edu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-purple text-white font-medium hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                nsrivastava26@gsb.columbia.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Nandini Srivastava
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/NandiniLearnsCode" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nandini-srivastava/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
