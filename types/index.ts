export interface Proyecto {
  id: number
  nombre: string
  desc: string
  descEn?: string
  tecnologias: string
  link: string
  tipo: number
  fecha: string
  img?: string
}

export interface ProjectDetailES {
  titulo: string
  problema: string
  solucion: string
  stack: string
  ia: string
  impacto: string
}

export interface ProjectDetailEN {
  title: string
  problem: string
  solution: string
  stack: string
  ai: string
  impact: string
}

export interface ProjectDetail {
  es: ProjectDetailES
  en: ProjectDetailEN
}

export type Lang = 'es' | 'en'
