//const API_KEY = '3265874a2c77ae4a04bb96236a642d2f'
 const API_KEY = '0b1a8860c778344c0a252df6f96fe20d'

export const getWeatherByCoords = async (
  LAT: number,
  LON: number
): Promise<any> => {
  const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`

  const response = await fetch(API_COORDS)
  const data = await response.json()
  return data
}

export const getWeatherBySearch = async (CITY: string): Promise<any> => {
  const API_SEARCH = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`

  const response = await fetch(API_SEARCH)
  const respData = await response.json()

  return respData
}
