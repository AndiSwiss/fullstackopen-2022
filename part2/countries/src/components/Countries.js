import Country from "./Country";

const Countries = ({countries}) => {
  if (countries.length > 10) return <div>Too many matches, specify filter</div>
  if (countries.length === 1) {
    console.log(`countries[0] = `, countries[0])
    return <Country country={countries[0]}/>
  }
  return countries.map((country) => {
    const name = country.name.common
    const official = country.name.official ?? 'n/a'
    return <div key={name}>{name} ({official})</div>
  })
}

export default Countries