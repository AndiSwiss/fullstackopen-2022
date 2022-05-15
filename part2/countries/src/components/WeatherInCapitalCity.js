import {useEffect, useState} from "react";
import axios from "axios";

const WeatherInCapitalCity = ({country}) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY // You have to RESTART the app if you change this key
  const lat = country.capitalInfo?.latlng[0] ?? 0
  const lon = country.capitalInfo?.latlng[1] ?? 0
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  const [weather, setWeather] = useState(undefined)

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => console.log('error with axios-call for weather! Error =', error, 'url =', url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const temp = () => ((weather.main?.temp ?? 0) - 273.15).toFixed(2)
  const weatherIconCode = () => weather.weather && weather.weather[0].icon
  const weatherUrl = () => `https://openweathermap.org/img/wn/${weatherIconCode()}@2x.png`

  return (weather && <div>
    <h3>Weather in {weather.name ?? 'n/a'}</h3>
    <div>Temperature: {temp()} Celcius</div>
    <img src={weatherUrl()} alt="Icon for clouds, rain or sun"/>
    <div>Wind: {weather.wind?.speed ?? 0} m/s</div>
  </div>)
}


export default WeatherInCapitalCity