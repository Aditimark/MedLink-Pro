import FeaturesSection from '@/components/marketing/features-section'
import HeroSection from '@/components/marketing/hero-section'
import Navbar from '@/components/marketing/navbar'
import TrustedSection from '@/components/marketing/trusted-section'

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      <Navbar />

      <HeroSection />

      <TrustedSection />

      <FeaturesSection />
    </main>
  )
}