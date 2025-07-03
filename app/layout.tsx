import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope, Nunito, Rubik, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Configuración de fuentes
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
})

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  display: "swap"
})

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito",
  display: "swap"
})

const rubik = Rubik({ 
  subsets: ["latin"], 
  variable: "--font-rubik",
  display: "swap"
})

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Pro-Lab Educativa - Centro Líder en Formación Laboral con Certificación Nacional e Internacional",
  description: "Centro líder en formación laboral especializada con certificación nacional e internacional. Cursos de Criminalística, Marketing Digital, LSA, Personal Trainer y más. Clases online en vivo con docentes expertos.",
  keywords: "formación laboral, certificación nacional, certificación internacional, cursos online, criminalística, marketing digital, lengua de señas, personal trainer, capacitación profesional, educación a distancia, Argentina, Santo Tomé, Santa Fe",
  authors: [{ name: "Pro-Lab Educativa", url: "https://prolab-educativa.com" }],
  creator: "Pro-Lab Educativa",
  publisher: "Pro-Lab Educativa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/logo1.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo2.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo2.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://prolab-educativa.com',
    siteName: 'Pro-Lab Educativa',
    title: 'Pro-Lab Educativa - Centro Líder en Formación Laboral con Certificación Nacional e Internacional',
    description: 'Centro líder en formación laboral especializada con certificación nacional e internacional. Cursos de Criminalística, Marketing Digital, LSA, Personal Trainer y más.',
    images: [
      {
        url: '/logo2.png',
        width: 1200,
        height: 630,
        alt: 'Pro-Lab Educativa - Centro de Formación Laboral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro-Lab Educativa - Centro Líder en Formación Laboral',
    description: 'Centro líder en formación laboral especializada con certificación nacional e internacional.',
    images: ['/logo2.png'],
    creator: '@prolab_educativa',
    site: '@prolab_educativa',
  },
  alternates: {
    canonical: 'https://prolab-educativa.com',
    languages: {
      'es-AR': 'https://prolab-educativa.com',
    },
  },
  verification: {
    google: 'verificación-google', // Reemplazar con el código real de verificación de Google
  },
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#5867FF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="https://prolab-educativa.com" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Pro-Lab Educativa",
              "description": "Centro de formación especializado en capacitaciones prácticas con certificación nacional e internacional",
              "url": "https://prolab-educativa.com",
              "logo": "https://prolab-educativa.com/logo2.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-342-503-0140",
                "contactType": "customer service",
                "email": "direccion@prolab.com.ar"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Ejercito Argentino 2515, Primer Piso",
                "addressLocality": "Santo Tomé",
                "addressRegion": "Santa Fe",
                "addressCountry": "AR"
              },
              "sameAs": [
                "https://wa.me/5493425030140",
                "https://www.instagram.com/prolab_educativa?igsh=MTduZmpmMG9jdzR6Zg==",
                "https://www.facebook.com/profile.php?id=61576344784873"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${nunito.variable} ${rubik.variable} ${poppins.variable} font-body antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="prolab-ui-theme">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
