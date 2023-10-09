'use client'
import Accordion from '@/components/Accordion'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import Skillset from '@/components/Skillset'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Navbar setIsModalOpen={setIsModalOpen}/>
      <Hero />
      <Description setIsModalOpen={setIsModalOpen}/>
      <Skillset setIsModalOpen={setIsModalOpen}/>
      <Accordion />
      <Footer />
      
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
    </main>
  )
}
