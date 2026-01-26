import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { usePathname } from '@/i18n/navigation'

/**
 * 검색 페이지의 URL 쿼리 파라미터를 관리하는 훅
 * 뒤로가기 시 검색어와 필터 상태를 자동으로 복원합니다.
 */
export function useSearchQueryParams() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // URL에서 초기값 읽기
  const qFromUrl = searchParams.get('q') ?? ''
  const filterFromUrl = searchParams.get('filter') ?? 'seoul'

  const [searchQuery, setSearchQuery] = useState(qFromUrl)
  const [activeFilter, setActiveFilter] = useState<string | null>(
    filterFromUrl || 'seoul'
  )

  // 뒤로 돌아왔을 때 URL 기준으로 상태 복원
  useEffect(() => {
    setSearchQuery(qFromUrl)
  }, [qFromUrl])

  useEffect(() => {
    setActiveFilter(filterFromUrl || 'seoul')
  }, [filterFromUrl])

  // 검색어 변경 시 URL 업데이트
  const handleSearchChange = (v: string) => {
    setSearchQuery(v)
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
    setActiveFilter(newFilter)
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
