import Head from 'next/head'
import Layout from '../src/components/layout'
import { ThemeProvider } from 'styled-components'
import Dark from '../src/styles/theme/dark'
import DashboardPage from './dashboard'

export default function Home() {
  return (
    <ThemeProvider theme={Dark}>
      <Head>
        <title>My Wallet</title>
        <meta name="description" content="My Wallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='utf-8' />
        
      </Head>
      <Layout>
        <DashboardPage/>
      </Layout>
      


    </ThemeProvider>
  )
}
