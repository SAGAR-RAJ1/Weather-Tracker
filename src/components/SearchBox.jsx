import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import '../Css/SearchBox.css'


function SearchBox() {
  const [city, setcity] = useState("")

  let handleChange=(event)=>{
    setcity(event.target.value);
  }
  let handleSubmit =(event)=>{
    event.preventDefault();
    console.log("Form Submitted -> ", city);
    setcity("");
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

