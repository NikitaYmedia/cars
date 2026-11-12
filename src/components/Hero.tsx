import { useState } from 'react'
import Navbar from './Navbar'

const TOTAL_SLIDES = 6

export default function Hero() {
  const [slide, setSlide] = useState(1)
  const go = (dir: number) => setSlide((s) => ((s - 1 + dir + TOTAL_SLIDES) % TOTAL_SLIDES) + 1)

  return (
    <section className="hero" id="home">
      <Navbar />

      <div className="hero__content">
        <p className="hero__eyebrow">Automotive Culture</p>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--light">DRIVEN BY</span>
          <span className="hero__title-line hero__title-line--accent">PASSION.</span>
        </h1>

        <p className="hero__subtitle">Explore the world of cars, innovation and speed with Velocity.</p>
      </div>
    </section>
  )
}
