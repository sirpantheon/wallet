import GlobalStyle from '../src/styles/GlobalStyle'
import Head from 'next/head'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )

}
