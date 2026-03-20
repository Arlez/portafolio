import datos from '../datos.json'
import Head from 'next/head'
import PortfolioGrid from '../components/PortfolioGrid'

export default function Home({ proyectos }) {
    return (
        <>
            <Head>
                <title>Daniel Barrera — AI Product Engineer & Full‑Stack Developer</title>
            </Head>

            <div className="hero">
                <div className="hero-card">
                    <h1>Daniel Barrera</h1>
                    <h2>AI Product Engineer & Full‑Stack Developer</h2>
                    <p>I build AI‑powered web products for education and scale. Productos impulsados por IA para transformar flujos educativos y automatizar decisiones.</p>

                    <div className="kpis">
                        <div className="kpi"><div className="num">8+</div><div className="label">Years experience</div></div>
                        <div className="kpi"><div className="num">4+</div><div className="label">Years in EdTech</div></div>
                        <div className="kpi"><div className="num">+12%</div><div className="label">Retention (pilot)</div></div>
                    </div>

                    <div style={{marginTop:'1.5rem'}}>
                        <a className="btn btn-primary btn-lg" href="mailto:dbarrera.ap@gmail.com">Contact / Contactar</a>
                    </div>
                </div>

                <div className="hero-card" style={{textAlign:'left'}}>
                    <h3>About / Sobre mí</h3>
                    <p>Full‑Stack Developer con 8+ años construyendo aplicaciones escalables; 4+ años centrado en EdTech. Actualmente diseño aplicaciones impulsadas por LLMs y automatizaciones que entregan valor real de producto.</p>
                    <p style={{marginTop:'.5rem',color:'var(--muted)'}}>I design end‑to‑end systems, integrate LLMs for assistant features, and ship products that improve retention and operational efficiency.</p>
                </div>
            </div>

            <section style={{marginTop:'2.5rem'}} className="container-xl" id="portafolio">
                <h2 style={{marginBottom:'1rem'}}>Projects / Proyectos</h2>
                <PortfolioGrid proyectos={proyectos} home={true} />
            </section>

            <section className="container-xl my-5 py-5" id="ai">
                <h2>AI Work / Enfoque en IA</h2>
                <p><strong>ES:</strong> AI como parte del producto — funcionalidades que cambian la experiencia del usuario: asistentes pedagógicos, generación automática de ejercicios y análisis de engagement.</p>
                <p><strong>EN:</strong> AI as part of the product — features that change user experience: pedagogical assistants, auto exercise generation and engagement analysis.</p>
            </section>

            <section className="container-xl my-5 py-5" id="skills">
                <h2>Skills / Habilidades</h2>
                <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',marginTop:'1rem'}}>
                    <div style={{background:'var(--glass)',padding:'1rem',borderRadius:8}}>Next.js · React · TypeScript</div>
                    <div style={{background:'var(--glass)',padding:'1rem',borderRadius:8}}>NestJS · Node.js · PHP</div>
                    <div style={{background:'var(--glass)',padding:'1rem',borderRadius:8}}>Postgres · MySQL</div>
                    <div style={{background:'var(--glass)',padding:'1rem',borderRadius:8}}>Prompt engineering · LLM integration</div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps(){
    const proyectos = (datos && datos.portafolio) || []
    return { props: { proyectos } }
}
