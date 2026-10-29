import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter, Newsreader } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif-cv",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.rj11.io"),
  title: "Ricardo Jorge: AI Product Engineer CV",
  description:
    "AI Product Engineer building production AI systems, data-driven products, and polished TypeScript experiences.",
  applicationName: "Ricardo Jorge CV",
  authors: [{ name: "Ricardo Jorge", url: "https://cv.rj11.io" }],
  creator: "Ricardo Jorge",
  publisher: "Ricardo Jorge",
  icons: {
    icon: [
      {
        url: "/static/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/static/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/static/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/static/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/static/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  keywords: [
    "AI Product Engineer",
    "Product Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "AI Agents",
    "Data Visualisation",
    "Lisbon",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Ricardo Jorge: AI Product Engineer CV",
    description:
      "AI Product Engineer building production AI systems, data-driven products, and polished TypeScript experiences.",
    siteName: "Ricardo Jorge",
    locale: "en_GB",
    firstName: "Ricardo",
    lastName: "Jorge",
    username: "rj11io",
    images: [
      {
        url: "/static/cv-rj11io-favicon-style-inverted-blue-og-v1.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Jorge, AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Jorge: AI Product Engineer CV",
    description:
      "AI Product Engineer building production AI systems, data-driven products, and polished TypeScript experiences.",
    images: [
      "/static/cv-rj11io-favicon-style-inverted-blue-og-v1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#252525" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        inter.variable,
        mono.variable,
        serif.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
