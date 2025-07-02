
import { socialLinks } from "../data/portfolioData";
import SocialLink from "./ui/SocialLink";
import RotatingText from "./reactbits/RotatingText/RotatingText";
import Lanyard from "./reactbits/Lanyard/Lanyard";

const about = () => (
    <section
        id="about"
        className="flex min-h-screen items-center justify-center border-b border-gray-900 bg-gray-950 px-6 text-white md:px-12 lg:px-16"
    >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
                <div>
                    <h1 className="text-4xl font-bold md:text-5xl">
                        Hey, it&apos;s Reza 👋
                    </h1>
                    <div className="mt-4">
                        <div className="flex flex-col items-start gap-x-4 gap-y-2 text-base text-gray-300 sm:flex-row sm:items-center">
                            <span>Indonesia</span>
                            <span className="hidden sm:inline">·</span>
                            <a
                                href="mailto:satriaeza221@gmail.com"
                                className="text-gray-300 underline decoration-gray-500 transition duration-300 hover:text-white hover:decoration-white"
                            >
                                satriaeza221@gmail.com
                            </a>
                            <span className="hidden sm:inline">·</span>
                            <RotatingText
                                texts={["Programmer", "Content Creator", "Gamer"]}
                                mainClassName="text-gray-300"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5"
                                transition={{
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 900,
                                }}
                                rotationInterval={3000}
                            />
                        </div>
                    </div>
                </div>
                <p className="max-w-3xl text-base leading-relaxed text-gray-300">
                    Fresh graduate IT dengan pengalaman memimpin tim developer di industri F&B. Ahli dalam arsitektur sistem, pengembangan full-stack (PHP, Laravel, JS), dan desain UI/UX (Figma). Berhasil memimpin proyek aplikasi dari konsep hingga rilis dan memperoleh Hak Cipta.
                </p>
                {/* Social links dibuat lebih rapi untuk mobile */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
                    <p className="w-full sm:w-auto">Connect with me:</p>
                    {socialLinks.map((link) => (
                        <SocialLink key={link.href} {...link} />
                    ))}
                </div>
            </div>

            <div className="hidden h-screen w-full items-center justify-center lg:col-span-4 lg:flex lg:h-auto">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
        </div>
    </section>
);

export default about;