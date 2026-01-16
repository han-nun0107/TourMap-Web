import { Globe, MapPin, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { ContactItem } from '@/components/detail'
import type { DetailCommonItem } from '@/types/tour/detailCommon'

type ContactSidebarProps = { item: DetailCommonItem }

// homepage가 "<a href='...'>text</a>" 형태로 올 때 href/text만 안전하게 추출
const extractHomepageLink = (input: string) => {
  // href 추출
  const hrefMatch = input.match(/href\s*=\s*["']([^"']+)["']/i)
  const href = hrefMatch?.[1]?.trim()

  // 텍스트 추출(태그 제거)
  const text = input.replace(/<[^>]*>/g, '').trim()

  if (!href) return null

  // 스킴 화이트리스트 (javascript: 같은 거 차단)
  try {
    const url = new URL(href, 'https://example.com') // 상대경로 대비
    const protocol = url.protocol.toLowerCase()
    if (protocol !== 'http:' && protocol !== 'https:') return null
  } catch {
    return null
  }

  return { href, text: text || href }
}

export default function ContactSidebar({ item }: ContactSidebarProps) {
  const address = [item.addr1, item.addr2].filter(Boolean).join(' ')
  const t = useTranslations('Home')

  const homepageLink = useMemo(() => {
    if (!item.homepage) return null
    return extractHomepageLink(item.homepage)
  }, [item.homepage])

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

            {homepageLink && (
              <ContactItem
                icon={<Globe size={20} />}
                label={t('detail.homepage')}
              >
                <a
                  href={homepageLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-blue-600 transition-colors hover:text-blue-700 hover:underline"
                >
                  {homepageLink.text}
                </a>
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
