import { navigationLinks } from '../../data/portfolioData';

const navigation = ({ activeSection }) => (
    <nav className="flex flex-col justify-center p-4 lg:h-screen lg:p-6 lg:border-r lg:border-gray-100/10">
        <div className="mb-10 hidden text-center lg:block">
            <h1 className="text-3xl font-bold text-white">Syahreza</h1>
            <p className="mt-2 text-md text-gray-400">Frontend Developer</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 lg:flex-col lg:gap-0">
            {navigationLinks.map(({ id, title }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`py-2 px-3 lg:px-8 transition duration-300 ease-in-out uppercase text-sm tracking-wider
                    ${activeSection === id
                        ? "text-white font-bold border-sky-400 " +
                          "border-b-2 lg:border-b-0 lg:border-l-4"
                        : "text-gray-500 hover:text-white " + 
                          "border-b-2 border-transparent"
                    }`}
                >
                    {title}
                </a>
            ))}
        </div>
    </nav>
);

export default navigation;