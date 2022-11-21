import Layout from '../src/components/layout'
import Head from 'next/head'
import DashboardPage from './dashboard'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../src/styles/theme/themes'

export default function Home() {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <Head>
          <meta name="description" content="My Wallet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet='utf-8' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
        </Head>
        <DashboardPage />
      </Layout>
    </ThemeProvider>
  )
}
