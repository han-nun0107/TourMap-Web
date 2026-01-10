'use client'

import { Banner, Category, ExploreSection } from '@/components/main'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-col bg-gray-100">
        <div className="py-12">
          <ExploreSection
            sectionTitle="Trending"
            subtitle="Popular destinations this season"
            type="trending"
          />
        </div>
        <Category />
        <div className="py-12">
          <ExploreSection
            sectionTitle="Regions"
            subtitle="Discover unique destinations in each area"
            type="region"
          />
        </div>
      </div>
    </main>
  )
}
