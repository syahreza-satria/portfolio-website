import { educations } from "../data/portfolioData";
import TimelineItem from './ui/TimelineItem';

const education = () => (
    <section id="education" className="flex flex-col px-8 md:px-16 py-24 border-b border-gray-100/10 space-y-12 min-h-screen justify-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
            EDUCATION
        </h2>
        <div className="relative">
            <div className="absolute left-3 top-2 h-full w-0.5 bg-gray-600"></div>
            {educations.map((edu, index) => (
                <TimelineItem
                    key={index}
                    title={edu.institution}
                    subtitle={edu.degree}
                    period={edu.period}
                    location={edu.location}
                    details={edu.details}
                    isFirst={edu.isFirst}
                />
            ))}
        </div>
    </section>
);

export default education;