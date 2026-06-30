import { IBM_Plex_Serif, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const inter = Inter({subsets:['latin'],variable:'--font-inter'})

const imbPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight:['400','700'],
  variable: "--font-ibm-plex-serif",
})

export const metadata:Metadata = {
  title:"Future",
  icons:{
    icon:"/public/icons/logo.svg"
  },
  description:"Future is a next-generetaion online banking platform that revolutionizes the way banking systems work."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", imbPlexSerif.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
