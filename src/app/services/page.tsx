import { Services } from "@/components/services";
import { CTA } from "@/components/cta";
import { Navbar } from "@/components/navbar";

export default function ServicesPage() {
    return (
        <Navbar>
            <Services />
            <CTA />
        </Navbar>
    );
}
