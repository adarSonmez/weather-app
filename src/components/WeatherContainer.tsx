import Location from './Location'
import DegreeSection from './DegreeSection'
import DetailsTable from './DetailsTable'
import { useEffect, useState } from 'react'

export type WeatherData = {
  city: string
  country: string
  temperature: number
  description: string
  icon: string
  humidity: string
  feels: string
  visibility: string
  pressure: string
  longitude: string
  latitude: string
  windSpeed: string
}

function WeatherContainer({
  opacity,
  fetchedData,
  error,
}: {
  opacity: number
  fetchedData: any
  error: string
}) {
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    temperature: 0,
    description: '',
    icon: '',
    humidity: '',
    feels: '',
    visibility: '',
    pressure: '',
    longitude: '',
    latitude: '',
    windSpeed: '',
  })

  useEffect(() => {
    if (fetchedData)
      setWeather({
        city: fetchedData.name,
        country: fetchedData.sys.country,
        temperature: Math.floor(fetchedData.main.temp - 273),
        description: fetchedData.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`,
        humidity: fetchedData.main.humidity + '%',
        feels: Math.floor(fetchedData.main.feels_like - 273) + '°C',
        visibility: fetchedData.visibility + ' m',
        pressure: fetchedData.main.pressure + ' hPa',
        longitude: fetchedData.coord.lon,
        latitude: fetchedData.coord.lat,
        windSpeed: fetchedData.wind.speed + ' m/s',
      })
  }, [fetchedData])

  return (
    <main
      className="app"
      id="app"
      data-testid="app"
      style={{ opacity: opacity }}
    >
      {error === '' ? (
        <div className="inner-screen">
          <Location data={weather} />
          <DegreeSection data={weather} />
          <DetailsTable data={weather} />
        </div>
      ) : (
        <div className='error-message'>{error}</div>
      )}
    </main>
  )
}

export default WeatherContainer
