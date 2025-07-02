import { intellectualProperties } from '../data/portfolioData';
import InfoCard from './ui/InfoCard';

const Other = () => (
    <section id="other" className="flex flex-col min-h-screen px-8 py-24 border-b md:px-16 border-gray-900">
        <h2 className="mb-12 text-2xl font-bold tracking-widest text-white uppercase">
            Intellectual Property
        </h2>

        {intellectualProperties.map((ip, index) => (
            <InfoCard
                key={index}
                link={ip.link}
                title={ip.title}
                details={ip.details}
                imageUrl={ip.imageUrl}
                imageAlt={ip.imageAlt}
            />
        ))}
    </section>
);

export default Other;