import Link from 'next/link'
import Script from 'next/script'
import { useContext, useState } from 'react'
import { LanguageContext } from './LanguageContext'

const t = {
  es: { home: 'Inicio', projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
  en: { home: 'Home', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
}

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const text = t[lang]

  return (
    <>
      <Script src="https://kit.fontawesome.com/5dee76c536.js" crossOrigin="anonymous" strategy="afterInteractive" />
      <header className="site-header">
        <nav className="nav-container">
          <Link href="/" className="nav-logo">
            DB
          </Link>

          <button className="nav-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>{text.home}</Link>
            <Link href="/#projects" onClick={() => setMenuOpen(false)}>{text.projects}</Link>
            <Link href="/#skills" onClick={() => setMenuOpen(false)}>{text.skills}</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>{text.contact}</Link>
          </div>

          <div className="nav-actions">
            <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <div className="social-links">
              <a href="https://github.com/Arlez/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/dbarreradev" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
