import "@/styles/globals.css";

import React from "react";

import Providers from "@/app/providers";

import { cn } from "@/lib/utils";
import { geistSans } from "@/styles/fonts";

import type { Metadata } from "next";

const title = "something";
const description = "The plate is boiling. Just craft something!";
const image =
  "https://raw.githubusercontent.com/somehq/somestatic/main/something/og.png";

export const metadata: Metadata = {
  title: title,
  description: description,
  creator: "@snelusha",
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
    creator: "@snelusha",
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
          "bg-background font-sans text-sm text-secondary-foreground antialiased",
          geistSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
