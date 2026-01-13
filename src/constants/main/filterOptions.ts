type FilterOption = {
  name: string
  value: string
}

export const FILTER_OPTIONS: FilterOption[] = [
  { name: '전체', value: 'all-regions' },
  { name: '서울', value: 'seoul' },
  { name: '부산', value: 'busan' },
  { name: '대구', value: 'daegu' },
  { name: '인천', value: 'incheon' },
  { name: '광주', value: 'gwangju' },
  { name: '대전', value: 'daejeon' },
  { name: '울산', value: 'ulsan' },
  { name: '세종', value: 'sejong' },
  { name: '경기', value: 'gyeonggi' },
  { name: '강원', value: 'gangwon' },
  { name: '충북', value: 'chungbuk' },
  { name: '충남', value: 'chungnam' },
  { name: '전북', value: 'jeonbuk' },
  { name: '전남', value: 'jeonnam' },
  { name: '경북', value: 'gyeongbuk' },
  { name: '경남', value: 'gyeongnam' },
  { name: '제주', value: 'jeju' },
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
