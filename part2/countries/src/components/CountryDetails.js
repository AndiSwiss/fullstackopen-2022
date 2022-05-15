import WeatherInCapitalCity from "./WeatherInCapitalCity";

const CountryDetails = ({country}) => (<>
  <h2>{country.name.common}</h2>
  <div>Official name: {country.name.official ?? 'n/a'}</div>
  <div>Capital: {(country.capital && country.capital[0]) ?? 'n/a'}</div>
  <div>Area: {country.area ?? 'n/a'}</div>
  <h3>Languages:</h3>
  <ul>
    {country.languages instanceof Object
      ? Object.entries(country.languages).map(([key, value]) => {
        return <li key={key}>{value}</li>
      })
      : 'n/a'
    }
  </ul>
  <div>
    {country.flags?.png && <img src={country.flags.png} alt={'Flag of ' + country.name.common}/>}
  </div>
  <WeatherInCapitalCity country={country}/>
</>)

export default CountryDetails