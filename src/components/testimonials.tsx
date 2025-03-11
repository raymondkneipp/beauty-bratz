"use client";
import React, { useCallback } from "react";
import Image, { type StaticImageData } from "next/image";

import client1 from "../../public/clients/client-1.png";
import client2 from "../../public/clients/client-2.png";
import client3 from "../../public/clients/client-3.png";
import client4 from "../../public/clients/client-4.png";
import client5 from "../../public/clients/client-5.png";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import AutoPlay from "embla-carousel-autoplay";
import { Icons } from "./icons";

const testimonials = [
    {
        name: "Client 4",
        image: client4,
        quote: "They gave me my hair back and made me look years younger! I feel more confident than ever.",
    },
    {
        name: "Client 1",
        image: client1,
        quote: "From haircuts to hair restoration, this place is second to none! Exceptional service and results.",
    },
    {
        name: "Client 3",
        image: client3,
        quote: "They truly personalize every visit, taking their time to ensure perfection. An outstanding experience!",
    },
    {
        name: "Client 2",
        image: client2,
        quote: "Meeting Gail was an absolute pleasure—her expertise and passion shine through in every detail!",
    },
    {
        name: "Client 5",
        image: client5,
        quote: "I've been coming here for years, and I wouldn’t go anywhere else. Professional, friendly, and always amazing results!",
    },
];

export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
        },
        [
            ClassNames(),
            AutoPlay({
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="bg-neutral-950 pt-16 py-24 px-6 md:px-12 rounded-4xl relative overflow-hidden">
            <div className="" ref={emblaRef}>
                <div className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[50%] lg:auto-cols-[40%] gap-12">
                    {testimonials.slice(0, 5).map((testimonial) => (
                        <TestimonialItem
                            key={testimonial.name}
                            {...testimonial}
                        />
                    ))}
                </div>

                <button
                    className="text-neutral-500 hover:text-neutral-50 transition-colors duration-300 ease-in-out cursor-pointer absolute top-0 bottom-0 left-0 bg-gradient-to-r from-neutral-950 to-transparent rounded-full"
                    onClick={scrollPrev}
                >
                    <Icons.chevronLeft />
                </button>
                <button
                    className="text-neutral-500 hover:text-neutral-50 transition-colors duration-300 ease-in-out cursor-pointer absolute top-0 bottom-0 right-0 bg-gradient-to-l from-neutral-950 to-transparent rounded-full"
                    onClick={scrollNext}
                >
                    <Icons.chevronRight />
                </button>
            </div>
        </section>
    );
}

function TestimonialItem(
    props: Readonly<{
        name: string;
        image: StaticImageData;
        quote: string;
    }>
) {
    return (
        <article className="relative group flex flex-col basis-64 first:ml-12 not-[.is-snapped]:opacity-25 transition-opacity duration-500 ease-in-out">
            <Image
                src={props.image}
                alt={props.name}
                width={150}
                height={150}
                className="grayscale brightness-80 m-auto group-[.is-snapped]:grayscale-0 transition-all duration-500 ease-in-out relative z-10 -bottom-12 group-[.is-snapped]:-bottom-4 size-36 object-contain group-[.is-snapped]:scale-110"
            />
            <div className="rounded-2xl p-6 bg-neutral-800 relative z-20 shadow-lg inset-shadow-sm border border-neutral-800 overflow-hidden flex-grow flex items-center justify-center text-center">
                <span className="text-8xl absolute top-3 left-3 font-bold text-neutral-50/5 rotate-5">
                    &quot;
                </span>
                <p className="text-neutral-50 [text-wrap:balance]">
                    {props.quote}
                </p>
                <span className="text-8xl absolute bottom-3 right-3 font-bold text-neutral-50/5 -rotate-5 translate-y-1/2">
                    &quot;
                </span>
            </div>
        </article>
    );
}
