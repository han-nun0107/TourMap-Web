import axios, { AxiosError } from 'axios'

export const getTours = async <T = unknown>(
  url: string,
  params: Record<string, string>
): Promise<T> => {
  try {
    const { data } = await axios.get<T>(url, { params })
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || error.message
      const statusCode = error.response?.status || 500
      throw new Error(
        `Tour API request failed: ${errorMessage} (Status: ${statusCode}, URL: ${url})`
      )
    }
    throw error
  }
}
