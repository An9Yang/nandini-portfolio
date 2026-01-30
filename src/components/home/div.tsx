// @ts-nocheck
import { Navbar } from './navbar';
import { Hero } from './hero';
import { TrustedBy } from './trusted-by';
import { Expertise } from './expertise';
import { Projects } from './projects';
import { Story } from './story';
import { Contact } from './contact';
import { Footer } from './footer';
import { FadeIn } from '../ui/fade-in';

export const Div = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-purple/30 selection:text-foreground relative">
      <div className="bg-noise" />
      <Navbar />
      <Hero />
      <FadeIn delay={0.2}>
        <TrustedBy />
      </FadeIn>
      <FadeIn>
        <Expertise />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Story />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
};
