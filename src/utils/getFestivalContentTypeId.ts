import type { AppLocale } from '@/i18n/routing'


/* 언어별 페스티벌/이벤트 contenttypeid를 반환
한국어: '15', 다른 언어: '85' */
 
export const getFestivalContentTypeId = (locale: AppLocale): string => {
  return locale === 'ko' ? '15' : '85'
}

/* 주어진 contenttypeid가 페스티벌/이벤트인지 체크 */
export const isFestivalContentTypeId = (
  contenttypeid: string | undefined,
  locale: AppLocale
): boolean => {
  if (!contenttypeid) return false
  return contenttypeid === getFestivalContentTypeId(locale)
}
