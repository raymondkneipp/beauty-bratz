import { navRoutes, routes, socialRoutes } from "@/config/routes";
import { Logo } from "./logo";
import Link from "next/link";

const footerLinks = [
    {
        name: "Company",
        links: navRoutes,
    },
    {
        name: "Connect",
        links: socialRoutes,
    },
];

export function Footer() {
    return (
        <footer className="container mx-auto px-2 py-12 flex flex-col gap-12">
            <ul className="grid auto-cols-min grid-flow-col gap-x-12 sm:gap-x-36 gap-y-12">
                {footerLinks.map(({ name, links }) => (
                    <li key={name}>
                        <div className="font-semibold font-stretch-ultra-expanded mb-4 tracking-wider">
                            {name}
                        </div>
                        <ul className="flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-600 hover:text-neutral-950 transition-colors duration-300 ease-in-out"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="border-t border-neutral-200 pt-12 flex items-center justify-between flex-wrap gap-x-12 gap-y-4">
                <Logo />

                <a
                    href={routes.webmaster.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors duration-300 ease-in-out"
                >
                    {routes.webmaster.label}
                </a>
            </div>
        </footer>
    );
}
