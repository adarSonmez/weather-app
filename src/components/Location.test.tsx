import { render, screen } from '@testing-library/react'
import Location from './Location'
import { mockWeatherData } from './WeatherContainer.test'

it('should display correct location', () => {
  render(<Location data={mockWeatherData} />)

  expect(screen.getByText(mockWeatherData.city)).toBeInTheDocument()
  expect(screen.getByText(mockWeatherData.country)).toBeInTheDocument()
})
