import "@/styles/globals.css";

import React from "react";

import Providers from "@/app/providers";

import { cn } from "@/lib/utils";
import { geistSans } from "@/styles/fonts";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

const title = "EMI Calculator";
const description =
  "Quickly calculate monthly EMI payments on loans. Easy-to-use, accurate results. Compare loan options. Financial planning tool.";
const image = "https://loan-calculator-chi-two.vercel.app/og.png";

export const metadata: Metadata = {
  title: title,
  description: description,
  creator: "@nuwanperera-me",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  openGraph: {
    title: title,
    description: description,
    images: [image],
  },
  icons: [
    { rel: "apple-touch-icon", url: "icons/nextjs-icon-128.png" },
    { rel: "icon", url: "icons/nextjs-icon-128.png" },
  ],
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
    creator: "@nuwanperera-me",
  },
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "w-full min-h-screen flex flex-col justify-between bg-background font-sans text-sm text-secondary-foreground antialiased",
          geistSans.variable,
        )}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Providers>
        <footer className="flex h-12 w-full flex-col text-center text-muted-foreground">
          <p className="text-sm">
            Crafted by{" "}
            <Link
              className="cursor-pointer"
              href="https://github.com/nuwanperera-me"
            >
              Nuwan Perera
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
