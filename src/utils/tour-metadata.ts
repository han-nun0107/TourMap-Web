import type { Metadata } from 'next'

import type { DetailCommonItem } from '@/types/tour/detailCommon'

export function generateTourDetailMetadata(
  detailCommonItem: DetailCommonItem
): Metadata {
  const title = `${detailCommonItem.title} | Tour Map`
  const description =
    detailCommonItem.overview?.slice(0, 160) ||
    `Explore ${detailCommonItem.title} - ${detailCommonItem.addr1 || 'Korea'}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: detailCommonItem.firstimage
        ? [
            {
              url: detailCommonItem.firstimage,
              width: 1200,
              height: 630,
              alt: detailCommonItem.title,
            },
          ]
        : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: detailCommonItem.firstimage ? [detailCommonItem.firstimage] : [],
    },
  }
}
/* 기본 메타데이터 */
export function getDefaultTourDetailMetadata(): Metadata {
  return {
    title: 'Tour Detail | Tour Map',
  }
}
