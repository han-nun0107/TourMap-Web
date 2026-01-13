import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type LanguageState = {
  language: 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'fr' | 'de' | 'es' | 'ru'
  setLanguage: (
    language: 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'fr' | 'de' | 'es' | 'ru'
  ) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'ko',
      setLanguage: (language) => set({ language }),
    }),
    { name: 'language-storage' }
  )
)
