import { Box, LinearProgress } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Roboto_Condensed } from 'next/font/google'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import s from './App.module.scss'
import '@/styles/global.scss'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import ResponsiveDrawer from '@/components/NavPane/NavPane'
import { usePageLoading } from '@/hooks'
import { Theme } from '@/layouts'
import { GlobalStyles, v } from '@/styles'

import '@/styles/normalize.scss'

const roboto = Roboto_Condensed({
  subsets: ['cyrillic-ext', 'latin-ext'],
  weight: '400',
  preload: true,
})

export default function App({ Component, pageProps, router }: AppProps) {
  const { isPageLoading } = usePageLoading()
  const url = `http://localhost:3000${router.route}`
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Created by mick-olka' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DefaultSeo
        titleTemplate='RotangUA %s'
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The Next js template from Mick',
          site_name: 'Next js template by Mick',
          images: [],
        }}
        canonical={url}
      />
      <Theme>
        {/* <GlobalStyles /> */}
        <ToastContainer hideProgressBar autoClose={1000} />
        <div className={(s.Wrapper, roboto.className)}>
          {isPageLoading && <LinearProgress sx={{ minHeight: '4px' }} />}
          <Header />
          <div className={s.MainContent}>
            <Box
              component='nav'
              sx={{ width: { sm: 0, md: v.navbarWidth }, flexShrink: { sm: 0 } }}
            >
              <ResponsiveDrawer />
            </Box>
            <Box sx={{ width: '100%' }}>
              <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                {!isPageLoading && <Component {...pageProps} />}
              </AnimatePresence>
              <Footer />
            </Box>
          </div>
        </div>
      </Theme>
    </>
  )
}
