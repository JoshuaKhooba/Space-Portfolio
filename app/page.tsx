import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Education from "@/components/main/Education";
import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import ProjectsSection from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Encryption />
        <ProjectsSection />
        <Contact />
      </div>
    </main>
  );
}
