import { FormEvent, useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import WeatherContainer from './components/WeatherContainer'

function App() {
  const API_KEY = '3265874a2c77ae4a04bb96236a642d2f'
  const [fetchedData, setFetchedData] = useState(null)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const LAT = position.coords.latitude
      const LON = position.coords.longitude
      const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`

      getWeatherByCoords(API_COORDS)
    })
  }, [])

  const getWeatherByCoords = async (API: string) => {
    try {
      const response = await fetch(API)
      const data = await response.json()
      setFetchedData(data)
      setOpacity(1)
    } catch (error) {
      window.alert('Please check your internet connection.')
    }
  }

  const getWeatherBySearch = async (
    e: FormEvent<HTMLFormElement>,
    CITY: string
  ) => {
    e.preventDefault()
    setOpacity(0)

    const API_SEARCH = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`
    try {
      const response = await fetch(API_SEARCH)
      const respData = await response.json()

      if (respData.cod === '404') {
        window.alert('City not found.')
      } else {
        setFetchedData(respData)
        setOpacity(1)
      }
    } catch (err) {
      window.alert(
        'Make sure you typed the correct location. If you are sure, check your internet connection.'
      )
    }
  }

  return (
    <div className="container">
      <SearchBox getWeatherBySearch={getWeatherBySearch} />
      {fetchedData ? (
        <WeatherContainer opacity={opacity} fetchedData={fetchedData} />
      ) : null}
    </div>
  )
}

export default App
