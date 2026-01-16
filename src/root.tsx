import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import '@/styles/index.scss';

export const links: Route.LinksFunction = () => [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap',
    },
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180x180.png' },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
    },

    {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon-192x192.png',
    },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>
                    Купить цветы в Тюмени: тюльпаны, гортензии, клубнику,
                    рассаду | Зеленый город.
                </title>
                <meta
                    name="description"
                    content="Живые цветы, рассада и саженцы в Тюмени! Тюльпаны, гортензии, клубника, земляника. «Зеленый город» — магазин цветов и растений. Свежесть, консультации по уходу, доступные цены!"
                />
                <Meta />
                <Links />
            </head>
            <body className={'app'}>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!';
    let details = 'An unexpected error occurred.';
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error';
        details =
            error.status === 404
                ? 'The requested page could not be found.'
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
