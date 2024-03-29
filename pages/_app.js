import '@/styles/tailwind.scss'
import '@/styles/global.scss'
import '@/styles/prism.scss'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import MailChimpHeadCode from '@/components/MailChimpHeadCode'
import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'
import { useRouter } from 'next/router'

let GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
} else {
  GTM_Tracking_ID = 'GTM-XXXXXXX'
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const canonicalUrl = (
    `${siteMetadata.siteUrl}` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="LOmgcQtS3n4SzA1wUbtCUBeOyVp1Kq8d4XWHvWAf51Y"
        />
      </Head>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_Tracking_ID}');
        `,
        }}
      />
      <MailChimpHeadCode />
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
