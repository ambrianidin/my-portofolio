import { CursorFollower } from "@/components/cursor-follower";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <SiteNav />
      <main id="top" className="flex-1">
        <Hero />
        <About />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
