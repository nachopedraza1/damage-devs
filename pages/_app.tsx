import { Navbar } from '@/components/ui'
import '@/styles/globals.css'
import { AppTheme } from '@/theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <Navbar />
      <Component {...pageProps} />
    </AppTheme>
  )

}
