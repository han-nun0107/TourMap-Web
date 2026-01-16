import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ErrorState() {
  const t = useTranslations('Home')

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-4 text-xl text-gray-700">{t('detail.error')}</p>
        <Link href="/" className="text-blue-600 hover:underline">
          {t('detail.goHome')}
        </Link>
      </div>
    </div>
  )
}
