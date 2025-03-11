import Image, { type StaticImageData } from "next/image";
import removal from "../../public/services/removal.png";
import restoration from "../../public/services/restoration.png";
import color from "../../public/services/color.png";
import extensions from "../../public/services/extensions.png";
import wigs from "../../public/services/wigs.png";
import cuts from "../../public/services/cuts.png";

const services = [
    {
        name: "Hair Color",
        description:
            "Enhance your style with expert hair coloring, customized to complement your skin tone and personal look.",
        image: color,
    },
    {
        name: "Hair Extensions & Hair Pieces",
        description:
            "Add volume, length, or coverage with natural-looking hairpieces, available in human hair, synthetic, and blends.",
        image: extensions,
    },
    {
        name: "Hair Restoration",
        description:
            "Restore your confidence with our advanced hair restoration solutions tailored to your needs.",
        image: restoration,
    },
    {
        name: "Wigs",
        description:
            "Look and feel your best with our wigs, designed for a natural appearance in human hair, synthetic, or blended options.",
        image: wigs,
    },
    {
        name: "Haircuts & Styling",
        description:
            "From precision cuts to stunning styles, our expert stylists craft the perfect look for you.",
        image: cuts,
    },
    {
        name: "Hair Removal",
        description:
            "Achieve a smooth, sleek look with professional hair removal for your face, body, and neck.",
        image: removal,
    },
];

export function Services() {
    return (
        <section className="container mx-auto px-2 py-12 flex flex-col gap-12">
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                Our Hair Salon Services
            </h2>
            <p className="text-xl [text-wrap:balance] max-w-prose text-neutral-600">
                We offer a wide range of hair replacement services to meet your
                needs. From haircuts to hair restoration, we have the expertise
                to help you achieve the look you desire.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((service) => (
                    <ServiceItem key={service.name} {...service} />
                ))}
            </ul>
        </section>
    );
}

function ServiceItem(
    props: Readonly<{
        name: string;
        description: string;
        image: StaticImageData;
    }>
) {
    return (
        <li className="rounded-4xl flex flex-col overflow-hidden relative group border border-neutral-200 shadow-lg shadow-neutral-800/10 hover:shadow-neutral-800/20 transition-shadow duration-300 ease-in-out">
            <Image
                src={props.image}
                alt={props.name}
                width={600}
                height={600}
                className="aspect-square object-cover group-hover:scale-105 transition-all duration-300 ease-in-out w-full h-auto"
            />
            <div className="z-10 bottom-0 absolute bg-white/90 p-6 backdrop-blur-sm">
                <div className="absolute -top-24 left-0 right-0 h-24 backdrop-blur-sm bg-gradient-to-t from-white/90 to-white/0 group-hover:h-12 group-hover:-top-12 transition-all duration-300 ease-in-out"></div>
                <p className="[text-wrap:pretty] text-neutral-600">
                    <span className="font-medium tracking-tight text-neutral-950 font-stretch-ultra-expanded">
                        {props.name}.
                    </span>{" "}
                    {props.description}
                </p>
            </div>
        </li>
    );
}
