type FilterOption = {
  name: string
  value: string
}

export const FILTER_OPTIONS: FilterOption[] = [
  { name: 'region.all', value: 'all-regions' },
  { name: 'region.seoul', value: 'seoul' },
  { name: 'region.busan', value: 'busan' },
  { name: 'region.daegu', value: 'daegu' },
  { name: 'region.incheon', value: 'incheon' },
  { name: 'region.gwangju', value: 'gwangju' },
  { name: 'region.daejeon', value: 'daejeon' },
  { name: 'region.ulsan', value: 'ulsan' },
  { name: 'region.sejong', value: 'sejong' },
  { name: 'region.gyeonggi', value: 'gyeonggi' },
  { name: 'region.gangwon', value: 'gangwon' },
  { name: 'region.chungbuk', value: 'chungbuk' },
  { name: 'region.chungnam', value: 'chungnam' },
  { name: 'region.jeonbuk', value: 'jeonbuk' },
  { name: 'region.jeonnam', value: 'jeonnam' },
  { name: 'region.gyeongbuk', value: 'gyeongbuk' },
  { name: 'region.gyeongnam', value: 'gyeongnam' },
  { name: 'region.jeju', value: 'jeju' },
]

export const AREA_CODE_BY_FILTER_VALUE: Record<string, string> = {
  seoul: '1',
  incheon: '2',
  daejeon: '3',
  daegu: '4',
  gwangju: '5',
  busan: '6',
  ulsan: '7',
  sejong: '8',
  gyeonggi: '31',
  gangwon: '32',
  chungbuk: '33',
  chungnam: '34',
  gyeongbuk: '35',
  gyeongnam: '36',
  jeonbuk: '37',
  jeonnam: '38',
  jeju: '39',
}
