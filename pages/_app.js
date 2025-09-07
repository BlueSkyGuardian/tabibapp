// pages/_app.js
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tabib.info  | المساعد الطبي الذكي</title>
        <meta
          name="description"
          content="موقع طبي افتراضي يقدم معلومات عن الأعراض، الأدوية المتوفرة في المغرب مع أسعارها، ونصائح صحية موثوقة."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#95f16d" />
        <meta name="msapplication-TileColor" content="#95f16d" />
      </Head>
      {/* Google Analytics (GA4) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M8N1VDTDDQ"
        strategy="afterInteractive"
      />
      <Script id="ga-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M8N1VDTDDQ');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
