import { GlobalStyle } from '@/styles/global'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { SideMenuProvider } from '@/context/sideMenuContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SideMenuProvider>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </SideMenuProvider>  
  )
}
