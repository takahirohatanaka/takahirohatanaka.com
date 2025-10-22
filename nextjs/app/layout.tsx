import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Takahiro Hatanaka",
  keywords:
    "takahirohatanaka,takahiro,hatanaka,畑中貴弘,畑中,貴弘,はたなかたかひろ,はたなか,たかひろ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-PVJKJQW" />
      </body>
    </html>
  );
}
