import React from 'react'
import { EmblaCarousel } from './EmblaCarousel'

const Hero = () => {
    const OPTIONS = { containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className='min-h-screen w-full flex justify-center items-center relative'>
        <div className='max-w-[900px] text-center flex flex-col gap-6 z-30 '>
            <h1 className='text-7xl font-medium'>It’s hard to be <br/> frontend developer</h1>
            <p className='text-[20px] text-gray-200'>Using cutting-edge technology and striking narratives, Global Media <br/> Production supports businesses and brands.</p>
        </div>
        <div className='bg-gray-700 bg-opacity-60 absolute w-full h-full z-20 pointer-events-none'></div>
        <div className='absolute w-full h-screen top-0 left-0 z-10'>
        <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
        </div>
        

    </div>
  )
}

export default Hero