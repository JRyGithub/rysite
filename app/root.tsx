import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";

import { getUser } from "~/session.server";
import tailwindStylesheetUrl from "~/styles/tailwind.css";
import { NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from "./contexts/themeContext";
import clsx from "clsx";
import Index from "./routes/_index";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

function App() {
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(['h-full', theme ? `theme-${theme}` : ''])}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <NonFlashOfWrongThemeEls />
        <Links />
      </head>
      <body className="h-full">
        {/* <Outlet /> */}
        <Index />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

// ning: Prop `className` did not match. Server: "h-full theme-null dark" Client: "h-full theme-dark"
