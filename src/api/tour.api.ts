import axios from 'axios'

export const getTours = async <T = unknown>(
  url: string,
  params: Record<string, string>
): Promise<T> => {
  const { data } = await axios.get<T>(url, { params })
  return data
}
