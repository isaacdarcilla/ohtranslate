import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Oh! Translate',
    description: 'Translate Tagalog to Baybayin, Buhid, Hanunoo, Tagbanwa',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`{inter.className}  bg-cover bg-fixed`} style={{
                backgroundImage: "url('/images/header.png')",
            }}>{children}</body>
        </html>
    )
}
