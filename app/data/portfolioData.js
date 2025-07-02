import { BiLogoGmail } from "react-icons/bi";
import {
    FaLaravel, FaReact, FaFigma, FaGithub, FaLinkedin, FaInstagram
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiPhp, SiJavascript, SiBootstrap, SiCss3, SiMysql, SiCanva, SiGoogledocs, SiGooglesheets, SiGoogleslides,
    SiAdobephotoshop,
    SiAdobelightroomclassic
} from "react-icons/si";

export const navigationLinks = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "skill", title: "Skills" },
    { id: "portfolio", title: "Portfolio" },
    { id: "certificate", title: "Certificate" },
    { id: "other", title: "Others" },
];

export const socialLinks = [
    { href: "mailto:satriaeza221@gmail.com", icon: BiLogoGmail, label: "Contact with Email" },
    { href: "https://www.linkedin.com/in/syahreza-satria-alfath/", icon: FaLinkedin, label: "LinkedIn Profile" },
    { href: "https://github.com/syahreza-satria", icon: FaGithub, label: "GitHub Profile" },
    { href: "https://www.instagram.com/syahreza_satria/", icon: FaInstagram, label: "Instagram Profile" },
];

export const experiences = [
    {
        role: "Information Technology Lead",
        company: "CAATIS COE",
        period: "Sep 2024 - Jan 2025",
        location: "Bandung, West Java",
        tasks: [
            "Lead an 8-person IT team in the development and refinement of three F&B application products remotely.",
            "Fully responsible for the architecture, development, and maintenance for the products: Mobile Customer Membership, POS, and Stock Lakeside F&B Group.",
            "Facilitate weekly technical meetings for process evaluation, sprint planning, and ensure team performance is on target.",
            "Initiate collaboration with product and marketing teams to translate business needs into effective technical solutions and features.",
        ],
        isFirst: true,
    },
    {
        role: "User Experience Designer (Internship)",
        company: "CAATIS COE",
        period: "Jun 2023 - Jul 2023",
        location: "Bandung, West Java",
        tasks: [
            "Designed and developed high-fidelity wireframes and prototypes for financial management features to improve system efficiency.",
            "Analyzed user and business needs to formulate technology-based design solutions for financial recording websites.",
            "Collaborated closely with developers in the research and data management process to ensure design implementation is in accordance with specifications.",
        ],
    },
    {
        role: "Laboratory Assistant",
        company: "CAATIS COE",
        period: "May 2023 - Jan 2025",
        location: "Bandung, West Java",
        tasks: [
            "Leveraged technical and analytical skills to support web application development and UI/UX design projects.",
            "Collaborated effectively with cross-functional teams(Developers, Designers, and Project Managers) to integrate scientific insights into the development process.",
            "Assisted fellow members on their respective projects.",
        ],
    },
    {
        role: "Digital Team, Social Media Designer (Part-time)",
        company: "Telkom University Marketing Crew",
        period: "Nov 2022 - Dec 2024",
        location: "Bandung, West Java",
        tasks: [
            "Designed and produced over 20+ visual content for social media campaigns.",
            "Developed visual strategies for social media platforms tailored to the target student audience.",
            "Designed and created key graphic assets that were used as design standards for future promotional materials and designs.",
            "Designed official ID card designs to be used by all Marketing Crew members."
        ],
    },
    {
        role: "Indonesian Language Tutor (Part-time)",
        company: "Telkom University Language Center",
        period: "Sep 2021 - Apr 2022",
        location: "Bandung, West Java",
        tasks: [
            "Teaching Indonesian and local culture to 6 international students.",
            "Developing adaptive teaching methods tailored to the needs and level of understanding of each student.",
        ],
    },

];

export const educations = [
    {
        institution: "Telkom University",
        degree: "Bachelor of Computer Science",
        period: "August 2020 - September 2024",
        location: "Bandung, West Java",
        details: [
            <>Graduated with a Cumulative GPA: <span className="font-semibold text-emerald-400 bg-emerald-900/50 rounded-full px-3 py-1 text-sm">3.29 / 4.00</span></>,
            <>
                <span className="font-semibold">Thesis:</span> Analysis of Customer Membership System Adoption in Food & Beverage Group Business as Shared Services Using System Usability Scale (SUS). -{" "}
                <a href="https://openlibrary.telkomuniversity.ac.id/home/catalog/id/216651/slug/analisis-adopsi-sistem-customer-membership-pada-bisnis-food-beverage-group-sebagai-shared-services-menggunakan-system-usability-scale-sus-dalam-bentuk-buku-karya-ilmiah.html" className="underline text-blue-500 hover:text-blue-300 transition duration-500">Article Link</a>
            </>
        ],
        isFirst: true,
    },
    {
        institution: "SMA Negeri 4 Kendari",
        degree: "Mathematics & Science",
        period: "August 2017 - June 2020",
        location: "Kendari, South East Sulawesi",
        details: [
            "Actively involved in student council-affiliated organizations, particularly the Information, Technology, and Communication Division and the Friendship English Conversation Club.",
            "Contributed to school event promotions by designing digital posters and handling basic technical setups.",
            "Participated in weekly English speaking sessions, organized inter-school debates, and supported cultural exchange activities to enhance language and teamwork skills.",
        ],
    },
];

