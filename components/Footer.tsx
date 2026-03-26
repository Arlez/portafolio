import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export default function Footer() {
  const { lang } = useContext(LanguageContext)
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-content">
        <div className="footer-cta">
          <h2>{lang === 'es' ? '¿Trabajamos juntos?' : "Let's work together"}</h2>
          <p>
            {lang === 'es'
              ? 'Disponible para proyectos freelance y posiciones full-time.'
              : 'Available for freelance projects and full-time positions.'}
          </p>
          <a href="mailto:dbarrera.ap@gmail.com" className="btn-primary">
            <i className="far fa-envelope" />{' '}
            {lang === 'es' ? 'Enviar email' : 'Send email'}
          </a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Arlez/" target="_blank" rel="noreferrer">
            <i className="fab fa-github" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/dbarreradev" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
          <a href="mailto:dbarrera.ap@gmail.com">
            <i className="far fa-envelope" /> dbarrera.ap@gmail.com
          </a>
        </div>
        <p className="footer-copy">&copy; {year} Daniel Barrera</p>
      </div>
    </footer>
  )
}
