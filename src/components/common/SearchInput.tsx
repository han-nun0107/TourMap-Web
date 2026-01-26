'use client'

import { SearchIcon, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { ButtonClient } from '@/components/common'
import { useDebounce, useDebouncedChange } from '@/hooks/search'

type Props = {
  defaultValue?: string
  debounceMs?: number
  onDebouncedChange: (q: string) => void
  placeholder: string
  ariaHint: string
}

export function SearchInput({
  defaultValue = '',
  debounceMs = 300,
  onDebouncedChange,
  placeholder,
  ariaHint,
}: Props) {
  const [value, setValue] = useState(defaultValue)
  const inputRef = useRef<HTMLInputElement>(null)
  const skipNextDebouncedEffectRef = useRef(false)
  const onDebouncedChangeRef = useRef(onDebouncedChange)
  const { debouncedValue } = useDebounce(value, debounceMs)

  // defaultValue가 변경되면 내부 상태 업데이트 (뒤로가기 시 URL에서 복원)
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])
  const t = useTranslations('Home')
  useDebouncedChange({
    debouncedValue,
    onDebouncedChange,
    skipNextDebouncedEffectRef,
  })

  const inputId = useId()

  const clear = useCallback(() => {
    skipNextDebouncedEffectRef.current = true
    setValue('')
    onDebouncedChangeRef.current('')
    inputRef.current?.focus()
  }, [])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        clear()
      }
    },
    [clear]
  )

  return (
    <div role="search" aria-label={t('search.search')} className="w-full">
      <label htmlFor={inputId} className="sr-only">
        {placeholder}
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
          placeholder={placeholder}
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
            aria-label={t('search.clearSearch')}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </ButtonClient>
        )}
      </div>

      <p id={`${inputId}-hint`} className="sr-only" aria-live="polite">
        {ariaHint}
      </p>
    </div>
  )
}
