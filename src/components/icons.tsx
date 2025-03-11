import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Icons = {
    menu: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="lucide lucide-menu"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M4 12h16M4 6h16M4 18h16"></path>
        </svg>
    ),
    close: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="lucide lucide-x"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M18 6 6 18M6 6l12 12"></path>
        </svg>
    ),
    chevronLeft: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.75"
            className="size-12"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m15 18-6-6 6-6"></path>
        </svg>
    ),

    chevronRight: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            className="size-12"
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="m9 18 6-6-6-6"></path>
        </svg>
    ),
};
