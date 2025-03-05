import { ContentContainer } from '@/components/layout/ContentContainer'
import { Header } from '@/components/layout/Header'
import { PageContainer } from '@/components/layout/PageContainer'
import { Sidebar } from '@/components/layout/Sidebar'
import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
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
        <meta name="description" content="Application layout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Layout untuk home */}
      <div
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen `}
      >
        <Header />

        <PageContainer>
          <Sidebar />
          <ContentContainer>{children}</ContentContainer>
        </PageContainer>
      </div>
    </>
  )
}
