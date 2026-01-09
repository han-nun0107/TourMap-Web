'use client'

import { SearchIcon, X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { ButtonClient } from '@/components/common/button'
import { useDebounce } from '@/hooks/search/useDebounce'

type Props = {
  defaultValue?: string
  debounceMs?: number
  onDebouncedChange: (q: string) => void
}

export function SearchInput({
  defaultValue = '',
  debounceMs = 300,
  onDebouncedChange,
}: Props) {
  const [value, setValue] = useState(defaultValue)
  const { debouncedValue } = useDebounce(value, debounceMs)
  const inputRef = useRef<HTMLInputElement>(null)
  const isInitialMountRef = useRef(true)
  const skipNextDebouncedEffectRef = useRef(false)

  useEffect(() => {
    const q = debouncedValue.trim()

    if (skipNextDebouncedEffectRef.current) {
      skipNextDebouncedEffectRef.current = false
      return
    }

    if (isInitialMountRef.current) {
      isInitialMountRef.current = false
      if (defaultValue.trim() === '' && q === '') return
    }

    onDebouncedChange(q)
  }, [debouncedValue, defaultValue, onDebouncedChange])

  const inputId = useId()

  const clear = useCallback(() => {
    skipNextDebouncedEffectRef.current = true
    setValue('')
    onDebouncedChange('')
    inputRef.current?.focus()
  }, [onDebouncedChange])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        clear()
      }
    },
    [clear]
  )

  return (
    <div role="search" aria-label="Site search" className="w-full">
      <label htmlFor={inputId} className="sr-only">
        Search destinations, attractions, restaurants
      </label>

      <div className="relative">
        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" />
        <input
          id={inputId}
          ref={inputRef}
          type="search"
          inputMode="search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Search destinations, attractions, restaurants..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          aria-describedby={`${inputId}-hint`}
          className="w-full rounded-full border py-3 pr-10 pl-10 outline-none"
        />

        {value.length > 0 && (
          <ButtonClient
            variant="clear"
            intent="clear"
            onClick={clear}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </ButtonClient>
        )}
      </div>

      <p id={`${inputId}-hint`} className="sr-only" aria-live="polite">
        Type to search. Results update automatically.
      </p>
    </div>
  )
}
