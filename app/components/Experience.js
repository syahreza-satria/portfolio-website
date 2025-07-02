import { experiences } from '../data/portfolioData';
import TimelineItem from './ui/TimelineItem';

const experience = () => (
    <section id="experience" className="flex flex-col px-8 md:px-16 py-24 border-b border-gray-100/10 min-h-screen">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-12">
            Experience
        </h2>
        <div className="relative">
            <div className="absolute left-3 top-2 h-full w-0.5 bg-gray-700"></div>
            {experiences.map((exp, index) => (
                <TimelineItem
                    key={index}
                    title={exp.role}
                    subtitle={exp.company}
                    period={exp.period}
                    location={exp.location}
                    details={exp.tasks}
                    isFirst={exp.isFirst}
                />
            ))}
        </div>
    </section>
);

export default experience;