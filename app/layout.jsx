import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { JetBrains_Mono } from 'next/font/google'

const jbMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Addy Ireland',
  description: 'Addy Ireland\'s portfolio website',
  openGraph: {
    title: 'Addy Ireland',
    description: 'Addy Ireland\'s portfolio website',
    url: 'https://addyire.land',
    siteName: 'Addy Ireland\'s Portfolio',
    images: [
      {
        url: 'https://addyire.land/memoji.png',
        width: 420,
        height: 420,
      }
    ],
    locale: 'en_US',
    type: 'profile',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://www.gstatic.com" />
      </head>
      <body className={jbMono.className + ' bg-black text-white'}>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
    </html >
  )
}
