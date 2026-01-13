'use client'

import { LanguagesIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { ButtonClient } from '@/components/common/button'
import DropDown from '@/components/common/DropDown'
import { LANGUAGE_OPTIONS, NAV_ITEMS } from '@/constants/header/header'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { useAuthStore } from '@/store/auth'
import { useLanguageStore } from '@/store/language/languageStore'

export default function Header() {
  const pathname = usePathname()
  const isLogin = useAuthStore((state) => state.isLogin)
  const logout = useAuthStore((state) => state.logout)
  const language = useLanguageStore((state) => state.language)
  const t = useTranslations('Home')

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-4 md:px-6 lg:px-8">
      <Link
        href="/"
        className="flex items-center gap-2 transition-opacity hover:opacity-80"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-sm font-bold text-white">
          T
        </div>
        <span className="text-lg font-bold text-gray-900">TourApi</span>
      </Link>

      <nav className="hidden items-center gap-2 md:flex">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-600/10 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              {t(item.labelKey)}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-3">
        {isLogin ? (
          <ButtonClient variant="login" intent="clear" onClick={handleLogout}>
            {t('layout.Logout')}
          </ButtonClient>
        ) : (
          <>
            <Link
              href="/login"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {t('layout.Login')}
            </Link>
            <Link
              href="/signup"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {t('layout.Signup')}
            </Link>
          </>
        )}
        <DropDown>
          <span className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <LanguagesIcon className="h-4 w-4" />
            {LANGUAGE_OPTIONS.find((option) => option.value === language)
              ?.label || '한국어'}
          </span>
        </DropDown>
      </div>
    </header>
  )
}
