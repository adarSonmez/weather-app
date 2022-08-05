import { WeatherData } from './WeatherContainer'

function Location({ data: { city, country } }: { data: WeatherData }) {
  return (
    <header className="location">
      <p className="city" id="city">
        {city}
      </p>
      {', '}
      <span className="country" id="country">
        {country}
      </span>
    </header>
  )
}

export default Location
