import { useEffect, useState } from 'react'

export const useIntersectionObserver = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref])

  return { isIntersecting }
}
