import DOMPurify from 'dompurify'
import { useMemo } from 'react'

type InfoItemProps = {
  label: string
  value: string
}

export default function InfoItem({ label, value }: InfoItemProps) {
  const sanitizedValue = useMemo(() => {
    if (typeof window !== 'undefined') {
      return DOMPurify.sanitize(value)
    }
    return value
  }, [value])

  return (
    <div>
      <h3 className="mb-1 text-sm font-semibold text-gray-600">{label}</h3>
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: sanitizedValue }}
      />
    </div>
  )
}
