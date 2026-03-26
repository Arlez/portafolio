import datos from '../../datos.json'
import projectDetails from '../../data/projectDetails'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../../components/LanguageContext'
import type { Proyecto } from '../../types'
import type { GetStaticPaths, GetStaticProps } from 'next'

interface ProjectPageProps {
  proyecto: Proyecto
}

export default function ProjectPage({ proyecto }: ProjectPageProps) {
  const { lang } = useContext(LanguageContext)
  const details = projectDetails[proyecto.id]

  return (
    <>
      <Head>
        <title>
          {proyecto.nombre} — {lang === 'es' ? 'Proyecto' : 'Project'}
        </title>
      </Head>

      <div className="project-detail">
        <Link href="/proyectos" className="btn-secondary" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          &larr; {lang === 'es' ? 'Volver a proyectos' : 'Back to projects'}
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2.5rem', alignItems: 'start' }}>
          <div>
            <div className="project-detail-hero">
              <h1>{proyecto.nombre}</h1>
              <p className="meta">{proyecto.tecnologias} &middot; {proyecto.fecha}</p>
              <img src={proyecto.img || `/img/${proyecto.id}.png`} alt={proyecto.nombre} />
            </div>

            <div className="project-detail-content">
              {lang === 'es' ? (
                <>
                  <h3>{lang === 'es' ? 'Problema' : 'Problem'}</h3>
                  <p>{details?.es?.problema}</p>
                  <h3>{lang === 'es' ? 'Solución' : 'Solution'}</h3>
                  <p>{details?.es?.solucion}</p>
                  <h3>Stack</h3>
                  <p>{details?.es?.stack}</p>
                  <h3>{lang === 'es' ? 'IA utilizada' : 'AI used'}</h3>
                  <p>{details?.es?.ia}</p>
                  <h3>{lang === 'es' ? 'Impacto' : 'Impact'}</h3>
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
            </div>

            {proyecto.link && proyecto.link !== '#' && (
              <a className="btn-primary" href={proyecto.link} target="_blank" rel="noreferrer" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                {lang === 'es' ? 'Ver en vivo' : 'View live'} &rarr;
              </a>
            )}
          </div>

          <aside className="project-detail-sidebar">
            <h5>{lang === 'es' ? 'Detalles' : 'Details'}</h5>
            <p><strong>{lang === 'es' ? 'Fecha' : 'Date'}:</strong> {proyecto.fecha}</p>
            <p><strong>Stack:</strong> {proyecto.tecnologias}</p>
            {proyecto.link && proyecto.link !== '#' && (
              <p>
                <strong>Link:</strong>{' '}
                <a href={proyecto.link} target="_blank" rel="noreferrer">{lang === 'es' ? 'Ver proyecto' : 'View project'}</a>
              </p>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const proyectos: Proyecto[] = datos?.portafolio ?? []
  const paths = proyectos.map((p) => ({ params: { id: String(p.id) } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const proyectos: Proyecto[] = datos?.portafolio ?? []
  const proyecto = proyectos.find((p) => String(p.id) === String(params?.id)) ?? null
  if (!proyecto) {
    return { notFound: true }
  }
  return { props: { proyecto } }
}
