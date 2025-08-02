import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vantage",
  description: "Vantage - A modern web application",
  keywords: "vantage, web app, application",
  authors: [{ name: "Vantage Team" }],
  creator: "Vantage",
  publisher: "Vantage",
  robots: "index, follow",
  openGraph: {
    title: "Vantage",
    description: "Vantage - A modern web application",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantage",
    description: "Vantage - A modern web application",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}