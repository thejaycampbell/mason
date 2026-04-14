import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Dispatch — Project Management for Freelancers',
    template: '%s | Dispatch',
  },
  description:
    'Dispatch is project management software for freelancers — proposals, invoicing, and client communication in one tool. Join 3,200 freelancers who get paid in 4 days on average.',
  metadataBase: new URL('https://dispatch.so'),
  alternates: {
    canonical: 'https://dispatch.so',
  },
  openGraph: {
    title: 'Dispatch — Project Management for Freelancers',
    description:
      'Proposals, invoicing, and client communication in one tool. 3,200 freelancers. Paid in 4 days on average.',
    url: 'https://dispatch.so',
    siteName: 'Dispatch',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dispatch — Project Management for Freelancers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dispatch — Project Management for Freelancers',
    description:
      'Proposals, invoicing, and client communication in one tool.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dispatch',
  url: 'https://dispatch.so',
  logo: 'https://dispatch.so/logo.png',
  description:
    'Dispatch is project management software for freelancers — proposals, invoicing, and client communication in one tool.',
  foundingDate: '2023',
  sameAs: [
    'https://twitter.com/dispatchhq',
    'https://www.linkedin.com/company/dispatchhq',
    'https://github.com/dispatchhq',
    'https://www.producthunt.com/posts/dispatch',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@dispatch.so',
    contactType: 'customer support',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dispatch',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free plan available. Pro from $19/month.',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '312',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
