import './globals.css';

// TODO: Replace with actual Website URL
const WEBSITE_URL = 'https://www.mehndimarvel.com';

export const metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: 'Mehndi Marvel | Best Bridal Mehndi Artist in Udaipur',
    template: '%s | Mehndi Marvel'
  },
  description: 'Premium professional Mehndi artist serving Udaipur, Rajasthan. Specializing in luxury bridal, wedding, engagement, and Arabic Mehndi. Home service available.',
  keywords: [
    'Mehndi Artist Udaipur', 
    'Bridal Mehndi Artist Udaipur', 
    'Best Mehndi Artist Udaipur', 
    'Arabic Mehndi Udaipur', 
    'Wedding Mehndi Udaipur', 
    'Mehndi Marvel',
    'Monika Sharma Mehndi',
    'Bridal Mehndi Rajasthan'
  ],
  authors: [{ name: 'Mehndi Marvel', url: WEBSITE_URL }],
  creator: 'Mehndi Marvel',
  publisher: 'Mehndi Marvel',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mehndi Marvel | Best Bridal Mehndi Artist in Udaipur',
    description: 'Premium professional Mehndi artist in Udaipur. Specializing in luxury bridal, wedding, engagement, and Arabic Mehndi.',
    url: WEBSITE_URL,
    siteName: 'Mehndi Marvel',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautiful Bridal Mehndi Design by Mehndi Marvel in Udaipur',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehndi Marvel | Best Bridal Mehndi Artist in Udaipur',
    description: 'Premium professional Mehndi artist in Udaipur. Specializing in luxury bridal, wedding, engagement, and Arabic Mehndi.',
    images: ['/logo/logo.jpg'],
  },
  icons: {
    icon: '/logo/logo.jpg',
    apple: '/logo/logo.jpg',
  },
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mehndi Marvel',
  image: `${WEBSITE_URL}/logo/logo.jpg`,
  '@id': WEBSITE_URL,
  url: WEBSITE_URL,
  telephone: '8209719892',
  email: 'mehndimarvelofficial@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, Agrawal Flex, 100 Feet Road, Mali Colony, Sector 3, Hiran Magri',
    addressLocality: 'Udaipur',
    addressRegion: 'Rajasthan',
    postalCode: '313002',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.571270,
    longitude: 73.691544
  },
  priceRange: '₹₹',
  description: 'Professional Bridal and Arabic Mehendi Artist based in Udaipur, Rajasthan. Home service available.',
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mehndi Marvel',
  url: WEBSITE_URL,
  logo: `${WEBSITE_URL}/logo/logo.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '8209719892',
    contactType: 'customer service',
    email: 'mehndimarvelofficial@gmail.com'
  },
  sameAs: [
    'https://www.instagram.com/mehndimarvel/'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessLd, organizationLd]) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
