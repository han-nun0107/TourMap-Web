import DOMPurify from 'dompurify'
import { Globe, MapPin, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { ContactItem } from '@/components/detail'
import type { DetailCommonItem } from '@/types/tour/detailCommon'

type ContactSidebarProps = { item: DetailCommonItem }

// homepage가 "<a href='...'>text</a>" 형태로 올 때 href/text만 안전하게 추출
// DOMPurify를 사용하여 HTML을 소독한 후 안전한 링크 추출
const extractHomepageLink = (input: string) => {
  if (typeof window === 'undefined') {
    // SSR 환경에서는 기본 파싱만 수행
    const hrefMatch = input.match(/href\s*=\s*["']([^"']+)["']/i)
    const href = hrefMatch?.[1]?.trim()
    const text = input.replace(/<[^>]*>/g, '').trim()
    if (!href) return null
    return { href, text: text || href }
  }

  // DOMPurify로 HTML 소독
  const sanitized = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['a'],
    ALLOWED_ATTR: ['href'],
  })

  // 소독된 HTML에서 링크 추출
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = sanitized
  const anchor = tempDiv.querySelector('a')

  if (!anchor || !anchor.href) {
    // <a> 태그가 없으면 텍스트만 추출
    const text = DOMPurify.sanitize(input, { ALLOWED_TAGS: [] })
    const trimmedText = text.trim()
    if (!trimmedText) return null

    // URL인지 확인
    try {
      const url = new URL(trimmedText, 'https://example.com')
      const protocol = url.protocol.toLowerCase()
      if (protocol !== 'http:' && protocol !== 'https:') return null
      return { href: trimmedText, text: trimmedText }
    } catch {
      return null
    }
  }

  const href = anchor.href
  const text = anchor.textContent?.trim() || href

  // 스킴 화이트리스트 검증 (javascript: 같은 거 차단)
  try {
    const url = new URL(href)
    const protocol = url.protocol.toLowerCase()
    if (protocol !== 'http:' && protocol !== 'https:') return null
  } catch {
    return null
  }

  return { href, text }
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
