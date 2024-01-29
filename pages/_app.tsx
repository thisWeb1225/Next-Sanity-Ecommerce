// Components
import { Layout } from '@/components';
import { Toaster } from 'react-hot-toast';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

// Context
import { ProductStateProvider } from '@/context/ProductStateProvider';
import { CartStateProvider } from '@/context/CartStateProvider';

// Styles
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

// Type
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
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
    </ReactLenis>
  );
}
