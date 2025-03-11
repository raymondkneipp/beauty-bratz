import Link from "next/link";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Logo(props: Props) {
    return (
        <Link href="/" className="flex items-center gap-2 group" {...props}>
            <span className="text-3xl sm:text-5xl font-medium font-stretch-ultra-expanded inline-flex">
                <div className="rotate-y-180 translate-x-1/11 rotate-z-15 group-hover:rotate-z-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:rotate-y-0">
                    b
                </div>
                <div className="rotate-z-15 group-hover:rotate-z-0 transition-all duration-300 ease-in-out -translate-x-1/10">
                    b
                </div>
            </span>

            <span className="font-stretch-ultra-expanded font-medium text-xl sm:text-2xl">
                beauty bratz
            </span>
        </Link>
    );
}
