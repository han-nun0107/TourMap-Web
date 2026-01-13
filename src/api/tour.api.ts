export const getTours = async (url: string, params: Record<string, string>) => {
  const query = new URLSearchParams(params).toString()
  const response = await fetch(`${url}?${query}`)
  return response.json()
}
