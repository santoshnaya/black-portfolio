import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ScrollingText from '@/components/ScrollingText'
import WorksSection from '@/components/WorksSection'
import AboutSection from '@/components/AboutSection'
import ShopSection from '@/components/ShopSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      <HeroSection />
      <ScrollingText />
      <WorksSection />
      <AboutSection />
      <ShopSection />
      <ContactSection />
    </main>
  )
}
