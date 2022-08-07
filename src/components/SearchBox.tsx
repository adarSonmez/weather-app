import { FormEvent, useEffect, useRef, useState } from 'react'

function SearchBox({
  handleSearch,
}: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void
}) {
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    setSearch(value)
  }

  //Focus the input when the component mounts
  useEffect(() => {
    inputRef.current!.focus()
  }, [])

  return (
    <form
      className="form"
      id="form"
      onSubmit={(e) => {
        handleSearch(e, search)
        setSearch('')
      }}
    >
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        autoComplete="off"
        className="search"
        id="search"
        name="search"
        placeholder="search location..."
        type="search"
        onChange={handleChange}
        value={search}
      />
    </form>
  )
}

export default SearchBox
