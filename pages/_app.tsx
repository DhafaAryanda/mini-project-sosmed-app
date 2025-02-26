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
  const metaTitle =
    router.pathname === '/' ? 'Home' : router.pathname.replace('/', '')
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
