"use client";

import { CTA } from "@/components/cta";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import owner from "../../../public/owner.jpg";
import { Stat } from "@/components/stat";

function getYearsSince(date: string) {
    const currentDate = new Date();

    const startDate = new Date(date);

    // Calculate difference in years
    const yearsSince = currentDate.getFullYear() - startDate.getFullYear();

    // Adjust for if we haven't reached the same month/day yet in current year
    const currentMonth = currentDate.getMonth();
    const startMonth = startDate.getMonth();
    const currentDay = currentDate.getDate();
    const startDay = startDate.getDate();

    // If we haven't reached the anniversary date this year, subtract 1 from the years
    const adjustedYears =
        currentMonth < startMonth ||
        (currentMonth === startMonth && currentDay < startDay)
            ? yearsSince - 1
            : yearsSince;

    return adjustedYears;
}

export default function AboutPage() {
    // About stats
    const years = getYearsSince("June 1, 1983");

    //Possible Business Stats:
    //
    //    10,000+ Satisfied Clients – Helping thousands regain confidence through expert hair solutions.
    //    Over 100,000 Hair Transformations – From cuts to full hair restoration, we've done it all.
    //    500+ Wigs & Hairpieces Available – A wide selection to suit every style and need.

    return (
        <Navbar>
            <div className="py-12 container px-2 mx-auto grid md:grid-cols-3 gap-x-12">
                <Image
                    src={owner}
                    alt="Gail Gibson"
                    width={1000}
                    height={1000}
                    className="rounded-full aspect-square object-cover"
                />
                <div className="col-span-2 flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                        About Us
                    </h1>
                    <p className="max-w-prose text-neutral-600 text-lg [text-wrap:pretty]">
                        At{" "}
                        <strong className="font-medium text-neutral-950">
                            Beauty Bratz
                        </strong>
                        , we believe that everyone deserves to look and feel
                        their best. Founded and managed by{" "}
                        <strong className="font-medium text-neutral-950">
                            Gail Gibson
                        </strong>
                        , a certified{" "}
                        <strong className="font-medium text-neutral-950">
                            Trichologist
                        </strong>{" "}
                        and specialist in hair and scalp care, our salon is
                        dedicated to helping clients with thinning hair and hair
                        loss regain their confidence.
                    </p>

                    <div className="flex items-center justify-start gap-x-12 gap-y-6">
                        <Stat
                            name="Years of expertise"
                            value={years.toString()}
                        />
                        <Stat name="Satisfied clients" value="1000+" />
                        <Stat name="Hairpieces available" value="100+" />
                    </div>

                    <p className="max-w-prose text-neutral-600 text-lg [text-wrap:pretty]">
                        With years of experience in the cosmetics industry, Gail
                        has built a reputation for providing compassionate,
                        expert care. Whether you’re experiencing hair loss,
                        seeking a transformation, or simply looking for a fresh
                        new style, we offer personalized solutions to meet your
                        needs.
                    </p>
                    <h2 className="text-2xl sm:text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                        Our Approach
                    </h2>
                    <p className="max-w-prose text-neutral-600 text-lg [text-wrap:pretty]">
                        At{" "}
                        <strong className="font-medium text-neutral-950">
                            Beauty Bratz
                        </strong>
                        , we specialize in{" "}
                        <strong className="font-medium text-neutral-950">
                            hair restoration, hair pieces, and wigs
                        </strong>{" "}
                        that blend seamlessly with your natural hair, helping
                        you look and feel younger. Beyond hair loss treatments,
                        we also provide professional{" "}
                        <strong className="font-medium text-neutral-950">
                            cuts, color, and styling
                        </strong>{" "}
                        to enhance your natural beauty.
                    </p>
                    <h2 className="text-2xl sm:text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                        Why Choose Us?
                    </h2>
                    <ul className="list-disc list-outside ml-6 max-w-prose text-neutral-600 text-lg [text-wrap:pretty] flex flex-col gap-3">
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Expert Care
                            </strong>{" "}
                            – Led by a trichologist with specialized training in
                            hair replacement and scalp health.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Personalized Solutions
                            </strong>{" "}
                            – Every client is unique, and we tailor our services
                            to fit your individual needs.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                High-Quality Hair Solutions
                            </strong>{" "}
                            – We offer{" "}
                            <strong className="font-medium text-neutral-950">
                                natural-looking wigs, extensions, and hairpieces
                            </strong>{" "}
                            in human and synthetic hair.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Comprehensive Salon Services
                            </strong>{" "}
                            – From{" "}
                            <strong className="font-medium text-neutral-950">
                                precision cuts to vibrant color
                            </strong>
                            , we do it all.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Compassionate & Confidential
                            </strong>{" "}
                            – We provide a supportive environment where you can
                            feel comfortable and empowered.
                        </li>
                    </ul>
                    <h2 className="text-2xl sm:text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                        Our Services
                    </h2>
                    <p className="max-w-prose text-neutral-600 text-lg [text-wrap:pretty]">
                        We offer a range of{" "}
                        <strong className="font-medium text-neutral-950">
                            hair restoration and styling services
                        </strong>
                        , including:
                    </p>
                    <ul className="list-disc list-outside ml-6 max-w-prose text-neutral-600 text-lg [text-wrap:pretty] flex flex-col gap-3">
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Hair Restoration
                            </strong>{" "}
                            – Advanced treatments to restore hair and
                            confidence.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Wigs & Hair Pieces
                            </strong>{" "}
                            – Natural-looking solutions tailored to your
                            lifestyle.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Hair Color
                            </strong>{" "}
                            – Expert color services to complement your skin
                            tone.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Hair Extensions
                            </strong>{" "}
                            – Add volume, length, or coverage effortlessly.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Haircuts & Styling
                            </strong>{" "}
                            – Precision cuts and professional styling for any
                            occasion.
                        </li>
                        <li>
                            <strong className="font-medium text-neutral-950">
                                Hair Removal
                            </strong>{" "}
                            – Smooth, sleek results for your face, body, and
                            neck.
                        </li>
                    </ul>
                    <h2 className="text-2xl sm:text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                        Book a Free Consultation
                    </h2>
                    <p className="max-w-prose text-neutral-600 text-lg [text-wrap:pretty]">
                        Let’s create the perfect hair solution for you! Contact
                        us today to schedule a{" "}
                        <strong className="font-medium text-neutral-950">
                            free consultation
                        </strong>{" "}
                        and discover how{" "}
                        <strong className="font-medium text-neutral-950">
                            Beauty Bratz
                        </strong>{" "}
                        can help you achieve the look you deserve.
                    </p>
                </div>
            </div>
            <CTA />
        </Navbar>
    );
}
