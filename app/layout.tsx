import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nabilla Eka Putri Sunarto — Information Systems & Technology, ITB',
  description:
    'Portfolio of Nabilla Eka Putri Sunarto, Information Systems & Technology student at Bandung Institute of Technology with experience in project management, software development, and stakeholder engagement.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
