'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import imageByIndex from './ImageByIndex'

export const EmblaCarousel = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi)


  return (
    <div className="embla" ref={emblaRef}>
        <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div key={index} className="embla__slide">
              <img
                className="embla__slide__img"
                src={imageByIndex(index).src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  )
}