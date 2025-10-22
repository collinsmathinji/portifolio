import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Collins Macharia - Terminal Portfolio",
  description: "Interactive Linux terminal portfolio of Collins Macharia, a Full-stack Developer exploring Web3 while building robust Web2 solutions.",
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

