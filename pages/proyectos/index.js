import datos from '../../datos.json'
import Head from 'next/head'
import { useState, useMemo, useContext } from 'react'
import { LanguageContext } from '../../components/LanguageContext'
import Link from 'next/link'

export default function Proyectos({ proyectos }){
  const [query, setQuery] = useState('')
  const [tipo, setTipo] = useState('all')
  const [page, setPage] = useState(1)
  const pageSize = 6
  const { lang } = useContext(LanguageContext)

  const techOptions = useMemo(()=>{
    const set = new Set()
    proyectos.forEach(p=> p.tecnologias && p.tecnologias.split(',').forEach(t=> set.add(t.trim())))
    return Array.from(set)
  },[proyectos])

  const filtered = proyectos.filter(p=>{
    if(tipo !== 'all'){
      if(tipo === '1' && p.tipo !== 1) return false
      if(tipo === '2' && p.tipo !== 2) return false
    }
    if(query){
      return p.nombre.toLowerCase().includes(query.toLowerCase()) || (p.desc && p.desc.toLowerCase().includes(query.toLowerCase()))
    }
    return true
  })

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const start = (page-1)*pageSize
  const pageItems = filtered.slice(start, start+pageSize)

  return (
    <>
      <Head>
        <title>{lang === 'es' ? 'Proyectos' : 'Projects'}</title>
      </Head>

      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold"><i className="fas fa-code"></i> {lang==='es' ? 'Todos mis proyectos' : 'All projects'}</h2>
            <div className="text-muted">{lang==='es' ? `Total: ${proyectos.length}` : `Total: ${proyectos.length}`}</div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <input className="form-control" placeholder={lang==='es' ? 'Buscar proyectos...' : 'Search projects...'} value={query} onChange={e=>{setQuery(e.target.value); setPage(1)}} />
          </div>
          <div className="col-md-3 mb-2">
            <select className="form-select" value={tipo} onChange={e=>{setTipo(e.target.value); setPage(1)}}>
              <option value="all">{lang==='es' ? 'Todos los tipos' : 'All types'}</option>
              <option value="1">Tipo 1</option>
              <option value="2">Tipo 2</option>
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <select className="form-select" onChange={e=>{setQuery(e.target.value); setPage(1)}}>
              <option value="">{lang==='es' ? 'Filtrar por tecnología' : 'Filter by technology'}</option>
              {techOptions.map(t=> <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="row">
          {pageItems.map(p => (
            <div className="col-md-6 col-xl-4 mt-4" key={p.id}>
              <div className="proyecto-card">
                <div className="card-media"><img src={`/img/${p.id}.png`} className="card-img" alt={p.nombre} /></div>
                <div className="card-body">
                  <h3 className="card-title">{p.nombre}</h3>
                  <p className="card-desc">{p.desc}</p>
                  <div className="card-meta">{p.fecha}</div>
                  <div className="mt-3">
                    <Link href={`/proyectos/${p.id}`} legacyBehavior><a className="btn btn-sm btn-outline-primary">{lang==='es' ? 'Ver detalles' : 'View details'}</a></Link>
                    <a className="btn btn-sm btn-outline-light ms-2" href={p.link} target="_blank" rel="noreferrer">Live</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
          <button className="btn btn-sm btn-outline-light" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>{lang==='es' ? 'Anterior' : 'Previous'}</button>
          <div>{page} / {pages}</div>
          <button className="btn btn-sm btn-outline-light" onClick={()=>setPage(p=>Math.min(pages,p+1))} disabled={page===pages}>{lang==='es' ? 'Siguiente' : 'Next'}</button>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps(){
  const proyectos = (datos && datos.portafolio) || []
  return { props: { proyectos } }
}
