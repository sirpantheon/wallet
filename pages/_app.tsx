import GlobalStyle from '../src/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../src/styles/theme/themes'
import Head from 'next/head'
import Layout from '../src/components/layout'
import DashboardPage from './dashboard'
import ListPage from './list'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark} >
      {/* <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head> */}
      <Layout>
        <ListPage />
      </Layout>

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}
