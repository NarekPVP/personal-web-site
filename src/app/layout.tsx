import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "../css/globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Narek Hovhannisyan - Full-Stack Developer",
  description:
    "Narek Hovhannisyan is a full-stack developer specializing in ASP.NET Web API, React, React Native, and Next.js. Discover projects, blog posts, and tutorials.",
  keywords: [
    "Narek Hovhannisyan",
    "Full-Stack Developer",
    "ASP.NET Web API",
    "React",
    "Next.js",
    "React Native",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Narek Hovhannisyan - Full-Stack Developer",
    description:
      "Explore Narek Hovhannisyan's portfolio as a full-stack software engineer specializing in ASP.NET Web API, React, and Next.js.",
    images: [
      {
        url: siteConfig.profilePictureUrl,
        width: 1200,
        height: 630,
        alt: "Narek Hovhannisyan - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NarekH",
    creator: "@NarekH",
    title: "Narek Hovhannisyan - Full-Stack Developer",
    description:
      "Full-stack developer specializing in ASP.NET Web API, React, Next.js, and React Native.",
    images: [
      {
        url: siteConfig.profilePictureUrl,
        alt: "Narek Hovhannisyan - Full-Stack Developer",
      },
    ],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* LinkedIn specific meta tags */}
        <meta
          property="og:title"
          content="Narek Hovhannisyan - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Full-stack developer specializing in ASP.NET Web API, React, Next.js, and React Native."
        />
        <meta
          property="og:image"
          content={siteConfig.profilePictureUrl}
        />
        <meta property="og:url" content={siteConfig.profilePictureUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="linkedin:site"
          content={siteConfig.socialMedia.linkedIn}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
