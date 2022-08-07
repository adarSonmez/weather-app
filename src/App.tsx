import { FormEvent, useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import WeatherContainer from './components/WeatherContainer'
import { getWeatherByCoords, getWeatherBySearch } from './api/fetchWeather'

function App() {
  const [fetchedData, setFetchedData] = useState(null)
  const [opacity, setOpacity] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    setOpacity(0)
    setError('')
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude
      const LON = position.coords.longitude

      try {
        const data = await getWeatherByCoords(LAT, LON)
        setFetchedData(data)
      } catch (err) {
        setError('Please check your internet connection')
      }
      setOpacity(1)
    })
  }, [])

  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault()
    setOpacity(0)
    setError('')

    try {
      const data = await getWeatherBySearch(CITY)

      if (data.cod === '404') {
        setError('City not found.')
      } else {
        setFetchedData(data)
      }
    } catch (err) {
      setError(
        'Make sure you typed the city correctly and your internet connection is working.'
      )
    }
    setOpacity(1)
  }

  return (
    <div className="container" data-testid="container">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer
        opacity={opacity}
        fetchedData={fetchedData}
        error={error}
      />
    </div>
  )
}

export default App
