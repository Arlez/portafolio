import datos from '../datos.json'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageContext'
import PortfolioGrid from '../components/PortfolioGrid'
import type { Proyecto } from '../types'
import type { GetStaticProps } from 'next'

interface HomeProps {
  proyectos: Proyecto[]
}

const t = {
  es: {
    title: 'Daniel Barrera — AI Product Engineer & Full-Stack Developer',
    badge: 'Disponible para proyectos',
    role: 'AI Product Engineer & Full-Stack Developer',
    tagline: 'Construyo productos web impulsados por IA para educación y escala. Diseño sistemas end-to-end que entregan valor real de producto.',
    cta: 'Contactar',
    ctaProjects: 'Ver proyectos',
    kpi1: 'Años de experiencia',
    kpi2: 'Años en EdTech',
    kpi3: 'Retención (piloto)',
    aboutTitle: 'Sobre mí',
    aboutText: 'Full-Stack Developer con 8+ años construyendo aplicaciones escalables. 4+ años centrado en EdTech. Diseño aplicaciones impulsadas por LLMs y automatizaciones que entregan valor real de producto.',
    projectsTitle: 'Proyectos destacados',
    projectsSubtitle: 'Una selección de proyectos que demuestran mi enfoque en producto, IA y experiencia de usuario.',
    viewAll: 'Ver todos los proyectos',
    skillsTitle: 'Habilidades',
    skillsSubtitle: 'Tecnologías y herramientas con las que trabajo.',
    catFrontend: 'Frontend',
    catBackend: 'Backend',
    catData: 'Datos',
    catAI: 'IA & Automatización',
    catDevops: 'DevOps',
    aiTitle: 'Enfoque en IA',
    aiSubtitle: 'IA como parte del producto — funcionalidades que transforman la experiencia del usuario.',
    ai1Title: 'Asistentes pedagógicos',
    ai1Desc: 'LLMs integrados como asistentes docentes que sugieren actividades y generan contenido adaptativo.',
    ai2Title: 'Generación automática',
    ai2Desc: 'Ejercicios, resúmenes y evaluaciones generados automáticamente mediante prompts especializados.',
    ai3Title: 'Analytics inteligente',
    ai3Desc: 'Clasificación de interacciones y detección temprana de estudiantes en riesgo con insights accionables.',
  },
  en: {
    title: 'Daniel Barrera — AI Product Engineer & Full-Stack Developer',
    badge: 'Available for projects',
    role: 'AI Product Engineer & Full-Stack Developer',
    tagline: 'I build AI-powered web products for education and scale. I design end-to-end systems that deliver real product value.',
    cta: 'Get in touch',
    ctaProjects: 'View projects',
    kpi1: 'Years experience',
    kpi2: 'Years in EdTech',
    kpi3: 'Retention (pilot)',
    aboutTitle: 'About me',
    aboutText: 'Full-Stack Developer with 8+ years building scalable applications. 4+ years focused on EdTech. I design LLM-powered apps and automations that deliver real product value.',
    projectsTitle: 'Featured projects',
    projectsSubtitle: 'A selection of projects showcasing my focus on product, AI and user experience.',
    viewAll: 'View all projects',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies and tools I work with.',
    catFrontend: 'Frontend',
    catBackend: 'Backend',
    catData: 'Data',
    catAI: 'AI & Automation',
    catDevops: 'DevOps',
    aiTitle: 'AI Focus',
    aiSubtitle: 'AI as part of the product — features that transform the user experience.',
    ai1Title: 'Pedagogical assistants',
    ai1Desc: 'LLMs integrated as teacher assistants that suggest activities and generate adaptive content.',
    ai2Title: 'Auto generation',
    ai2Desc: 'Exercises, summaries and assessments automatically generated via specialized prompts.',
    ai3Title: 'Smart analytics',
    ai3Desc: 'Interaction classification and early detection of at-risk students with actionable insights.',
  },
}

export default function Home({ proyectos }: HomeProps) {
  const { lang } = useContext(LanguageContext)
  const s = t[lang]

  return (
    <>
      <Head>
        <title>{s.title}</title>
        <meta name="description" content={s.tagline} />
      </Head>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="hero-badge">{s.badge}</span>
            <h1>Daniel Barrera</h1>
            <h2>{s.role}</h2>
            <p className="hero-desc">{s.tagline}</p>
            <div className="hero-actions">
              <a href="mailto:dbarrera.ap@gmail.com" className="btn-primary">
                <i className="far fa-envelope" /> {s.cta}
              </a>
              <a href="#projects" className="btn-secondary">
                {s.ctaProjects}
              </a>
            </div>
            <div className="kpis">
              <div className="kpi">
                <span className="kpi-num">8+</span>
                <span className="kpi-label">{s.kpi1}</span>
              </div>
              <div className="kpi">
                <span className="kpi-num">4+</span>
                <span className="kpi-label">{s.kpi2}</span>
              </div>
              <div className="kpi">
                <span className="kpi-num">+12%</span>
                <span className="kpi-label">{s.kpi3}</span>
              </div>
            </div>
          </div>
          <div className="hero-about">
            <h3>{s.aboutTitle}</h3>
            <p>{s.aboutText}</p>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="section" id="projects">
        <div className="container-custom">
          <h2 className="section-title">{s.projectsTitle}</h2>
          <p className="section-subtitle">{s.projectsSubtitle}</p>
          <PortfolioGrid proyectos={proyectos} limit={4} />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/proyectos" className="btn-secondary">
              {s.viewAll} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section" id="skills">
        <div className="container-custom">
          <h2 className="section-title">{s.skillsTitle}</h2>
          <p className="section-subtitle">{s.skillsSubtitle}</p>
          <div className="skills-grid">
            <div className="skill-group">
              <h4>{s.catFrontend}</h4>
              <div className="skill-tags">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>{s.catBackend}</h4>
              <div className="skill-tags">
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>{s.catData}</h4>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">IndexedDB</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>{s.catAI}</h4>
              <div className="skill-tags">
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">LLM Integration</span>
                <span className="skill-tag">OpenAI API</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>{s.catDevops}</h4>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Focus ── */}
      <section className="section">
        <div className="container-custom">
          <div className="ai-section">
            <h2 className="section-title">{s.aiTitle}</h2>
            <p className="section-subtitle" style={{ marginBottom: '0' }}>{s.aiSubtitle}</p>
            <div className="ai-grid">
              <div className="ai-card">
                <h4><i className="fas fa-chalkboard-teacher" /> {s.ai1Title}</h4>
                <p>{s.ai1Desc}</p>
              </div>
              <div className="ai-card">
                <h4><i className="fas fa-magic" /> {s.ai2Title}</h4>
                <p>{s.ai2Desc}</p>
              </div>
              <div className="ai-card">
                <h4><i className="fas fa-chart-line" /> {s.ai3Title}</h4>
                <p>{s.ai3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const proyectos: Proyecto[] = datos?.portafolio ?? []
  return { props: { proyectos } }
}
