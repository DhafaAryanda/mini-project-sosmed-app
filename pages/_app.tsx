import { ThemeProvider } from '@/components/theme-provider'
import RootLayout from '@/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const metaTitle =
    router.pathname === '/' ? 'Home' : router.pathname.replace('/', '')
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RootLayout metaTitle={metaTitle}>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  )
}
