import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { AppTheme } from '@/theme'
import { Footer, Navbar } from '@/components/ui'

import { UiProvider } from '../context/UiProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <AppTheme>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppTheme>
    </UiProvider>
  )
}
