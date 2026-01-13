import { useEffect, useState } from 'react'

export const useIntersectionObserver = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })
    observer.observe(ref.current)
  }, [ref])

  return { isIntersecting }
}
