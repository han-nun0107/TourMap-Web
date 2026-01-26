import { useRouter, useSearchParams } from 'next/navigation'

import { usePathname } from '@/i18n/navigation'

export function useSearchQueryParams() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // URL에서 직접 읽기
  const searchQuery = searchParams.get('q') ?? ''
  const activeFilter = searchParams.get('filter') ?? 'seoul'

  // 검색어 변경 시 URL 업데이트
  const handleSearchChange = (v: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (v) {
      params.set('q', v)
    } else {
      params.delete('q')
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // 필터 변경 시 URL 업데이트
  const handleFilterChange = (filter: string | null) => {
    const newFilter = filter || 'seoul'
    const params = new URLSearchParams(searchParams.toString())
    if (newFilter && newFilter !== 'seoul') {
      params.set('filter', newFilter)
    } else {
      params.delete('filter')
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    searchQuery,
    activeFilter,
    handleSearchChange,
    handleFilterChange,
  }
}
