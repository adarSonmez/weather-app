import { FormEvent, useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import WeatherContainer from './components/WeatherContainer'
import { getWeatherByCoords, getWeatherBySearch } from './api/fetchWeather'

function App() {
  const [fetchedData, setFetchedData] = useState(null)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude
      const LON = position.coords.longitude

      try {
        const data = await getWeatherByCoords(LAT, LON)
        setFetchedData(data)
        setOpacity(1)
      } catch (error) {
        window.alert('Please check your internet connection.')
      }
    })
  }, [])

  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault()
    setOpacity(0)

    try {
      const data = await getWeatherBySearch(CITY)

      if (data.cod === '404') {
        window.alert('City not found.')
      } else {
        setFetchedData(data)
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
      <SearchBox handleSearch={handleSearch} />
      {fetchedData ? (
        <WeatherContainer opacity={opacity} fetchedData={fetchedData} />
      ) : null}
    </div>
  )
}

export default App
