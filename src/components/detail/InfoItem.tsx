type InfoItemProps = {
  label: string
  value: string
}

export default function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <h3 className="mb-1 text-sm font-semibold text-gray-600">{label}</h3>
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  )
}
