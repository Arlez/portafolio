import {useEffect, useState} from 'react'

export default function Footer(){
  const inicio = 2021;
  const [years, setYears] = useState('');
  useEffect(()=>{
    const now = new Date().getFullYear();
    setYears(now === inicio ? `${now}` : `${inicio} - ${now}`);
  },[])

  return (
    <footer className="footer bg-dark" id="contacto">
        <div className="container mt-5 pt-5">  
            <div className="row text-light mt-4">
                <div className="col align-self-center">  
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a className="nav-link text-light" href="https://api.whatsapp.com/send?phone=56979211381" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp fa-2x"/></a></li>
                        <li className="nav-item"><a className="nav-link text-light" href="mailto:dbarrera.ap@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope fa-2x"/></a></li>
                        <li className="nav-item"><a className="nav-link text-light" href="https://github.com/Arlez/" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"/></a></li>
                        <li className="nav-item"><a className="nav-link text-light" href="https://www.linkedin.com/in/dbarreradev" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"/></a></li>
                      </ul>                        
                </div>                             
              </div>            
            </div>
        <p className="text-center mt-4 fs-5 fw-light">Creado por mi, Todos los derechos reservados &copy; <span className="year">{years}</span></p>
        <p className="text-center mb-5 fs-6 fw-light">Desarrollado con <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="text-light text-decoration-none fs-5"> Bootstrap <i className="bi bi-bootstrap"/></a></p>
    </footer>
  )
}
