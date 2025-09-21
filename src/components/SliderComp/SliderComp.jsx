import { useEffect, useState } from 'react'
import './Slider.css'

export function SliderComp ({ images }) {
  const [size, setSize] = useState(0)
  const [counter, setCounter] = useState(1)

  const nextImage = () => {
    if (counter >= images.length) setCounter(1)
    else setCounter((prev) => prev + 1)
  }

  const prevImage = () => {
    if (counter <= 1) setCounter(images.length)
    else setCounter((prev) => prev - 1)
  }

  useEffect(() => {
    const container = document.querySelector('.carouser-container-comp')
    setSize(container.clientWidth)
  }, [counter])

  return (
    <div className='carouser-container-comp'>
      <div
        className='carousel-slide-comp'
        style={{ transform: `translateX(${-size * counter}px)` }}
      >
        <div className='item-comp'>
          <img
            src={images[images.length - 1].img}
            alt='image-slide'
            id='lastClone'
          />
        </div>
        {images?.map((item, index) => {
          return (
            <div className='item-comp' key={index}>
              <img src={item.img} alt='image-slide' />
              <span>{item.description}</span>
            </div>
          )
        })}
        <div className='item-comp'>
          <img src={images[0].img} alt='image-slide' id='firstClone' />
        </div>
      </div>
      <div className='navigation-comp'>
        <button id='prevBtn' onClick={prevImage}>{'<'}</button>
        <button id='nextBtn' onClick={nextImage}>{'>'}</button>
      </div>
    </div>
  )
}
