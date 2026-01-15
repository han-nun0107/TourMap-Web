'use client'

import { useLocale, useTranslations } from 'next-intl'

import { CategoryCard } from '@/components/card'
import { CATEGORY_OPTIONS, CATEGORY_TO_CONTENT_TYPE_ID } from '@/constants/main'
import { useRouter } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'

export default function Category({ title }: { title: string }) {
  const t = useTranslations('Home')
  const locale = useLocale() as AppLocale
  const router = useRouter()

  const handleCategoryClick = (categoryValue: string) => {
    const contentTypeId = CATEGORY_TO_CONTENT_TYPE_ID[categoryValue]?.[locale]
    if (contentTypeId) {
      // 카테고리 페이지로 이동
      router.push(`/category?contentTypeId=${contentTypeId}`)
    }
  }

  return (
    <section className="w-full bg-gray-200 py-12">
      <div className="mx-auto flex w-full max-w-[332px] flex-col items-start gap-6 md:max-w-[689px] lg:max-w-[1009px] xl:max-w-[1440px]">
        <h1 className="text-black-900 flex w-full items-start text-2xl font-bold">
          {title}
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8">
          {CATEGORY_OPTIONS.map((option) => (
            <CategoryCard
              key={option.value}
              title={t(option.title)}
              Icon={option.Icon}
              onClick={() => handleCategoryClick(option.value)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
