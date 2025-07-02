"use client";

import { useScrollSpy } from "./hooks/useScroolSpy";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skill";
import About from "./components/About";
import Navigation from "./components/ui/Navigation";
import Other from "./components/Other";
import Certificate from "./components/Certificate";

export default function Home() {
    const sectionIds = ["about", "experience", "education", "skill", "portfolio", "certificate", "other"];
    const activeSection = useScrollSpy(sectionIds, {
        rootMargin: "-30% 0px -70% 0px",
    });

    return (
        <div className="lg:grid lg:grid-cols-12 bg-gray-950 text-white">
            <header className="sticky top-0 z-50 bg-gray-950 lg:col-span-2 lg:h-screen">
                <Navigation activeSection={activeSection} />
            </header>

            <main className="col-span-12 lg:col-span-10 lg:h-screen lg:max-h-screen lg:overflow-y-scroll scroll-smooth bg-gray-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black">
                <About />
                <Experience />
                <Education />
                <Skills />
                <Portfolio />
                <Certificate />
                <Other />
            </main>
        </div>
    );
}