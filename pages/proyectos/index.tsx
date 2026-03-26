import datos from '../../datos.json'
import Head from 'next/head'
import { useState, useMemo, useContext, ChangeEvent } from 'react'
import { LanguageContext } from '../../components/LanguageContext'
import Link from 'next/link'
import type { Proyecto } from '../../types'
import type { GetStaticProps } from 'next'

interface ProyectosPageProps {
  proyectos: Proyecto[]
}

export default function Proyectos({ proyectos }: ProyectosPageProps) {
  const [query, setQuery] = useState('')
  const [techFilter, setTechFilter] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 6
  const { lang } = useContext(LanguageContext)

  const techOptions = useMemo(() => {
    const set = new Set<string>()
    proyectos.forEach((p) =>
      p.tecnologias?.split(',').forEach((t) => set.add(t.trim()))
    )
    return Array.from(set).sort()
  }, [proyectos])

  const filtered = proyectos.filter((p) => {
    if (techFilter) {
      const techs = p.tecnologias?.toLowerCase() || ''
      if (!techs.includes(techFilter.toLowerCase())) return false
    }
    if (query) {
      const q = query.toLowerCase()
      const desc = lang === 'en' && p.descEn ? p.descEn : p.desc
      return (
        p.nombre.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q)
      )
    }
    return true
  })

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const start = (page - 1) * pageSize
  const pageItems = filtered.slice(start, start + pageSize)

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setPage(1)
  }

  const handleTech = (e: ChangeEvent<HTMLSelectElement>) => {
    setTechFilter(e.target.value)
    setPage(1)
  }

  return (
    <>
      <Head>
        <title>{lang === 'es' ? 'Proyectos — Daniel Barrera' : 'Projects — Daniel Barrera'}</title>
      </Head>

      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">
            {lang === 'es' ? 'Todos los proyectos' : 'All projects'}
          </h2>
          <p className="section-subtitle">
            {lang === 'es'
              ? `${proyectos.length} proyectos en total`
              : `${proyectos.length} projects in total`}
          </p>

          <div className="filter-bar">
            <input
              className="filter-input"
              placeholder={lang === 'es' ? 'Buscar proyectos...' : 'Search projects...'}
              value={query}
              onChange={handleQuery}
            />
            <select className="filter-select" value={techFilter} onChange={handleTech}>
              <option value="">
                {lang === 'es' ? 'Todas las tecnologías' : 'All technologies'}
              </option>
              {techOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="projects-grid">
            {pageItems.map((p) => (
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

          {pages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                {lang === 'es' ? 'Anterior' : 'Previous'}
              </button>
              <span>{page} / {pages}</span>
              <button
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={page === pages}
              >
                {lang === 'es' ? 'Siguiente' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<ProyectosPageProps> = async () => {
  const proyectos: Proyecto[] = datos?.portafolio ?? []
  return { props: { proyectos } }
}
