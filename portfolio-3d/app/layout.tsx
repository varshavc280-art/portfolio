import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K Satish Phanindra | AI Designer & Developer",
  description: "Scroll-stopping cinematic 3D portfolio. AI-powered creativity with interactive experiences.",
  keywords: "designer, developer, 3D, portfolio, AI, creative, web development",
  authors: [{ name: "K Satish Phanindra" }],
  openGraph: {
    title: "K Satish Phanindra | AI Designer & Developer",
    description: "Scroll-stopping cinematic 3D portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
