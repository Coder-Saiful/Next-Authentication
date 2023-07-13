import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'Next js authentication',
  icons: {
    icon: '/logo-sm.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/380b207d69.js"></script>
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
