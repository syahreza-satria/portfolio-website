import Image from "next/image";

const InfoCard = ({ link, title, details, imageUrl, imageAlt }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 ease-in-out border border-gray-800 rounded-2xl group hover:bg-slate-900/50 hover:ring-1 hover:ring-cyan-400 hover:ring-offset-1 hover:ring-offset-black hover:shadow-lg hover:shadow-sky-500/30"
    >
        <div className="flex items-center justify-between p-6 md:p-8">
            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-300 transition-colors duration-300 md:text-2xl group-hover:text-cyan-300">
                    {title}
                </h3>
                <p className="mt-1 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {details}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={96} // Ukuran size-24
                    height={96} // Ukuran size-24
                    className="flex-shrink-0 rounded-xl"
                />

                {/* Ikon panah */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden sm:block size-6 text-slate-600 transition-all duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
        </div>
    </a>
);

export default InfoCard;