// @ts-nocheck
import { Navbar } from './navbar';
import { Hero } from './hero';
import { TrustedBy } from './trusted-by';
import { Expertise } from './expertise';
import { Projects } from './projects';
import { Story } from './story';
import { Contact } from './contact';
import { Footer } from './footer';

export const Div = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-purple/30 selection:text-foreground relative">
      <div className="bg-noise" />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Expertise />
      <Projects />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
};
