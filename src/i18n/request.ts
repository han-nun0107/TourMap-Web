import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  /* TODO: 추후 쿠키 or 로컬에서 언어 설정 받아오기 */
  const locale = 'ko'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
