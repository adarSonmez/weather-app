import { render, screen } from '@testing-library/react'
import DetailsTable from './DetailsTable'
import { mockWeatherData } from './WeatherContainer.test'

it('should have td elements with correct data', () => {
  render(<DetailsTable data={mockWeatherData} />)
  expect(screen.getByTestId('humidity')).toHaveTextContent(
    mockWeatherData.humidity
  )
  expect(screen.getByTestId('feels')).toHaveTextContent(mockWeatherData.feels)
  expect(screen.getByTestId('visibility')).toHaveTextContent(
    mockWeatherData.visibility
  )
  expect(screen.getByTestId('pressure')).toHaveTextContent(
    mockWeatherData.pressure
  )
  expect(screen.getByTestId('longitude')).toHaveTextContent(
    mockWeatherData.longitude
  )
  expect(screen.getByTestId('latitude')).toHaveTextContent(
    mockWeatherData.latitude
  )
  expect(screen.getByTestId('windSpeed')).toHaveTextContent(
    mockWeatherData.windSpeed
  )
})
