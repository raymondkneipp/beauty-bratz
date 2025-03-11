import { routes } from "@/config/routes";
import Link from "next/link";

export function Hero() {
    return (
        <section className="container mx-auto px-2 flex flex-col gap-8 items-start py-24 min-h-[calc(100svh/1.5)] justify-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                Trusted hair replacement & salon expert in Milford, Ohio.
            </h1>
            <p className="text-xl [text-wrap:balance] max-w-prose text-neutral-600">
                Everyone wants to be beautiful. With our advanced hair
                replacement solutions and salon services, you can achieve the
                look you deserve.
            </p>
            <Link
                href={routes.contact.href}
                className="bg-neutral-950 text-white rounded-full px-6 py-2 font-semibold text-lg hover:bg-neutral-800 transition-colors duration-300 ease-in-out hover:shadow-md"
            >
                Contact Us
            </Link>
        </section>
    );
}
