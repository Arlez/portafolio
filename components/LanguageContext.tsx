import { createContext, useState, ReactNode } from 'react'
import type { Lang } from '../types'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  setLang: () => {},
})

interface Props {
  children: ReactNode
}

export function LanguageProvider({ children }: Props) {
  const [lang, setLang] = useState<Lang>('es')

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
