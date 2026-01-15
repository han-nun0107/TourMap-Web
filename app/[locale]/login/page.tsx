'use client'

import { useLocale } from 'next-intl'

import { ButtonClient } from '@/components/common'
import { useRouter } from '@/i18n/navigation'
import { useAuthStore } from '@/store/auth'

export default function LoginPage() {
  const locale = useLocale()
  const router = useRouter()
  const login = useAuthStore((state) => state.login)

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
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-black-900 text-2xl font-bold">로그인</h1>
        <p className="text-sm text-gray-600">
          임시 로그인 버튼입니다. (추후 Supabase 연동 예정)
        </p>
        <ButtonClient
          variant="main"
          intent="main"
          fullWidth
          onClick={handleLogin}
        >
          로그인
        </ButtonClient>
      </div>
    </div>
  )
}
