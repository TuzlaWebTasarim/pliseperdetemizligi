import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import BrandValue from '@/components/BrandValue'
import Process from '@/components/Process'
import Expertise from '@/components/Expertise'
import Applications from '@/components/Applications'
import TrustSignals from '@/components/TrustSignals'
import Regions from '@/components/Regions'
import Quality from '@/components/Quality'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <Process />
        <Expertise />
        <Applications />
        <TrustSignals />
        <Regions />
        <Quality />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
