import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import "../../public/assets/css/pokemon.css";
import Spin from "../components/spin/Spin"

export const metadata: Metadata = {
  title: "Optimizely CMS Boilerplate - Create Next App",
  description: "Generated by create next app for Optimizely CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script type="module" src="/assets/js/vendor.mjs" strategy="lazyOnload"></Script>
        <Script type="module" src="/assets/js/main.mjs" strategy="lazyOnload"></Script>
      </head>
      <body>
        <Spin></Spin>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
