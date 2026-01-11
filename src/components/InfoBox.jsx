import React from 'react'
import '../Css/InfoBox.css'

function InfoBox() {
    let info = {
        temp: 25,
        tempMin: 20,
        tempMax: 30,
        humidity: 60,
        pressure: 1012,
        weatherType: "Sunny",
        cityName: "New York",
        windSpeed: 5,
        country: "US",
        sunsetTime: "7:45 PM",
    };
  return (
    <div className="infoBox">
        <h3>Weather Information</h3>
        <p>City: {info.cityName}, {info.country}</p>
        <p>Temperature: {info.temp} °C (Min: {info.tempMin} °C, Max: {info.tempMax} °C)</p>
        <p>Humidity: {info.humidity} %</p>
        <p>Pressure: {info.pressure} hPa</p>
        <p>Weather: {info.weatherType}</p>
        <p>Wind Speed: {info.windSpeed} m/s</p>
        <p>Sunset Time: {info.sunsetTime}</p>

    </div>
  )
}

export default InfoBox
