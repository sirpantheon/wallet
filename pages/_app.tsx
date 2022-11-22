import GlobalStyle from '../src/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../src/styles/theme/themes'
import Aside from '../src/components/aside'
import MainHeader from '../src/components/mainHeader'
import Head from 'next/head'
import styled from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark} >
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Aside />
      <MainHeader />

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}
