import Image from "next/image";

const CertificateCard = ({ title, issuer, date, credentialUrl, imageUrl }) => (
    <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 transition-all duration-300 bg-gray-900/50 rounded-xl group ring-1 ring-inset ring-gray-800 hover:ring-sky-400 hover:bg-gray-900 hover:shadow-lg hover:shadow-sky-500"
    >
        <div className="flex items-start justify-between">
            <div className="flex flex-col">
                <p className="text-sm font-medium text-sky-400">{issuer}</p>
                <h3 className="mt-2 text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{date}</p>
            </div>

            <div className="flex flex-col items-end flex-shrink-0">
                <Image
                    src={imageUrl}
                    alt={issuer}
                    width={56}
                    height={56}
                    className="p-1 bg-white rounded-full"
                />
                <div className="mt-4 text-gray-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:text-sky-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>
        </div>
    </a>
);

export default CertificateCard;