import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { ContentContainer } from '@/components/layout/ContentContainer'
import { PageContainer } from '@/components/layout/PageContainer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

type CardProps = React.ComponentProps<typeof Card>

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
        <Header />

        <PageContainer>
          <Sidebar />
          <ContentContainer>{children}</ContentContainer>
        </PageContainer>
      </div>
    </>
  )
}
