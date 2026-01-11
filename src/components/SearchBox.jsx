import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import '../Css/SearchBox.css'


function SearchBox() {
  const [city, setcity] = useState("")
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
  const API_KEY = "fa4913e9435c45c042df3747cf825057";

  let getWeatherInfo= async()=>{
   let response = await fetch (`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
    let data = await response.json();
    console.log(data)
    let result = {
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      weatherType: data.weather[0].main,
      cityName: data.name,
      windSpeed: data.wind.speed,
      country: data.sys.country,
      sunsetTime: data.sys.sunset,
    };
  }

  let handleChange=(event)=>{
    setcity(event.target.value);
  }
  let handleSubmit =(event)=>{
    event.preventDefault();
    console.log("Form Submitted -> ", city);
    setcity("");
    getWeatherInfo();
  }
  return (
    <div className='SearchBox'>
      <h2>Search for the Weather</h2>
      <form action="" onSubmit={handleSubmit}>
      <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br /><br />
      <Button variant="text" type='submit' >Search</Button>
      </form>
    </div>
  )
}

export default SearchBox

