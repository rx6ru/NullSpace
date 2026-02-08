import Hero from "@/components/Hero";
// import About from "@/components/About"; // Redesign planned
import SkillsMatrix from "@/components/SkillsMatrix";
import CodingActivity from "@/components/CodingActivity";
import ProjectTerminal from "@/components/ProjectTerminal";
// import Contact from "@/components/Contact"; // Removed per user request
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative min-h-[200vh]">
            <Hero />
            {/* <About /> */}
            <SkillsMatrix />
            <ProjectTerminal />
            <CodingActivity />
            {/* <Contact /> */}
            <Footer />
        </main>
    );
}
