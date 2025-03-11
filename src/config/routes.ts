export const routes = {
    home: {
        label: "Home",
        href: "/",
    },
    about: {
        label: "About",
        href: "/about",
    },
    services: {
        label: "Services",
        href: "/services",
    },
    contact: {
        label: "Contact",
        href: "/contact",
    },
    instagram: {
        label: "Instagram",
        href: "https://www.instagram.com/gailsabrat/?igshid=oysa7hga9or6",
    },
    facebook: {
        label: "Facebook",
        href: "https://www.facebook.com/Beauty-Bratz-603888769684080/",
    },
    linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gail-gibson-skidmore-902979159/",
    },
    x: {
        label: "X",
        href: "https://twitter.com/skidmoregibson",
    },
    webmaster: {
        label: "Created by Raymond Kneipp",
        href: "https://raymondkneipp.com",
    },
} as const;

export const navRoutes = [
    routes.home,
    routes.about,
    routes.services,
    routes.contact,
];

export const socialRoutes = [
    routes.instagram,
    routes.facebook,
    routes.linkedin,
    routes.x,
];
