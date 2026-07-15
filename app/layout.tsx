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
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Jorge: AI Product Engineer CV",
    description:
      "AI Product Engineer building production AI systems, data-driven products, and polished TypeScript experiences.",
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
