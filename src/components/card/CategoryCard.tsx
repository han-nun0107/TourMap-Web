import Card from '@/components/common/Card'

type CategoryCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}

export default function CategoryCard({ Icon, title }: CategoryCardProps) {
  return (
    <Card>
      <div className="flex-center xs:w-28 h-24 w-32 flex-col gap-2 rounded-2xl md:w-40 lg:w-40">
        <Icon aria-hidden="true" className="h-9 w-10" />
        <p className="text-black-900 text-sm font-medium">{title}</p>
      </div>
    </Card>
  )
}
