import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebStudio - Modern Web Design & Development',
  description: 'WebStudio offers professional and modern web design, development, and e-commerce solutions. We build responsive, fast, and SEO-friendly websites using Next.js and Tailwind CSS.',
  keywords: ['web design', 'web development', 'Next.js', 'Tailwind CSS', 'responsive websites', 'e-commerce', 'SEO', 'web studio'],
  authors: [{ name: 'WebStudio' }],
  // To improve social media sharing, uncomment and fill in the following sections.
  // Replace 'https://your-website-url.com' with your actual website URL.
  // openGraph: {
  //   title: 'WebStudio - Modern Web Design & Development',
  //   description: 'Professional web design solutions tailored to your needs.',
  //   url: 'https://your-website-url.com',
  //   siteName: 'WebStudio',
  //   images: [
  //     {
  //       url: 'https://your-website-url.com/og-image.png', // Create and add an OG image (e.g., 1200x630px)
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'WebStudio - Modern Web Design & Development',
  //   description: 'Professional web design solutions tailored to your needs.',
  //   // creator: '@yourTwitterHandle', // Your Twitter handle
  //   images: ['https://your-website-url.com/twitter-image.png'], // Create and add a Twitter image (e.g., 1200x675px)
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="pt-16 flex-grow bg-gray-50 text-gray-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}