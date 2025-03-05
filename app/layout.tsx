import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Collins Macharia - Full-stack Developer",
  description: "Portfolio of Collins Macharia, a Full-stack Developer exploring Web3 while doing some Web2 stuff.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
          {children}
   
      </body>
    </html>
  )
}

