import { render, screen } from '@testing-library/react'
import WeatherContainer, { WeatherData } from './WeatherContainer'

export const mockWeatherData: WeatherData = {
  city: 'Paris',
  country: 'France',
  temperature: 20,
  description: 'clear sky',
  icon: 'https://openweathermap.org/img/wn/01d@2x.png',
  humidity: '50',
  feels: '20',
  visibility: '10000',
  pressure: '1020',
  longitude: '2.34',
  latitude: '1.34',
  windSpeed: '10',
}

test('app should be invisible when data is not fetched', () => {
  render(<WeatherContainer opacity={0} fetchedData={null} error={""} />)

  expect(screen.getByTestId('app')).toHaveStyle('opacity: 0')
})
