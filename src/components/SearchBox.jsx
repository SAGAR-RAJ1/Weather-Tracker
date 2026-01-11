import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import '../Css/SearchBox.css'


function SearchBox({UpdateWeather}) {
  const [city, setcity] = useState("")
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
  const API_KEY = "fa4913e9435c45c042df3747cf825057";

  let getWeatherInfo= async()=>{
   let response = await fetch (`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
    let data = await response.json();
    let result = {
      temp: data.main.temp,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      weatherType: data.weather[0].main,
      cityName: data.name,
      windSpeed: data.wind.speed,
      country: data.sys.country,
      sunsetTime: data.sys.sunset,
      feelslike: data.main.feels_like,
      lat: data.coord.lat,
      lon: data.coord.lon
    };
    console.log(data)
    return result;
  }

  let handleChange=(event)=>{
    setcity(event.target.value);
  };
  let handleSubmit = async(event)=> {
    event.preventDefault();
    console.log("Form Submitted -> ", city);
    setcity("");
    UpdateWeather(await(getWeatherInfo()));
  }
  return (
    <div className='SearchBox'>
      <h1 className='text-4xl'>Search for the Weather</h1>
      <br />
      <form action="" onSubmit={handleSubmit}>
      <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br /><br />
      <Button variant="text" type='submit' >Search</Button>
      <br /><br />
      </form>
    </div>
  )
}

export default SearchBox

