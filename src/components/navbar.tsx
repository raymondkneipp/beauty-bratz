"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { Icons } from "@/components/icons";
import { navRoutes } from "@/config/routes";
import Link from "next/link";
import { info } from "@/config/info";

export function Navbar(props: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={
                    "bg-neutral-950 overflow-hidden pt-2 transition-all duration-800 ease-in-out " +
                    (open ? "max-h-[1000px]" : "max-h-0")
                }
            >
                <nav className="text-neutral-50 pt-12">
                    <div className="container mx-auto px-6 flex items-center gap-12 justify-between">
                        <Logo tabIndex={open ? 0 : -1} />
                        <button
                            className="bg-neutral-50 text-neutral-950 rounded-full px-2 py-2 aspect-square font-semibold text-lg hover:bg-neutral-200 transition-colors duration-300 ease-in-out hover:shadow-md cursor-pointer"
                            onClick={() => setOpen(false)}
                            tabIndex={open ? 0 : -1}
                        >
                            <Icons.close />
                        </button>
                    </div>
                    <ul className="grid sm:grid-cols-2 border-b border-t mt-12 border-neutral-800">
                        {navRoutes.map((route) => (
                            <li
                                key={route.href}
                                className="border-b border-neutral-800 even:border-r-0 sm:border-r"
                            >
                                <Link
                                    href={route.href}
                                    className="hover:bg-neutral-800 min-h-36 sm:min-h-48 text-4xl font-medium font-stretch-ultra-expanded flex items-center sm:justify-center transition-colors duration-300 ease-in-out px-6"
                                    tabIndex={open ? 0 : -1}
                                >
                                    {route.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="container mx-auto px-6 py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-neutral-300">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold tracking-tight font-stretch-ultra-expanded text-neutral-50">
                            Address
                        </h3>
                        <a
                            href={info.address.href}
                            className="hover:text-neutral-50 transition-colors duration-300 ease-in-out text-sm"
                            dangerouslySetInnerHTML={info.address.label}
                            tabIndex={open ? 0 : -1}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold tracking-tight font-stretch-ultra-expanded text-neutral-50">
                            Contact
                        </h3>
                        <a
                            href={info.email.href}
                            className="hover:text-neutral-50 transition-colors duration-300 ease-in-out text-sm"
                            tabIndex={open ? 0 : -1}
                        >
                            {info.email.label}
                        </a>
                        <a
                            href={info.phone.href}
                            className="hover:text-neutral-50 transition-colors duration-300 ease-in-out text-sm"
                            tabIndex={open ? 0 : -1}
                        >
                            {info.phone.label}
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold tracking-tight font-stretch-ultra-expanded text-neutral-50">
                            Hours
                        </h3>
                        {info.hours.map((hour) => (
                            <p key={hour} className="text-sm">
                                {hour}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-t-4xl">
                <header className="container mx-auto px-6 py-12">
                    <div className="flex items-center gap-12 justify-between">
                        <Logo />
                        <button
                            className="bg-neutral-950 text-white rounded-full px-2 py-2 aspect-square font-semibold text-lg hover:bg-neutral-800 transition-colors duration-300 ease-in-out hover:shadow-md cursor-pointer"
                            onClick={() => setOpen(true)}
                        >
                            <Icons.menu />
                        </button>
                    </div>
                </header>
                <main>{props.children}</main>
                <Footer />
            </div>
        </>
    );
}
