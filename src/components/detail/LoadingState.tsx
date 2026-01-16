import { useTranslations } from 'next-intl'

export default function LoadingState() {
  const t = useTranslations('Home')

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        <p className="text-gray-600">{t('detail.loading')}</p>
      </div>
    </div>
  )
}
