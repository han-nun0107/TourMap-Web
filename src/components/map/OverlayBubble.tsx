type OverlayBubbleProps = {
  label: string
}

export default function OverlayBubble({ label }: OverlayBubbleProps) {
  return (
    <div className="relative -translate-y-2">
      <div className="rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/30 backdrop-blur">
        {label}
      </div>
      <div className="mx-auto h-2 w-2 rotate-45 bg-black/75 shadow-lg ring-1 ring-white/30" />
    </div>
  )
}
