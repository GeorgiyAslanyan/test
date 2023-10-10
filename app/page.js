import Accordion from '@/components/Accordion'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skillset from '@/components/Skillset'

async function fetchNav() {
  let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/data?component=nav', {
    cache: 'force-cache'
  })
  return res.json()
}

async function fetchHero() {
  let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/data?component=hero', {
    cache: 'force-cache'
  })
  return res.json()
}

async function fetchDescription() {
  let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/data?component=description', {
    cache: 'force-cache'
  })
  return res.json()
}

async function fetchSkillset() {
  let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/data?component=skillset', {
    cache: 'force-cache'
  })
  return res.json()
}
async function fetchAccordion() {
  let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/data?component=accordion', {
    cache: 'force-cache'
  })
  return res.json()
}
async function fetchFooter() {
  let res = await fetch('https://6523a9e0ea560a22a4e8a119.mockapi.io/data?component=footer', {
    cache: 'force-cache'
  })
  return res.json()
}

export default async function Home() {
  const navData = await fetchNav()
  const heroData = await fetchHero()
  const descriptionData = await fetchDescription()
  const skillsetData = await fetchSkillset()
  const accordionData = await fetchAccordion()
  const footeroData = await fetchFooter()

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Navbar navData={navData[0]}/>
      <Hero heroData={heroData[0]}/>
      <Description descriptionData={descriptionData[0]}/>
      <Skillset skillsetData={skillsetData[0]}/>
      <Accordion accordionData={accordionData[0]}/>
      <Footer footeroData={footeroData[0]}/>
    </main>
  )
}
