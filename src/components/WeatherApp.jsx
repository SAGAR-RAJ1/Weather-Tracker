import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

const WeatherApp = () => {
    const [Weather, setWeather] = useState({
      
    })
    let UpdateWeather = (newInfo)=>{
        setWeather(newInfo);
    }
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h1>Weather App By SRC</h1>
      <SearchBox UpdateWeather={UpdateWeather}/>
      <InfoBox info={Weather}/>
    </div>
  )
}

export default WeatherApp
