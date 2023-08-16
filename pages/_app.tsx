import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import { Layout } from '@/components'
import { Toaster } from 'react-hot-toast'

import { ProductStateProvider } from '@/context/ProductStateProvider'
import { CartStateProvider } from '@/context/CartStateProvider'

import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartStateProvider>
        <ProductStateProvider>
          <Layout className={inter.className}>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </ProductStateProvider>
      </CartStateProvider>
    </ThemeProvider>


  )
}
