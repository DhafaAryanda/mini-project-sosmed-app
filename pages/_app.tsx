import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Toaster } from '@/components/ui/sonner'
import RootLayout from '@/components/layout/RootLayout'
import AuthLayout from '@/components/layout/AuthLayout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isAuthPage = ['/login', '/register'].includes(router.pathname)
  const Layout = isAuthPage ? AuthLayout : RootLayout
  const formatTitle = (path: string) => {
    if (path === '/') return 'Home'

    return path
      .split('/')
      .filter(Boolean)
      .map((segment) => {
        if (segment.startsWith('[') && segment.endsWith(']')) {
          const param = segment.slice(1, -1)
          return router.query[param] || param
        }
        return segment.charAt(0).toUpperCase() + segment.slice(1)
      })
      .join(' - ')
  }

  const metaTitle = formatTitle(router.pathname)
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      <Layout metaTitle={metaTitle}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
