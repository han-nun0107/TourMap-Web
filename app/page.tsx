import { TrendingCard } from '@/components/card'
import { trendingCardMock } from '@/mocks'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex flex-col gap-4">
          {trendingCardMock.map((card) => (
            <TrendingCard key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  )
}
