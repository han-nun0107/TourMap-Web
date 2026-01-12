'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ButtonClient } from '@/components/common/button'
import { NAV_ITEMS } from '@/constants/header/header'
import { cn } from '@/lib/cn'
import { useAuthStore } from '@/store/auth'

export default function Header() {
  const pathname = usePathname()
  const isLogin = useAuthStore((state) => state.isLogin)
  const logout = useAuthStore((state) => state.logout)

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
        <span className="text-black-900 text-lg font-bold">TourApi</span>
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
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
                  : 'hover:text-black-900 text-gray-600 hover:bg-gray-100'
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-3">
        {isLogin ? (
          <ButtonClient variant="login" intent="clear" onClick={handleLogout}>
            Logout
          </ButtonClient>
        ) : (
          <>
            <Link
              href="/login"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
