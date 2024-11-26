import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { NextUIProvider } from "@nextui-org/react";
import "./tailwind.css";
import { ScreenWidthContextProvider } from "~/ScreenWidthProvider";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, backgroundColor: "#000", height: "auto", overflowX: "hidden" }}>
        <ScreenWidthContextProvider>
          <NextUIProvider>
            {children}
            <ScrollRestoration />
            <Scripts />
          </NextUIProvider>
        </ScreenWidthContextProvider>
      </body>
      <footer className="bg-black text-gray-50 backdrop-blur-sm py-6 pt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white text-lg font-semibold">Vivienda Nova</p>
              <p className="text-gray-50 text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-50 md:hover:text-slate-900 md:cursor-pointer md:hover:bg-gray-100 p-2 rounded-xl">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-50 md:hover:text-slate-900 md:cursor-pointer md:hover:bg-gray-100 p-2 rounded-xl">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-50 md:hover:text-slate-900 md:cursor-pointer md:hover:bg-gray-100 p-2 rounded-xl">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
