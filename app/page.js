import Accordion from '@/components/Accordion'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skillset from '@/components/Skillset'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Navbar />
      <Hero />
      <Description />
      <Skillset />
      <Accordion />
      <Footer />
    </main>
  )
}
