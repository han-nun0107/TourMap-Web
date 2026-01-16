import { useTranslations } from 'next-intl'

import { InfoItem } from '@/components/detail'
import { INFO_FIELDS } from '@/constants/detail'

type DetailIntroItem = {
  infocenter?: string
  usetime?: string
  restdate?: string
  usefee?: string
  expguide?: string
}

type DetailInfoSectionProps = {
  item: DetailIntroItem | null | undefined
}

export default function DetailInfoSection({ item }: DetailInfoSectionProps) {
  const t = useTranslations('Home')

  if (!item) {
    return null
  }

  return (
    <section className="rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        {t('detail.detailInfo')}
      </h2>
      <div className="space-y-6">
        {INFO_FIELDS.map(({ key }) => {
          const value = item[key as keyof DetailIntroItem]
          if (!value) return null

          return <InfoItem key={key} label={t(`detail.${key}`)} value={value} />
        })}
      </div>
    </section>
  )
}
