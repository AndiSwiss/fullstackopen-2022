import {useState, useEffect} from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const filteredCountries = filter
    ? countries.filter(country =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
      || country.name.official.toLowerCase().includes(filter.toLowerCase()))
    : countries

  const handleFilterChange = (event) => setFilter(event.target.value)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => console.log('error with axios-call! Error =', error))
  }, [])

  return (<>
    <h1>Countries</h1>
    <Filter filter={filter} handleFilterChange={handleFilterChange}/>
    <Countries countries={filteredCountries} />
  </>)
}

export default App
