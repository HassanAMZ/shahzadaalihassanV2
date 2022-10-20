import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default function WebsiteLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
