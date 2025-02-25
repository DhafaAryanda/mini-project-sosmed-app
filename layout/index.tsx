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
        <title>{`${metaTitle ? `${metaTitle} | ` : ''}My App`}</title>
        <meta name="description" content="Application layout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
      >
        {/* Header */}
        <header className="h-16 border-b border-blue-300 flex items-center justify-end p-4">
          <div className="w-10 h-10 rounded-full border-2 border-red-300"></div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 border-l border-r border-b border-gray-300">
          {/* Left Sidebar - 1/4 width */}
          <div className="w-1/4 border-r border-gray-300 p-4 flex items-center justify-center">
            <div className="text-xl">1/4</div>
          </div>

          {/* Main Content Area - 3/4 width */}
          <div className="w-3/4 p-4 flex items-center justify-center">
            <div className="text-xl">3/4</div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
