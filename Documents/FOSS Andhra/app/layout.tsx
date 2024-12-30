import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'FOSS Andhra | Empowering Andhra Pradesh through Open-Source Technology ',
  description: 'Join FOSS Andhra in revolutionizing Andhra Pradesh through Free and Open-Source Software (FOSS) and Hardware (FOSH). Learn more about how we promote decentralization, data privacy, and digital transformation in education, governance, and public welfare.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
