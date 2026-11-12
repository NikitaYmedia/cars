import { useState } from 'react'

const cars = [
    { id: 'porsche', name: '911 Carrera', power: '385 HP', accel: '0–100 km/h: 4.2 s', year: '2024' },
    { id: 'ferrari', name: '296 GTB', power: '830 HP', accel: '0–100 km/h: 2.9 s', year: '2024' },
    { id: 'lamborghini', name: 'Revuelto', power: '1 015 HP', accel: '0–100 km/h: 2.5 s', year: '2024' },
]

export default function Cars() {
    const [active, setActive] = useState(1)
    const go = (dir: number) => setActive((a) => (a + dir + cars.length) % cars.length)

    return (
        <section className="cars" id="cars">

            <div className="cars__main">
                <div className="cars__intro">
                    <p className="cars__eyebrow">Legendary machines</p>
                    <h2 className="cars__title">
                        <span>ICONIC</span>
                        <span>PERFORM</span>
                    </h2>
                    <p className="cars__text">
                        Timeless design. Unmatched power.
                        <br />A legacy on four wheels.
                    </p>
                    <a href="#" className="cars__more">
                        Explore all cars
                    </a>
                </div>

                <div className="cars__list">
                    {cars.map((car, i) => (
                        <article
                            key={car.id}
                            className={`car-card car-card--${car.id}`}
                            data-active={i === active}
                            onMouseEnter={() => setActive(i)}
                        >
                            <span className="car-card__logo" aria-hidden="true" />
                            <span className="car-card__year">{car.year}</span>

                            <div className="car-card__info">
                                <h3 className="car-card__name">{car.name}</h3>
                                <p className="car-card__specs">
                                    <span>{car.power}</span>
                                    <span>{car.accel}</span>
                                </p>
                            </div>

                            <button className="car-card__arrow" aria-label={`View ${car.name}`} />
                        </article>
                    ))}
                </div>
            </div>

            <div className="cars__controls">
                <button className="cars__arrow cars__arrow--prev" aria-label="Previous car" onClick={() => go(-1)} />
                <button className="cars__arrow cars__arrow--next" aria-label="Next car" onClick={() => go(1)} />
            </div>
        </section>
    )
}