import { info } from "@/config/info";
import { routes } from "@/config/routes";
import Link from "next/link";

export function CTA() {
    return (
        <section className="container mx-auto p-6 py-12 sm:p-12 md:p-24 bg-neutral-950 rounded-4xl flex flex-col gap-6 items-start text-neutral-300">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight [text-wrap:balance] text-neutral-50 font-stretch-ultra-expanded">
                Love your hair again – schedule a consultation!
            </h2>
            <Link
                href={routes.contact.href}
                className="bg-neutral-50 text-neutral-950 rounded-full px-6 py-2 font-semibold text-lg hover:bg-neutral-200 transition-colors duration-300 ease-in-out hover:shadow-md"
            >
                Free Consultation
            </Link>

            <div className="h-px bg-neutral-800 w-full my-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-tight font-stretch-ultra-expanded text-neutral-50">
                        Address
                    </h3>
                    <a
                        href={info.address.href}
                        className="hover:text-neutral-50 transition-colors duration-300 ease-in-out"
                        dangerouslySetInnerHTML={info.address.label}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-tight font-stretch-ultra-expanded text-neutral-50">
                        Contact
                    </h3>
                    <a
                        href={info.email.href}
                        className="hover:text-neutral-50 transition-colors duration-300 ease-in-out"
                    >
                        {info.email.label}
                    </a>
                    <a
                        href={info.phone.href}
                        className="hover:text-neutral-50 transition-colors duration-300 ease-in-out"
                    >
                        {info.phone.label}
                    </a>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold tracking-tight font-stretch-ultra-expanded text-neutral-50">
                        Hours
                    </h3>
                    {info.hours.map((hour) => (
                        <p key={hour}>{hour}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
