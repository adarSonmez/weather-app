import { render, screen } from '@testing-library/react'
import DegreeSection from './DegreeSection'
import { WeatherData } from './WeatherContainer'
import { mockWeatherData } from './WeatherContainer.test'

it('should render degree section correctly', () => {
  render(<DegreeSection data={mockWeatherData} />)
  expect(screen.getByTestId('temperature')).toHaveTextContent(
    mockWeatherData.temperature.toString()
  )
  expect(screen.getByText(mockWeatherData.description)).toBeInTheDocument()
  expect(screen.getByRole('img')).toHaveAttribute('src', mockWeatherData.icon)
})

it('should works with undefined and null data', () => {
  render(<DegreeSection data={{} as WeatherData} />)
  expect(screen.getByTestId('temperature')).toHaveTextContent('')
  expect(screen.getByRole('img')).not.toHaveAttribute('src')
})
