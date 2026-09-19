import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Geist:wght@300;400;500&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.moda.app/runtime-libs/lenis-1.3.23/lenis.css" />
        <Script
          src="https://cdn.moda.app/runtime-libs/tailwind-browser-4.1.13-index.global.min.js"
          strategy="beforeInteractive"
        />
        <Script src="https://cdn.moda.app/runtime-libs/lenis-1.3.23/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.moda.app/runtime-libs/gsap-3.15/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.moda.app/runtime-libs/gsap-3.15/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
