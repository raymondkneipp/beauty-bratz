# Beauty Bratz

A modern, responsive website for a beauty salon built with Next.js and Tailwind CSS.

## Project Overview

Beauty Bratz is a freelance web development project for a beauty salon. The website provides an elegant online presence where clients can learn about services, view the salon's portfolio, and contact the owner.

## Design Inspiration

The website design was inspired by the [Studio template from Tailwind CSS](https://tailwindcss.com/plus/templates/studio). This template was adapted and customized to fit the unique brand identity of Beauty Bratz salon.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Code Quality**: 
  - [ESLint](https://eslint.org/) for code linting
  - [Prettier](https://prettier.io/) for code formatting
- **Deployment**: [Netlify](https://www.netlify.com/)

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Service showcase with detailed descriptions and pricing
- Portfolio gallery featuring the salon's work
- Contact form for client inquiries
- Fast loading times and optimized performance

## Getting Started

### Prerequisites

- Node.js (version 18.x or higher)
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/raymondkneipp/beauty-bratz.git
   cd beauty-bratz
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

### Code Structure

```
beauty-bratz/
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-96x96.png
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── manifest.json
│   │   ├── page.tsx
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   ├── components/
│   │   ├── owner-quote.tsx
│   │   ├── cta.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── icons.tsx
│   │   ├── logo.tsx
│   │   ├── navbar.tsx
│   │   ├── services.tsx
│   │   ├── stat.tsx
│   │   └── testimonials.tsx
│   └── config/
│       ├── info.ts
│       └── routes.ts
└── tsconfig.json
```

### Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Deployment

This project is deployed on Netlify. The deployment process is automatically triggered when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   ```bash
   npx netlify deploy --prod
   ```

## Project History

Development started in September 2022 as a freelance project to create a modern web presence for Beauty Bratz salon.

## License

[MIT](LICENSE)

## Contact

For any questions or inquiries about this project, please contact [your email or contact information].
