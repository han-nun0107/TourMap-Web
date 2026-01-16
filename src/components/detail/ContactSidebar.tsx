import { Globe, MapPin, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { ContactItem } from '@/components/detail'
import type { DetailCommonItem } from '@/types/tour/detailCommon'

type ContactSidebarProps = {
  item: DetailCommonItem
}

export default function ContactSidebar({ item }: ContactSidebarProps) {
  const address = [item.addr1, item.addr2].filter(Boolean).join(' ')
  const t = useTranslations('Home')

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-6 space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            {t('detail.phoneInfo')}
          </h2>
          <div className="space-y-5">
            {item.tel && (
              <ContactItem
                icon={<Phone size={20} />}
                label={t('detail.phoneNumber')}
              >
                <a
                  href={`tel:${item.tel}`}
                  className="text-gray-900 transition-colors hover:text-blue-600"
                >
                  {item.tel}
                </a>
              </ContactItem>
            )}
            {item.homepage && (
              <ContactItem
                icon={<Globe size={20} />}
                label={t('detail.homepage')}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.homepage,
                  }}
                  className="break-all [&_a]:text-blue-600 [&_a]:transition-colors [&_a]:hover:text-blue-700 [&_a]:hover:underline"
                />
              </ContactItem>
            )}
            {address && (
              <ContactItem
                icon={<MapPin size={20} />}
                label={t('detail.address')}
              >
                <p className="leading-relaxed text-gray-900">{address}</p>
                {item.zipcode && (
                  <p className="mt-2 text-sm text-gray-500">
                    {t('detail.postcode')}: {item.zipcode}
                  </p>
                )}
              </ContactItem>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
