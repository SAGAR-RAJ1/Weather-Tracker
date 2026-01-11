import React from 'react'
import '../Css/InfoBox.css'

function InfoBox({info}) {
  return (
    <div className="infoBox">
        <h3>Weather Information</h3>
        <p>City: {info.cityName}, {info.country}</p>
        <p>Temperature: {info.temp} °C </p>
        <p> Feels_Like : {info.feelslike}°C </p>
        <p>Latitude : {info.lat} </p>
        <p> Longitude : {info.lon}</p>
        <p>Humidity: {info.humidity} %</p>
        <p>Pressure: {info.pressure} hPa</p>
        <p>Weather: {info.weatherType}</p>
        <p>Wind Speed: {info.windSpeed} m/s</p>
        <p>Sunset Time: {info.sunsetTime}</p>

    </div>
  )
}

export default InfoBox
