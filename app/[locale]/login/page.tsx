'use client'

import { useLocale, useTranslations } from 'next-intl'

import { ButtonClient } from '@/components/common'
import { useRouter } from '@/i18n/navigation'
import { useAuthStore } from '@/store/auth'

export default function LoginPage() {
  const locale = useLocale()
  const router = useRouter()
  const login = useAuthStore((state) => state.login)
  const t = useTranslations('Auth')

  const MOCK_USER = {
    id: 'temp-user-id',
    email: 'user@example.com',
    name: 'User',
  }

  const handleLogin = () => {
    login({
      id: MOCK_USER.id,
      email: MOCK_USER.email,
      name: MOCK_USER.name,
    })
    router.push('/', { locale })
  }

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-gray-100"
      aria-labelledby="login-page-title"
    >
      <section className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <header className="space-y-2">
          <h1
            id="login-page-title"
            className="text-black-900 text-2xl font-bold"
          >
            {t('login.title', { default: '로그인' })}
          </h1>
          <p className="text-sm text-gray-600">
            {t('login.description', {
              default: '임시 로그인 버튼입니다. (추후 Supabase 연동 예정)',
            })}
          </p>
        </header>
        <div className="mt-6">
          <ButtonClient
            variant="main"
            intent="main"
            fullWidth
            onClick={handleLogin}
          >
            {t('login.button', { default: '로그인' })}
          </ButtonClient>
        </div>
      </section>
    </main>
  )
}
