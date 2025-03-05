import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Collins Macharia - Full-stack Developer",
  description: "Portfolio of Collins Macharia, a Full-stack Developer exploring Web3 while doing some Web2 stuff.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.className} text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition-colors duration-300`}
     >
          {children}
       
      </body>
    </html>
  )
}

