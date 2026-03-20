import datos from '../../datos.json'
import projectDetails from '../../data/projectDetails'
import Head from 'next/head'
import { useContext } from 'react'
import { LanguageContext } from '../../components/LanguageContext'

export default function ProjectPage({ proyecto }){
  const { lang } = useContext(LanguageContext)
  const details = projectDetails[proyecto.id]

  return (
    <>
      <Head>
        <title>{proyecto.nombre} — {lang === 'es' ? 'Proyecto' : 'Project'}</title>
      </Head>

      <main className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h1>{proyecto.nombre}</h1>
            <p className="text-muted">{proyecto.tecnologias} · {proyecto.fecha}</p>
            <img src={`/img/${proyecto.id}.png`} alt={proyecto.nombre} className="img-fluid mb-4" />

            {lang === 'es' ? (
              <>
                <h3>Problema</h3>
                <p>{details?.es?.problema}</p>
                <h3>Solución</h3>
                <p>{details?.es?.solucion}</p>
                <h3>Stack</h3>
                <p>{details?.es?.stack}</p>
                <h3>IA usada</h3>
                <p>{details?.es?.ia}</p>
                <h3>Impacto</h3>
                <p>{details?.es?.impacto}</p>
              </>
            ) : (
              <>
                <h3>Problem</h3>
                <p>{details?.en?.problem}</p>
                <h3>Solution</h3>
                <p>{details?.en?.solution}</p>
                <h3>Tech stack</h3>
                <p>{details?.en?.stack}</p>
                <h3>AI used</h3>
                <p>{details?.en?.ai}</p>
                <h3>Impact</h3>
                <p>{details?.en?.impact}</p>
              </>
            )}

            <a className="btn btn-primary mt-3" href={proyecto.link} target="_blank" rel="noreferrer">{lang==='es' ? 'Ver en vivo' : 'View live'}</a>
          </div>
          <aside className="col-md-4">
            <div className="card" style={{padding:16,background:'rgba(255,255,255,0.02)'}}>
              <h5>{lang==='es' ? 'Detalles rápidos' : 'Quick details'}</h5>
              <p><strong>{lang==='es' ? 'Fecha' : 'Date'}:</strong> {proyecto.fecha}</p>
              <p><strong>Stack:</strong> {proyecto.tecnologias}</p>
              <p><strong>{lang==='es' ? 'Tipo' : 'Type'}:</strong> {proyecto.tipo}</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths(){
  const proyectos = (datos && datos.portafolio) || []
  const paths = proyectos.map(p=> ({ params: { id: String(p.id) }}))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }){
  const proyectos = (datos && datos.portafolio) || []
  const proyecto = proyectos.find(p=> String(p.id) === String(params.id)) || null
  return { props: { proyecto } }
}
