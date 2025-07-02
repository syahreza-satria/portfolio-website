import { skills } from '../data/portfolioData';
import SkillIcon from './ui/SkillIcon';

// Nama komponen menggunakan PascalCase (diawali huruf kapital)
const Skills = () => (
    <section id="skill" className="flex flex-col px-8 md:px-16 py-24 border-b border-gray-100/10 min-h-screen justify-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white text-center mb-16">
            Skills
        </h2>
        <div className="w-full max-w-5xl mx-auto space-y-12">
            <div>
                <h3 className="text-xl font-medium text-gray-400 mb-6 text-center sm:text-left">Languages & Frameworks</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-10 text-center">
                    {skills.languagesFrameworks.map((skill) => <SkillIcon key={skill.name} {...skill} />)}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-medium text-gray-400 mb-6 text-center sm:text-left">Design & Platforms</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-10 text-center">
                    {skills.designPlatforms.map((skill) => <SkillIcon key={skill.name} {...skill} />)}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-medium text-gray-400 mb-6 text-center sm:text-left">Other Skills</h3>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {skills.other.map((item) => (
                        <span key={item} className="text-sm font-medium border border-gray-100/10 text-white bg-gray-400/10 px-4 py-2 rounded-full">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Skills;