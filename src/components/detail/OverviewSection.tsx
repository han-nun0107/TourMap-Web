import { useTranslations } from 'next-intl'

type OverviewSectionProps = {
  overview: string
}

export default function OverviewSection({ overview }: OverviewSectionProps) {
  const t = useTranslations('Home')

  return (
    <section className="mb-8 rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        {t('detail.overview')}
      </h2>
      <div
        className="prose prose-gray prose-p:mb-4 prose-p:last:mb-0 max-w-none leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{
          __html: overview,
        }}
      />
    </section>
  )
}
