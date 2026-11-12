import { useState } from 'react'

const columns = [
    { title: 'Explore', links: ['home', 'cars', 'about'] },
    { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
    { title: 'Follow', links: ['Instagram', 'YouTube', 'X', 'Facebook'] },
]

export default function Footer() {
    const [sent, setSent] = useState(false)

    return (
        <footer className="footer" id="about">
            <div className="footer__top">
                <p className="footer__label">Join us</p>
            </div>
            <div className="footer__main">
                <div className="footer__cta">
                    <p className="footer__eyebrow">Stay in the fast lane</p>
                    <h2 className="footer__title">
                        <span>READY TO</span>
                        <span>FEEL THE</span>
                        <span className="footer__title-accent">SPEED.</span>
                    </h2>
                    <p className="footer__text">
                        Get the latest on new models, legendary races and the technology shaping the road ahead.
                    </p>

                    <form
                        className="footer__form"
                        data-sent={sent}
                        onSubmit={(e) => {
                            e.preventDefault()
                            setSent(true)
                        }}
                    >
                        <input className="footer__input" type="email" placeholder="Your email" required />
                        <button className="footer__submit" type="submit">
                            Subscribe
                        </button>
                        <p className="footer__note">Thank you! You're on the list.</p>
                    </form>
                </div>

                <nav className="footer__nav">
                    {columns.map((col) => (
                        <div key={col.title} className="footer__column">
                            <h3 className="footer__column-title">{col.title}</h3>
                            <ul className="footer__links">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer__link">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">© 2026 Velocity. All rights reserved.</p>
                <div className="footer__legal">
                    <a href="#" className="footer__link">
                        Privacy Policy
                    </a>
                    <a href="#" className="footer__link">
                        Terms of Use
                    </a>
                </div>
                <a href="#" className="footer__up" aria-label="Back to top" />
            </div>
        </footer>
    )
}