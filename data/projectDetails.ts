import type { ProjectDetail } from '../types'

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    es: {
      titulo: 'Digital Classbook',
      problema: 'Material académico desorganizado y carga administrativa alta para docentes.',
      solucion: 'Plataforma full-stack que publica contenido curricular con rutas de aprendizaje personalizadas y generación automática de ejercicios.',
      stack: 'Next.js, NestJS, PostgreSQL, Docker, Redis',
      ia: 'Resúmenes adaptativos, generación de preguntas mediante prompts y asistente docente para sugerir actividades.',
      impacto: 'Reducción del 60% en tiempo de preparación docente; +12% de retención en pilotos.',
    },
    en: {
      title: 'Digital Classbook',
      problem: 'Disorganized academic material and high admin workload for teachers.',
      solution: 'Full-stack platform publishing curriculum with personalized learning paths and auto exercise generation.',
      stack: 'Next.js, NestJS, PostgreSQL, Docker, Redis',
      ai: 'Adaptive summaries, question generation via prompts and a teacher assistant that suggests activities.',
      impact: '60% reduction in teacher prep time; +12% student retention in pilots.',
    },
  },
  2: {
    es: {
      titulo: 'EdTech Analytics & Insights',
      problema: 'Falta de visión accionable sobre engagement y rendimiento estudiantil.',
      solucion: 'Pipeline analítico y dashboard que correlaciona actividad con desempeño y propone intervenciones.',
      stack: 'Node.js, PostgreSQL, Next.js, ETL jobs',
      ia: 'Clasificación de interacciones y generación automática de insights y sugerencias de intervención.',
      impacto: 'Identificación temprana de estudiantes en riesgo; reducción de abandono en pilotos.',
    },
    en: {
      title: 'EdTech Analytics & Insights',
      problem: 'Lack of actionable analytics linking engagement to outcomes.',
      solution: 'Analytics pipeline and dashboard correlating activity with performance and recommending interventions.',
      stack: 'Node.js, PostgreSQL, Next.js, ETL jobs',
      ai: 'Interaction classification and auto-generated insights with intervention suggestions.',
      impact: 'Early identification of at-risk students; reduced dropout in pilots.',
    },
  },
  3: {
    es: {
      titulo: 'AI Developer Tools',
      problema: 'Ciclos de desarrollo lentos por tareas repetitivas.',
      solucion: 'Herramientas que usan LLMs para generar tests, documentación y plantillas de endpoints.',
      stack: 'Node.js, TypeScript, OpenAI, GitHub Actions',
      ia: 'Prompts especializados para generar código y tests, revisión automatizada de PRs.',
      impacto: 'Aceleró la entrega de features ~30% en sprints donde se usó la herramienta.',
    },
    en: {
      title: 'AI Developer Tools',
      problem: 'Slow developer cycles for repetitive tasks.',
      solution: 'Tools using LLMs to generate unit tests, documentation and endpoint templates.',
      stack: 'Node.js, TypeScript, OpenAI, GitHub Actions',
      ai: 'Specialized prompts for code+tests generation and automated PR review helpers.',
      impact: '~30% faster feature delivery in sprints using the tools.',
    },
  },
  4: {
    es: {
      titulo: 'Vivir Mejor',
      problema: 'Pacientes crónicos sin herramientas accesibles para gestionar su salud diaria.',
      solucion: 'PWA que actúa como copiloto de salud: seguimiento de síntomas, recordatorios de medicación y alertas tempranas.',
      stack: 'React, PWA, IndexedDB, AI',
      ia: 'Análisis de patrones de síntomas y recomendaciones personalizadas basadas en historial del paciente.',
      impacto: 'Mejora en adherencia al tratamiento y detección temprana de crisis en usuarios piloto.',
    },
    en: {
      title: 'Vivir Mejor',
      problem: 'Chronic patients lacking accessible tools to manage their daily health.',
      solution: 'PWA acting as a health copilot: symptom tracking, medication reminders and early alerts.',
      stack: 'React, PWA, IndexedDB, AI',
      ai: 'Symptom pattern analysis and personalized recommendations based on patient history.',
      impact: 'Improved treatment adherence and early crisis detection in pilot users.',
    },
  },
  5: {
    es: {
      titulo: 'SetFlow',
      problema: 'Falta de estructura y seguimiento en rutinas de entrenamiento.',
      solucion: 'Asistente PWA que guía rutinas paso a paso, controla tiempos de descanso y genera planes personalizados con IA.',
      stack: 'React, PWA, AI',
      ia: 'Generación de planes de entrenamiento adaptados al nivel y objetivos del usuario.',
      impacto: 'Mayor consistencia en entrenamientos y planes personalizados sin necesidad de entrenador.',
    },
    en: {
      title: 'SetFlow',
      problem: 'Lack of structure and tracking in workout routines.',
      solution: 'PWA assistant that guides step-by-step routines, manages rest timers and generates AI-powered personalized plans.',
      stack: 'React, PWA, AI',
      ai: 'Training plan generation adapted to user level and goals.',
      impact: 'Greater workout consistency and personalized plans without needing a trainer.',
    },
  },
}

export default projectDetails
