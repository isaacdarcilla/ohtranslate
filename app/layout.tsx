import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const font = localFont({ src: '../public/fonts/Quiapo_Free.otf' })

export const metadata: Metadata = {
    title: 'Oh! Translate - Translate Tagalog Text',
    description: 'Translate Tagalog to Baybayin, Buhid, Hanunoo, Tagbanwa',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${font.className} bg-brand-400 bg-fixed`}>
                {children}
            </body>
        </html>
    )
}
