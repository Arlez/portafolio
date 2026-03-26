import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { LanguageProvider } from '../components/LanguageContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
}
