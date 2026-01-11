import { useMemo, useState } from 'react'

type SearchFilterOptions = {
  searchQuery: string
  activeFilter: string | null
}

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
    const normalizeString = (str: string) =>
      str.toLowerCase().replace(/[-\s]/g, '')

    return items.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        !activeFilter ||
        (item.tag &&
          normalizeString(item.tag) === normalizeString(activeFilter))

      return matchesSearch && matchesCategory
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
