import Head from 'next/head'
import Dashboard from '../src/dashboard'
import GlobalStyle from '../src/styles/GlobalStyle'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Wallet</title>
        <meta name="description" content="My Wallet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='utf-8'/>
        
      </Head>
      <Dashboard />
      <GlobalStyle />

      
    </div>
  )
}
