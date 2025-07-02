import { certificates } from '../data/portfolioData';
import CertificateCard from './ui/CertificateCard';

const Certificate = () => (
    <section id="certificate" className="flex flex-col min-h-screen px-8 py-24 border-b md:px-16 border-gray-900">
        <h2 className="mb-12 text-2xl font-bold tracking-widest text-white uppercase">
            Certificates
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
                <CertificateCard
                    key={cert.title}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    credentialUrl={cert.credentialUrl}
                    imageUrl={cert.imageUrl}
                />
            ))}
        </div>
    </section>
);

export default Certificate;