import { Banner, Category, ExploreSection } from '@/components/main'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-col bg-gray-100">
        <ExploreSection
          sectionTitle="Trending"
          subtitle="Popular destinations this season"
          type="trending"
        />
        <Category />
        <ExploreSection
          sectionTitle="Regions"
          subtitle="Discover unique destinations in each area"
          type="region"
        />
      </div>
    </main>
  )
}
