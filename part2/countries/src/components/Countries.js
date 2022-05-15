import CountryDetails from "./CountryDetails";
import {useEffect, useState} from "react";

const Countries = ({countries}) => {
  const [selectedCountry, setSelectedCountry] = useState(undefined)

  // reset if list of countries is changed
  // otherwise some weird behaviour
  useEffect(() => {
    setSelectedCountry(undefined)
  }, [countries])

  const areNamesIdentical = country => selectedCountry && selectedCountry.name.common === country.name.common

  const handleShow = country => () => {
    if (areNamesIdentical(country)) setSelectedCountry(undefined)
    else setSelectedCountry(country)
  }

  // For more than 10 countries:
  if (countries.length > 10) return <div>Too many matches, specify filter</div>

  // If exactly one country:
  if (countries.length === 1) return <CountryDetails country={countries[0]}/>

  // If between 2 and 10 countries:
  return (<>
    {countries.map((country) => {
      const name = country.name.common
      return (<div key={name}>
        {name} <button onClick={handleShow(country)}>{areNamesIdentical(country) ? 'hide' : 'show'}</button>
      </div>)
    })}
    <hr/>
    {selectedCountry && <CountryDetails country={selectedCountry}/>}
  </>)
}

export default Countries