'use client'

import { CategoryCard } from '@/components/card'
import { CATEGORY_OPTIONS } from '@/constants/main/category'

export default function Category() {
  return (
    <section className="w-full bg-gray-200 py-12">
      <div className="mx-auto flex w-full max-w-[332px] flex-col items-start gap-6 md:max-w-[689px] lg:max-w-[1009px] xl:max-w-[1440px]">
        <h1 className="text-black-900 flex w-full items-start text-2xl font-bold">
          Browse by Category
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8">
          {CATEGORY_OPTIONS.map((option) => (
            <CategoryCard
              key={option.value}
              title={option.title}
              Icon={option.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
