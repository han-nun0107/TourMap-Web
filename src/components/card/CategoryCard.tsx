import { ButtonClient } from '@/components/common/button'
import Card from '@/components/common/Card'

type CategoryCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  onClick?: () => void
}

export default function CategoryCard({
  Icon,
  title,
  onClick,
}: CategoryCardProps) {
  return (
    <Card>
      <ButtonClient
        type="button"
        onClick={onClick}
        variant="category"
        intent="clear"
      >
        <Icon aria-hidden="true" className="h-9 w-10" />
        <p className="text-black-900 text-sm font-medium">{title}</p>
      </ButtonClient>
    </Card>
  )
}
