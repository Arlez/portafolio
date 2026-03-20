import Link from 'next/link'
import Script from 'next/script'

export default function Header(){
  return (
    <>
      <Script src="https://kit.fontawesome.com/5dee76c536.js" crossOrigin="anonymous" strategy="afterInteractive" />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/" legacyBehavior><a className="navbar-brand"><img src="/img/logo-blanco.png" alt="" className="logo-inicio d-flex"/></a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#portafolio">Mis Trabajos</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#tecnologias">Tecnologías</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#contacto">Contacto</a></li>
                </ul>
                <div className="d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="https://api.whatsapp.com/send?phone=56979211381" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp fa-1x"/></a></li>
                        <li className="nav-item"><a className="nav-link" href="mailto:dbarrera.ap@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope fa-1x"/></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://github.com/Arlez/" target="_blank" rel="noreferrer"><i className="fab fa-github fa-1x"/></a></li>
                        <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/dbarreradev" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-1x"/></a></li>
                    </ul>                
                </div>
          </div>
        </div>
      </nav>
    </>
  )
}
