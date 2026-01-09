import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type AuthState = {
  isLogin: boolean
  user: {
    id: string | null
    email: string | null
    name: string | null
  } | null
  login: (userData?: { id: string; email: string; name: string }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLogin: false,
      user: null,
      login: (userData) => {
        set({
          isLogin: true,
          user: userData || {
            id: 'temp-user-id',
            email: 'temp@example.com',
            name: 'Temp User',
          },
        })
      },
      logout: () => {
        set({
          isLogin: false,
          user: null,
        })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)
