import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import { Header } from './Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function AuthLayout({
  children,
  metaTitle,
}: {
  children: React.ReactNode
  metaTitle?: string
}) {
  return (
    <>
      <Head>
        <title>{`${metaTitle ? `${metaTitle} | ` : ''}Cosmed`}</title>
        <meta name="description" content="Authentication Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showAvatar={false} />

      <main
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen`}
      >
        {children}
      </main>
    </>
  )
}
