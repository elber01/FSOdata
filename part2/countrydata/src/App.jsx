import { useState, useEffect } from 'react'
import axios from 'axios'

// Component to display filtered countries based on the search input
const FilteredCountries = ({ countries, filter }) => {  
  const filtered = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filtered.length === 1) {
    const country = filtered[0]
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h2>Languages</h2>
        <ul>{country.languages && Object.values(country.languages).map((language, index) => <li key={index}>{language}</li>)}</ul>
        <h2>Flag</h2>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      </div>
    )
  }

  return (
    <ul>
      {filtered.map((country, index) => (
        <li key={index}>{country.name.common}</li>
      ))}
    </ul>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
<h1>Country Data</h1>
    <div>
      Find countries <input value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
    <FilteredCountries countries={countries} filter={filter} />
    </>
  )
}

export default App
