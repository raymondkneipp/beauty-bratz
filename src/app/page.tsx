import { Testimonials } from "@/components/testimonials";
import { Services } from "@/components/services";
import { Hero } from "@/components/hero";
import { OwnerQuote } from "@/components/OwnerQuote";
import { CTA } from "@/components/cta";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
    return (
        <Navbar>
            <Hero />
            <Testimonials />
            <Services />
            <OwnerQuote />
            <CTA />
        </Navbar>
    );
}
