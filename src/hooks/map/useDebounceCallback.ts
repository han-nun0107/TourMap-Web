import { useCallback, useRef, useEffect } from 'react'

export const useDebounceCallback = <T extends (...args: never[]) => void>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const callbackRef = useRef<T>(callback)

  // callback이 변경되면 ref 업데이트
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    },
    [delay]
  )

  return debouncedFn
}
