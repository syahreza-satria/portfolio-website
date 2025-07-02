const socialLink = ({ href, icon: Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center p-3 border-2 border-gray-600 rounded-full hover:bg-white hover:border-white transition-all duration-300"
        aria-label={label}
    >
        <Icon className="size-6 text-gray-300 group-hover:text-gray-900 transition-colors duration-300" />
    </a>
);

export default socialLink;