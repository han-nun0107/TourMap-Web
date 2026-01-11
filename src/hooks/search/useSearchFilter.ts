import { useMemo, useState } from 'react'

type SearchFilterOptions = {
  searchQuery: string
  activeFilter: string | null
}

const normalizeString = (str: string) => str.toLowerCase().replace(/[-\s]/g, '')

export const useSearchFilter = <
  T extends { title: string; location: string; tag?: string },
>(
  items: T[],
  options?: Partial<SearchFilterOptions>
) => {
  const [searchQuery, setSearchQuery] = useState(options?.searchQuery ?? '')
  const [activeFilter, setActiveFilter] = useState<string | null>(
    options?.activeFilter ?? null
  )

  const filteredItems = useMemo(() => {
    if (!searchQuery && !activeFilter) return items

    const lowercasedQuery = searchQuery.toLowerCase()
    const normalizedActiveFilter = activeFilter
      ? normalizeString(activeFilter)
      : null

    return items.filter((item) => {
      const tagMatch =
        !normalizedActiveFilter ||
        (item.tag && normalizeString(item.tag) === normalizedActiveFilter)

      const queryMatch =
        !searchQuery ||
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.location.toLowerCase().includes(lowercasedQuery)

      return tagMatch && queryMatch
    })
  }, [items, searchQuery, activeFilter])

  return {
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    filteredItems,
    resultCount: filteredItems.length,
  }
}