export const skills = {
    languagesFrameworks: [
        { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "CSS3", icon: SiCss3, color: "#663399" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    designPlatforms: [
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
        { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Adobe Lightroom", icon: SiAdobelightroomclassic, color: "#B4D6E0" },
        { name: "Google Docs", icon: SiGoogledocs, color: "#4285F4" },
        { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853" },
        { name: "Google Slides", icon: SiGoogleslides, color: "#FBBC04" },
    ],
    other: [
        "API Development (RESTful, JSON)",
        "Data Entry & Management",
        "Version Control (Git)",
        "Teamwork",
        "Critical Thinking",
        "Problem Solving",
        "Communication",
        "Fast Learning",
        "Self Motivation",
    ]
};

export const portfolioProjects = [
    {
        title: "Celengan, your finance tracker",
        description: "Membangun Celengan, aplikasi pelacak keuangan dengan antarmuka intuitif untuk membantu pengguna mengelola anggaran dan mencapai tujuan finansial mereka.",
        tags: ["Laravel", "Tailwind CSS", "Alpinejs", "MySQL"],
        imageUrl: "/portfolio/celengan.png",
        sourceUrl: "https://github.com/syahreza-satria/savings.git",
        liveUrl: "https://celengan.syahrezasatria.com/",
    },
    {
        title: "Lakeside F&B Customer Membership",
        description: "Mengembangkan platform loyalitas F&B end-to-end, mengimplementasikan RESTful API untuk sinkronisasi data real-time antara aplikasi user dan dashboard merchant.",
        tags: ["Laravel", "Bootstrap", "MySQL"],
        imageUrl: "/portfolio/mobile-lakesidefnb.png",
        sourceUrl: "#",
        liveUrl: "https://mobile.lakesidefnb.group/",
    },
    {
        title: "Photographer Portfolio Website",
        description: "Sebuah website untuk tempat saya membagikan hasil-hasil foto yang telah saya ambil di event yang saya datangi. Website yang cocok dengan tampilan minimalis",
        tags: ["Laravel", "Tailwind CSS", "Alpinejs", "MySQL"],
        imageUrl: "/portfolio/jester-production.png",
        sourceUrl: "https://github.com/syahreza-satria/jester.git",
        liveUrl: "https://mobile.lakesidefnb.group/",
    },
];

export const certificates = [
    {
        title: "Online TOEFL Test 4",
        issuer: "Englishvit",
        date: "Published March 2025",
        credentialUrl: "https://englishvit.com/certificate/status/EV-TO4-03-2025-007024531",
        imageUrl: "/certificates/englishvit_logo.jpg",
    },
    {
        title: "Belajar Laravel 11: Bikin Website Booking Paket Travel Online",
        issuer: "Build With Angga",
        date: "Published May 2025",
        credentialUrl: "https://buildwithangga.com/kelas/certificate/belajar-laravel-11-bikin-website-booking-paket-travel-online",
        imageUrl: "/certificates/bwa.svg",
    },
    {
        title: "Certified Developer",
        issuer: "Alibaba Cloud",
        date: "Published Oct 2023",
        credentialUrl: "#",
        imageUrl: "/certificates/alibaba.png",
    },
    {
        title: "Soft Skill - Teamwork and Expectation Management",
        issuer: "Rakamin Academy",
        date: "Published Jan 2025",
        credentialUrl: "#",
        imageUrl: "/certificates/rakamin.jpg",
    },
    {
        title: "Administrasi Sistem dan Layanan Infrastruktur TI",
        issuer: "Coursera X Google",
        date: "Published December 2022",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4DY84XHX7KLL",
        imageUrl: "/certificates/Google.png",
    },
    {
        title: "Dasar-Dasar Dukungan Teknis",
        issuer: "Coursera X Google",
        date: "Published December 2022",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/C4U7R4TGZXRY",
        imageUrl: "/certificates/Google.png",
    },
    {
        title: "Memulai Pemrograman Dengan Java",
        issuer: "Dicoding",
        date: "Published December 2022",
        credentialUrl: "https://www.dicoding.com/certificates/6RPN6YR99P2M",
        imageUrl: "/certificates/dicoding.jpeg",
    },
    {
        title: "Memulai Pemrograman Dengan C",
        issuer: "Dicoding",
        date: "Published December 2022",
        credentialUrl: "https://www.dicoding.com/certificates/4EXG97VO9ZRL",
        imageUrl: "/certificates/dicoding.jpeg",
    },

];

export const intellectualProperties = [
    {
        title: "Customer Membership Lakeside F&B Group",
        details: "EC002024197371 | 30 September 2024",
        link: "https://e-hakcipta.dgip.go.id/legal/c/OGQ4MGVjZWM3MGFjZTFkNjAyZGExMTdkMWNiYTQ4MjQK",
        imageUrl: "/others/hki.png",
        imageAlt: "Sertifikat Hak Cipta",
    }
];