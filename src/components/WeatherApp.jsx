import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

const WeatherApp = () => {
    const [Weather, setWeather] = useState({
        temp: 25,
        tempMin: 20,
        tempMax: 30,
        humidity: 60,
        pressure: 1012,
        weatherType: "Sunny",
        cityName: "Sarai road",
        windSpeed: 5,
        country: "US",
        sunsetTime: "7:45 PM",
    })
    let UpdateWeather = (newInfo)=>{
        setWeather(newInfo);
    }
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h3>Weather App By SRC</h3>
      <SearchBox UpdateWeather={UpdateWeather}/>
      <InfoBox info={Weather}/>
    </div>
  )
}

export default WeatherApp
