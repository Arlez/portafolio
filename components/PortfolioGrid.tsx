import { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from './LanguageContext'
import type { Proyecto } from '../types'

interface PortfolioGridProps {
  proyectos?: Proyecto[]
  limit?: number
}

export default function PortfolioGrid({ proyectos = [], limit }: PortfolioGridProps) {
  const { lang } = useContext(LanguageContext)
  const lista = limit ? proyectos.slice(0, limit) : proyectos

  return (
    <div className="projects-grid">
      {lista.map((p) => (
        <div className="project-card fade-in" key={p.id}>
          <div className="project-card-media">
            <img src={p.img || `/img/${p.id}.png`} alt={p.nombre} />
            <span className="project-card-badge">{p.tecnologias}</span>
          </div>
          <div className="project-card-body">
            <h3>{p.nombre}</h3>
            <p>{lang === 'en' && p.descEn ? p.descEn : p.desc}</p>
            <div className="project-card-meta">
              <span>{p.fecha}</span>
              <div className="project-card-links">
                <Link href={`/proyectos/${p.id}`}>
                  {lang === 'es' ? 'Detalles' : 'Details'}
                </Link>
                {p.link && p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Live &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
