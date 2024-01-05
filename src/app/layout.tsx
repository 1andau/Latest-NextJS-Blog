import { Inter } from 'next/font/google'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './(lk)/components/header/page'

const inter = Inter({ subsets: ['latin'] })

const notoSansJapanese = Noto_Sans_JP({
  weight: '800',
  preload: false,
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={notoSansJapanese.className}>
      <Header/>

        {children}
            </body>
    </html>
  )
}
