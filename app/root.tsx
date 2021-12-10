import {
  Link,
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "remix";
import type { LinksFunction } from "remix";

import core from "~/styles/core.css";
import application from "~/styles/application.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const links: LinksFunction = () => {
    const faviconSizes = [
        256,
        196,
        160,
        96,
        32,
        16
    ];

    return [
        { 
            rel: "stylesheet", 
            href: core 
        },
        { 
            rel: "stylesheet", 
            href: application 
        },
        { 
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "/favicon.ico",
            sizes: "16x16 24x24 32x32 64x64 128x128"
        },
        { 
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon.svg",
            sizes: "any"
        },
        { 
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        },
        { 
            rel: "icon",
            type: "image/png",
            href: "/icons/256x256.png"
        },
        ...faviconSizes.map(i => ({
            rel: "icon",
            type: "image/png",
            href: `/icons/${i}x${i}.png`,
            sizes: `${i}x${i}`,
            key: i
        }))
    ];
};

export const meta: MetaFunction = () => {
    return {
        title: "Support us with our mission",
        description: "With your help, we can create privacy-focused products and services.",
        "theme-color": "#feffff"
    };
};

const App = () => {
    return (
        <Document>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
    console.error(error);

    return (
        <Document title={"Error!"}>
            <Layout>
                <div>
                    <h1>500</h1>
                    <p>{error.message}</p>
                    <hr />
                    <p>
                        An internal error has occured. Please try again in a moment.
                    </p>
                </div>
            </Layout>
        </Document>
    );
}


export const CatchBoundary = () => {
    let caught = useCatch();

    let message;
    switch (caught.status) {
        case 401:
        case 403:
            message = (
                <p>
                    No permission to view this page or resource.
                </p>
            );
            break;
        case 404:
            message = (
                <p>
                    This page or resource no longer exists.
                </p>
            );
            break;
        default:
            throw new Error(caught.data || caught.statusText);
    }

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <Layout>
                <h1>
                    {caught.status}: {caught.statusText}
                </h1>
                {message}
            </Layout>
        </Document>
    );
}

const Document = ({
    children,
    title
}: {
    children: React.ReactNode;
    title?: string;
}) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main id={"main-content"}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default App;