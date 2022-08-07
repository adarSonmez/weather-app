import { render, screen, fireEvent } from '@testing-library/react'
import SearchBox from './SearchBox'

const mockHandleSearch = jest.fn().mockImplementation((e, city) => {
  e.preventDefault()
  console.log(city)
})

describe('Typing and submitting a search', () => {
  it('should be able to type in the search box', () => {
    render(<SearchBox handleSearch={mockHandleSearch} />)
    const input = screen.getByPlaceholderText('search location...')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'New York' } })
    expect(input).toHaveValue('New York')
  })

  it('should empty the search box when the form is submitted', () => {
    render(<SearchBox handleSearch={mockHandleSearch} />)
    const input = screen.getByPlaceholderText('search location...')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'New York' } })
    expect(input).toHaveValue('New York')

    fireEvent.submit(input)
    expect(input).toHaveValue('')
  })
})
