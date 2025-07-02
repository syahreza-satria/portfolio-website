import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, tags, imageUrl, sourceUrl, liveUrl }) => (
    <div className="bg-gray-500/5 rounded-lg overflow-hidden group transition-all duration-300 border border-gray-800 hover:border-sky-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-800/20">
        <div className="overflow-hidden">
            <Image
                src={imageUrl}
                alt={title}
                width={1920}
                height={1080}
                className="transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-light-medium inline-block py-1 px-2 rounded-full text-sky-300 bg-sky-900/50 last:mr-0 mr-1">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex space-x-6">
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <FaGithub className="w-5 h-5" />
                    <span>Source</span>
                </a>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span>Live Demo</span>
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;