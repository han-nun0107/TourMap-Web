import { useEffect, useRef } from 'react'

type UseDebouncedChangeOptions = {
  debouncedValue: string
  onDebouncedChange: (q: string) => void
  skipNextDebouncedEffectRef: React.MutableRefObject<boolean>
}

export function useDebouncedChange({
  debouncedValue,
  onDebouncedChange,
  skipNextDebouncedEffectRef,
}: UseDebouncedChangeOptions) {
  const isInitialMountRef = useRef(true)
  const onDebouncedChangeRef = useRef(onDebouncedChange)

  useEffect(() => {
    onDebouncedChangeRef.current = onDebouncedChange
  })

  useEffect(() => {
    const q = debouncedValue.trim()

    if (skipNextDebouncedEffectRef.current) {
      skipNextDebouncedEffectRef.current = false
      return
    }

    if (isInitialMountRef.current) {
      isInitialMountRef.current = false
      if (q === '') {
        return
      }
    }

    onDebouncedChangeRef.current(q)
  }, [debouncedValue])
}
