export const getTours = async (url: string, params: Record<string, string>) => {
  const query = new URLSearchParams(params).toString()
  const response = await fetch(`${url}?${query}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch tours: ${response.statusText}`)
  }
  return response.json()
}
