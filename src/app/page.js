import Navbar from '@/component/Navbar'
import HeroSection from '@/component/HeroSection'
import OurProducts from '@/component/OurProducts'
import OurServices from '@/component/OurServices'
import Feedback from '@/component/Feedback'
import Footer from '@/component/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurProducts />
      <OurServices />
      <Feedback />
      <Footer />
    </>
  )
}
