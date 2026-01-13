import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { AppLocale } from '@/i18n/routing'

export type LanguageState = {
  language: AppLocale
  setLanguage: (language: AppLocale) => void
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
