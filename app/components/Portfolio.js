import { portfolioProjects } from '../data/portfolioData';
import ProjectCard from './ui/ProjectCard';

const Portfolio = () => (
    <section id="portfolio" className="flex flex-col px-8 md:px-16 py-24 border-b border-gray-100/10 min-h-screen">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-16 text-center">
            Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </section>
);

export default Portfolio;