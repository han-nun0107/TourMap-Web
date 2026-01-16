type ContactItemProps = {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}
export default function ContactItem({
  icon,
  label,
  children,
}: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-gray-400">{icon}</div>
      <div className="flex-1">
        <p className="mb-1 text-sm font-medium text-gray-600">{label}</p>
        {children}
      </div>
    </div>
  )
}
