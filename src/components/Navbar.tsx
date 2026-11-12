import { useState } from 'react'

const links = [
  { label: 'Automotive Culture', id: 'home' },
  { label: 'Legendary machines', id: 'cars' },
  { label: 'Stay in the fast lane', id: 'about' }
]

export default function Navbar() {
  const [active, setActive] = useState(links[0].id)
  const [dark, setDark] = useState(false)

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        VELOCITY
      </a>

      <nav>
        <ul className="navbar__menu">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="navbar__link"
                aria-current={active === link.id ? 'page' : undefined}
                onClick={() => setActive(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar__actions">
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          aria-pressed={dark}
          onClick={() => setDark(!dark)}
        />
        <button className="navbar__search" aria-label="Search" />
      </div>
    </header>
  )
}