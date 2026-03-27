import type { Metadata } from "next";
import React from "react";
import { ClientLayout } from "./ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://tarunsingh.dev"),
  title: "Tarun Singh | Full Stack Developer | Typescript, NodeJS, ReactJS",
  keywords:
    "Tarun, Singh, Web developer, Full Stack web developer, Portfolio, Javascript, Typescript, NodeJS, ReactJS, MySQL, MongoDB, Golang, freelancer, toronto",
  description:
    "Portfolio of Tarun Singh - a Full Stack Developer specializing in TypeScript, NodeJS, ReactJS, and modern web technologies. Based in Toronto, ON.",
  authors: [{ name: "Tarun Singh" }],
  creator: "Tarun Singh",
  publisher: "Tarun Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarunsingh.dev",
    siteName: "Tarun Singh Portfolio",
    title: "Tarun Singh | Full Stack Developer",
    description:
      "Portfolio of Tarun Singh - Full Stack Developer specializing in TypeScript, NodeJS, ReactJS, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tarun Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Singh | Full Stack Developer",
    description:
      "Portfolio of Tarun Singh - Full Stack Developer specializing in TypeScript, NodeJS, ReactJS.",
    images: ["/og-image.png"],
    creator: "@tarun7singh",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tarun Singh",
  },
  applicationName: "Tarun Singh Portfolio",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tarun Singh",
    url: "https://tarunsingh.dev",
    jobTitle: "Full Stack Developer",
    email: "hello@tarunsingh.dev",
    sameAs: [
      "https://www.linkedin.com/in/tarun7singh/",
      "https://github.com/tarun7singh",
      "https://twitter.com/tarun7singh",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NodeJS",
      "NextJS",
      "MongoDB",
      "PostgreSQL",
      "Golang",
      "Python",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
