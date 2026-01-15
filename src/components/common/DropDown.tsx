import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'

import { LANGUAGE_OPTIONS } from '@/constants/header'
import { usePathname, useRouter } from '@/i18n/navigation'
import { cn } from '@/lib'
import { useLanguageStore } from '@/store/language'

export default function DropDown({ children }: { children: React.ReactNode }) {
  const language = useLanguageStore((state) => state.language)
  const setLanguage = useLanguageStore((state) => state.setLanguage)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGE_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => {
              setLanguage(option.value)
              router.push(pathname, { locale: option.value })
            }}
            className={cn(
              'cursor-pointer',
              language === option.value && 'bg-blue-600/10 text-blue-600'
            )}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
