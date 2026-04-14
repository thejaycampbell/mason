import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Services } from './components/sections/Services'
import { HowItWorks } from './components/sections/HowItWorks'
import { Portfolio } from './components/sections/Portfolio'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
