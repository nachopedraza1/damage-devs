import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { AppTheme } from '@/theme'
import { Footer, Navbar } from '@/components/ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppTheme>
  )
}
