import {useState} from 'react'
import projectDetails from '../data/projectDetails'

export default function PortfolioGrid({ proyectos = [], home = false }){
  const lista = home ? proyectos.filter(p => p.tipo === 2) : proyectos
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <>
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center my-5">
          <h2 className="fw-bold mb-md-0 text-white"><i className="fas fa-code"></i> Algunos de mis proyectos</h2>
          {home && proyectos.length > 6 ? (
            <a href="/proyectos" className="mas-proyectos titulo btn btn-outline-light">Ver más proyectos...</a>
          ) : null}
      </div>

      <div className="row my-5 pb-5" id="listado">
        {lista.map(p => (
          <div className="col-md-6 col-xl-4 mt-4 portafolio Anime" key={p.id}>
            <div className="card proyecto-card">
              <div className="card-media">
                <img src={p.img || `/img/${p.id}.png`} className="card-img" alt={`imagen ${p.nombre}`} />
                <div className="card-band">{p.tecnologias}</div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.nombre}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="card-meta">{p.fecha} · <a href={p.link} target="_blank" rel="noreferrer">Live</a></div>
                <div className="card-actions mt-3">
                  <button className="btn btn-sm btn-outline-primary" onClick={()=>toggle(p.id)}>{openId===p.id ? 'Ocultar / Hide' : 'Ver detalles / View details'}</button>
                </div>
                {openId===p.id && (
                  <div className="project-details mt-3">
                    <section className="es">
                      <h4>{projectDetails[p.id]?.es?.titulo}</h4>
                      <p><strong>Problema:</strong> {projectDetails[p.id]?.es?.problema}</p>
                      <p><strong>Solución:</strong> {projectDetails[p.id]?.es?.solucion}</p>
                      <p><strong>Stack:</strong> {projectDetails[p.id]?.es?.stack}</p>
                      <p><strong>IA usada:</strong> {projectDetails[p.id]?.es?.ia}</p>
                      <p><strong>Impacto:</strong> {projectDetails[p.id]?.es?.impacto}</p>
                    </section>
                    <hr />
                    <section className="en">
                      <h4>{projectDetails[p.id]?.en?.title}</h4>
                      <p><strong>Problem:</strong> {projectDetails[p.id]?.en?.problem}</p>
                      <p><strong>Solution:</strong> {projectDetails[p.id]?.en?.solution}</p>
                      <p><strong>Tech stack:</strong> {projectDetails[p.id]?.en?.stack}</p>
                      <p><strong>AI used:</strong> {projectDetails[p.id]?.en?.ai}</p>
                      <p><strong>Impact:</strong> {projectDetails[p.id]?.en?.impact}</p>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
